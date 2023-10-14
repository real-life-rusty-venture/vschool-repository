const express = require("express")
const tvRouter  = express.Router()
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const Tv = require("../models/tvModel")

tvRouter.post("/", (req, res, next) => {
    // console.log("is this thing even firing?")
    req.body.user = req.auth._id
    // console.log("req.auth._id", req.auth._id)
    const newShow = new Tv(req.body)
    // console.log("req.body", req.body)
    newShow.save((err, savedShow) => {
        if (err) {
            res.status(500)
            return next(err)

        }
        // console.log("savedShow", savedShow)
        return res.status(201).send(savedShow)
    })
})


//this works

tvRouter.get("/user", (req, res, next) => {
    Tv.find({user : req.auth._id}, (err, shows) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(shows)
    })
})

//this works

tvRouter.get("/:id", (req, res, next) => {
    Tv.find((err, shows) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(shows)
    })
})

tvRouter.get("/", (req, res, next) => {
    Tv.find((err, shows) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return(res.status(200).send(shows))
    })
})

//this doesnt work
//it gives me all the posts at once




// tvRouter.delete("/:tvid", (req, res, next) => {
//     Tv.findOneAndDelete({_id : req.params.tvid, user : req.auth._id}, (err, deletedShow) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(`successfully deleted ${deletedShow}`)
//     })
// })

tvRouter.delete("/:id", (req, res, next) => {
    Tv.findOneAndDelete({_id : req.params.id, user: req.auth._id}, (err, deletedItem) => {
        console.log("user", req.auth._id)
        console.log("res", res)
        console.log("req.params._id from tvRouter", req.params.id)
        // console.log("deletedItemtvRouter", deletedItem)
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`i deleted that thing you wanted me to delete. yeah. the ${deletedItem} one`)
    })
})
//works if i have the right bearer token


// tvRouter.put("/:_id", (req, res, next) => {
//     Tv.findOneAndUpdate({_id : req.params._id, user : req.auth._id}, req.body, {new : true}, (err, updatedShow) => {
//         console.log(updatedShow)
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(updatedShow)
//     })
// })



tvRouter.put("/:id" , (req, res, next) => {
    Tv.findOneAndUpdate({_id : req.params.id}, req.body, {new : true} , (err, updatedShow) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return(res.status(201).send(updatedShow))
    })
})

//this works in postman but seemingly  not the front end





//like this thang
tvRouter.put("/like/:_id", (req, res, next) => {
    Tv.findById({_id : req.params._id}, (err, show) => {
        console.log(show)
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        if (show.upVote.includes(req.auth._id)) {
            const newVoteArray = show.upVote.filter(id => id.toString() !== req.auth._id)
            console.log(newVoteArray)
           show.upVote = newVoteArray
            show.save((err, savedShow) => {
                if (err) {
                    console.log(err)
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(savedShow)
            })
            return
        }
        show.upVote.push(req.auth._id)
        console.log(show.upVote)
        const newVoteArray = show.downVote.filter(id => id.toString() !== req.auth._id)
        show.downVote = newVoteArray
        show.save((err, savedShow) => {
            if (err) {
                console.log(err)
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedShow)
        })

    })
})





//downvote thing??
tvRouter.put("dislike/:_id", (req, res, next) => {
    Tv.findById({_id : req.params._id}, (err, show) => {
        if (err) {
            console.log(err)
            return res.status(500)
        }
        if (show.downVote.includes(req.auth.id)) {
            const downVotesArray = show.downVote.filter(id => id.toString() !== req.auth._id)
            show.downVote = downVotesArray
            show.save((err, savedShow) => {
                if (err) {
                    console.log(err)
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(savedShow)
            })
            return
        }
        show.downVote.push(req.auth._id)

        const downVotesArray = show.upVote.filter(id => id.toString() !== req.auth._id)
        show.upVote = downVotesArray
        show.save((err, savedShow) => {
            if (err) {
                console.log(err)
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedShow)
        })

    })
})



// this works in postman but not  at all in the front end


tvRouter.post("/comment/:_id", (req, res, next) => {
    Tv.comments.create(req.body)
    .then(comment => tvRouter.comments.update({ _id: req.params.id }, { $push: {comment: comment._id }}))
    .catch(err => console.log(err))
}) 





module.exports = tvRouter
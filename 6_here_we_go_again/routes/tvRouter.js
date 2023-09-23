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

tvRouter.get("/user", (req, res, next) => {
    Tv.find({user : req.auth._id}, (err, shows) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(shows)
    })
})


tvRouter.get("/", (req, res, next) => {
    Tv.find((err, shows) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(shows)
    })
})







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
    Tv.findOneAndDelete({_id : req.params._id, user: req.auth._id}, (err, deletedItem) => {
        console.log("req.params._id from tvRouter", req.params._id)
        console.log("deletedItemtvRouter", deletedItem)
        if (err) {
            res.status(500)
            return next(err)
        }
        return (res.send(`i deleted that thing you wanted me to delete. yeah. the ${deletedItem} one`))
    })
})
//returns null, doesnt seeem to work


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
    Tv.findById(req.params._id, (err, show) => {
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
//this works in postman but not  at all in the front end


// tvRouter.post("/comment/:_id", (req, res, next) => {
//     Tv.comments.create(req.body)
//     .then(comment => tvRouter.comments.update({ _id: req.params.id }, { $push: {comment: comment._id }}))
//     .catch(err => console.log(err))
// }) 





module.exports = tvRouter
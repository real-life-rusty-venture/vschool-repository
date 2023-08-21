const express = require("express")
const friendRouters = express.Router()
const Friend = require("../Models/friend.js")
const friend = require("../Models/friend.js")


//get all friends 
friendRouters.get("/", (req, res, next) => {
    Friend.find((err, friends) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(friends)
    })
})



//post one friend
friendRouters.post("/", (req, res, next) => {
    const newFriend = new Friend(req.body)
    newFriend.save((err, savedFriend) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return  res.status(200).send(savedFriend)
    })
})


//deleteys one!
friendRouters.delete("/:id", (req, res, next) => {
    Friend.findOneAndDelete({id : req.params.id}, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return (res.send(`i deleted that thing you wanted me to delete. yeah. the ${deletedItem.name} one`))
    })
})

// {new : true}

//putty put-put put
friendRouters.put("/:id" , (req, res, next) => {
    Friend.findOneAndUpdate({id : req.params.id}, req.body, (err, updatedMovie) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return(res.status(201).send(updatedMovie))
    })
})


//get 1
friendRouters.get("/:id", (req, res, next) => {
    Friend.findOne({id : req.params.id}, (err, gottenGet) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return (res.status(200).send(gottenGet))
    })
})
// server.get("/", (req, res, next) => {
//     const friend = Friend.find(
//         (err, friend) => {
//             if (err) {
//                 next(err)
//             }
//             return res.status(200).send(friend)
//         }
//         )
//         // res.send(friend)
//     })
module.exports = friendRouters
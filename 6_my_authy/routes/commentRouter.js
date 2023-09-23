const express = require("express")
const commentRouter  = express.Router()
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const Tv = require("../models/tvModel")
const commentModel = require("../models/commentModel")



commentRouter.post("/:tvid", (req, res, next) => {
    req.body.user = req.auth._id
    req.body.show = req.params.tvid
    const newComment = new commentModel(req.body)
    newComment.save((err, savedComment) => {
        if (err) {
            res.status(500)
            return next (err)
        }
        if (savedComment) {
            return res.status(201).send(savedComment)
        }
    } )
})


commentRouter.get("/:id?", (req, res, next) => {
    const filter = req.params.id ? { show : req.params.id } : {}
    commentModel.find(filter, (err, comment) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return (res.status(200).send(comment))
    })
   
})




commentRouter.delete("/:_id", (req, res, next) => {
    commentModel.findOneAndDelete({id : req.params.id, user : req.auth._id}, (err, deletedComment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted ${deletedComment.text}`)
    })
})



commentRouter.put("/:_id", (req, res, next) => {
    commentModel.findOneAndUpdate({id : req.params.id, user : req.auth._id}, req.body, {new : true}, (err, updatedComment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(updatedComment)
    })
})

//ALL THESE ROUTES WORK YIPPEE


module.exports = commentRouter
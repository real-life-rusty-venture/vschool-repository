const express = require("express")
const tf2Router = express.Router()
const Tf2 = require("../Models/tf2Model")


//get all
tf2Router.get("/", (req, res, next) => {
    Tf2.find((err, mercs) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(mercs)
    })
})



//get 1
tf2Router.get("/:id", (req, res, next) => {
    Tf2.findOne({_id : req.params.id}, (err, mercs) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return (res.status(200).send(mercs))
    })
})



//get by class
tf2Router.get("/search/class", (req, res, next) => {
    Tf2.find({class : req.query.class}, (err, mercs) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return (res.status(200).send(mercs))
    })
})

//post
tf2Router.post("/", (req, res, next) => {
    console.log('inside post router', req.body)
    const newTf2 = new Tf2(req.body)
    newTf2.save((err, merc) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return  res.status(200).send(merc)
    })
})



//putty
tf2Router.put("/:id" , (req, res, next) => {
    Tf2.findOneAndUpdate({_id : req.params.id}, req.body, {new : true} , (err, updatedMerc) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return(res.status(201).send(updatedMerc))
    })
})



//search
tf2Router.get("/search", (req, res, next) => {
    const { merc } = req.query
    const pattern = new RegExp(merc)
    Tf2.find({name : {$regex : /name/ , $options : i}}, (err, merc) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return (res.send(merc))
    })
})

//i think tomorrow im going to get rid of the search bar and just make the website able to get one merc at a time. way easier

module.exports = tf2Router

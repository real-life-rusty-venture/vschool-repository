const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../Models/bountyModel.js")
// const bounties = [
//     {firstName : "jack",
//     lastName : "black",
//     living : true,
//     age : 60,
//     gender : "nonbinary",
//     id : uuidv4()},
//     {firstName : "meh",
//     lastName : "emoji",
//     living : false,
//     age : 42,
//     gender : "male",
//     id : uuidv4()},
//     {firstName : "garf",
//     lastName : "ield",
//     living : true,
//     age : 999999999,
//     gender : "uknowable",
//     id : uuidv4()},
//     {firstName : "jack",
//     lastName : "sfilms",
//     living : false,
//     age : 40,
//     gender : "male",
//     id : uuidv4()}
// ]
// bountyRouter.route("/")
//     .get((req, res) => {
//         res.send(bounties)
//     })
//     .post((req, res) => {
//         const newBounty = req.body
//         console.log(newBounty)
//         newBounty.id = uuidv4()
//         bounties.push(newBounty)
//         res.send(newBounty)
//     })
//     bountyRouter.put( "/:id" , (req, res) => {
//         const bountyId = req.params.id
//         const updates = req.body
//          const updatedValues = bounties.map(bounty => bounty.id !== bountyId ? bounty : updates)
//          console.log(updatedValues)
//         res.send(updatedValues)
//      })
//      bountyRouter.delete("/:id", ((req, res) => {
//         const bountyId = req.params.id
//         bounties.filter(bounty => bounty.id !== bountyId)
//         res.send("the years start coming and they wont stop coming")
//     }))
//     .get("/:id" , (req, res) => {
//         const id = req.params.id
//         const filteredBounties = bounties.filter(bounty => bounty.id === id)
//         res.send(filteredBounties)
//     })




//mongoose time B)
//getteth
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//postitude
bountyRouter.post("/", (req, res, next) => {
    console.log('inside post router', req.body)
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return  res.status(200).send(savedBounty)
    })
})


//deletey
bountyRouter.delete("/:id", (req, res, next) => {
    Bounty.findOneAndDelete({_id : req.params.id}, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return (res.send(`i deleted that thing you wanted me to delete. yeah. the ${deletedItem.name} one`))
    })
})
//putty put-put put
bountyRouter.put("/:id" , (req, res, next) => {
    Bounty.findOneAndUpdate({_id : req.params.id}, req.body, {new : true} , (err, updatedBounty) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return(res.status(201).send(updatedBounty))
    })
})
//get A Single One
bountyRouter.get("/:id", (req, res, next) => {
    Bounty.findOne({_id : req.params.id}, (err, gottenGet) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return (res.status(200).send(gottenGet))
    })
})

//axios error
//probably cuz compass says bad auth
//also parsing error on line one
//no idea what that means
module.exports = bountyRouter
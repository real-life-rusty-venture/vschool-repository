const express = require("express")
const {v4: uuidv4} = require('uuid')
const bountyRouter = express.Router()
let bounties = [
    {firstName : "jack",
    lastName : "black",
    living : true,
    age : 60,
    gender : "nonbinary",
    id : uuidv4()},
    {firstName : "meh",
    lastName : "emoji",
    living : false,
    age : 42,
    gender : "male",
    id : uuidv4()},
    {firstName : "garf",
    lastName : "ield",
    living : true,
    age : 999999999,
    gender : "uknowable",
    id : uuidv4()},
    {firstName : "jack",
    lastName : "sfilms",
    living : false,
    age : 40,
    gender : "male",
    id : uuidv4()}
]
bountyRouter.route("/")
    .get((req, res) => {
        res.status(200).send(bounties)
    })
    .post((req, res, next) => {
        const newBounty = req.body
        if (!newBounty) {
            const error = new Error("why didnt you give me another bounty??? are you stupid?")
            next(error)
        }
        console.log(newBounty)
        newBounty.id = uuidv4()
        bounties.push(newBounty)
        res.send(newBounty)
    })
    //post doesnt work
    // .get((req, res) => {
    //     const id = req.params.id
    //     const filteredBounties = bounties.filter(bounty => bounty.id === id)
    //     res.send(filteredBounties)
    // })
    //get for one object at a time (doesnt work)
    // .delete((req, res) => {
    //     const bountyId = req.params.id
    //     const bountyIndex = bountyId.findIndex(bounty => bounty.id === bountyId)
    //     bounties.splice(bountyIndex, 1)
    //     res.send("the years start coming and they wont stop coming")
    // })
    //delete function does not work
    // .put( (req, res) => {
    //     const bountyId = req.params.id
    //     const updates = req.body
    //     const bountyIndex = bounties.findIndex(bounty => bounty.id === bountyId)
    //     console.log(bountyIndex)
    //     // const  updatedBounty = Object.assign(bounties[bountyIndex], updates)
    //     // res.send(updatedBounty)
    //     res.send("pack it up boys. its official")
    // })
    //put function doesnt work at all either
    //its cuz of the bountyId link param
    // .get( (req, res) => {
    //     const isLiving = req.query.living
    //     const filteredBounties = bounties.filter(bounty => bounty.living === isLiving)
    //     res.send(filteredBounties)
    // })
    bountyRouter.put( "/:id" , (req, res, next) => {
        const bountyId = req.params.id
        if (!bountyId) {
            const error = new Error("you forgot to give me an id lol")
            next(error)
        }
        const updates = req.body
        if (!updates) {
            const error = new Error("how did you forget to give me the updates????")
            next(error)
        }
        req.body.id = req.params.id
        // const bountyIndex = bnties.findIndex(bounty => bounty.id === bountyId)
        // console.log(bountyIndex)
        // const  updatedBounty = Object.assign(bounties[bountyIndex], updates)
         bounties = bounties.map(bounty => bounty.id !== bountyId ? bounty : updates)
        //  console.log(updatedValues)
        res.send(bounties)
    //     res.send("pack it up boys. its official")
     })
     bountyRouter.delete("/:id", ((req, res) => {
        const bountyId = req.params.id
        if (!bountyId) {
            const error = new Error("you forgot to give me an id lol")
            next(error)
        }
        // const bountyIndex = bountyId.findIndex(bounty => bounty.id === bountyId)
        // bounties.splice(bountyIndex, 1)
       bounties = bounties.filter(bounty => bounty.id !== bountyId)
        res.send(bounties)
    }))
    // bountyRouter.route("/:livng", (req, res) => {
    //     const isLiving = req.query.living
    //     const filteredBounties = bounties.filter(bounty => bounty.living === isLiving)
    //     res.send(filteredBounties)
    // })
    .get("/:id" , (req, res) => {
        const id = req.params.id
        if (!id) {
            const error = new Error("you forgot to give me an id lol")
            next(error)
        }
        const filteredBounties = bounties.filter(bounty => bounty.id === id)
        res.send(filteredBounties)
    })
module.exports = bountyRouter
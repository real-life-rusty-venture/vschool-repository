const express = require("express")
const {v4: uuidv4} = require('uuid')
const seinfeldRouter = express.Router()
const characters = [
    {
        "title" : "jerry",
        "description" : "seinfeld",
        "img" : "https://upload.wikimedia.org/wikipedia/en/f/f8/Jerry_Seinfeld_%28character%29.jpg",
        "alive" : "false",
        "id" : uuidv4()
    } ,
    {
        "title" : "george",
        "description" : "costanza",
        "img" : "https://static.wikia.nocookie.net/seinfeld/images/7/76/George-costanza.jpg/revision/latest?cb=20110406222711",
        "alive" : "false",
        "id" : uuidv4()
    },
    {
        "title" : "elaine",
        "description" : "benes",
        "img" : "https://upload.wikimedia.org/wikipedia/en/3/33/Elaine-benes-3707.jpg",
        "alive" : "false",
        "id" : uuidv4()
    } ,
    {
        "title" : "cosmo",
        "description" : "kramer",
        "img" : "https://m.media-amazon.com/images/I/71t-TERdruL._AC_UF894,1000_QL80_.jpg",
        "alive" : "false",
        "id" : uuidv4()
    }
]
seinfeldRouter.route("/")
.get( (req, res) => res.send(characters) )
.post((req, res) => {
    console.log("test")
    const newDude = req.body
    console.log(newDude)
    newDude.id = uuidv4()
    characters.push(newDude)
    res.send(newDude)
})
seinfeldRouter.put("/:id", (req, res) => {
    const id = req.params.id
    const updates =  req.body
    const updatedObject = characters.map(dude => dude.id !== id  ? dude : updates)
    res.send(updatedObject)
})
seinfeldRouter.delete("/:id", (req, res) => {
    const id =  req.params.id
    characters.filter(dude => dude.id !== id)
    res.send("gary im sorry i neglected you oh i never expected you to run away and leave me feeling this empty. your meow right now would sound like music to me")
})
.get("/:id" , (req, res) => {
    const id = req.params.id
    const filteredDudes = characters.filter(dude => dude.id === id)
    res.send(filteredDudes)
})
module.exports =  seinfeldRouter
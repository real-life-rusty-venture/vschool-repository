const express = require('express')
const server = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
const cors = require("cors")




server.use(express.json())
server.use(morgan("dev"))
server.use(cors())



mongoose.set("strictQuery", false)
try {
    mongoose.connect(process.env.LINK, (err) => {
    if (err) {
        console.log(err)
        
    }
    
    console.log("connected to the database")
})
}
catch(err) {
    console.log(err)
}



server.get("/", (req, res, next) => {
    res.send("the gets been got!")
})




server.listen(7000, () => {
    console.log("im listening on port 7000 capn")
})
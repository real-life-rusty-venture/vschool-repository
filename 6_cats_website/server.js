const express = require('express')
const server = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
const cors = require("cors")
const authRouter = require("./routes/authRouter")
const catRouter = require("./routes/catRouter")




server.use(express.json())
server.use(morgan("dev"))
server.use(cors())



mongoose.set("strictQuery", false)
try {
    mongoose.connect(process.env.LINK, (err) => {
    if (err) {
        console.log(err)
    }})
    console.log("connected to the database")
}
catch(err) {
    console.log(err)
}





server.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
        console.log("err.message:", err.message)
        return res.send({errMsg : err.message})
        res.status(500)
        return res.send({errMsg : err.message})
        
    }
})




server.use("/auth", require("./routes/authRouter.js"))

server.use("/api", expressjwt({secret : process.env.SECRET, algorithms: ['HS256']}))
server.use("/api/cat", catRouter)
//cat validation failed path user is required


server.get("/", (req, res, next) => {
    res.send("the gets been got!")
})




server.listen(5173, () => {
    console.log("im listening on port 4000 capn")
})
const express = require("express")
const server = express()
const bounty = require("./Routes/bountyRouter")
const morgan = require("morgan")
const mongoose = require("mongoose")

const malcolmRouter = require("./malcolm")
server.use(morgan("dev"))
server.use(express.json())
server.use("/bounty", bounty)
server.get("/", (req, res) => {
    res.send("got to the /bounty page")
})
mongoose.set("strictQuery", true)
// mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ixj99vn.mongodb.net/`)
mongoose.connect(`mongodb+srv://rowboatjohnson:Nuggetbiscuit16@cluster0.654i004.mongodb.net/`)
server.use("/malcolm", (req, res, next) => {
    malcolmRouter
    next()
} )
server.use("/malcom", (req, res, next) => {
    res.send("FULL MIDDLE MALCOLMIST")
})
server.use((err, req, res, next) => {
    console.log(err)
    return res.status(500).send({errMsg : err.message})
})
server.listen(4300, () => {
    console.log("this is port 4300")
})

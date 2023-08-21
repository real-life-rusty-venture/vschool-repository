const express = require("express")
const app = express()
const bounty = require("./bounty")
const morgan = require("morgan")
const malcolmRouter = require("./malcolm")
app.use(morgan("dev"))
app.use(express.json())
app.listen(4269, () => {
    console.log("this is port 4269")
})
app.get("/", (req, res) => {
    res.send("got to the /bounty page")
})
app.use("/bounty", bounty)
app.use("/malcolm", (req, res, next) => {
    malcolmRouter
    next()
} )
app.use("/malcom", (req, res, next) => {
    res.send("FULL MIDDLE MALCOLMIST")
})
app.use((err, req, res, next) => {
    console.log(err)
    return (res.status(500).send({errMsg : err}))
})
//none of these errors seem to work lol
//or the status codes

const express  = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const tf2 = require("./Routes/tf2Router")
const server = express()
server.use(morgan("dev"))
server.use(express.json())



server.get("/" , (req, res) =>  res.send("loolooloo i got some apples") )


mongoose.set("strictQuery", true)
mongoose.connect(`mongodb+srv://rowboatjohnson:Nuggetbiscuit16@cluster0.654i004.mongodb.net/`)


server.use("/tf2", tf2)

server.use((err, req, res, next) => {
    console.log(err)
    return res.status(500).send({errMsg : err.message})
})


server.listen(9000, () => {
    console.log("this is port 9000")
})
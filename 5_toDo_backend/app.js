const express = require("express")
const app = express()
app.use(express.json());
const seinfeldRouter = require("./Seinfeld")
app.listen(4690, () => console.log("im listening to port 4690 but at what cost"))
app.get("/", (req, res) => res.send("GARY CANT YOU SEE, I WAS WRONG,  I MESSED UP AND NOW YOURE GONE"))
app.use("/seinfeld", seinfeldRouter)
const express = require("express")
const app = express()
app.listen(6969, () => {
    console.log("arggg!!! yer fuckin me poopdeck on port 6969 laddie!")
})
app.get("/" , (req, res) => {
    res.send("oh god the unewcapable anxiety and paranoia....")
})
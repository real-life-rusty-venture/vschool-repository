const express = require("express")
const malcolmRouter =  express.Router()
malcolmRouter.route("/", (req, res, next) => {
    console.log("yes no...maybe...i dont know...can you repeat the question")
})
module.exports = malcolmRouter
//doesnt work at all
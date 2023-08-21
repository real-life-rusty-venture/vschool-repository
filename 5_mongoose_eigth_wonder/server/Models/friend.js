// const { default: mongoose } = require("mongoose")
const mongoose = require("mongoose")
// const Schema = mongoose.Schema
// const friendRouters = require("..Routes/friendRouters")
//friend blueprint
const friendSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
        },
    age : {
       type :  Number
    }
})
// const Friend = mongoose.model("Friend", friendSchema)
// const Kennathan = new Friend({
//     name : "Kennathan",
//     age : 17
// })
module.exports = mongoose.model("Friend", friendSchema)
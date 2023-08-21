const mongoose = require("mongoose")
const bountySchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
        },
    lastName : {
        type : String,
        required : true
        },
    age : {
       type :  Number
    }, 
    living : {
        type : Boolean,
        required : true
        },
    gender : {
        type : String,
        required : true
        },
})
module.exports = mongoose.model("Bounty", bountySchema)
const mongoose = require("mongoose")


const tf2Schema = new mongoose.Schema({
    alias : {
        type : String,
        required : true
        },
    realName : {
        type : String,
        required : true
    },
    age : {
       type :  String,
       required : true
    }, 
    gender : {
        type : String,
        required : true
        },
    img : {
        type : String,
        required : true
    },
    video : {
        type : String,
        required : true
    },
    class : {
        type : String,
        required : true
    },
    funFacts : {
        type : [String],
        required : true
    }

})


module.exports = mongoose.model("Tf2", tf2Schema)
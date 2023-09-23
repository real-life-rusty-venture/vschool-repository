const mongoose = require('mongoose')
const Schema = mongoose.Schema
const tvModel = new Schema({
    user: {
        type : Schema.Types.ObjectId,
        ref: "User",
        required : true
    },
    
    title : {
        type: String,
        required: true
    },
    description :{
        type : String,
        required: true
    },
    imgUrl : String,
    upVote : {
        type : [{type : Schema.Types.ObjectId,
        ref : "User"}]
    },
    downVote : {
        type : [{type : Schema.Types.ObjectId,
        ref : "User"}]
    },
    comments : {
        // type : Schema.Types.ObjectId,
        // ref : "User"
        type: Array,
        ref: 'User'
    }
})
module.exports = mongoose.model("Tv", tvModel)
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentModelSchema = new Schema({
    "text" : {
        type : String,
        required : true
    },
    "show" : {
        type : Schema.Types.ObjectId,
        ref : "tvModel"
    },
    "user" : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }

})
module.exports = mongoose.model("commentModel", commentModelSchema)
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Schema  = mongoose.Schema
const userSchema = new Schema({
    username : {
        type: String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})
userSchema.methods.withoutPassword = function() {
    const user = this.toObject()
    delete user.password
    return user
}





userSchema.pre("save", function(next) {
    const user = this
    if (!user.isModified("password")) {
        return next()
    }
    else bcrypt.hash(user.password, 10, (err, hash) => {
        console.log(err)
        if (err) return next(err)
        user.password = hash
        console.log("presave working!")
        next()
})
})


userSchema.methods.checkPassword =   function(passwordAttempt, callback)  {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) callback(err)
        return callback(null, isMatch)
    })
}


module.exports = mongoose.model("User", userSchema)
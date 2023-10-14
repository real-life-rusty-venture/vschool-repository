const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
      },
})
// userSchema.prototype. : {

// }
// Method to remove user's password 
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
  }
// Pre-save hook to encrypt user passwords on signup
// userSchema.pre("save", function(next){
//     const user = this
//     if (!user.isModified("password")) return next()
//     bcrypt.hash(user.password, 10, (err, hash) => {
//       if (err) return next(err)
//       user.password = hash
//       next()
//     })
//   })




userSchema.pre("save", function(next) {
  const user = this
  if (!user.isModified("password")) return next()
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err)
    user.password = hash
  next()
  })
})




  // Method to check encrypted password on login
// userSchema.methods.checkPassword = function(passwordAttempt, callback){
//   bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
//     if(err) return callback(err)  
//     return callback(null, isMatch)
//   })
// }



userSchema.methods.checkPassword = function(passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if(err) callback(err)
    return callback(null, isMatch)
  })
}



// Method to remove user's password 
// userSchema.methods.withoutPassword = function(){
//   const user = this.toObject()
//   delete user.password
//   return user
// }

userSchema.methods.withoutPassword = function() {
  const user = this.toObject() 
  delete user.password
  return user
}


module.exports = mongoose.model("User", userSchema)
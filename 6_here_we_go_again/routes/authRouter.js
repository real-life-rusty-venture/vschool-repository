const express = require("express")
const authRouter  = express.Router()
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
// let { expressjwt: jwt } = require("express-jwt");
// authRouter.post("/signup", (req, res, next) => {
//     User.findOne({username : req.body.username}, (err, user) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         if (user) {
//             res.status(403)
//             return next(new Error("that username is already taken"))
//         }
//         const newUser = new User(req.body)
//         newUser.save((err, savedUser) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
//             return res.status(202).send(token, {user : savedUser})
//         })
//     })
// })


authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(user){
        res.status(403)
        return next(new Error("That username is already taken"))
      }
      const newUser = new User(req.body)
      newUser.save((err, savedUser) => {
        if(err){
          res.status(500)
          return next(err)
        }
        const token = jwt.sign(savedUser.toObject(), "foxtrot uniform charlie kilo")
        return res.status(201).send({ token, user: savedUser.withoutPassword() })
      })
    })
  })



// Signup
// authRouter.post("/signup", (req, res, next) => {
//   User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//     if(err){
//       res.status(500)
//       return next(err)
//     }
//     if(user){
//       res.status(403)
//       return next(new Error("That username is already taken"))
//     }
//     const newUser = new User(req.body)
//     newUser.save((err, savedUser) => {
//       if(err){
//         res.status(500)
//         return next(err)
//       }
//           // payload,            // secret
//       const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
//       return res.status(201).send({ token, user: savedUser.withoutPassword() })
//     })
//   })
// })


authRouter.post("/login", (req, res, next) => {
    User.findOne({username : req.body.username}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (!user) {
            res.status(403)
            return next(new Error("username or password is wrong"))
        }
        // if (req.body.password !== user.password) {// }
        user.checkPassword(req.body.password, (err, isMatch) => {
          if (err || !isMatch) {
            res.status(403)
            return next(new Error("username or password is wrong"))
          }
          
      
          const token = jwt.sign(user.toObject(), process.env.SECRET)
          return res.status(200).send({token, user : user.withoutPassword()})
        } );
    })

})


// Login
// authRouter.post("/login", (req, res, next) => {
//   User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//     if(err){
//       res.status(500)
//       return next(err)
//     }
//     if(!user){
//       res.status(403)
//       return next(new Error("Username or Password are incorrect"))
//     }
//     user.checkPassword(req.body.password, (err, isMatch) => {
//       if(err){
//         res.status(403)
//         return next(new Error("Username or Password Incorrect"))
//       }
//       if(!isMatch){
//         res.status(403)
//         return next(new Error("Username or Password Incorrect"))
//       }
//       const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
//       return res.status(200).send({ token, user: user.withoutPassword() })
//     })
//   })
// })


module.exports = authRouter
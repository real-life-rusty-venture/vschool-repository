const express = require('express')
const server = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
process.env.secret
server.use(express.json())
server.use(morgan("dev"))
const authRouter = require("./routes/authRouter")
const commentRouter = require("./routes/commentRouter")
// mongoose.connect(
//   'mongodb://localhost:27017/user-authentication',
//   () => console.log(`mongodb is live cap'n`)
// )
try {
mongoose.set('strictQuery', false);
mongoose.connect(
  // 'mongodb://localhost:27017/user-authentication'
process.env.LINK
  , (err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});
}
catch(err) {
  console.log(err)
}
server.get("/", (req, res, next) => {
  res.send("by god the gets been got!")
})
server.use('/auth', authRouter)
server.use('/api', expressjwt({ secret: process.env.SECRET , algorithms: ['HS256'] })) // req.user
server.use('/api/tv', require('./routes/tvRouter.js'))
server.use("/api/comment", require(`./routes/commentRouter.js`))






server.use((err, req, res, next) => {
  console.log(err)
  if (err.name === "UnauthorizedError") {
    res.status(err.status)
  }
  return res.send({errMsg : err.message})
})

server.listen(3400, () => {
  console.log("yeah yeah im runnin the server. port 3400")
})
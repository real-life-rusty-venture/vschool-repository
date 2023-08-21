const mongoose = require("mongoose")
// const port = 5050
const port = 3000;
const express = require("express")
const morgan = require("morgan")
require('dotenv').config()
// const exp = require("constants")
const app = express()
// const Router = require("./routes")
// mongoose.connect("mongodb://localhost:27017"

// // ,
// //  {
    // //     useNewUrlParser : true,
    // //     useUnifiedTopology : true,
    // //     useCreaateIndex : true,
    // //     useFindAndModify : false
    // // },
    // // () => console.log('i mongoosed my little mongoose ass all over the place')
    // )
    // mongoose.connect("mongodb+srv://rowboatjohnson:Nuggetbiscuit16@cluster0.654i004.mongodb.net/").catch(err => console.log(err));
    app.use(express.json())
    app.use(morgan("dev"))
    // app.get("/", (req, res, next) => {
        //     Friend.find((err, friend) => {
            //         if (err){
                //             next(err)
            //         }
            //         return res.status(200).send(friend)
            //     }))
            // })
            // try {
                // app.get("/", (req, res, next) => {
                //     const friend = Friend.find(
                    //         (err, friend) => {
                        //             if (err) {
                            //                 next(err)
                            //             }
                            //             return res.status(200).send(friend)
                            //         }
                            //         )
                            //         // res.send(friend)
                //     })
                // }
                // catch(err) {
                    //     console.log(err)
                    // }
                    // app.post("/", (req, res, next) => {
                        //     const newFriend = new Friend(req.body)
                        //     newFriend.save(
                            //         //     (err, newFriend) => {
                                //             //     if (err) {
                                    //                 //         next(err)
                                    //                 //     }
                                    //                 //     res.status(201).send(newFriend)
                                    //                 // }
                                    //                 )
                                    //             })
                                    mongoose.set("strictQuery", true)
                                    mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.akggedz.mongodb.net/?retryWrites=true&w=majority`)
                                    
                                    
                                    //routes
                                    app.use("/friend" , require("./Routes/friendRouters.js"))
                                    
                                    
                                    app.use((err, req, res, next) => {
        console.log(err)
        return res.send({errMsg : err.message})
    })
    
    
    // app.listen(5050, () => {
    //     console.log("they call it a cheese royale. port 9000 btw")
    // })

app.listen(process.env.PORT || port, () => {
    console.log(`App running on port ${port}`);
});
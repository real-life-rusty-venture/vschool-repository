const axolotl = require("axios")
const rickingmorty = axolotl.get("https://rickandmortyapi.com/api/character").then(reponse => {
    console.log(reponse.data)
})
const eatMyAss = axolotl.get("https://api.vschool.io/nny/todo/")
const asshole = {
    "title" : "suck my dick you aint shit you aint shit",
    "descrption" : "im the first kid to write of hearts lies and friends and i am sorry that my conscience called in sick again and ive got arrogance down to a science"
}
const suckMyDick = axolotl.post("https://api.vschool.io/nny/todo/", asshole).then(reponse =>  {
    console.log(reponse.data)
}).catch(err => {
    console.log(err)
})
const arroganceDownToAScience = {
    "completed" : true,
}
const iFoundTheCureToGrowingOlder = axolotl.put("https://api.vschool.io/nny/todo/6426417bd7efd30689a88f16", arroganceDownToAScience).then(reponse => {
    console.log(reponse.data)
    console.log("i stil masturbate while eating top ramen at a faster rate in the bigger quanities")
}).catch(err => {
    console.log(err)
})
const cantCoverItUp = axolotl.delete("https://api.vschool.io/nny/todo/6426417bd7efd30689a88f16").then(reponse => {
    console.log(reponse)
}).catch(err => {
    console.log(err)
})


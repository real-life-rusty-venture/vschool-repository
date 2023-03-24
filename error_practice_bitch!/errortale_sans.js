const homosexuality = require("readline-sync")
const isRustyGay = homosexuality.question("is rusty gay? ")
try {
    if (isRustyGay === "yes") {
        console.log("you're goddamn right he is!")
    }
    else {
        throw new Error("are you fucking SURE")
    }
}
catch(err) {
    console.log(err)
}
finally {
    console.log("RUSTY: whatever. you want to fuck me so bad it makes you look stupid")
}
function numberFucking(ass, tits) {
    try {
        if (typeof ass === "number" && typeof tits === "number") {
            const dickSuckingLips = ass + tits
            return dickSuckingLips
        }
        else {
            throw new Error("are you fucking stupid? these arguments take numbers dumbass!")
        }
    }
    catch(err) {
        console.log(err)
    }
}
console.log(numberFucking(1, 2))
console.log(numberFucking("chiquita", "banana"))
const pornhubAccount = {
    "username" : "BigDickDaddy69",
    "password" : "inflationfetish"
}
const username = homosexuality.question("username: ")
const password =homosexuality.question("assword (haha): ")
try {
    if (username === pornhubAccount.username && password === pornhubAccount.password) {
        console.log(`welcome back ${pornhubAccount.username}! we've collected the finest videos of white women buying shopping carts full of wonderbread for you`)
    }
    else {
        throw new Error(`login failed! you are not the ${pornhubAccount.username} that we know and love!`)
    }
}
catch(err) {
    console.log(err)
}
const royForm = document.getElementById("roy-form")
const doomForm = document.getElementById("doom-form")
const damacyForm = document.getElementById("damacy-form")
total = 0
localStorage.setItem("name", "rick")
localStorage.setItem("age", 69)
localStorage.setItem("sexy", true)
localStorage.setItem("family", JSON.stringify(["morty", "summer", "beth"]))
localStorage.setItem("ship", JSON.stringify({"ship name": "ship", "is ship sexy": true}))
const name = localStorage.getItem("name")
const age = localStorage.getItem("age")
const sexy = localStorage.getItem("sexy")
const family = JSON.parse(localStorage.getItem("family"))
const ship = localStorage.getItem("ship")
console.log((`my name is ${name} im ${age} years old im sexy as hell (${sexy}) ive got ${family} in my family annd IM HERE TO LICK TITS!!!!! 
also heres my ship ${ship}`))
console.log(typeof ship)
setTimeout(function(){
    console.log("lick tits and eat shit!")
}, 10000)
function gay() {
    console.log("9/11 was funny")
}
var intervalID = setInterval(gay, 10000);
royForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let roy = document.getElementById("roybux").value
    let royBux = roy * 15
    let cash = document.createElement("p")
    cash.textContent = `woah dude! you just spent ${royBux} dollars on Roy! aren't you unremployed?`
    roy = ""
    document.getElementById("roy-div").append(cash)
    total +=  royBux
})
doomForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let doom = document.getElementById("doombux").value
    let doomBux = doom * 20
    let cash = document.createElement("p")
    cash.textContent = `woah dude! you just spent ${doomBux} dollars on doom! where'd you get that fat stack of cash, the dark web?`
    doom = ""
    document.getElementById("doom-div").append(cash)
    total += doomBux
})
damacyForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let katamari = document.getElementById("damacybux").value
    katamariBux = katamari * 10
    let cash = document.createElement("p")
    cash.textContent = `woah dude! you just spent ${katamariBux} dollars on katamari damacy! do you  have any life at all?`
    document.getElementById("damacy-div").append(cash)
    total += katamariBux
})
const mattpatt = document.getElementById("mattpatt")
mattpatt.addEventListener("submit", (e) => {
    e.preventDefault()
    let pussyass = document.createElement("h1")
    pussyass.textContent = `your tota is ${total} biiiiiitch!`
    document.getElementById("total").append(pussyass)
})
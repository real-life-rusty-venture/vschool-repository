const suckForm = document.getElementById("suck-form")
const fuckForm = document.getElementById("fuck-form")
const cuckForm = document.getElementById("cuck-form")
let total = 0
suckForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let suck = document.getElementById("suck").value
    let suckPrice = suck * 15
    let suckAnswer = document.createElement("p")
    suckAnswer.textContent = `the price of your sucking is ${suckPrice} dollars. you know, unless you have some other way to pay for it... ;)`
    suck = ""
    document.getElementById("suck-div").append(suckAnswer)
    total += suckPrice
    console.log(total)
    const fuck = document.getElementById("fuck").value
    let fuckPrice = fuck * 20
    let fuckAnswer = document.createElement("p")
    fuckAnswer.textContent = `the price of your fucking is ${fuckPrice} dollars. unless you have some other way to pay for it... ;)`
    document.getElementById("fuck-div").append(fuckAnswer)
    fuck = ""
    total += fuckPrice
    console.log(total)
    const cuck =  document.getElementById("cuck").value
    let cuckPrice = cuck * 10
    let cuckAnswer = document.createElement("p")
    cuckAnswer.textContent = `the price of your cucking is ${cuckPrice} dollars. unless you have some other way to pay for it... ;)`
    document.getElementById("cuck-div").append(cuckAnswer)
    cuck = ""
    total += cuckPrice
    console.log(total)
    bottomText = document.createElement("h1")
    bottomText.textContent = `the total price of all your debauchery is ${total} dollars`
    document.getElementById("vagina").append(bottomText)
})
//fuckForm.addEventListener("submit", (e) => {
    //e.preventDefault()
    // const fuck = document.getElementById("fuck").value
    // let fuckPrice = fuck * 20
    // let fuckAnswer = document.createElement("p")
    // fuckAnswer.textContent = `the price of your fucking is ${fuckPrice} dollars. unless you have some other way to pay for it... ;)`
    // document.getElementById("fuck-div").append(fuckAnswer)
    // fuck = ""
    // total += fuckPrice
    // console.log(total)
//})
//cuckForm.addEventListener("submit", (e) => {
//    e.preventDefault()
    // const cuck =  document.getElementById("cuck").value
    // let cuckPrice = cuck * 10
    // let cuckAnswer = document.createElement("p")
    // cuckAnswer.textContent = `the price of your cucking is ${cuckPrice} dollars. unless you have some other way to pay for it... ;)`
    // document.getElementById("cuck-div").append(cuckAnswer)
    // cuck = ""
    // total += cuckPrice
    // console.log(total)
//})
//const big = document.getElementById("big")
///big.addEventListener("submit", (e) => {
//    e.preventDefault()
    bottomText = document.createElement("h1")
    bottomText.textContent = `the total price of all your debauchery is ${total} dollars`
    document.getElementById("vagina").append(bottomText)
//})
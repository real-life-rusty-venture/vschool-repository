// const add = document.getElementById("add")
// add.addEventListener("submit", function(e){
//     e.preventDefault()
//     let addNum1 = document.getElementById("addition-one").value
//     let addNum2 = document.getElementById("addition-two").value
//     let sum = addNum1 + addNum2
//     let soldier = document.createElement("h1")
//     soldier.textContent = `your answer is ${sum}, bitch!`
//     addNum1 = ""
//     addNum2 = ""
//     document.getElementById("addition").append(soldier)
// })
const add = document.getElementById("add")
add.addEventListener("submit", function(e){
    e.preventDefault()
    let addNum1 = Number(document.getElementById("addition-one").value)
    let addNum2 = Number(document.getElementById("addition-two").value)
    let sum = addNum1 + addNum2
    let soldier = document.createElement("h1")
    soldier.textContent = `your answer is ${sum}, bitch!`
    addNum1 = ""
    addNum2 = ""
    document.getElementById("addition").append(soldier)
})
const sub = document.getElementById("sub")
sub.addEventListener("submit", function(e){
    e.preventDefault()
    let sub1 = document.getElementById("subtraction-one").value
    let sub2 = document.getElementById("subtraction-two").value
    let difference = sub1 - sub2
    let scout = document.createElement("h1")
    scout.textContent = `your answer is ${difference}, bitch!`
    sub1 = ""
    sub2 = ""
    document.getElementById("subtraction").append(scout)
})
const multiply = document.getElementById("multiply")
multiply.addEventListener("submit", function(e){
    e.preventDefault()
    let multiply1 = document.getElementById("multiplication-one").value
    let multiply2 = document.getElementById("multiplication-two").value
    let product = multiply1 * multiply2
    let pyro = document.createElement("h1")
    pyro.textContent = `your answer is ${product}, bitch!`
    multiply1 = ""
    multiply2 = ""
    document.getElementById("multiplication").append(pyro)
})

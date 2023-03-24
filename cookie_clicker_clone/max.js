const idubbbz = document.getElementById("idubbbz")
clickCounter = 0
time = true
const timer = document.getElementById("timer")
seconds = 30
function secondsBeforeDeath() {
    seconds = seconds -1
    timer.textContent = `${seconds}`
    console.log(seconds)
}
const contentCop = localStorage.getItem("clicks")
click.textContent = `number of clicks: ${contentCop}`
function embiggen() {
    idubbbz.style.width = "150px"
}
function timeOut() {
    time = false
    clearInterval(pinkFloyd)
}
idubbbz.addEventListener("mouseover", ()=> {
    idubbbz.style.width = "160px"
})
idubbbz.addEventListener("mouseleave", () => {
    idubbbz.style.width = "150px"
})
idubbbz.addEventListener("click", () => {
    idubbbz.style.width = "120px"
    setTimeout(embiggen, 200)
    let click = document.getElementById("click")
    if (time === true) {
        clickCounter +=  1
    }
    // drugMoney()
    // clickCounter +=  1
    // click.textContent = `number of clicks: ${clickCounter}`
    localStorage.setItem("clicks", clickCounter)
    const contentCop = localStorage.getItem("clicks")
    click.textContent = `number of clicks: ${contentCop}`
    // timer.textContent = `${seconds}`
    setInterval(secondsBeforeDeath, 1000); //timer starts when clicked but moves faster the more you click and wont stop after 30 seconds
    setTimeout(timeOut, 29900)
})
// timer.textContent = `${seconds}`
// function drugMoney() {
//     var pinkFloyd = setInterval(secondsBeforeDeath, 1000);
// }
// setTimeout(timeOut, 29900)
// var pinkFloyd = setInterval(secondsBeforeDeath, 1000);  //timer starts on its own but works, buut stops at -3
// for (let i = 0; i > seconds.length; i++) {
//     timer.textContent = `${seconds}`
// }
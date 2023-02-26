var header = document.getElementById("header")
header.textContent = "something appropriate"
var messageLeft = document.getElementsByClassName("message left")
var messageRight = document.getElementsByClassName("message right")
messageLeft[0].textContent = "goes crazy and loses my cool"
messageRight[0].textContent = "?????? whats wrong"
messageLeft[1].textContent = "im not watching enough Venture Bros"
messageRight[1].textContent = "you are a loser"
var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function(){
    for (let i = 0; i < messageLeft.length; i++){
        messageLeft[i].style.display = "none"
    }
    for (let i = 0; i < messageRight.length; i++){
        messageRight[i].style.display = "none"
    }
})
//var themeOne = document.getElementsByValue("theme-one")
///var themeTwo = document.getElementById("theme-two")
//themeOne.addEventListener("click", function(){
 //   document.getElementsByTagName("html").style.backgroundColor = "blue"
//})
var send = document.getElementById("send")
send.addEventListener("click", function(){
    event.preventDefault()
     var messages = document.getElementsByClassName("message")
     console.log(messages)
    var knife = document.createElement("div")
    var input = document.getElementById("input")
    knife.textContent = input.value
    knife.classList.add("message")
    if (messages[messages.length-1].classList.contains("right")){
        knife.classList.add("left")
    }
    else {
        knife.classList.add("right")
    }
     //var messages = document.getElementsByClassName("messages")
     //messages.push("still beating heart beating out kill me kill me in morse code")
     var equate = document.getElementById("messages")
     console.log(equate)
     equate.append(knife)
})
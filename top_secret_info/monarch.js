var wacky = document.getElementById("wacky")
var clickMe = document.getElementById("click me")
var no = document.getElementById("no")
var fools = document.getElementById("fools")
var brock = document.getElementById("brock")
wacky.addEventListener("click", function(){
    wacky.textContent = "WELCOME TO THE WACKY RACES"
})
clickMe.addEventListener("click",function(){
    this.classList.toggle("clickMe")
})
no.addEventListener("click", function(){
   this.classList.toggle("no")
})
fools.addEventListener("click", function(){
    this.classList.toggle("fools")
})
var pussy = document.getElementById("input")
pussy.addEventListener("input", function(){
    console.log(this.value)
})
var cars = document.createElement("p")
cars.textContent = "b b b benny and the jets"
document.body.append(cars)
var pokemon = [
    {face : 12},
    {ass : "face"}
]
console.log(pokemon[0].face)
var myFootUpYourAss = document.getElementById("no")
//for (let i = 0; i < myFootUpYourAss.length; i++){
    myFootUpYourAss.textContent = "im hulk hogan brother"
//}
//var mirror = document.querySelector(".batman")
//console.log(mirror)
//for (let i = 0; i < mirror.length; i++){
//    mirror[i].textContent = "ive found the cure to growing older"
//}
function depression(){
    var piss = document.createElement("h1")
    piss.textContent = "i pissed in god's eye and he blinked"
    piss.style.color = "white"
    document.body.append(piss)
}
var ethan = document.getElementById("ethan")
ethan.addEventListener("click", depression)
var murphy = document.getElementById("murphy")
murphy.addEventListener("click", function () {
    var poopoo = document.createElement("h1")
    poopoo.textContent = "the dreaded canduru fish will swim up your penis"
    poopoo.style.color = "white"
    document.body.append(poopoo)
})
var kenny = document.kenny
kenny.addEventListener("submit", function(event){
    event.preventDefault()
    alert("southpark reference")
    var balls = document.getElementById("balls").value
    console.log(balls)
    var cake = document.createElement("h1")
    cake.textContent = balls + "? seriously bro? real mature"
    document.body.append(cake)
})
var vanilla = document.vanilla
vanilla.addEventListener("submit", function(e){
    e.preventDefault()
    var medusa = document.getElementById("medusa").value
    document.body.style.backgroundColor = medusa
}) 
var martini = document.martini
martini.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(martini.loser.value)
   var dennis = document.createElement("h1")
   document.body.append(dennis)
   if (martini.loser.value === "gay"){
    dennis.textContent = "YOU ARE GAY"
   }
   else {
    dennis.textContent = "YOU ARE A LOSER"
   }
})
var pizza = document.pizza
var romance = document.getElementsByName("romance")
pizza.addEventListener("submit", function(e){
    e.preventDefault()
    console.log("easy tiger")
    for (let i = 0; i < romance.length; i++){
        if (romance[i].checked){
            console.log(romance[i].value)
        }
    }
})
var knife = document.getElementById("knife")
console.log(knife)
dee.addEventListener("submit", function(event){
    //event.stopImmediatePropagation()
    event.preventDefault()
    console.log(dee.charlie.value)
})
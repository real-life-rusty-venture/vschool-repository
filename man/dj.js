var square =  document.getElementById("square")
square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue"
})
square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red"
})
square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow"
})
square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green"
})
window.addEventListener("scroll", function(){
    square.style.backgroundColor = "orange"
})
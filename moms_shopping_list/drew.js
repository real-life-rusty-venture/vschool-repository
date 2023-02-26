var form = document.form
var list = document.getElementById("list")
form.addEventListener("submit", function(event){
    event.preventDefault()
    var rot = document.form.rot.value
    var newList = document.createElement("li")
    newList.setAttribute("class", "newList")
    list.append(newList)
    newList.textContent = rot
    /* i tried to pull this function out and declare it outside the event listener
    but then the list wouldn't work for more than one item*/
    createButton(newList)
})
function createButton(newList){
    var button = document.createElement("button")
    button.setAttribute("class", "button")
    button.textContent = "X"
    button.style.display = "block"
    var list = document.getElementById("list")
    newList.appendChild(button)
    button.addEventListener("click", function(){
        newList.removeChild(button)
        list.removeChild(newList)
       })

}
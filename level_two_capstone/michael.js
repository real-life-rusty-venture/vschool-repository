 const axios = window.axios
let id = ""
 let name = document.getElementById("name")
let description = document.getElementById("description")
let url = document.getElementById("url")
get()
 let crushes = document.getElementById("crushes")
 const crushForm = document.getElementById("crushForm")
 crushForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const newCrush = {
        "title": name.value,
        "description": description.value,
        "imgUrl": url.value,
        "completed": false
    }
    axios.post("https://api.vschool.io/mmy/todo/", newCrush)
    .then(response => {console.log(response)
        clear()
        console.log(response.data)
        get(response.data)})
        name.value = ""
        description.value = ""
        url.value = ""
 })
 function clear() {
    crushes.textContent = ""
 }
 let arr = []
function get(list){ 
    console.log("get is firing. smashing baby!")
    axios.get("https://api.vschool.io/mmy/todo/")
    .then(response => {
        arr =  (response.data)
        console.log(response.data)
        console.log("^^^^^^ this is the response.data")
        arr.forEach((item, index, arr) => {
                console.log(item)
                const crushDiv = document.createElement("div")
                crushes.append(crushDiv)
                const h1 = document.createElement("h1")
                h1.textContent =  `${item.title}` 
                crushDiv.appendChild(h1)
                const h2 = document.createElement("h2")
                h2.textContent = `${item.description}`
                crushDiv.appendChild(h2)
                const img = document.createElement("img")
                img.setAttribute("src", item.imgUrl)
                img.style.width = "200px"
                console.log(item.imgUr)
                crushDiv.appendChild(img)
                deleteButton(crushDiv, list)
                 editButton(crushDiv, list,  item._id)
                id = item._id
                if (item.completed === false) {
                    completedButton(h1, list)
                }
        })
    }
    )
    .catch(err => {
        console.log(err)
    })
}
function deleteButton(newList, response){
    let button = document.createElement("button")
    button.setAttribute("class", "button")
    button.textContent = "X"
    button.style.display = "block"
    let list = document.getElementById("list")
    newList.appendChild(button)
    button.addEventListener("click", function(){ 
        axios.delete(`https://api.vschool.io/mmy/todo/${id}`).then(function(response)  {
            console.log(response.data)
            clear()
            get()
        }).catch(err => console.log(err))
       })
}
function editButton(newList, response, id) {
    let button = document.createElement("button")
    button.textContent = "edit"
    newList.appendChild(button)
    button.addEventListener("click", function(){
        let editForm = document.createElement("form")
        let titleEdit = document.createElement("input")
        let descriptionEdit = document.createElement("input")
        let urlEdit = document.createElement("input")
        editForm.append(titleEdit)
        editForm.append(descriptionEdit)
        editForm.append(urlEdit)
        newList.append(editForm) 
        let chchchchanges = document.createElement("button")
        chchchchanges.textContent  = "save changes"
        editForm.append(chchchchanges)
        editForm.addEventListener("submit", function(e) {
            e.preventDefault()
            let newThing = {
                "title": titleEdit.value,
                "description": descriptionEdit.value,
                "imgUr": urlEdit.value,
            }
            axios.put(`https://api.vschool.io/mmy/todo/${id}`, newThing)
            .then(response => {
                console.log(response.data)
                clear()
                get(response)
            })
            .catch(err => {
                console.log(err)
                console.log("YOU FUCKED UP DUMB BITCH")
            })
        })
    })
}
function completedButton(newList, response) {
    let button = document.createElement("button")
    button.textContent  =  "✅"
    newList.appendChild(button)
    button.addEventListener("click", function() {
        const newInfo =  {
            "completed": true
        }
        const checkMark = axios.put(`https://api.vschool.io/mmy/todo/${id}`, newInfo)
        .then(response => console.log(response.data)) //THIS WORKS YAY
        .catch(err => console.log(err))
        newList.removeChild(button)
    })
}
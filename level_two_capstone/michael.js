 const axios = window.axios
// const newCrush = {
//     "title": "bojack horseman",
//     "description":  "same mental illness as me",
//     "imgUr": "https://preview.redd.it/pjtw8iqgjf181.jpg?auto=webp&s=e7c71b69c14d4b8fb12156f760d98b67799eba87"
// }
// get()
// get()
// let responseData = ""
let id = ""
 let name = document.getElementById("name")
let description = document.getElementById("description")
let url = document.getElementById("url")
get()
// // const nnyPost = axios.post("https://api.vschool.io/mmy/todo/", newCrush).then(response => console.log(response.data))
// function get(){axios.get("https://api.vschool.io/mmy/todo/")
// // .then(response  => responseData = response.data)
// .then(response => forLoop(response.data))//*console.log(`${response} this is the response from the get function`*/))
// .catch(err => console.log(err))}
// // console.log(responseData)
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
        console.log(`${response.data} this is the response.data`)
        get(response.data)})
        name.value = ""
        description.value = ""
        url.value = ""
 })
 function clear() {
    console.log("clear is firing")
    crushes.textContent = ""
 }
 let arr = []
// function get(list){ 
//     console.log("get is firing. smashing baby!")
//     arr.push(list)
//     console.log(arr)
//     console.log(list)
//     console.log(`${list} this is the list bro`)
//     console.log(list.title)
//     console.log(`${list.title} this is the list.title man`)
//         for(let i = 0; i < arr.length; i++){ //this needs to be list.length but for some reason js doesnt like that
//             console.log(`for loop looping ${[i]} times`)
//             // let index =  list[i]
//             // const div = document.createElement("div")
//             const h1 = document.createElement("h1")
//              h1.textContent =  `${arr[i].title}` //this needs to be list[i].title but js doesnt like that for some reason
//              console.log(`${arr[i].title} this is list[i].title!!! again`)
//              console.log(h1.textContent)
//              console.log(`${h1} this is the h1!!!!`)
//              crushes.append(h1)
//              deleteButton(h1, list)
//              editButton(h1, list)
//              crushes.appendChild(h1)
//              id = arr[i]._id //this needs to be list[i]._id but etc etc
//              completedButton(h1, list)
// }}
function get(list){ 
    console.log("get is firing. smashing baby!")
    axios.get("https://api.vschool.io/mmy/todo/")
    .then(response => {
        arr =  (response.data)
        console.log(response.data)
        console.log("^^^^^^ this is the response.data")
        arr.forEach((item, index, arr) => {
                console.log(item)
                //console.log(`for loop looping ${[j]} times`)
                // let index =  list[i]
                // const div = document.createElement("div")
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
                console.log(item.imgUr) ///every single one of these pictures is fucking broken
                crushDiv.appendChild(img)
                deleteButton(crushDiv, list)
                 editButton(crushDiv, list,  item._id)
                //crushes.appendChild(h1)
                id = item._id //this needs to be list[i]._id but etc etc
                // console.log(id)
                // console.log("i better see a bunch of different ids above this")
                if (item.completed === false) {
                    completedButton(h1, list)
                }
        })
        // for  (let i=  0; i < arr.length; i++) {
            // console.log("for loop 1 is go")
        //     for (let j = 0; j < i.length; j++) { //this straight up does not fire
        //         console.log("grasssss...tastes bad")
        //         console.log(`for loop looping ${[j]} times`)
        //         // let index =  list[i]
        //         // const div = document.createElement("div")
        //         const h1 = document.createElement("h1")
        //         h1.textContent =  `${arr[j].title}`
        //         console.log(`${arr[j].title} this is arr[j].title!!! again`)
        //         console.log(h1.textContent)
        //         console.log(`${h1} this is the h1!!!!`)
        //         crushes.append(h1)
        //         deleteButton(h1, list)
        //          editButton(h1, list)
        //         crushes.appendChild(h1)
        //         id = arr[j]._id //this needs to be list[i]._id but etc etc
        //         completedButton(h1, list)
        //         }
        // }
        // let crush = arr.map(crush => { //the problem with this is js sees crush as EVERY crush object alll at once. i need to iterate through crush[0] then crush[1]  etc
        //     console.log(crush)
        //     console.log("^^^^^crush argument")
        //     const h1 = document.createElement("h1")
        //      h1.textContent =  `${crush.title}`
        //      console.log(crush[0])
        //      console.log("^^^^crush[0]")
        //      console.log(`${crush.title} this is crush.title!!! again`)
        //      console.log(h1.textContent)
        //      console.log(`${h1} this is the h1!!!!`)
        //      crushes.append(h1)
        //      deleteButton(h1, list)
        //      editButton(h1, list)
        //      crushes.appendChild(h1)
        //      id = crush._id //this needs to be list[i]._id but etc etc
        //      completedButton(h1, list)
        //     })
    }
    )
    .catch(err => {
        console.log(err)
        console.log("YOUR GET  REQUEST IS FUCKING UP ASSHOLE")
    })
    // console.log(arr)
    // console.log("thats the arr")
    // console.log(list)
    // console.log(`${list} this is the list bro`)
    // console.log(list.title)
    // console.log(`${list.title} this is the list.title man`)
//         for(let i = 0; i < arr.length; i++){ //this needs to be list.length but for some reason js doesnt like that
//             console.log(`for loop looping ${[i]} times`)
//             // let index =  list[i]
//             // const div = document.createElement("div")
//             const h1 = document.createElement("h1")
//              h1.textContent =  `${arr[i].title}` //this needs to be list[i].title but js doesnt like that for some reason
//              console.log(`${arr[i].title} this is list[i].title!!! again`)
//              console.log(h1.textContent)
//              console.log(`${h1} this is the h1!!!!`)
//              crushes.append(h1)
//              deleteButton(h1, list)
//              editButton(h1, list)
//              crushes.appendChild(h1)
//              id = arr[i]._id //this needs to be list[i]._id but etc etc
//              completedButton(h1, list)
// }
}
// crushForm.addEventListener("submit", function(e) { //figure out why this is 1 too slow
//     e.preventDefault()
//     // crushes.textContent = ""
//     let moreCrush = {
//         "title": name.value,
//         "description": description.value,
//         "imgUr" : url.value
//     }
//     name.value = ""
//     description.value = ""
//     url.value = ""
//     let makeCrush = axios.post("https://api.vschool.io/mmy/todo/", moreCrush).then( response => {
//         console.log(`${response.data} this is the response.data from makeCrush!!!`)
//         // for (let i = 0; i > ; i++) { //this for-loop doesnt work
//             //  forLoop(response.data)
//         //  }
// }
//     ).catch(err => console.log(err))
//     get()
// })
// function forLoop(list){
//     console.log("is this for loop function even firing")
//     console.log(`${list} heeheehoohoo this is the list!!! the list is console logging!!!`)
//     for(let i = 0; i < list.length; i++){
//             // const div = document.createElement("div")
//             // clearDiv() //fix this my man
//             const h1 = document.createElement("h1")
//              h1.textContent =  `${list[i].title}`
//              console.log(`${list[i].title} this is list[i].title!!!`)
//              console.log(h1)
//              console.log(`${h1} this is the h1!!!!`)
//              crushes.append(h1)
//              deleteButton(h1, list)
//              editButton(h1, list)
//              crushes.appendChild(h1)
//              id = list[i]._id
//              completedButton(h1, list)
//     }
// }
// const h1 = document.createElement("h1")
// crushes.append(h1)
function deleteButton(newList, response){
    let button = document.createElement("button")
    button.setAttribute("class", "button")
    button.textContent = "X"
    button.style.display = "block"
    let list = document.getElementById("list")
    newList.appendChild(button)
    button.addEventListener("click", function(){ 
        console.log("you just clicked the delete button!")
        // newList.removeChild(button)
        // list.removeChild(newList)
        // function deleteIt() { //THIS WORKS YAY its just one behind for some reason
        //     console.log("the deleteIt() function is firng bitch!!!")
        //     axios.delete(`https://api.vschool.io/mmy/todo/${id}`).then(response => console.log(response.data)).catch(err => console.log(err))
        // }
        axios.delete(`https://api.vschool.io/mmy/todo/${id}`).then(function(response)  {
            console.log(response.data)
            clear()
            get()
        }).catch(err => console.log(err))
       })
}
// function deleteIt(response) { //THIS WORKS YAY its just one behind for some reason
//     console.log("the deleteIt() function is firng!!!")
//     axios.delete(`https://api.vschool.io/mmy/todo/${id}`)//.then(response => console.log(response.data)).catch(err => console.log(err))
// }
function editButton(newList, response, id) {
    let button = document.createElement("button")
    button.textContent = "edit"
    newList.appendChild(button)
    // let newThing = {
    //     "title": titleEdit.value,
    //     "description": descriptionEdit.value,
    //     "imgUr": urlEdit.value,
    // }
    button.addEventListener("click", function(){
        console.log(response)
        console.log("^^^^that's the response")
        console.log(id,  "this is the id") //this only grabs 1 id at a time
        let editForm = document.createElement("form")
        let titleEdit = document.createElement("input")
        let descriptionEdit = document.createElement("input")
        let urlEdit = document.createElement("input")
        editForm.append(titleEdit)
        editForm.append(descriptionEdit)
        editForm.append(urlEdit)
        //newList.style.display = "none" //figure out why it sees newList as undefined here but not in other areas
        newList.append(editForm) //pleaseeeee please please figure out how to put this in the right spot
        // newThing.title = titleEdit.value
        // newThing.description = descriptionEdit.value
        // newThing.imgUr = urlEdit.value
        //descriptionEdit.value = "" //i will put this back  when i make the thing display the description snd url
        //urlEdit.value = "" //^^^^^^^^^
        let chchchchanges = document.createElement("button")
        chchchchanges.textContent  = "save changes"
        editForm.append(chchchchanges)
        editForm.addEventListener("submit", function(e) {
            e.preventDefault() //preventDefault is  not working
            console.log(`edit button addeventlistener firing cap'n`)
            console.log(`you are editing ${id}`)
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
        // newList.removeChild(h1)
        // const update = axios.put(`https://api.vschool.mmy/todo/${response.data.id}`, newThing)
    })
}
function completedButton(newList, response) {
    let button = document.createElement("button")
    button.textContent  =  "✅"
    newList.appendChild(button)
    button.addEventListener("click", function() {
        console.log("you just clicked the completed buttons!") //this fires
        const newInfo =  {
            "completed": true
        }
        const checkMark = axios.put(`https://api.vschool.io/mmy/todo/${id}`, newInfo)
        .then(response => console.log(response.data)) //THIS WORKS YAY
        .catch(err => console.log(err))
        newList.removeChild(button)
    })
}
// function clearDiv() {
//     crushes.textContent = ""

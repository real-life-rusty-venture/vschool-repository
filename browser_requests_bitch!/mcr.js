const xhr = new XMLHttpRequest()
xhr.open("GET", "https://rickandmortyapi.com/api/character", true)
xhr.send()
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const data = xhr.responseText
        const dataer = JSON.parse(data)
        console.log(dataer.results)
        doTheThing(dataer.results)
    }
}
function doTheThing(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr)
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}
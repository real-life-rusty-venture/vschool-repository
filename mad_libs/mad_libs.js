document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault()
    const name = document.getElementById("name").value
    const secondName = document.getElementById("second-name").value
    const bodyPart = document.getElementById("body-part").value
    const object = document.getElementById("object").value
    document.getElementById("name").value = ""
    document.getElementById("second-name").value = ""
    document.getElementById("body-part").value = ""
    document.getElementById("object").value = ""
    alert("anything bitch!")
    console.log("anything, bitch!")
    alert(`${name} hit ${secondName} on the ${bodyPart} with a ${object}. ${secondName} is fucking  dead.`)
    madLib = document.createElement("h1")
    madLib.textContent = `${name} hit ${secondName} on the ${bodyPart} with a ${object}. ${secondName} is fucking  dead.`
    document.getElementById("div").append(madLib)
})
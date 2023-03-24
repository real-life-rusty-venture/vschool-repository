const form = document.getElementById("airline-form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let gender = form.gender.value
    let age = document.getElementById("age").value
    let destination = form.location.value
    console.log(event)
    let food = []
    if (form.food[0].checked) {
        food.push(form.food[0].value)
    }
    if (form.food[1].checked) {
        food.push(form.food[1].value)
    }
    if (form.food[2].checked) {
         food.push(form.food[2].value)
    }
    if (form.food[3].checked) {
        food.push(form.food[3].value)
    }
    console.log(food)
    console.log(form.food)
    console.log(event)
    alert(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Where You're Going: ${destination}
    What You're Eating: ${food}`)
})
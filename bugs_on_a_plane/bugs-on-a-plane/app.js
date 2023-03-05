const form = document.getElementById("form");
const submit = document.getElementById("submit");
// const query = document.querySelectorAll;

function formAlert() {
     const firstName = form.firstName.value
    const lastName = form.elements["last-name"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const location = form.elements["travel-location"].value;
    const diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }
    console.log("First Name: " + firstName + "Last Name: " + lastName + "Age: " + age + "Gender: " + gender + "Travel Location: " + location + "Diet: " + diet + "Awesome, now if you die, it won't be an accident..");

    
    alert("First Name: " + firstName + " Last Name: " + lastName + " Age: " + age + " Gender: " + gender + " Travel Location: " + location + " Diet: " + diet + " Awesome, now if you die, it won't be an accident..");
}



// form.addEventListener("submit", formAlert());
submit.addEventListener("click", formAlert)

// const form = document.getElementById("form")
// const button = document.getElementById("submit")
// button.addEventListener("submit", function(event){
//     event.preventDefault()
//     console.log("anything at all please")
// })
console.log("anything, please!")
// Constants to add item to list
const form = document.addItem;
const list = document.getElementById("list");
const hr = document.getElementById("hr");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const userInput = form.title.value;
    form.title.value = "";
    let newLi = document.createElement("li");
    let newDiv = document.createElement("div");
    let editButton = document.createElement("button");
    let clearsButton = document.createElement("button");
    
    //Add new item to list
    newDiv.textContent = userInput;
    newDiv.id = 'div';
    editButton.textContent = "edit";
    clearsButton.textContent = "X",
    clearsButton.style.marginLeft = "5px";

    list.append(newLi);
    list.insertBefore(newLi, hr);
    newLi.append(newDiv);
    newLi.append(editButton);
    newLi.append(clearsButton);

    // Removes item from list
    clearsButton.addEventListener("click", () => {
        newLi.removeChild(newDiv);
        newLi.removeChild(editButton);
        newLi.removeChild(clearsButton);
    })

    // Save button upon edit input changes
    editButton.addEventListener("click", () => {
        newDiv.innerHTML += "<input name = 'newInput' id='newInput'/><button id = 'save-button'>save</button>";
        
        let saveButton = document.getElementById("save-button");
        

        // Text changed upon clicking save button for edit input box
        saveButton.addEventListener("click", () => {
            event.preventDefault();
            const newInput = document.getElementById("newInput");
            let oldDiv = document.getElementById('div')
            let updatedDiv = document.createElement("div");
            console.log(newInput)
            oldDiv.textContent = newInput.value;
            
        });
    });
})
console.log("JavaScript file loaded correctly")

//----------------------------Form Creation------------------------------------------
//*Created container for the form
const formNode = document.createElement("header")
document.body.appendChild(formNode)

//*created h1 element and appended to formNode
const formHead = document.createElement("h1")
formNode.appendChild(formHead)
formHead.textContent = "Anteckningsformulär"

//*Created input element for assigning the objects title 
const inputTitle = document.createElement("input")
formNode.appendChild(inputTitle)
inputTitle.setAttribute("id", "objectTitle")
let inputTitleValue = document.getElementById("objectTitle")

//*Created input element for assigning the objects description
const inputDescription = document.createElement("input")
formNode.appendChild(inputDescription)
inputDescription.setAttribute("id", "objectDescription")
let inputDescriptionValue = document.getElementById("objectDescription")

//* Created button element for saving the inputs and creating the Antecknings object
const saveButton = document.createElement("button")
formNode.appendChild(saveButton)
saveButton.textContent = "Save note"
saveButton.setAttribute("id", "objectSave")
//---------------------------------------------------------------------------------

//---------------------------------Container for Notes-----------------------------
const taskContainer = document.createElement("main")
taskContainer.setAttribute("id", "taskContainer")
document.body.appendChild(taskContainer)
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//* Array for the objects
const notesArray = [];
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
//* Object template
const noteObjectTemplate = {
    id: undefined,
    title:  "",
    description: "",
    timeStamp: undefined 
};
//---------------------------------------------------------------------------------
//-----------------------------Object Creation function----------------------------
function objectCreation(){
    let newNoteObject = Object.create(noteObjectTemplate)
    // let stringifiedObject = newNoteObject
    //* object keys-----------------------------------------
    newNoteObject.id = notesArray.length + 1;
    newNoteObject.title = inputTitleValue.value;
    newNoteObject.description = inputDescriptionValue.value;
    newNoteObject.timeStamp = new Date()   
    //*-----------------------------------------------------
    localStorage.setItem(newNoteObject.id, JSON.stringify(newNoteObject))

    notesArray.push(newNoteObject)
    // console.log(newNoteObject)

    return;
}

console.log(notesArray)

//---------------------------------------------------------------------------------
//  :kolon ;semikolon ,kommatecken .punkt 'tick' `Backtick` ´fronttick´ "Citattecken" ''

//*--function for saving and creating note objects----------------------------------------

saveButton.addEventListener("click", function(){
    if(inputTitleValue.value.trim() === "" || inputDescriptionValue.value.trim() === ""){
        alert("försök igen scrub")
        
        //TODO clear placeholder
        inputTitle.setAttribute("placeholder", "Måste fylla i fältet")
        
        inputDescription.setAttribute("placeholder", "Måste fylla i fältet")
        
        formNode.style.animation = "shake 0.5s ease"

        formNode.addEventListener("animationend", () => {
            inputFieldTask.style.animation = "";
        });   
        
   
    } else {
        console.log("creation came here")
        objectCreation();
        // localStorage.getItem(`${notesArray.length + 1}`)
        const objectToDOM = JSON.parse(localStorage.getItem(`${notesArray.length}`))
        console.log(objectToDOM)
    
        //* Creates the HTML elements that corresponds to the objects
        let singularNote = document.createElement("div");
        taskContainer.appendChild(singularNote)
        singularNote.setAttribute("class", "noteObject")
        
        let objectTitle = document.createElement("h3")
        singularNote.appendChild(objectTitle)
        objectTitle.textContent = inputTitle.value;
        objectTitle.setAttribute("class", "objectTitle")

        let objectDescription = document.createElement("p")
        singularNote.appendChild(objectDescription);
        objectDescription.textContent = inputDescription.value
        objectDescription.setAttribute("class", "objectDescription")

        let timeOfEntry = document.createElement("p");
        singularNote.appendChild(timeOfEntry)

        let deleteButton = document.createElement("button")
        deleteButton.setAttribute("class", "deleteButton")
        deleteButton.textContent = "delete note"
        singularNote.appendChild(deleteButton)
        //TODOtimeOfEntry.textContent = 

        //*------------------------------------------------------------

        // clears input field after creating a task
        inputTitle.value = "";
        inputDescription.value = "";
    }


})
//---------------------------------------------------------------------------------

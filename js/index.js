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

//*Created input element for assigning the objects description
const inputDescription = document.createElement("input")
formNode.appendChild(inputDescription)
inputDescription.setAttribute("id", "objectDescription")

//* Created button element for saving the inputs and creating the Antecknings object
const saveButton = document.createElement("button")
formNode.appendChild(saveButton)
saveButton.textContent = "Save note"
saveButton.setAttribute("id", "objectSave")
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
//* Array for the objects
let notesArray = [];
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
//* Object template
let noteObjectTemplate = {
    id: undefined,
    title:  "",
    description: "",
    timeStamp: undefined 
};
//---------------------------------------------------------------------------------
//  :kolon ;semikolon ,kommatecken .punkt 'tick' `Backtick` ´fronttick´ "Citattecken" ''


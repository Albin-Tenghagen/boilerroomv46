console.log("JavaScript file loaded correctly");

//----------------------------Form Creation-----------------------------------------
//* Created container for the form
const formNode = document.createElement("form");
formNode.setAttribute("id", "notesForm")
document.body.appendChild(formNode);

//* Created h1 element and appended to formNode
const formHead = document.createElement("h1");
formHead.setAttribute("id", "formHead")
formNode.appendChild(formHead);
formHead.textContent = "Anteckningsformulär";

//* Created input element for assigning the object's title 
const inputTitle = document.createElement("input");
formNode.appendChild(inputTitle);
inputTitle.setAttribute("id", "objectTitle");
inputTitle.setAttribute("placeholder", "Please enter title of task");
let inputTitleValue = document.getElementById("objectTitle");

//* Created input element for assigning the object's description
const inputDescription = document.createElement("input");
formNode.appendChild(inputDescription);
inputDescription.setAttribute("id", "objectDescription");
inputDescription.setAttribute("placeholder", "Please enter the description of task");
let inputDescriptionValue = document.getElementById("objectDescription");

//* Created button element for saving the inputs and creating the note object
const saveButton = document.createElement("button");
formNode.appendChild(saveButton);
saveButton.textContent = "Save note";
saveButton.setAttribute("id", "objectSave");

const deleteAllButton = document.createElement("button");
deleteAllButton.textContent = "Delete all notes";
deleteAllButton.setAttribute("id", "deleteAllButton");
formNode.appendChild(deleteAllButton);

//---------------------------------------------------------------------------------

//---------------------------------Container for Notes-----------------------------
const notesContainer = document.createElement("main");
notesContainer.setAttribute("id", "taskContainer");
document.body.appendChild(notesContainer);
//---------------------------------------------------------------------------------

//* Array for the objects
const notesArray = [];

//* Object template
const noteObjectTemplate = {
    id: undefined,
    title: "",
    description: "",
    timeStamp: undefined
};

//-----------------------------Object Creation function----------------------------
function objectCreation() {
    //*Creates the new object from the template
    let newNoteObject = Object.create(noteObjectTemplate);
    //*sets the value of the different keys------------------ 
    newNoteObject.id = localStorage.length + 1;
    newNoteObject.title = inputTitleValue.value;
    newNoteObject.description = inputDescriptionValue.value;
    newNoteObject.timeStamp = new Date().toLocaleString();
    //*------------------------------------------------------
    //* Converts the object to a JSON string and sets it in localStorage
    localStorage.setItem(newNoteObject.id, JSON.stringify(newNoteObject));

    //*Pushes the object into notesArray
    notesArray.push(newNoteObject);
    console.log("Object Array", notesArray);

    return;
}

//---------------------------------------------------------------------------------

function deleteNote(noteId, noteElement) {
    // Removing from localStorage
    localStorage.removeItem(noteId);

    // Remove from notesArray
    const noteIndex = notesArray.findIndex(note => note.id === parseInt(noteId));
    if (noteIndex !== -1) {
        notesArray.splice(noteIndex, 1);
    }

    // Remove the note element from the DOM
    noteElement.remove();

    console.log(`Note with ID ${noteId} deleted.`);
}
//---------------------------------------------------------------------------------

//*--function for saving and creating note objects---------------------------------

saveButton.addEventListener("click", function (event) {
    //*Prevents the page from reloading
    event.preventDefault();
    //* This if else block checks to see if the input fields are empty. if they are then a placeholder gets set and the animation starts
    if (inputTitleValue.value.trim() === "" || inputDescriptionValue.value.trim() === "") {
        
        inputTitle.setAttribute("placeholder", "Måste fylla i fältet");
        inputDescription.setAttribute("placeholder", "Måste fylla i fältet");
        formNode.style.animation = "shake 0.5s ease";

        formNode.addEventListener("animationend", () => {
            inputTitle.style.animation = "";
            inputDescription.style.animation = "";
            return;
        });
    } else {
        console.log("creation came here");
        objectCreation();

        //* need to add try/catch to handle corrupt data
        let objectToDOM;
        try {
            objectToDOM = JSON.parse(localStorage.getItem(`${notesArray.length}`));
            console.log(objectToDOM);
        } catch (error) {
            console.log("Error, file is corrupt");
        }

        //* Creates the HTML elements that correspond to the objects
        let singularNote = document.createElement("article");
        notesContainer.appendChild(singularNote);
        singularNote.setAttribute("class", "noteObject");
        singularNote.setAttribute("data-id", objectToDOM.id);

        let objectTitle = document.createElement("h3");
        singularNote.appendChild(objectTitle);
        objectTitle.textContent = objectToDOM.title;
        objectTitle.setAttribute("class", "objectTitle");

        let objectDescription = document.createElement("p");
        singularNote.appendChild(objectDescription);
        objectDescription.textContent = objectToDOM.description;
        objectDescription.setAttribute("class", "objectDescription");

        let timeOfEntry = document.createElement("p");
        timeOfEntry.textContent = objectToDOM.timeStamp;
        singularNote.appendChild(timeOfEntry);

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "deleteButton");
        deleteButton.textContent = "delete note";
        singularNote.appendChild(deleteButton);
        //*--------------------------------------------------------

        // Add delete button functionality
        deleteButton.addEventListener("click", function () {
            deleteNote(objectToDOM.id, singularNote);
        });

        //* Clears input fields after creating a task
        inputTitle.value = "";
        inputDescription.value = "";
    }
});

//* eventlistener that lets you delete all notes from localStorage and the page
deleteAllButton.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete all notes?")) {
        localStorage.clear();
        notesArray.length = 0;
        notesContainer.textContent = "";
        console.log("All notes deleted");
    }
});

//---------------------Function to create older tasks------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // let tasks = [];

    // The for loop iterates once for every item in local storage and assign their key to the variable key.
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // This if block checks if the localstorage item has a number as a key, if it does. The item gets parsed to oldTask
        if (!isNaN(key)) {
            try {
                const oldNote = JSON.parse(localStorage.getItem(key));
                notesArray.push(oldNote); // Lägg till task i arrayen
            } catch (error) {
                console.log("Error in loading task from localStorage", error);
            }
        }
    }

    // Sorts the array by their id (eller timeStamp om du vill ha ordning baserat på tid)
    notesArray.sort((a, b) => a.id - b.id); //' or a.timeStamp - b.timeStamp

    // for every note in your array it calls the function displayOldNotes to create the notes from localStorage
    notesArray.forEach(oldNote => {
        displayOldNotes(oldNote);
    });
});

function displayOldNotes(oldNote) {
    //* This function creates the HTML elements that display old task
    let singularNote = document.createElement("article");
    notesContainer.appendChild(singularNote);
    singularNote.setAttribute("class", "noteObject");
    singularNote.setAttribute("data-id", oldNote.id);

    let objectTitle = document.createElement("h3");
    singularNote.appendChild(objectTitle);
    objectTitle.textContent = oldNote.title;
    objectTitle.setAttribute("class", "objectTitle");

    let objectDescription = document.createElement("p");
    singularNote.appendChild(objectDescription);
    objectDescription.textContent = oldNote.description;
    objectDescription.setAttribute("class", "objectDescription");

    let timeOfEntry = document.createElement("p");
    timeOfEntry.textContent = oldNote.timeStamp;
    singularNote.appendChild(timeOfEntry);
    
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.textContent = "delete note";
    singularNote.appendChild(deleteButton);
    //*-----------------------------------------------------------

    // adds the function to delete older tasks also
    deleteButton.addEventListener("click", function () {
        deleteNote(oldNote.id, singularNote);
    });
}
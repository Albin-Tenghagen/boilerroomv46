let formNode = document.createElement("header")
document.body.appendChild(formNode)

let formHead = document.createElement("h1")
formNode.appendChild(formHead)
formHead.innerHTML = "Anteckningsformulär"

let inputTitle = document.createElement("input")
formNode.appendChild(inputTitle)
inputTitle.setAttribute("id", "objectTitle")

let inputDescription = document.createElement("input")
formNode.appendChild(inputDescription)
inputDescription.setAttribute("id", "objectDescription")
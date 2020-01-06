var listElement = document.querySelector("ul");
var btnAdd = document.querySelector("button");
var inputElement = document.querySelector("input");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTODOS(){
    listElement.innerHTML = '';
    for (todo of todos) {
        listElement.appendChild(createTODO(todo));
    }
}

renderTODOS();

function createTODO(text) {
    var itemListEmenet = document.createElement("li");
    itemListEmenet.appendChild(document.createTextNode(text + "\n"));
    var aElement = document.createElement("a");
    aElement.href = "#";
    aElement.appendChild(document.createTextNode("Excluir"));
    itemListEmenet.appendChild(aElement);
    inputElement.value = "";

    aElement.setAttribute('onClick',`deleteTODO(${todos.indexOf(text)})`);
    return itemListEmenet;
}

function deleteTODO(pos){
    todos.splice(pos, 1);
    renderTODOS();
    saveStorage();

}

btnAdd.onclick = function () {
    if (inputElement.value == "") {
        alert("Digite algo para o TODO!");
    } else {
        var text = inputElement.value;
        todos.push(text);
        renderTODOS();
        saveStorage();
    }
};


function saveStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
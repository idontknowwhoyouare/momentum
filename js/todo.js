const toDoForm = document.getElementById("todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);


function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//function sexyfilter(blank) {return blank.id !== parseInt(li.id);}//
function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((blank) => blank.id !== parseInt(li.id));
  li.remove();
  saveToDos();

}

function paintToDo(potato) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = potato.text;
    li.id = potato.id;
    const button = document.createElement("button");
    button.innerText = "✔";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}   
    


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
      text: newToDo,
      id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);



if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}


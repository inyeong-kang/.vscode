const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  //const 가 아니라 let으로 기존의 리스트에 업데이트

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !==parseInt(li.id)); //li 제거된 새로운 배열 할당
    saveToDos();
  }
  
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.style.backgroundColor="rgba(255, 255, 255, 0.5)";
    button.style.fontSize ="7px";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;  //input의 현재 변수를 새로운 변수에 복사
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
      };
      toDos.push(newTodoObj);
      paintToDo(newTodoObj);
      saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //문자열이었던 array를 parse해서 array로 
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  //배열의 각가 요소에 console.log 
}
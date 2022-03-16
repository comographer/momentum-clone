const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const deleteToDo = (event) => {
  const li = event.target.parentElement;
  li.remove();
};

const paintToDo = (newToDo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDo;
  toDoList.appendChild(li);
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
};

toDoForm.addEventListener("submit", handleToDoSubmit);

//Today's date.
const todayDate = document.getElementById("dateToday");
todayDate.textContent = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric"
});

//To capture text entered in input element.
const todoListDiv = document.getElementById("todoInput");

todoListDiv.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoInputDetail = document.querySelector('[name="todoDetail"]');
  const todoInputText = todoInputDetail.value;

  //Append the todo
  appendTodoList(todoInputText);

  //Clear the input box after submit.
  todoInputDetail.value = "";
});

//Marking checkbox function.
const checkBoxDiv = document.getElementById("todo-list");

checkBoxDiv.addEventListener("change", (event) => {
  const targetLabel = event.target.nextElementSibling; // Get the label element after the clicked checkbox

  if (event.target.checked) {
    targetLabel.className =
      "text-decoration-line-through form-check-label ms-2 fw-semibold";
  } else {
    targetLabel.classList.remove("text-decoration-line-through");
    targetLabel.className = "form-check-label ms-2 fw-semibold";
  }
});

// Creating new box for todo list
let uniqueCheckboxCounter = 0; // Initialize a counter for generating unique IDs

const appendTodoList = (todo) => {
  uniqueCheckboxCounter++; // Increment the
  const checkboxId = `todoListId${uniqueCheckboxCounter}`; // Generate a unique ID

  const creatingDivForNewTodo = document.createElement("div");
  creatingDivForNewTodo.className = "m-2";

  //Create input element
  const inputEle = document.createElement("input");
  inputEle.className = "form-check-input ms-2";
  inputEle.setAttribute("type", "checkbox");
  inputEle.setAttribute("id", `${checkboxId}`);

  //Create label element

  const labelEle = document.createElement("label");
  labelEle.className = "form-check-label ms-2 fw-semibold";
  labelEle.setAttribute("for", `${checkboxId}`);
  labelEle.textContent = todo;

  creatingDivForNewTodo.appendChild(inputEle);
  creatingDivForNewTodo.appendChild(labelEle);

  checkBoxDiv.appendChild(creatingDivForNewTodo);
};

const clearAllDiv = document.getElementById("clearAll");
clearAllDiv.addEventListener("click", (event) => {
  while (checkBoxDiv.hasChildNodes()) {
    checkBoxDiv.removeChild(checkBoxDiv.firstChild);
  }
});

// innerHTML Method

// const appendTodoList = (todo) => {
//   uniqueCheckboxCounter++; // Increment the counter
//   const checkboxId = `todoListId${uniqueCheckboxCounter}`; // Generate a unique ID

//   const creatingDivForNewTodo = document.createElement("div");
//   creatingDivForNewTodo.innerHTML = `<input
//   class="form-check-input"
//   type="checkbox"
//   id="${checkboxId}"
// />
// <label class="form-check-label" for="${checkboxId}">
//   ${todo}
// </label>`;
//   checkBoxDiv.appendChild(creatingDivForNewTodo);
// };

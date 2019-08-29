let page = {
  field: document.querySelector("#field"),
  button: document.querySelector("#button"),
  list: document.querySelector("#list")
};

let createNewToDo = () => {
  let newLI = document.createElement("li");
  let newDeleteButton = document.createElement("button");
  newDeleteButton.textContent = "delete";
  newDeleteButton.addEventListener("click", deleteMyNode);
  newLI.textContent = page.field.value;
  page.list.appendChild(newLI);
  newLI.appendChild(newDeleteButton);
  page.field.value = "";
  page.field.focus();
};

let deleteMyNode = (event) => {
  let pleaseDelete = event.target.parentNode;
  page.list.removeChild(pleaseDelete);
}

page.button.addEventListener("click", createNewToDo);
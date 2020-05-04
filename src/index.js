let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];
function renderTodoItem(item, list) {
  li = document.createElement("li");
  li.style.listStyle = "none";
  let isChecked = item.completed ? "checked" : "";
  li.innerHTML = `
          <input ${isChecked} type="checkbox" name="item" id="item" />
          <label for="item">${item.description}</label>
          `;
  list.appendChild(li);
}
function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  let list = document.createElement("ul");
  h1.innerText = "Todo List";

  for (let item of todos) {
    renderTodoItem(item, list);
  }

  app.appendChild(h1);
  app.appendChild(list);
}

renderTodoApp();

const todoBtn = document.querySelector("#todo-btn");
let todoFeild = document.querySelector("#todo-feild");
const todoForm = document.querySelector("#todo-form");

todoBtn.onclick = (event) => {
  event.preventDefault();
  let inputValue = todoFeild.value;
  let task = {
    completed: false,
    description: inputValue,
  };
  let list = document.querySelector("ul");
  todos.push(task);
  renderTodoItem(task, list);
  todoForm.reset();
};

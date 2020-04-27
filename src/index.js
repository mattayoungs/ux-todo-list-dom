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

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  // your code here
  let list = document.createElement("ul");

  for (let item of todos) {
    li = document.createElement("li");
    li.style.listStyle = "none";
    li.innerHTML = `
      <input type="checkbox" name="item" id="item" />
      <label for="item">${item.description}</label>
      `;
    if (item.completed === true) {
      li.innerHTML = `
      <input checked type="checkbox" name="item" id="item" />
      <label for="item">${item.description}</label>
      `;
    }
    //CHECK TO SEE IF COMPLETED IS T F
    // if t checkbox is checked
    list.appendChild(li);
  }
  h1.innerText = "Todo List";

  app.appendChild(h1);
  app.appendChild(list);
  // and maybe some here
}

renderTodoApp();

import project from "./toDos";

const mainDiv = document.getElementById("container");

const get = key => localStorage.getItem(key);
const remove = key => localStorage.removeItem(key);

function StartUp() {
  const projectContainer = elemental("div", "id", "project-container");
  const toDosContainer = elemental("div", "id", "todos-container");
  const projectUl = elemental("ul", "id", "project-ul");
  const toDosTable = elemental("table", "id", "todos-table");
  mainDiv.appendChild(projectContainer).appendChild(projectUl);
  mainDiv.appendChild(toDosContainer).appendChild(toDosTable);

  renderProjectsList();
}

function elemental(type, property, value) {
  const element = document.createElement(type);
  element[property] = value;
  return element;
}

function renderProjectsList() {
  const projectUl = document.getElementById("project-ul");
  // const toDosTable = document.getElementById("todos-table");
  Object.keys(localStorage).forEach(x => {
    let projectItem = elemental("li", "class", "project-name");
    projectItem.id = x;
    let projectName = document.createTextNode(x);
    projectItem.appendChild(projectName);
    projectUl.appendChild(projectItem);
    projectItem.onclick = function() {
      renderTodosProject(this.id);
    };
    // let node2 = elemental("li", "class", "todo-name");
    // let text2 = document.createTextNode(localStorage[x]);
    // node2.appendChild(text2);
    // toDosTable.appendChild(node2);
  });
}

function renderTodosProject(projectName) {
  const projectItems = JSON.parse(get(projectName));

  const toDosTable = document.getElementById("todos-table");
  toDosTable.innerHTML = "";
  // console.log(projectItems);
  projectItems.forEach((x, i) => {
    if (i === 0) {
      const tableTr = elemental("tr", "class", "table-row");
      Object.keys(x).forEach(x => {
        const tableRowHeader = elemental("th", "class", "table-header");
        tableRowHeader.appendChild(document.createTextNode(x));
        tableTr.appendChild(tableRowHeader);
      });
      toDosTable.appendChild(tableTr);
    }

    let node2 = elemental("li", "class", "todo-name");
    let text2 = document.createTextNode(JSON.stringify(x));
    console.log(x);
    node2.appendChild(text2);
    toDosTable.appendChild(node2);
  });
}

export default StartUp;

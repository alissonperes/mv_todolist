import project from './toDos';

const mainDiv = document.getElementById('container');

const get = (key) => localStorage.getItem(key);
const remove = (key) => localStorage.removeItem(key);

function elemental(type, property, value) {
  const element = document.createElement(type);
  element[property] = value;
  return element;
}

function StartUp() {
  const projectContainer = elemental('div', 'id', 'project-container');
  const toDosContainer = elemental('div', 'id', 'todos-container');
  const projectUl = elemental('ul', 'id', 'project-ul');
  const toDosTable = elemental('table', 'id', 'todos-table');
  mainDiv.appendChild(projectContainer).appendChild(projectUl);
  mainDiv.appendChild(toDosContainer).appendChild(toDosTable);

  renderProjectsList();
}


function renderProjectsList() {
  const projectUl = document.getElementById('project-ul');
  // const toDosTable = document.getElementById("todos-table");
  Object.keys(localStorage).forEach((x) => {
    const projectItem = elemental('li', 'class', 'project-name');
    projectItem.id = x;
    const projectName = document.createTextNode(x);
    projectItem.appendChild(projectName);
    projectUl.appendChild(projectItem);
    projectItem.onclick = function () {
      renderTodosProject(this.id);
    };
  });
}

function renderTodosProject(projectName) {
  const projectItems = JSON.parse(get(projectName));

  const toDosTable = document.getElementById('todos-table');
  toDosTable.innerHTML = '';
  projectItems.forEach((x, i) => {
    if (i === 0) {
      const tableTr = elemental('tr', 'class', 'table-row');
      Object.keys(x).forEach((x) => {
        const tableRowHeader = elemental('th', 'class', 'table-header');
        tableRowHeader.appendChild(document.createTextNode(x));
        tableTr.appendChild(tableRowHeader);
      });
      toDosTable.appendChild(tableTr);
    }

    const tableRow = elemental('tr', 'class', 'table-row');
    Object.values(x).forEach((y) => {
      const tableCell = elemental('td', 'class', 'table-cell');
      tableCell.appendChild(document.createTextNode(y));
      tableRow.appendChild(tableCell);
    });

    toDosTable.appendChild(tableRow);
  });
}

export default StartUp;

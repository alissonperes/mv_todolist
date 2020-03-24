import project from './toDos';

const mainDiv = document.getElementById('container');
const get = (key) => JSON.parse(localStorage.getItem(key));
// const getListItem = (projectt, item) => {
//   console.log(get(projectt)[item]);
// };
// eslint-disable-next-line no-unused-vars
const remove = (key) => localStorage.removeItem(key);

function elemental(type, property, value) {
  const element = document.createElement(type);
  element[property] = value;
  return element;
}

function renderTodosProject(projectName) {
  const projectItems = get(projectName);

  const toDosTable = document.getElementById('todos-table');
  toDosTable.innerHTML = '';
  projectItems.forEach((x, i) => {
    if (i === 0) {
      const tableTr = elemental('tr', 'class', 'table-row');
      Object.keys(x).forEach((z) => {
        if (z === 'position') return;
        const tableRowHeader = elemental('th', 'class', 'table-header');
        tableRowHeader.appendChild(document.createTextNode(z));
        tableTr.appendChild(tableRowHeader);
      });
      toDosTable.appendChild(tableTr);
    }

    const tableRow = elemental('tr', 'class', 'table-row');
    Object.values(x).forEach((y, z) => {
      if (z === 4) return;
      const tableCell = elemental('td', 'class', 'table-cell');
      tableCell.appendChild(document.createTextNode(y));
      tableRow.appendChild(tableCell);
    });
    const editButton = elemental('button', 'id', 'edit-btn');
    editButton.appendChild(document.createTextNode('Edit'));
    tableRow.appendChild(editButton);
    editButton.onclick = function () {
      // console.log(x.position);
      // getListItem(projectName, x.position);
      if (editButton.innerText === 'Edit') {
        this.parentElement.className = 'editable';
        this.parentElement.setAttribute('contenteditable', 'true');
        this.innerText = 'Save';
      } else {
        this.parentElement.className = '';
        const newValues = Object.values(this.parentElement.childNodes)
          .filter((k) => k.tagName === 'TD')
          .map((z) => z.innerText);

        projectName.updateNotes(x.position, newValues);

        this.parentElement.setAttribute('contenteditable', 'false');
        this.innerText = 'Edit';
      }
    };
    toDosTable.appendChild(tableRow);
  });
}

function renderProjectsList() {
  const projectUl = document.getElementById('project-ul');

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

function seedDefault() {
  const defaultProject = project('Default-List');
  defaultProject.addNote('Default1', 'description', '01012020', '000');
  defaultProject.addNote('Default2', 'description', '01012020', '1111');
  defaultProject.addNote('Default3', 'description', '01012020', '2222');
  defaultProject.addNote('Default4', 'description', '01012020', '3333');
}

function StartUp() {
  const projectContainer = elemental('div', 'id', 'project-container');
  const toDosContainer = elemental('div', 'id', 'todos-container');
  const projectUl = elemental('ul', 'id', 'project-ul');
  const toDosTable = elemental('table', 'id', 'todos-table');
  mainDiv.appendChild(projectContainer).appendChild(projectUl);
  mainDiv.appendChild(toDosContainer).appendChild(toDosTable);

  seedDefault();
  renderProjectsList();
}

export default StartUp;

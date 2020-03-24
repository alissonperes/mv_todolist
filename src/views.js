import project from './toDos';

const mainDiv = document.getElementById('container');

const get = (key) => localStorage.getItem(key);
const remove = (key) => localStorage.removeItem(key);

function StartUp() {
  const projectContainer = elemental('div', 'id', 'project-container')
  const toDosContainer = elemental('div', 'id', 'todos-container')
  const projectUl = elemental('ul', 'id', 'project-ul')
  const toDosUl = elemental('ul', 'id', 'todos-ul');
  mainDiv.appendChild(projectContainer).appendChild(projectUl);
  mainDiv.appendChild(toDosContainer).appendChild(toDosUl);

  Object.keys(localStorage).forEach(x => {
    let node = elemental('li', 'class', 'project-name');
    let text = document.createTextNode(x);
    node.appendChild(text);
    projectUl.appendChild(node);

    let node2 = elemental('li', 'class', 'todo-name');
    let text2 = document.createTextNode(localStorage[x]);
    node2.appendChild(text2);
    toDosUl.appendChild(node2);
  })
}

function elemental(type, property, value) {
  const element = document.createElement(type);
  element[property] = value;
  return element;
}


export default StartUp;

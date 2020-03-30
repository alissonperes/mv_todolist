import ProjectController from '../controllers/project.controller';

function todoCreator(todo) {
  let priorityCheck = '';
  console.log(todo);
  switch (todo.priority.toLowerCase()) {
    case 'low':
      priorityCheck = 'alert-primary';
      break;
    case 'medium':
      priorityCheck = 'alert-success';
      break;
    case 'high':
      priorityCheck = 'alert-dark';
      break;
    case 'urgent':
      priorityCheck = 'alert-danger';
      break;
    default:
      break;
  }
  const mainCardDiv = document.createElement('div');
  mainCardDiv.className = 'card col-lg-4 col-md-6 col-12';
  mainCardDiv.id = todo.id;
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  const cardTitle = document.createElement('h5');
  cardTitle.appendChild(document.createTextNode(todo.name));
  cardBody.appendChild(cardTitle);
  mainCardDiv.appendChild(cardBody);

  const listGroup = document.createElement('ul');
  listGroup.className = 'list-group list-group-flush';
  const listGroupItemDesc = document.createElement('li');
  listGroupItemDesc.className = 'list-group-item';
  const listGroupItemDate = document.createElement('li');
  listGroupItemDate.className = 'list-group-item';
  const listGroupItemPrio = document.createElement('div');
  listGroupItemPrio.setAttribute('role', 'alert');
  listGroupItemPrio.className = `alert ${priorityCheck}`;
  const listGroupItemPrioLi = document.createElement('li');
  listGroupItemPrioLi.className = 'list-group-item';

  const listGroupButons = document.createElement('li');
  listGroupButons.className = 'list-group-item';
  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'btn-group w-100';
  buttonGroup.setAttribute('role', 'group');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  editButton.className = 'btn btn-secondary';
  deleteButton.className = 'btn btn-secondary';
  editButton.setAttribute('type', 'button');
  deleteButton.setAttribute('type', 'button');
  editButton.appendChild(document.createTextNode('Edit'));
  deleteButton.appendChild(document.createTextNode('Delete'));
  editButton.onclick = function() { };
  deleteButton.onclick = function () {
    new ProjectController().removeTodo(todo.parentId, todo.id);
    mainCardDiv.parentElement.removeChild(mainCardDiv);
  };

  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(deleteButton);
  listGroupButons.appendChild(buttonGroup);

  listGroupItemDesc.appendChild(document.createTextNode(todo.description));
  listGroupItemDate.appendChild(document.createTextNode(todo.dueDate));
  listGroupItemPrio.appendChild(document.createTextNode(todo.priority));

  listGroupItemPrioLi.appendChild(listGroupItemPrio);

  listGroup.appendChild(listGroupItemDesc);
  listGroup.appendChild(listGroupItemDate);
  listGroup.appendChild(listGroupItemPrioLi);
  listGroup.appendChild(listGroupButons);
  mainCardDiv.appendChild(listGroup);

  return mainCardDiv;
}

function appendTodo(node, todo) {
  node.appendChild(todoCreator(todo));
}

function renderTodos(node, todos) {
  // eslint-disable-next-line no-param-reassign
  node.innerHTML = '';
  if (todos.length > 0) {
    todos.forEach((todo) => {
      appendTodo(node, todo);
    });
  }
}

export { appendTodo, renderTodos };

function todoCreator(todo) {
  let priorityCheck = '';
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

  listGroupItemDesc.appendChild(document.createTextNode(todo.description));
  listGroupItemDate.appendChild(document.createTextNode(todo.dueDate));
  listGroupItemPrio.appendChild(document.createTextNode(todo.priority));

  listGroupItemPrioLi.appendChild(listGroupItemPrio);

  listGroup.appendChild(listGroupItemDesc);
  listGroup.appendChild(listGroupItemDate);
  listGroup.appendChild(listGroupItemPrioLi);
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

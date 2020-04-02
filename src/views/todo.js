import ApplicationController from '../controllers/application.controller';

function todoCreator(todo) {
  let priorityCheck = '';
  switch (todo.priority.toLowerCase()) {
    case 'low':
      priorityCheck = 'primary';
      break;
    case 'medium':
      priorityCheck = 'success';
      break;
    case 'high':
      priorityCheck = 'dark';
      break;
    case 'urgent':
      priorityCheck = 'danger';
      break;
    default:
      break;
  }
  const mainCardDiv = document.createElement('div');
  mainCardDiv.className = 'card col-lg-4 col-md-6 col-12';
  mainCardDiv.id = todo.id;
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  const cardTitle = document.createElement('li');
  cardTitle.className = 'list-group-item';

  const collapseButton = document.createElement('button');
  collapseButton.setAttribute('data-toggle', 'collapse');
  collapseButton.setAttribute('data-target', `#collapse${todo.id}`);
  collapseButton.className = `btn btn-${priorityCheck}`;
  collapseButton.appendChild(document.createTextNode(todo.name));
  cardTitle.appendChild(collapseButton);

  mainCardDiv.appendChild(cardBody);

  const ulDiv = document.createElement('div');
  ulDiv.className = 'card-ul';
  const listGroup = document.createElement('ul');
  listGroup.className = 'list-group list-group-flush';
  const listGroupItemDesc = document.createElement('li');
  listGroupItemDesc.className = 'list-group-item collapse';
  listGroupItemDesc.id = `collapse${todo.id}`;

  const listGroupItemDate = document.createElement('li');
  listGroupItemDate.className = 'list-group-item';
  const listGroupItemPrio = document.createElement('div');
  listGroupItemPrio.setAttribute('role', 'alert');
  listGroupItemPrio.className = `alert collapse alert-${priorityCheck}`;
  listGroupItemPrio.id = `collapse${todo.id}`;
  const listGroupItemPrioLi = document.createElement('li');
  listGroupItemPrioLi.className = 'list-group-item';

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

  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(deleteButton);

  listGroupItemDesc.appendChild(document.createTextNode(todo.description));
  listGroupItemDate.appendChild(document.createTextNode(todo.dueDate));
  listGroupItemPrio.appendChild(document.createTextNode(todo.priority));

  listGroupItemPrioLi.appendChild(listGroupItemPrio);

  listGroup.appendChild(cardTitle);
  listGroup.appendChild(listGroupItemDesc);
  listGroup.appendChild(listGroupItemDate);
  listGroup.appendChild(listGroupItemPrioLi);

  ulDiv.appendChild(listGroup);
  cardBody.appendChild(ulDiv);
  cardBody.appendChild(buttonGroup);
  mainCardDiv.appendChild(cardBody);

  editButton.onclick = (e) => {
    if (e.target.innerText === 'Edit') {
      e.target.innerText = 'Save';

      ulDiv.innerHTML = `<form id="edit-todo-form">
  <div class="form-group">
  <label>Name</label>
  <input type="text" value="${todo.name}" class="form-control" required>
  </div>
  <div class="form-group">
  <label>Description</label>
  <textarea class="form-control" required>${todo.description}</textarea>
  </div>
  <div class="form-group">
  <label>Due date</label>
  <input type="date" value="${todo.dueDate}" class="form-control" required>
  </div>
  <div class="form-group">
  <select class="custom-select" required="">
  <option value="Low" ${todo.priority === 'Low' ? 'selected = selected' : ''}>Low</option>
  <option value="Medium" ${todo.priority === 'Medium' ? 'selected = selected' : ''}>Medium</option>
  <option value="High" ${todo.priority === 'High' ? 'selected = selected' : ''}>High</option>
  <option value="Urgent" ${todo.priority === 'Urgent' ? 'selected = selected' : ''}>Urgent</option>
  </select>
  <div class="invalid-feedback">Example invalid custom select feedback</div>
  </div>

</form>
      `;
    } else {
      const editTodoForm = document.getElementById('edit-todo-form');
      if (editTodoForm.checkValidity()) {
        const ipts = document.querySelectorAll(
          '.card-ul form .form-group input, .card-ul form .form-group textarea, .card-ul form .form-group select',
        );
        const values = Array.from(ipts).map((x) => x.value);
        const editedTodo = new ApplicationController().todos.editTodo(
          todo.parentId,
          todo.id,
          ...values,
        );
        const removeTodo = document.getElementById(todo.id);
        removeTodo.parentElement.removeChild(removeTodo);
        // eslint-disable-next-line
        appendTodo(document.getElementById('todos-div'), editedTodo);
        e.target.innerText = 'Edit';
      } else {
        editTodoForm.reportValidity();
      }
    }
  };

  deleteButton.onclick = () => {
    new ApplicationController().todos.removeTodo(todo.parentId, todo.id);
    mainCardDiv.parentElement.removeChild(mainCardDiv);
  };

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

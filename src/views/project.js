import { renderTodos } from './todo';

function appendProject(node, project) {
  const anchorProject = document.createElement('a');
  anchorProject.appendChild(document.createTextNode(project.name));
  anchorProject.setAttribute('id', project.id);
  anchorProject.setAttribute('class', 'list-group-item list-group-item-action');
  anchorProject.onclick = function() {
    const todoCont = document.getElementById('todos-div');
    renderTodos(todoCont, project.todos);
    document.getElementById('create-todo-form').classList = project.id;
  };
  node.appendChild(anchorProject);
}

function renderProjects(node, projects) {
  projects.forEach((p) => appendProject(node, p));
}

export { renderProjects, appendProject };

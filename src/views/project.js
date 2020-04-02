import { renderTodos } from './todo';

function appendProject(node, project, active) {
  const anchorProject = document.createElement('a');
  anchorProject.appendChild(document.createTextNode(project.name));
  anchorProject.setAttribute('id', project.id);
  let anchorClass = 'list-group-item list-group-item-action';
  anchorClass += active ? ' active' : '';
  anchorProject.setAttribute('class', anchorClass);

  anchorProject.setAttribute('data-toggle', 'list');
  anchorProject.setAttribute('role', 'tab');
  anchorProject.onclick = () => {
    const todoCont = document.getElementById('todos-div');
    const updateTrigger = document.getElementById('trigger-modal');
    updateTrigger.innerText = `Create todo for ${project.name}`;
    renderTodos(todoCont, project.todos);
    document.getElementById('create-todo-form').classList = project.id;
  };
  node.appendChild(anchorProject);
}

function renderProjects(node, projects) {
  node.appendChild(
    document.createTextNode('Select a project here to create ToDos for that project'),
  );
  projects.forEach((p, i) => {
    const active = i === 0;
    appendProject(node, p, active);
  });
}

export { renderProjects, appendProject };

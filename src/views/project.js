import { renderTodos } from './todo';

function appendProject(node, project) {
  const anchorProject = document.createElement('a');
  anchorProject.appendChild(document.createTextNode(project.name));
  anchorProject.setAttribute('id', project.id);
  anchorProject.setAttribute('class', 'list-group-item list-group-item-action');
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
  console.log(projects);
  projects.forEach((p) => appendProject(node, p));
  node.appendChild(
    document.createTextNode('Select a project here to create ToDos for that project'));
}

export { renderProjects, appendProject };

import todoView from './todo';

function renderProjects(node, projects) {
  projects.forEach((p) => {
    const anchorProject = document.createElement('a');
    anchorProject.appendChild(document.createTextNode(p.name));
    anchorProject.setAttribute('id', p.id);
    anchorProject.setAttribute('class', 'list-group-item list-group-item-action');

    node.appendChild(anchorProject);
  });
}

export default renderProjects;

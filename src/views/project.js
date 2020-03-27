import todoView from './todo';

function renderProjects(projects) {
  const divCol = document.createElement('div');
  divCol.className = 'col-md-4 col-sm-12 mt-3';
  divCol.id = 'projects-div';

  const divInput = document.createElement('div');
  divInput.className = 'input-group mb-3';

  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('id', 'new-project-input');
  newInput.setAttribute('class', 'form-control');
  newInput.setAttribute('placeholder', 'New project name');
  newInput.setAttribute('aria-label', 'Project name');
  newInput.setAttribute('aria-describedby', 'basic-addon1');
  newInput.required = true;
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('class', 'btn btn-primary');
  btn.setAttribute('id', 'btn-add-project');
  btn.appendChild(document.createTextNode('Create'));

  divInput.appendChild(newInput);
  divInput.appendChild(btn);
  divCol.appendChild(divInput);
  projects.forEach((p) => {
    const anchorProject = document.createElement('a');
    anchorProject.appendChild(document.createTextNode(p.name));
    anchorProject.setAttribute('id', p.id);
    anchorProject.setAttribute('class', 'list-group-item list-group-item-action');

    divCol.appendChild(anchorProject);
  });

  return divCol.outerHTML;
}

export default renderProjects;

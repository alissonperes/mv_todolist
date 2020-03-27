import todoView from './todo';

function renderProjects(projects) {
  const divCol = document.createElement('div');
  divCol.className = 'col-md-4 col-sm-12 mt-3';

  const divInput = document.createElement('div');
  divInput.className = 'input-group mb-3';
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('class', 'form-control');
  newInput.setAttribute('placeholder', 'New project name');
  newInput.setAttribute('aria-label', 'Project name');
  newInput.setAttribute('aria-describedby', 'basic-addon1');
  newInput.setAttribute('required', 'true');
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('class', 'btn btn-primary');
  btn.appendChild(document.createTextNode('Create'));
  divInput.appendChild(newInput);
  divInput.appendChild(btn);
  divCol.appendChild(divInput);
  projects.forEach((p) => {
    const anchorProject = document.createElement('a');
    anchorProject.appendChild(document.createTextNode(p.name));
    anchorProject.setAttribute('id', p.id);
    anchorProject.setAttribute('class', 'list-group-item list-group-item-action');

    console.log(p.id);
    anchorProject.onclick = todoView(p.todos);

    divCol.appendChild(anchorProject);
    // pageHTML += `<a id="${p.id}" class="list-group-item list-group-item-action"> ${p.name} </a>`;
  });

  // let pageHTML = `
  //     <div class="col-md-4 col-sm-12 mt-3">
  //       <div class="input-group mb-3">
  //         <input type="text" class="form-control" placeholder="New project name" aria-label="Project name" aria-describedby="basic-addon1" required="">
  //         <button type="button" class="btn btn-primary">Create</button>
  //       </div>
  //       <div class="list-group">`;
  // projects.forEach((p) => {
  //   pageHTML += `<a id="${p.id}" onclick="todoView(${p.id})" class="list-group-item list-group-item-action"> ${p.name} </a>`;
  // });
  //
  // pageHTML += '</div></div>';

  return divCol.outerHTML;
}

export default renderProjects;

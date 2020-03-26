function renderProjects(projects) {

  let pageHTML = `
      <div class="col-md-4 col-sm-12 mt-3">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="New project name" aria-label="Project name" aria-describedby="basic-addon1" required="">
          <button type="button" class="btn btn-primary">Create</button>
        </div>
        <div class="list-group">`;
  projects.forEach((p) => {
    pageHTML += `<a id="${p.id}" onclick="todoView(${p.id})" class="list-group-item list-group-item-action"> ${p.name} </a>`;
  });

  pageHTML += '</div></div>';

  return pageHTML;
}

export default renderProjects;

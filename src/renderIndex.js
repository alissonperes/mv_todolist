const app = document.getElementById('app');
const initialHtml = `<div class="container">
  <div class="row">
    <div class="col-lg-5 col-md-6 col-sm-12 bg-dark">
      <div class="input-group mb-3">
        <input
          class="form-control w-100"
          id="add-project-btn"
          type="text"
          placeholder="New project name"
          required="true"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" id="btn-add-project" type="button">
            Add Project
          </button>
        </div>
      </div>
      <div id="projects-list"><ul class="list-group"></ul></div>
    </div>
    <div class="col">
      <div class="input-group mb-3">
        <input
          class="form-control w-100"
          id="add-todo-btn"
          type="text"
          placeholder="New todo name"
          required="true"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" id="btn-add-todo" type="button">
            Add todo
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`;
app.innerHTML = initialHtml;

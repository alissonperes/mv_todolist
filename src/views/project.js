class ProjectView {
  static html(projects) {
    return `
                      <div class="row">
        <div class="col-4">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              Project 0
            </a>
            <a href="#" class="list-group-item list-group-item-action">Project 1</a>
            <a href="#" class="list-group-item list-group-item-action">Project 2</a>
            <a href="#" class="list-group-item list-group-item-action">Project 3</a>
            <a href="#" class="list-group-item list-group-item-action">Project 4</a>
          </div>
        </div>
        <div class="col-8 d-flex">
          <div class="row" id="todos-container">

          </div>
        </div>
      </div>
    `;
  }
}

export default TodoView;

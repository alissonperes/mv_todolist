function todoView(projectId, todos) {
  let pageHtml = `
  <div id="todos-div" class="col-md-8 col-sm-12 d-flex-column mt-3">
    <div class="row justify-content-end mb-3">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Create new todo
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Todo</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form id="${projectId}">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea
                    type=""
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label>Due date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <select class="custom-select" required>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>

                <button type="button" class="btn btn-primary" id="create-todo-btn">Create</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Dismiss changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">`;
  if (todos.length > 0) {
    todos.forEach((todo) => {
      let priorityCheck = '';
      switch (todo.priority.toLowerCase()) {
        case 'low':
          priorityCheck = 'alert-primary';
          break;
        case 'medium':
          priorityCheck = 'alert-success';
          break;
        case 'high':
          priorityCheck = 'alert-dark';
          break;
        case 'urgent':
          priorityCheck = 'alert-danger';
          break;
        default:
          break;
      }

      pageHtml += ` <div class="card col-lg-4 col-md-6 col-12" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${todo.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">${todo.description || 'No description'}</li>
      <li class="list-group-item">${todo.dueDate || 'no due date'}</li>
      <li class="list-group-item">
      <div role="alert" class="alert ${priorityCheck} m-0"> Priority ${todo.priority}</div></li>
      </ul>
      <div class="card-body">
      <a href="#" class="card-link">Save</a>
      <a href="#" class="card-link">Edit</a>
      </div>
      </div>`;
    });
  }
  pageHtml += '</div></div>';

  return pageHtml;
}

export default todoView;

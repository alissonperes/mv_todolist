class TodoView {
  static html(todo) {
    return `
                <div class="card col-4" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${todo.name} </h5>
                <p class="card-text">
                  ${todo.description}
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${todo.dueDate}</li>
                <li class="list-group-item">${todo.priority}</li>
              <div class="card-body">
                <a href="#" class="card-link">Edit</a>
                <a href="#" class="card-link">Save</a>
              </div>
            </div>
    `;
  }
}

export default TodoView;

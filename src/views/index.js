const loadMainContent = () => {
  const mainDiv = document.getElementById('app');

  let initialContent = `<div class="container-fluid w-100 m-0 p-0 mb-3">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand h1">Amazing TodoList</span>
    </nav>
  </div>`;

  initialContent += `<div class="container pt-3">
    <div class="row">
      <div class="col-md-4 col-sm-12 mt-3" id="projects-div">
        <div class="input-group mb-3" id="project-container">
          <input
            type="text"
            id="new-project-input"
            class="form-control"
            placeholder="New project name"
            aria-label="Project name"
            aria-describedby="basic-addon1"
            required=""
          />
          <button type="button" class="btn btn-primary" id="btn-add-project">Create</button>
        </div>
        <!-- Projects View renders the anchors <a> -->
      </div>
      <div class="col-md-8 col-sm-12 d-flex-column mt-3">
        <div class="row justify-content-center mb-3">
          <!-- Button trigger modal -->
          <button
          id="trigger-modal"
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Create todo for Default
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
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form id="create-todo-form">
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
                      <select class="custom-select" required="">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Urgent">Urgent</option>
                      </select>
                      <div class="invalid-feedback">Example invalid custom select feedback</div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      id="create-todo-btn"
                      data-dismiss="modal"
                    >
                      Create
                    </button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button id="dismiss-changes" type="button" class="btn btn-secondary" data-dismiss="modal">
                    Dismiss changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" id="todos-div">
          <!--TODOS render the cards for EACH todo in project with id XXXX -->
        </div>
      </div>
    </div>
  </div>`;

  mainDiv.innerHTML = initialContent;
};

export default loadMainContent;

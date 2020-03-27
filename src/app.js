import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import renderProjects from './views/project';
import todoView from './views/todo';
// import ProjectModel from './models/project';
import ProjectController from './controllers/project.controller';

const allProjects = new ProjectController();
allProjects.setStorage();

const defaultProject = allProjects.projects[0];

const projects = JSON.parse(localStorage.getItem('projects'));

const app = document.getElementById('app');
const divContainer = document.createElement('div');
divContainer.className = 'container pt-3';
const containerRow = document.createElement('div');
containerRow.className = 'row';
const mainProjectsDiv = document.createElement('div');
mainProjectsDiv.id = 'projects-div';
const mainTodosDiv = document.createElement('div');
mainTodosDiv.id = 'todos-div';

divContainer.appendChild(containerRow);
app.appendChild(divContainer);
containerRow.innerHTML = renderProjects(projects);
containerRow.innerHTML += todoView(defaultProject.id, defaultProject.todos);

const projectsAnchor = document.querySelectorAll('#projects-div a');
projectsAnchor.forEach((p) => {
  p.onclick = function() {
    const todosDiv = document.getElementById('todos-div');
    todosDiv.outerHTML = todoView(
      allProjects.getProject(p.id).id,
      allProjects.getProject(p.id).todos
    );
  };
});

const btnAddProject = document.getElementById('btn-add-project');
const inputProjectName = document.getElementById('new-project-input');
btnAddProject.onclick = function() {
  if (inputProjectName.checkValidity()) {
    const addedProject = allProjects.addProject(inputProjectName.value);

    const allProjectsDiv = document.getElementById('projects-div');
    const anchor = document.createElement('a');
    anchor.appendChild(document.createTextNode(inputProjectName.value));
    anchor.setAttribute('id', addedProject.id);
    anchor.setAttribute('class', 'list-group-item list-group-item-action');
    allProjectsDiv.appendChild(anchor);
  }
  inputProjectName.value = '';
  inputProjectName.focus();
};

const btnAddTodo = document.getElementById('create-todo-btn');
btnAddTodo.onclick = function() {
  const projectId = this.parentElement.id;
  const ipts = document.querySelectorAll(
    '.modal-body form .form-group input, .modal-body form .form-group textarea, .modal-body form .form-group select'
  );
  const values = Array.from(ipts).map((x) => x.value);
  const addedTodo = allProjects.addTodo(projectId, ...values);
};
const createTodoModalForm = btnAddTodo.parentElement;

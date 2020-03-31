import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as projectView from './views/project';
import * as todoView from './views/todo';
import loadMainContent from './views/index';
import ApplicationController from './controllers/application.controller';

loadMainContent();

const app = new ApplicationController();
const defaultProject = app.allProjects.projects[0];

const mainProjectsDiv = document.getElementById('projects-div');
const mainTodosDiv = document.getElementById('todos-div');

projectView.renderProjects(mainProjectsDiv, app.allProjects.projects);
todoView.renderTodos(mainTodosDiv, app.todos.listTodos(defaultProject.id));
document.getElementById('create-todo-form').classList = defaultProject.id;

const btnAddProject = document.getElementById('btn-add-project');
const inputProjectName = document.getElementById('new-project-input');
btnAddProject.onclick = () => {
  if (inputProjectName.checkValidity()) {
    const addedProject = app.allProjects.addProject(inputProjectName.value);
    projectView.appendProject(mainProjectsDiv, addedProject);
  }
  inputProjectName.value = '';
  inputProjectName.focus();
};

const clearAddTodoForm = (formInputs) => {
  formInputs.forEach((x) => {
    // eslint-disable-next-line no-param-reassign
    x.value = '';
  });
};

const btnAddTodo = document.getElementById('create-todo-btn');
btnAddTodo.onclick = (event) => {
  const projectId = parseInt(event.currentTarget.parentElement.className, 0);
  const ipts = document.querySelectorAll(
    '.modal-body form .form-group input, .modal-body form .form-group textarea, .modal-body form .form-group select',
  );
  const values = Array.from(ipts).map((x) => x.value);
  console.log('values from app.js fro todo', values);
  console.log('projectID ', projectId);
  const targetTodo = app.todos.addTodo(projectId, ...values);
  todoView.appendTodo(mainTodosDiv, targetTodo);
  clearAddTodoForm(ipts);
};

const dismissForm = document.getElementById('dismiss-changes');
dismissForm.onclick = () => {
  const ipts = document.querySelectorAll(
    '.modal-body form .form-group input, .modal-body form .form-group textarea, .modal-body form .form-group select',
  );
  clearAddTodoForm(ipts);
};

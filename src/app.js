import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as projectView from './views/project';
import * as todoView from './views/todo';
import loadMainContent from './views/index';
import ApplicationController from './controllers/application.controller';

loadMainContent();

const app = new ApplicationController();
const defaultProject = app.allProjects.projects[0];

const mainProjectsDiv = document.getElementById('projects-list');
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
  } else {
    inputProjectName.reportValidity();
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

const dismissForm = document.getElementById('dismiss-changes');
const btnAddTodo = document.getElementById('create-todo-btn');
btnAddTodo.onclick = (event) => {
  const todoForm = document.getElementById('create-todo-form');
  if (todoForm.checkValidity()) {
    const projectId = parseInt(event.currentTarget.parentElement.className, 0);
    const ipts = document.querySelectorAll(
      '.modal-body form .form-group input, .modal-body form .form-group textarea, .modal-body form .form-group select',
    );
    const values = Array.from(ipts).map((x) => x.value);
    const targetTodo = app.todos.addTodo(projectId, ...values);
    todoView.appendTodo(mainTodosDiv, targetTodo);
    dismissForm.click();
    clearAddTodoForm(ipts);
  } else {
    todoForm.reportValidity();
  }
};

dismissForm.onclick = () => {
  const ipts = document.querySelectorAll(
    '.modal-body form .form-group input, .modal-body form .form-group textarea, .modal-body form .form-group select',
  );
  clearAddTodoForm(ipts);
};

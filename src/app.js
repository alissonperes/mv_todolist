import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as projectView from './views/project';
import * as todoView from './views/todo';
import loadMainContent from './views/index';
import ProjectController from './controllers/project.controller';

loadMainContent();

const allProjects = new ProjectController();
allProjects.setStorage();

const defaultProject = allProjects.projects[0];

const mainProjectsDiv = document.getElementById('projects-div');
const mainTodosDiv = document.getElementById('todos-div');

projectView.renderProjects(mainProjectsDiv, allProjects.projects);
todoView.renderTodos(mainTodosDiv, defaultProject.todos);
document.getElementById('create-todo-form').classList = defaultProject.id;

const btnAddProject = document.getElementById('btn-add-project');
const inputProjectName = document.getElementById('new-project-input');
btnAddProject.onclick = () => {
  if (inputProjectName.checkValidity()) {
    const addedProject = allProjects.addProject(inputProjectName.value);
    projectView.appendProject(mainProjectsDiv, addedProject);
  }
  inputProjectName.value = '';
  inputProjectName.focus();
};

const btnAddTodo = document.getElementById('create-todo-btn');
btnAddTodo.onclick = (event) => {
  const projectId = parseInt(event.currentTarget.parentElement.className, 0);
  const ipts = document.querySelectorAll(
    '.modal-body form .form-group input, .modal-body form .form-group textarea, .modal-body form .form-group select',
  );
  const values = Array.from(ipts).map((x) => x.value);
  const targetTodo = allProjects.addTodo(projectId, ...values);
  todoView.appendTodo(mainTodosDiv, targetTodo);
};

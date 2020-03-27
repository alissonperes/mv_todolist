import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import renderProjects from './views/project';
import todoView from './views/todo';
import ProjectModel from './models/project';
import ProjectController from './controllers/project.controller';

const allProjects = new ProjectController();
allProjects.setStorage();

const defaultProject = new ProjectModel('Default Project');

const projects = JSON.parse(localStorage.getItem('projects'));

const app = document.getElementById('app');
const divContainer = document.createElement('div');
divContainer.className = 'container pt-3';
const containerRow = document.createElement('div');
containerRow.className = 'row';
divContainer.appendChild(containerRow);
app.appendChild(divContainer);
containerRow.innerHTML = renderProjects(projects);
containerRow.innerHTML += todoView(defaultProject.todos);

// app.innerHTML += renderTodos(projects);

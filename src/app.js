import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Project from './todos';
import './renderIndex';
import render from './renderProjects';

const get = () => JSON.parse(localStorage.getItem('projects'));
const getProject = (id) => get().filter((x) => x.id === id)[0];
const set = (value) => {
  localStorage.setItem('projects', JSON.stringify(value));
  return get();
};

const allProjects = get() || set([Project('Default')]);

render.renderProjects(allProjects);

const addProject = (name) => {
  const newProject = Project(name);
  allProjects.push(newProject);
  set(allProjects);
  render.renderProjects(allProjects);
};

const addProjectBtn = document.getElementById('btn-add-project');
addProjectBtn.onclick = () => {
  const inputAddPoject = document.getElementById('add-project-btn');
  if (inputAddPoject.value !== '') {
    inputAddPoject.setAttribute('placeholder', 'New project name');
    addProject(inputAddPoject.value);
    inputAddPoject.focus();
    inputAddPoject.value = '';
  } else {
    inputAddPoject.focus();
    inputAddPoject.setAttribute('placeholder', 'Name is required');
  }
};

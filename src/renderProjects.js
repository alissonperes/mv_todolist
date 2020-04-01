import Project from './todos';

const get = () => JSON.parse(localStorage.getItem('projects'));
const getProject = (id) => get().filter((x) => x.id === id)[0];

function renderProjects(projects) {
  const projectsList = document.querySelector('#projects-list ul.list-group');
  projectsList.innerHTML = '';
  projects.forEach((item) => {
    const currentProject = Project(item.name, item.id, item.todos);
    const newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.appendChild(document.createTextNode(item.name));
    newItem.onclick = () => {
      console.log(getProject(currentProject.id));
      // console.log(currentProject);
    };
    projectsList.appendChild(newItem);
  });
}

export default { renderProjects };

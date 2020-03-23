import project from './toDos';

const mainDiv = document.getElementById('container');
const projectCont = document.getElementById('project-cont');
const toDoCont = document.getElementById('toDos-cont');

function StartUp(newProject) {
  console.log(newProject.getNotes());
}

export default StartUp;
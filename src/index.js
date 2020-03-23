import StartUp from './views';
import project from './toDos';

const newProject = project('Todo-list');
newProject.addNote('title', 'description', '01012020', 'urgent');
newProject.addNote('title2', 'description2', '01012020', 'urgent');
newProject.addNote('title3', 'description3', '01012020', 'urgent');
newProject.addNote('title4', 'description4', '01012020', 'urgent');

console.log(newProject.getNotes());

import StartUp from "./views";
import project from "./toDos";

const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const get = key => localStorage.getItem(key);
const remove = key => localStorage.removeItem(key);

const newProject = project("Todo-list");
newProject.addNote("title", "description", "01012020", "urgent");
newProject.addNote("title2", "description2", "01012020", "urgent");
newProject.addNote("title3", "description3", "01012020", "urgent");
newProject.addNote("title4", "description4", "01012020", "urgent");

const newProject2 = project("Another List");
newProject2.addNote("title", "description", "01012020", "urgent");
newProject2.addNote("title2", "description2", "01012020", "urgent");

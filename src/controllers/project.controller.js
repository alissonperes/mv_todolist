import ProjectModel from '../models/project.model';
import TodosModel from '../models/todo.model';

class ProjectController {
  constructor() {
    this.projects = JSON.parse(localStorage.getItem('projects'))
    || ProjectModel('Default');
  }

  setStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  addProject(name) {
    const newProject = ProjectModel(name);
    this.projects.push(newProject);
    this.setStorage();
  }

  addTodo(projectId, name) {
    const todo = TodosModel(name);
    this.projects.find((p) => p.id === projectId).todos.push(todo);
    this.setStorage();
  }

  editTodo(projectId, todoID, name, description, dueDate, priority) {
    const project = this.projects.find((p) => p.id === projectId);
    const todo = project.todos.find((t) => t.id === todoID);
    todo.name = name;
    todo.dueDate = dueDate;
    todo.description = description;
    todo.priority = priority;
    this.setStorage();
  }

  removeTodo(projectId, todoID) {
    const project = this.projects.find((p) => p.id === projectId);
    project.todos = project.todos.filter((t) => t.id !== todoID);
    this.setStorage();
  }
}

export default ProjectController;

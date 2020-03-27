import ProjectModel from '../models/project';
import TodosModel from '../models/todo';
import todoView from '../views/todo';

class ProjectController {
  constructor() {
    this.projects = JSON.parse(localStorage.getItem('projects')) || [
      new ProjectModel('Default'),
    ];
  }

  setStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  addProject(name) {
    const newProject = new ProjectModel(name);

    this.projects.push(newProject);
    this.setStorage();
    return newProject;
  }

  addTodo(projectId, name, description, dueDate, priority) {
    const todo = new TodosModel(name, description, dueDate, priority);
    this.projects.find((p) => p.id == projectId).todos.push(todo);
    this.setStorage();
    todoView(projectId, this.listTodos(projectId));
  }

  editTodo(projectId, todoID, name, description, dueDate, priority) {
    const project = this.projects.find((p) => p.id == projectId);
    const todo = project.todos.find((t) => t.id == todoID);
    todo.name = name;
    todo.dueDate = dueDate;
    todo.description = description;
    todo.priority = priority;
    this.setStorage();
  }

  removeTodo(projectId, todoID) {
    const project = this.projects.find((p) => p.id == projectId);
    project.todos = project.todos.filter((t) => t.id !== todoID);
    this.setStorage();
  }

  listTodos(projectId) {
    const { todos } = this.projects.find((p) => p.id == projectId);
    return todos;
  }

  getProject(projectId) {
    return this.projects.find((p) => p.id == projectId);
  }
}

export default ProjectController;

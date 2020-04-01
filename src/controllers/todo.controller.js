import TodosModel from '../models/todo';

class TodoController {
  constructor() {
    console.log('LS from TDC', localStorage);
    this.projects = JSON.parse(localStorage.getItem('projects'));
    console.log('Projects from TDC', this.projects);
  }

  setStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  addTodo(projectId, name, description, dueDate, priority) {
    const todo = new TodosModel(
      name,
      description,
      dueDate,
      priority,
      projectId,
    );
    // eslint-disable-next-line eqeqeq
    console.log('this.projects before ', this.projects);
    JSON.parse(localStorage.getItem('projects'))
      .find((p) => p.id == projectId)
      .todos.push(todo);
    console.log('this.projects after ', this.projects);
    // save projects to local storage here
    return todo;
  }

  editTodo(projectId, todoID, name, description, dueDate, priority) {
    const project = this.projects.find((p) => p.id === projectId);
    const todo = project.todos.find((t) => t.id === todoID);
    todo.name = name;
    todo.dueDate = dueDate;
    todo.description = description;
    todo.priority = priority;
    this.setStorage();
    return todo;
  }

  removeTodo(projectId, todoID) {
    const project = this.projects.find((p) => p.id === projectId);
    project.todos = project.todos.filter((t) => t.id !== todoID);
    this.setStorage();
  }

  listTodos(projectId) {
    const { todos } = this.projects.find((p) => p.id === projectId);
    return todos;
  }
}

export default TodoController;

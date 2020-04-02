import ProjectController from './project.controller';
import TodoController from './todo.controller';

class ApplicationController {
  constructor() {
    this.allProjects = new ProjectController();
    this.todos = new TodoController();
  }
}

export default ApplicationController;

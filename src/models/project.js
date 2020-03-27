class ProjectModel {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.id = new Date().getTime();
  }

  getTodos() {
    return this.todos;
  }
}

export default ProjectModel;

class ProjectModel {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.id = new Date().getTime();
    return this;
  }

  getTodos() {
    return this.todos;
  }
}

export default ProjectModel;

class ProjectModel {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
    this.id = new Date().getTime();
  }
}

export default ProjectModel;

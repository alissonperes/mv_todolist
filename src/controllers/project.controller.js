import ProjectModel from '../models/project';

class ProjectController {
  constructor() {
    localStorage.setItem(
      'projects',
      JSON.stringify([new ProjectModel('Default')]),
    );
    this.projects = JSON.parse(localStorage.getItem('projects'));
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

  getProject(projectId) {
    return this.projects.find((p) => p.id === projectId);
  }
}

export default ProjectController;

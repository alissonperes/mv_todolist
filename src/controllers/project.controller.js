import ProjectModel from '../models/project';

class ProjectController {
  constructor() {
    if (JSON.parse(localStorage.getItem('projects')) == null) {
      const defProj = new ProjectModel('Default');
      localStorage.setItem('projects', JSON.stringify([defProj]));
      this.projects = JSON.parse(localStorage.getItem('projects'));
    } else {
      this.projects = JSON.parse(localStorage.getItem('projects'));
    }
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

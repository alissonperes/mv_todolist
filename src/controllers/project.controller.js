import ProjectModel from '../models/project.model';

class ProjectController {
  constructor(name, todos = []) {
    this.projects = JSON.parse(localStorage.getItem('projects')) || ProjectModel('Default')

    addProject(name) {
      const newProject = ProjectModel(name);
      this.projects.push(newProject);
    };
  };
};

export default ProjectController;

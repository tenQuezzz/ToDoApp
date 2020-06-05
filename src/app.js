import { Project } from './project'

export class ToDoApp {
  constructor() {
    this._projects = [];
    this._projects.push(new Project('Default project'));
  }

  get projects() {
    return this._projects;
  }

  createNewProject(title, items=[]) {
    let idx = this._projects.findIndex(project => project.title === title);
    if (idx === -1) {
      let newProject = new Project(title, items);
      this._projects.push(newProject);
      return true;
    }
    return false;
  }

  getProjectByTitle(title) {
    return this._projects.find(project => project.title === title);
  }

  deleteProject(title) {
    let idx = this._projects.findIndex(project => project.title === title);
    if (idx != -1) this._projects.splice(idx, 1);
  }

  renameProject(oldTitle, newTitle) {
    let project = this._projects.find(project => project.title === oldTitle);
    if (project) {
      project.title = newTitle;
    }
  }

  printProjects() {
    for (let project of this._projects) {
      project.printProject();
    }
  }
}
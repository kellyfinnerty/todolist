import { createProjectHTML, createTaskHTML } from './displayController.js'
import Project from './project.js'
import storage from './storageManager.js'

export default class BoardCoordinator {

    constructor (){
        this._projects = [];
    }

    getProjects () {
        return this._projects;
    }

    setProjects (projs) {
        this._projects = projs;
    }

    addProject(projTitle){
        // create project add to board
        var proj = new Project(projTitle);
        this._projects.push(proj);
    }

    removeProject(title){
        var index = this._projects.findIndex(project => project.getTitle() === title);
        this._projects.splice(index, 1);
    }

    getProject(title){
        return this._projects.find(project => project.getTitle() === title)
    }

    renameProject(oldTitle, newTitle){
        var proj = this.getProject(oldTitle);
        proj.renameProject(newTitle);
    }

    addTask(projectTitle, task){
        var proj = this.getProject(projectTitle);
        proj.addTask(task);
    }

    removeTask(projectTitle, taskTitle){
        var proj = this.getProject(projectTitle);
        proj.removeTask(taskTitle);
    }

    getTask(projectTitle, taskTitle){
        var proj = this.getProject(projectTitle);
        return proj.getTask(taskTitle);
    }

}


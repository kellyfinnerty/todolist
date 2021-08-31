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

    addProject(project){
        this._projects.push(project);
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


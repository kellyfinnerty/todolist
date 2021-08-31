export default class Project {

    constructor(title){
        this._title = title;
        this._taskList = [];
    }

    getTitle(){
        return this._title;
    }
    renameProject(value){
        this._title = value;
    }

    getTaskList(){
        return this._taskList;
    }
    setTaskList(value){
        this._taskList = value;
    }

    addTask(task){
        this._taskList.push(task);
    }

    getTask(taskTitle){
        return this._taskList.find(task => task.getTitle() === taskTitle)
    }

    removeTask(taskTitle){
        var index = this._taskList.findIndex(task => task.getTitle === taskTitle);
        this._taskList.splice(index, 1);
    }



}


import ToDo from './todo.js'

class Project {

    constructor(title){
        this._title = title;
        this._toDoList = [];
    }

    get title(){
        return this._title;
    }
    set title(value){
        //check length

        this._title = value;
    }

    get toDoList(){
        return this._toDoList;
    }
    set toDoList(value){
        if (typeof value !== 'ToDo'){
            //return error
        }
        this._toDoList.push(value);
    }

}

export default Project
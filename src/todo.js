
class ToDo{

    constructor(title, desc, dueDate, priority, notes){
        this._title = title;
        this._desc = desc;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;

        this._maxTitle = 500;
        this._maxDesc = 1000;
        this._minTitle = 1;
        this._minDesc = 1;
    }

    get title(){
        return this._title
    }
    set title(value){
        if (value.length > this._maxTitle || value.length < this._minTitle){
            throw new Error(`Invalid title length ${value.length}/${this._maxTitle}`)
        }
        this._title = value;
    }

    get description(){
        return this._desc
    }
    set description(value){
        if(value.length > this._maxDesc || value.length < this._minTitle){
            throw new Error(`Invalid description length ${value.length}/${this._maxDesc}`)
        }
        this._desc = value;
    }

    get dueDate(){
        return this._dueDate
    }
    set dueDate(value){
        //check
        this._dueDate = value;
    }

    get priority(){
        return this._priority
    }
    set priority(value){
        //check
        this._priority = value;
    }

    get notes(){
        return this._notes
    }
    set notes(value){
        //check
        this._notes = value;
    }
}

export default ToDo
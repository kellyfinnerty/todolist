/* eslint-disable no-underscore-dangle */

export default class Task {
    constructor(title, desc, dueDate, priority, notes, completed) {
        this._title = title
        this._desc = desc
        this._dueDate = dueDate
        this._priority = priority
        this._notes = notes
        this._completed = completed

        this._maxTitle = 500
        this._maxDesc = 1000
        this._minTitle = 1
        this._minDesc = 1
    }

    updateTask(newTask) {
        this._title = newTask.getTitle()
        this._desc = newTask.getDescription()
        this._dueDate = newTask.getDueDate()
        this._priority = newTask.getPriority()
        this._notes = newTask.getNotes()
        this._completed = newTask.getCompleted()
    }

    getTitle() {
        return this._title
    }

    setTitle(value) {
        if (value.length > this._maxTitle || value.length < this._minTitle) {
            throw new Error(
                `Invalid title length ${value.length}/${this._maxTitle}`
            )
        }
        this._title = value
    }

    getDescription() {
        return this._desc
    }

    setDescription(value) {
        if (value.length > this._maxDesc || value.length < this._minTitle) {
            throw new Error(
                `Invalid description length ${value.length}/${this._maxDesc}`
            )
        }
        this._desc = value
    }

    getDueDate() {
        return this._dueDate
    }

    setDueDate(value) {
        // check
        this._dueDate = value
    }

    getPriority() {
        return this._priority
    }

    setPriority(value) {
        // check
        this._priority = value
    }

    getCompleted() {
        return this._completed
    }

    setCompleted(value) {
        this._completed = value
    }

    getNotes() {
        return this._notes
    }

    setNotes(value) {
        // check
        this._notes = value
    }
}

/* eslint-disable no-underscore-dangle */

export default class Task {
    constructor(title, desc, dueDate, priority, notes) {
        this._title = title
        this._desc = desc
        this._dueDate = dueDate
        this._priority = priority
        this._notes = notes

        this._maxTitle = 500
        this._maxDesc = 1000
        this._minTitle = 1
        this._minDesc = 1
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

    get dueDate() {
        return this._dueDate
    }

    set dueDate(value) {
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

    get notes() {
        return this._notes
    }

    set notes(value) {
        // check
        this._notes = value
    }
}

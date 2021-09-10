// eslint-disable-next-line import/extensions
import Task from '../task.js'
import Storage from '../storageManager.js'
import DisplayTask from './displayTask.js'

export default class TaskForm {
    // eslint-disable-next-line class-methods-use-this
    initNewTaskForm() {
        const openNewProjButton = document.querySelector('#open-task-form')
        const closeModal = document.querySelector('.close')
        const modal = document.querySelector('.modal')
        const addTask = document.getElementById('add-task')

        openNewProjButton.addEventListener('click', TaskForm.openModal)
        closeModal.addEventListener('click', TaskForm.closeModal)
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                TaskForm.closeModal()
            }
        })
        addTask.addEventListener('click', TaskForm.createTask)
    }

    static openModal() {
        document.querySelector('.modal').style.display = 'block'
    }

    static closeModal() {
        document.querySelector('.modal').style.display = 'none'
    }

    static getActiveProjectTitle() {
        return document.querySelector('.active').firstChild.textContent
    }

    static createTask() {
        const taskTitle = document.getElementById('task-title')
        const description = document.getElementById('newTask-description')
        const dueDate = document.getElementById('newTask-dueDate')
        const priority = Array.from(document.getElementsByName('priority'))
        const taskPriority = TaskForm.getPriority(priority)

        const projectTitle = TaskForm.getActiveProjectTitle()

        try {
            TaskForm.checkData()
        } catch {
            return
        }

        const newTask = new Task(
            taskTitle.value,
            description.value,
            dueDate.value,
            taskPriority,
            'notes'
        )

        Storage.storeTask(projectTitle, newTask)
        const taskDisplay = new DisplayTask()
        taskDisplay.displayTask(newTask)
        // taskDisplay.initializeTaskButtons()

        taskTitle.value = ''
        description.value = ''
        const today = new Date()
        dueDate.value = today.getDate()
        TaskForm.clearPriority(priority)

        document.getElementById('title-error').value = ''
    }

    static clearPriority(priorities) {
        for (let i = 0; i < priorities.length; i++) {
            if (priorities[i].checked) {
                priorities[i].checked = false
            }
        }
    }

    static getPriority(priorities) {
        for (let i = 0; i < priorities.length; i++) {
            if (priorities[i].checked) {
                return priorities[i].value
            }
        }

        return 'none'
    }

    static checkData() {
        const projectTitle = TaskForm.getActiveProjectTitle()
        const taskTitle = document.getElementById('task-title')
        const description = document.getElementById('newTask-description')
        const dueDate = document.getElementById('newTask-dueDate')
        const priority = Array.from(document.getElementsByName('priority'))
        const taskPriority = TaskForm.getPriority(priority)

        try {
            TaskForm.checkTaskTitle(projectTitle, taskTitle.value)
        } catch (errorMessage) {
            document.getElementById('title-error').textContent = errorMessage
            throw Error('Failed data check')
        }
    }

    static checkTaskTitle(projectName, title) {
        const maxNameLength = 750

        if (title.length < 1) {
            throw Error('Project title too short')
        } else if (title.length > maxNameLength) {
            throw Error('Task name exceeded 750 characters')
        } else if (typeof Storage.getTask(projectName, title) === 'object') {
            throw Error('Please enter a unique task name')
        }
    }
}

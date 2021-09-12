// eslint-disable-next-line import/extensions
import Task from '../task.js'
import Storage from '../storageManager.js'
import DisplayTask from './displayTask.js'
import '../../css/taskform-style.css'

export default class TaskForm {
    // eslint-disable-next-line class-methods-use-this
    initNewTaskForm() {
        const openNewProjButton = document.querySelector('#open-task-form')
        const closeModal = document.querySelector('.close')
        const modal = document.querySelector('.modal')
        const addTask = document.getElementById('add-task')
        const title = document.getElementById('task-title')

        openNewProjButton.addEventListener('click', TaskForm.openModal)
        closeModal.addEventListener('click', TaskForm.closeModal)
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                TaskForm.closeModal()
                // clear error messages!!
            }
        })

        title.addEventListener('input', () => {
            TaskForm.errorCheck()
        })

        addTask.addEventListener('click', (e) => {
            e.preventDefault()

            try {
                TaskForm.errorCheck()
            } catch {
                return
            }
            TaskForm.submitForm()
        })
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

    static getInputs() {
        const priorityArr = Array.from(document.getElementsByName('priority'))
        return {
            title: document.getElementById('task-title'),
            description: document.getElementById('newTask-description'),
            date: document.getElementById('newTask-dueDate'),
            priority: TaskForm.getPriority(priorityArr),
        }
    }

    static submitForm() {
        const inputs = TaskForm.getInputs()
        const projectTitle = TaskForm.getActiveProjectTitle()

        const newTask = new Task(
            inputs.title.value.trim(),
            inputs.description.value.trim(),
            inputs.date.value.trim(),
            inputs.priority,
            'notes'
        )

        Storage.storeTask(projectTitle, newTask)
        const taskDisplay = new DisplayTask()
        taskDisplay.displayTask(newTask)

        inputs.title.value = ''
        inputs.description.value = ''
        const today = new Date()
        inputs.date.value = today.getDate()
        TaskForm.clearPriority(inputs.priority)
    }

    static clearPriority(priorities) {
        for (let i = 0; i < priorities.length; i += 1) {
            if (priorities[i].checked) {
                // eslint-disable-next-line no-param-reassign
                priorities[i].checked = false
            }
        }
    }

    static getPriority(priorities) {
        for (let i = 0; i < priorities.length; i += 1) {
            if (priorities[i].checked) {
                return priorities[i].value
            }
        }

        return 'none'
    }

    static errorCheck() {
        const projectTitle = TaskForm.getActiveProjectTitle()
        const inputs = TaskForm.getInputs()

        try {
            TaskForm.checkTaskTitle(projectTitle, inputs.title.value)
            document.getElementById('title-error').textContent = ''
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

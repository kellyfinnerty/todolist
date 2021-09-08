import { format, formatDistanceToNow } from 'date-fns'
// eslint-disable-next-line import/extensions
import Task from '../task.js'
import '../../css/style.css'
// eslint-disable-next-line import/extensions
import Storage from '../storageManager.js'

export default class DisplayTask {
    // eslint-disable-next-line class-methods-use-this
    createTaskBoard(project) {
        DisplayTask.clearTaskBoard()

        document.getElementById('welcome').classList.add('hidden')
        document.getElementById('task-area').classList.remove('hidden')

        const projectTitle = project.firstChild.textContent
        document.getElementById(
            'curr-project-title'
        ).textContent = `${projectTitle}`

        Array.from(Storage.getTasks(projectTitle)).forEach((task) =>
            DisplayTask.displayTask(task)
        )

        DisplayTask.initNewTaskForm()
        DisplayTask.initializeTaskButtons()
    }

    static clearTaskBoard() {
        const tasks = Array.from(document.querySelectorAll('.task'))
        tasks.forEach((task) => task.parentNode.removeChild(task))
    }

    static displayTask(task) {
        const area = document.getElementById('task-list')

        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task')

        const taskHeaderDiv = document.createElement('div')
        taskHeaderDiv.classList.add('task-header')

        const taskTitle = document.createElement('h3')
        taskTitle.textContent = task.getTitle()
        taskTitle.classList.add('task-title')

        const dueDate = document.createElement('p')
        let formattedDate = task.getDueDate()
        try {
            formattedDate = `due ${format(
                new Date(task.getDueDate()),
                'MM-dd-yyyy'
            )}`
            formattedDate = `due ${formatDistanceToNow(
                new Date(task.getDueDate()),
                { addSuffix: true }
            )}`
        } catch (error) {
            formattedDate = ''
        }
        dueDate.textContent = formattedDate
        dueDate.classList.add('due-date')

        const edit = document.createElement('button')
        edit.textContent = 'Edit'
        edit.classList.add('edit-task')

        const deleteTask = document.createElement('button')
        deleteTask.textContent = 'x'
        deleteTask.classList.add('delete-task')

        area.appendChild(taskDiv)
        taskDiv.appendChild(taskHeaderDiv)
        taskHeaderDiv.appendChild(taskTitle)
        taskHeaderDiv.appendChild(dueDate)
        taskHeaderDiv.appendChild(edit)
        taskHeaderDiv.appendChild(deleteTask)
    }

    static initializeTaskButtons() {
        Array.from(document.querySelectorAll('.delete-task')).forEach(
            (deleteBtn) =>
                deleteBtn.addEventListener('click', () =>
                    DisplayTask.deleteTask(deleteBtn)
                )
        )
        Array.from(document.querySelectorAll('.task-header')).forEach((task) =>
            task.addEventListener('click', (e) => {
                if (e.target.classList.contains('edit-task')) return
                if (e.target.classList.contains('delete-task')) return
                if (!task.parentNode.classList.contains('task-expanded')) {
                    DisplayTask.openTask(task.parentNode)
                } else {
                    DisplayTask.closeTask(task.parentNode)
                }
            })
        )
    }

    static getActiveProjectTitle() {
        return document.querySelector('.active').firstChild.textContent
    }

    static openTask(task) {
        const projTitle = DisplayTask.getActiveProjectTitle()
        const taskName = task.firstChild.firstChild.textContent
        const storedTask = Storage.getTask(projTitle, taskName)

        task.classList.add('task-expanded')

        const div = document.createElement('div')
        div.classList.add('task-details')

        const desc = document.createElement('p')
        desc.textContent = storedTask.getDescription()

        const priority = document.createElement('p')
        const priorityTxt = storedTask.getPriority()
        priority.textContent = `Priority: ${
            priorityTxt[0].toUpperCase() + priorityTxt.substring(1)
        }`

        task.appendChild(div)
        div.appendChild(desc)
        div.appendChild(priority)
    }

    static closeTask(task) {
        task.removeChild(task.getElementsByClassName('task-details')[0])
        task.classList.toggle('task-expanded')
    }

    static deleteTask(deleteBtn) {
        const projectTitle = DisplayTask.getActiveProjectTitle()
        const taskName = deleteBtn.previousElementSibling.textContent

        Storage.removeTask(projectTitle, taskName)

        // remove HTML
        deleteBtn.parentElement.parentElement.remove()
    }

    static initNewTaskForm() {
        const openNewProjButton = document.querySelector('#open-task-form')
        const closeModal = document.querySelector('.close')
        const modal = document.querySelector('.modal')
        const addTask = document.getElementById('add-task')

        openNewProjButton.addEventListener('click', DisplayTask.openModal)
        closeModal.addEventListener('click', DisplayTask.closeModal)
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                DisplayTask.closeModal()
            }
        })
        addTask.addEventListener('click', DisplayTask.createTask)
    }

    static openModal() {
        document.querySelector('.modal').style.display = 'block'
    }

    static closeModal() {
        document.querySelector('.modal').style.display = 'none'
    }

    static createTask() {
        const taskTitle = document.getElementById('task-title')
        const description = document.getElementById('newTask-description')
        const dueDate = document.getElementById('newTask-dueDate')
        const priority = Array.from(document.getElementsByName('priority'))

        const projectTitle = DisplayTask.getActiveProjectTitle()

        try {
            DisplayTask.checkTaskUserInput(projectTitle, taskTitle)
        } catch (errorMessage) {
            alert(errorMessage)
            return
        }

        const newTask = new Task(
            taskTitle.value,
            description.value,
            dueDate.value,
            DisplayTask.getPriority(priority),
            'notes'
        )

        Storage.storeTask(projectTitle, newTask)
        DisplayTask.displayTask(newTask)

        DisplayTask.initializeTaskButtons()

        taskTitle.value = ''
        description.value = ''
        const today = new Date()
        dueDate.value = today.getDate()
        DisplayTask.clearPriority(priority)
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

    static checkTaskUserInput(projectName, name) {
        const maxNameLength = 750

        if (name.length > maxNameLength) {
            throw Error('Task name exceeded 750 characters')
        } else if (name.length < 1) {
            throw Error('Project title too short')
        } else if (typeof Storage.getTask(projectName, name) === 'object') {
            throw Error('Must be a unique task name')
        }
    }
}

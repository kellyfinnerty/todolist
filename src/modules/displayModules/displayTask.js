// eslint-disable-next-line import/extensions
// import Task from '../task.js'
import TaskForm from './taskForm.js'
import '../../css/task-style.css'
// eslint-disable-next-line import/extensions
import Storage from '../storageManager.js'
import { format, formatDistanceToNow } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

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
            this.displayTask(task)
        )

        const taskForm = new TaskForm()
        taskForm.initNewTaskForm()
    }

    static clearTaskBoard() {
        const tasks = Array.from(document.querySelectorAll('.task'))
        tasks.forEach((task) => task.parentNode.removeChild(task))
    }

    // eslint-disable-next-line class-methods-use-this
    displayTask(task) {
        const area = document.getElementById('task-list')

        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task')

        const taskHeaderDiv = document.createElement('div')
        taskHeaderDiv.classList.add('task-header')

        const checkCircle = document.createElement('i')
        checkCircle.classList.add('far', 'fa-check-circle', 'hidden')

        const openCircle = document.createElement('i')
        openCircle.classList.add('far', 'fa-circle')

        const taskTitle = document.createElement('h3')
        taskTitle.textContent = task.getTitle()
        taskTitle.classList.add('task-title')

        const dueDate = DisplayTask.displayDate(
            task.getCompleted(),
            task.getDueDate()
        )

        const edit = document.createElement('button')
        edit.innerHTML = `<i class="fas fa-edit"></i>`
        edit.classList.add('edit-task')

        const deleteTask = document.createElement('button')
        deleteTask.innerHTML = '&times'
        deleteTask.classList.add('delete-task')

        DisplayTask.addPriorityClass(taskHeaderDiv, task.getPriority())

        area.appendChild(taskDiv)
        taskDiv.appendChild(taskHeaderDiv)
        taskHeaderDiv.appendChild(checkCircle)
        taskHeaderDiv.appendChild(openCircle)
        taskHeaderDiv.appendChild(taskTitle)
        taskHeaderDiv.appendChild(dueDate)
        taskHeaderDiv.appendChild(edit)
        taskHeaderDiv.appendChild(deleteTask)

        DisplayTask.initCheckBox(task.getCompleted(), checkCircle, openCircle)

        // EVENT LISTENERS
        deleteTask.addEventListener('click', () =>
            DisplayTask.deleteTask(deleteTask)
        )
        taskHeaderDiv.addEventListener('click', (e) => {
            this.expandTask(taskHeaderDiv, e.target)
        })

        checkCircle.addEventListener('click', () => {
            DisplayTask.updateCheckBox(false, task, openCircle, checkCircle)
        })

        openCircle.addEventListener('click', () => {
            DisplayTask.updateCheckBox(true, task, openCircle, checkCircle)
        })
    }

    static initCheckBox(completed, check, unchecked) {
        const taskDiv = unchecked.parentElement

        if (completed) {
            check.classList.remove('hidden')
            unchecked.classList.add('hidden')
            taskDiv.querySelector('h3').classList.add('crossed-out')
        } else {
            unchecked.classList.remove('hidden')
            check.classList.add('hidden')
            taskDiv.querySelector('h3').classList.remove('crossed-out')
        }
    }

    static updateCheckBox(checkedBool, task, unchecked, checked) {
        const projTitle = DisplayTask.getActiveProjectTitle()
        task.setCompleted(checkedBool)
        Storage.updateTask(projTitle, task.getTitle(), task)

        this.initCheckBox(task.getCompleted(), checked, unchecked)
    }

    static getTimeZone() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
    }

    static displayDate(completed, dueDate) {
        const dueDatePar = document.createElement('p')

        if (completed) return dueDatePar

        let formattedDate = new Date(dueDate)
        formattedDate.setHours(0, 0, 0, 0)

        try {
            formattedDate = `due ${format(formattedDate, 'MM-dd-yyyy')}`
            formattedDate = `due ${formatDistanceToNow(new Date(dueDate), {
                addSuffix: true,
            })}`
        } catch (error) {
            formattedDate = ''
        }

        dueDatePar.textContent = formattedDate
        dueDatePar.classList.add('due-date')

        if (formattedDate.includes('ago')) {
            dueDatePar.classList.add('overdue')
        }

        return dueDatePar
    }

    // eslint-disable-next-line class-methods-use-this
    initializeTaskButtons() {
        Array.from(document.querySelectorAll('.delete-task')).forEach(
            (deleteBtn) =>
                deleteBtn.addEventListener('click', () =>
                    DisplayTask.deleteTask(deleteBtn)
                )
        )
        Array.from(document.querySelectorAll('.task-header')).forEach((task) =>
            task.addEventListener('click', (e) => {
                this.expandtask(task, e.target)
            })
        )
    }

    // eslint-disable-next-line class-methods-use-this
    expandTask(task, taskHeader) {
        if (taskHeader.classList.contains('edit-task')) return
        if (taskHeader.classList.contains('delete-task')) return
        if (taskHeader.classList.contains('far')) return
        if (!task.parentNode.classList.contains('task-expanded')) {
            DisplayTask.openTask(task.parentNode)
        } else {
            DisplayTask.closeTask(task.parentNode)
        }
    }

    static getActiveProjectTitle() {
        return document.querySelector('.active').firstChild.textContent
    }

    static openTask(task) {
        const projTitle = DisplayTask.getActiveProjectTitle()
        const taskName = task.querySelector('h3').textContent
        const storedTask = Storage.getTask(projTitle, taskName)

        task.classList.add('task-expanded')

        const div = document.createElement('div')
        div.classList.add('task-details')

        const desc = document.createElement('p')
        desc.classList.add('task-description')
        desc.textContent = storedTask.getDescription()

        const priority = document.createElement('p')
        priority.classList.add('task-priority')
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
        const taskHeader = deleteBtn.parentElement
        const taskName = taskHeader.querySelector('h3').textContent

        Storage.removeTask(projectTitle, taskName)

        // remove HTML
        deleteBtn.parentElement.parentElement.remove()
    }

    static addPriorityClass(taskHTML, priority) {
        if (priority !== 'none') {
            taskHTML.classList.add(priority)
        }
    }
}

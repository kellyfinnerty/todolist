// eslint-disable-next-line import/extensions
import Project from './project.js'
// eslint-disable-next-line import/extensions
import Storage from './storageManager.js'
import '../css/style.css'
// eslint-disable-next-line import/extensions
import DisplayTask from './displayModules/displayTask.js'

export default class UI {
    // eslint-disable-next-line class-methods-use-this
    loadHomePage() {
        UI.loadProjects()
    }

    static loadProjects() {
        this.displayAllProjects()
        this.initProjectButtons()
        this.initNewProjectButtons()
    }

    static displayAllProjects() {
        Storage.getAllStoredProjects().forEach((project) => {
            this.displayProject(project)
        })
    }

    static displayProject(project) {
        const projTitle = project.getTitle()

        const projDiv = document.createElement('div')
        projDiv.id = projTitle
        projDiv.classList.add('project')
        document.querySelector('#project-list').appendChild(projDiv)

        const titleHTML = document.createElement('h3')
        titleHTML.classList.add('project-title')
        titleHTML.textContent = projTitle

        projDiv.appendChild(titleHTML)

        const deleteHTML = document.createElement('button')
        deleteHTML.classList.add('delete-project')
        deleteHTML.textContent = 'x'
        deleteHTML.addEventListener('click', (event) => {
            this.deleteProject(event)
        })
        projDiv.appendChild(deleteHTML)
    }

    static initNewProjectButtons() {
        const openNewProjButton = document.querySelector('#open-project-form')
        const cancelNewProjectButton = document.querySelector(
            '#cancel-add-project'
        )
        const addNewProjectButton = document.querySelector('#add-project')

        openNewProjButton.addEventListener('click', this.toggleProjectForm)
        cancelNewProjectButton.addEventListener('click', this.toggleProjectForm)
        addNewProjectButton.addEventListener('click', () => {
            UI.createProject()
        })
    }

    static toggleProjectForm() {
        document.querySelector('#open-project-form').classList.toggle('hidden')
        document.querySelector('#project-form').classList.toggle('hidden')
    }

    static initProjectButtons() {
        const projects = Array.from(document.querySelectorAll('.project'))

        projects.forEach((project) =>
            project.addEventListener('click', (event) => {
                UI.selectProject(event, project)
            })
        )
    }

    static deleteProject(event) {
        const projectDiv = event.target.parentElement
        const title = event.target.previousElementSibling.textContent

        if (projectDiv.classList.contains('active')) {
            this.clearTaskBoard()
        } // delete the tasks

        projectDiv.remove() // remove project Div

        // remove from storage
        Storage.removeStoredProject(title)

        // display next project
    }

    static selectProject(event, project) {
        // check if project has been deleted
        if (
            typeof Storage.getStoredProject(project.firstChild.textContent) !==
            'object'
        )
            return

        const projects = Array.from(document.querySelectorAll('.project'))

        projects.forEach((proj) => proj.classList.remove('active'))
        project.classList.add('active')

        const taskMaster = new DisplayTask()
        taskMaster.createTaskBoard(project)
    }

    static checkProjectUserInput(title) {
        const maxTitleLength = 500

        if (title.length > maxTitleLength) {
            throw Error('Project title exceeded 500 characters')
        } else if (title.length < 1) {
            throw Error('Project title too short')
        } else if (typeof Storage.getStoredProject(title) === 'object') {
            // check if unique title
            throw Error('Must be unique project title')
        }
    }

    // event listener method
    static createProject() {
        const title = document.querySelector('#project-title').value

        // do nothing if title is empty string
        if (title < 1) return

        try {
            this.checkProjectUserInput(title)
        } catch (errorMessage) {
            alert(errorMessage)
            return
        }

        const proj = new Project(title)
        Storage.storeProject(proj)
        this.displayProject(proj)

        document.querySelector('#project-title').value = ''

        this.initProjectButtons()
    }
}

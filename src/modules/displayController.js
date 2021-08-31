import Task from './task.js'
import Project from './project.js'
import Storage from './storageManager.js'
import '../css/style.css';

export default class UserInterface {

    #MAX_TITLE_LENGTH = 500;

    loadHomePage(){
        this.#initializeProjects();
    }

    #initializeProjects(){
        this.#addProjectCreationEventListener();
        this.#displayAllProjects();
    }


    #addProjectCreationEventListener(){
        document.querySelector("#open-project-form")
                    .addEventListener("click", this.#toggleProjectForm);
        document.querySelector("#cancel-add-project")
                    .addEventListener("click", this.#toggleProjectForm);
        document.querySelector("#add-project")
                    .addEventListener("click", () => { this.#createProject() } )
    }

    #toggleProjectForm(){
        document.querySelector("#open-project-form").classList.toggle("hidden");
        document.querySelector("#project-form").classList.toggle("hidden");
    }



    #displayAllProjects(){
        var projects = Storage.getAllStoredProjects();
        projects.forEach((project) => { this.#displayProject(project) });
    }

    #deleteProject(event){
        var title = event.target.id.substr(7);

        //remove HTML
        document.querySelector(`#${title}`).remove();
        //remove from storage
        Storage.removeStoredProject(title);
    }

    #displayProject(project){
        var projTitle = project.getTitle();

        var projDiv = document.createElement("div");
        projDiv.id = projTitle;
        projDiv.classList.add("project");

        projDiv.innerHTML = `
            <h3 id="${projTitle}-header" class="proj-title">${projTitle}</h3>
            <button id="delete-${projTitle}" class="delete">x</button>
        `;

        document.querySelector("#project-list").appendChild(projDiv);

        var deleteButton = document.querySelector(`#delete-${projTitle}`);
        deleteButton.addEventListener("click", (event) => { this.#deleteProject(event) });
    }

    checkProjectUserInput(title){
        if (title.length > this.#MAX_TITLE_LENGTH){
            throw Error ("Project title exceeded 500 characters");
        } else if (title.length < 1) {
            throw Error ("Project title too short");
        } else {
            // check if unique title
            if (typeof Storage.getStoredProject(title) === "object"){
                throw Error ("Must be unique project title")
            }
        }
    }

    // event listener method
    #createProject(){
        var title = document.querySelector("#project-title").value;
        
        // do nothing if title is empty string
        if (title < 1) return

        try { this.checkProjectUserInput(title); } 
        catch (errorMessage) {
            alert(errorMessage);
            return
        }

        var proj = new Project(title);
        Storage.storeProject(proj);
        this.#displayProject(proj);

        document.querySelector("#project-title").value = "";

    }

}

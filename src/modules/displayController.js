import Task from './task.js'
import Project from './project.js'
import Storage from './storageManager.js'
import '../css/style.css';

export default class UI {

    loadHomePage(){
        UI.loadProjects();
    }

    static loadProjects(){
        this.displayAllProjects();
        this.initProjectButtons();
        this.initNewProjectButtons();
    }

    static initNewProjectButtons(){
        var openNewProjButton = document.querySelector("#open-project-form");
        var cancelNewProjectButton = document.querySelector("#cancel-add-project");  
        var addNewProjectButton = document.querySelector("#add-project");
                    

        openNewProjButton.addEventListener("click", this.toggleProjectForm);
        cancelNewProjectButton.addEventListener("click", this.toggleProjectForm);
        addNewProjectButton.addEventListener("click", () => { UI.createProject() } );
    }

    static toggleProjectForm(){
        document.querySelector("#open-project-form").classList.toggle("hidden");
        document.querySelector("#project-form").classList.toggle("hidden");
    }



    static displayAllProjects(){
        Storage.getAllStoredProjects()
            .forEach((project) => { 
                this.displayProject(project);
            });
    }

    static deleteProject(event){
        var projectDiv = event.target.parentElement;
        var title = event.target.previousElementSibling.textContent;

        if (projectDiv.classList.contains("active")) {  }//delete the tasks 
        
        projectDiv.remove();    //remove project Div

        //remove from storage
        Storage.removeStoredProject(title);
    }

    static displayProject(project){
        var projTitle = project.getTitle();

        var projDiv = document.createElement("div");
        projDiv.id = projTitle;
        projDiv.classList.add("project");
        document.querySelector("#project-list").appendChild(projDiv);

        var titleHTML = document.createElement("h3");
        titleHTML.classList.add("project-title");
        titleHTML.textContent = projTitle;
        
        projDiv.appendChild(titleHTML);

        var deleteHTML = document.createElement("button");
        deleteHTML.classList.add("delete-project");
        deleteHTML.textContent = "x";
        deleteHTML.addEventListener("click", (event) => { this.deleteProject(event) });
        projDiv.appendChild(deleteHTML);
    }

    static initProjectButtons(){
        var projects = Array.from(document.querySelectorAll(".project-title"));
        var deleteProjects = Array.from(document.querySelectorAll(".delete-project"));

        projects.forEach(project => UI.projectSelector);

        //titleHTML.addEventListener("click", (event) => { this.projectSelector(event) });
        
    }

    static projectSelector(event){
        var title = event.target.textContent;
        //update task title
        document.querySelector("#curr-project-title").textContent = title + " Tasks";
    }

    static checkProjectUserInput(title){
        var maxTitleLength = 500;

        if (title.length > maxTitleLength){
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
    static createProject(){
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
        this.displayProject(proj);

        document.querySelector("#project-title").value = "";
    }



}

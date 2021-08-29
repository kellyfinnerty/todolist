import Task from './task.js'
import Project from './project.js'
import BoardCoordinator from './boardCoordinator.js'

export default class Storage {
    constructor (){
        localStorage.setItem(new BoardCoordinator()); // create and store empty board
        this.boardName = "board";
    }

    #getBoard(){
        var board = JSON.parse(localStorage.getItem(this.boardName));
        board = Object.assign(new BoardCoordinator(), board);

        return board
    }

    #storeBoard(board){
        localStorage.setItem(this.boardName, JSON.stringify(board));
    }

    storeProject(project){
        var board = getBoard();
        board.addProject(project);
        storeBoard(board);
    }

    getStoredProject(projectTitle){
        //converts generic object to a Project object again
        var board = getBoard();
        return this.getBoard().getProject(projectTitle);
    }
}







function test(){
    var testProj = new Project("Kelly's Birthday");

    var testProj_serialized = JSON.stringify(testProj);
    
    localStorage.setItem(testProj.title, testProj_serialized);
    
    var testProj_deserialized = JSON.parse(localStorage.getItem(testProj.title));
}
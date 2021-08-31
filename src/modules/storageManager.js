import Task from './task.js'
import Project from './project.js'
import Board from './boardCoordinator.js'

var storage = (function () {

    // create and store empty board
    var _boardName = "board";
    

    function _getBoard(){
        if(localStorage.getItem(_boardName) === null){
            localStorage.setItem(_boardName, JSON.stringify(new Board())); 
        }

        var board = Object.assign(
            new Board(),
            JSON.parse(localStorage.getItem(_boardName))
        );

        board.setProjects(
            board.getProjects()
                 .map(project => Object.assign(new Project(), project))
        );

        //board.setProjects([]);
        var b = board.getProjects();

        board.getProjects().forEach(project => {
            project.setTaskList(
                project.getTaskList().map(task => Object.assign(new Task(), task))
            );
        });

        return board
    }

    function _storeBoard(board){
        localStorage.setItem(_boardName, JSON.stringify(board));
    }

    function getAllStoredProjects(){
        return _getBoard().getProjects();
    }

    function storeProject(project){
        var board = _getBoard();
        board.addProject(project);
        _storeBoard(board);
    }

    function getStoredProject(projectTitle){
        return _getBoard().getProject(projectTitle)
    }

    function removeStoredProject(projectTitle){
        var board = _getBoard();
        board.removeProject(projectTitle);
        _storeBoard(board);
    }

    function renameStoredProject(oldProjectTitle, newProjectTitle){
        var board = _getBoard();
        board.renameProject(oldProjectTitle, newProjectTitle);
        _storeBoard(board);
    }

    function storeTask(projectName, task){
        var board = _getBoard();
        board.addTask(projectName, task);
        _storeBoard(board);
    }

    function removeTask(projectName, taskName){
        var board = _getBoard();
        board.removeTask(projectName, taskName);
        _storeBoard(board);
    }

    function getTask(projectName, taskName){
        return _getBoard().getTask(projectName, taskName);
    }

    return { 
        storeProject, 
        getStoredProject, 
        removeStoredProject, 
        renameStoredProject, 
        storeTask,
        removeTask,
        getTask,
        getAllStoredProjects
    }
})();


export default storage;



    /*function _getBoard(){
        var board = Object.assign(
                            new BoardCoordinator, 
                            JSON.parse(localStorage.getItem(_boardName)));

        board.projects = board.project.map(proj => {
            proj = Object.assign(new Project, JSON.stringify(proj));
            proj.taskList = proj.taskList.map(task => {
                Object.assign(new Task, JSON.stringify(task));
            });
            return proj
        });

        return board
    }

    function _storeBoard(board){
        var boardJSON = board.projects.map(proj => {
            proj.taskList = proj.taskList.map(task => JSON.stringify(task));
            return JSON.stringify(proj)
        })
        boardJSON = JSON.stringify(boardJSON);
        localStorage.setItem(_boardName, boardJSON);
    }*/
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/boardCoordinator.js":
/*!*********************************!*\
  !*** ./src/boardCoordinator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoardCoordinator)
/* harmony export */ });
/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ "./src/displayController.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageManager.js */ "./src/storageManager.js");




class BoardCoordinator {

    constructor (){
        this._projects = [];
    }

    getProjects () {
        return this._projects;
    }

    setProjects (projs) {
        this._projects = projs;
    }

    addProject(projTitle){
        // create project add to board
        var proj = new _project_js__WEBPACK_IMPORTED_MODULE_1__.default(projTitle);
        this._projects.push(proj);
    }

    removeProject(title){
        var index = this._projects.findIndex(project => project.getTitle() === title);
        this._projects.splice(index, 1);
    }

    getProject(title){
        return this._projects.find(project => project.getTitle() === title)
    }

    renameProject(oldTitle, newTitle){
        var proj = this.getProject(oldTitle);
        proj.renameProject(newTitle);
    }

    addTask(projectTitle, task){
        var proj = this.getProject(projectTitle);
        proj.addTask(task);
    }

    removeTask(projectTitle, taskTitle){
        var proj = this.getProject(projectTitle);
        proj.removeTask(taskTitle);
    }

    getTask(projectTitle, taskTitle){
        var proj = this.getProject(projectTitle);
        return proj.getTask(taskTitle);
    }

}



/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInterface),
/* harmony export */   "createProjectHTML": () => (/* binding */ createProjectHTML),
/* harmony export */   "createTaskHTML": () => (/* binding */ createTaskHTML)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageManager.js */ "./src/storageManager.js");




class UserInterface {

    loadHomePage(){
        
    }

}

//USE FUNCTIONS FROM CONTROLLER
function createProjectHTML(project){

}

function createTaskHTML(project, task){

}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {

    constructor(title){
        this._title = title;
        this._taskList = [];
    }

    getTitle(){
        return this._title;
    }
    renameProject(value){
        this._title = value;
    }

    getTaskList(){
        return this._taskList;
    }
    setTaskList(value){
        this._taskList = value;
    }

    addTask(task){
        this._taskList.push(task);
    }

    getTask(taskTitle){
        return this._taskList.find(task => task.getTitle() === taskTitle)
    }

    removeTask(taskTitle){
        var index = this._taskList.findIndex(task => task.getTitle === taskTitle);
        this._taskList.splice(index, 1);
    }



}


/***/ }),

/***/ "./src/storageManager.js":
/*!*******************************!*\
  !*** ./src/storageManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _boardCoordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardCoordinator.js */ "./src/boardCoordinator.js");




var storage = (function () {

    // create and store empty board
    var _boardName = "board";
    localStorage.setItem(_boardName, JSON.stringify(new _boardCoordinator_js__WEBPACK_IMPORTED_MODULE_2__.default())); 

    function _getBoard(){
        var board = Object.assign(
            new _boardCoordinator_js__WEBPACK_IMPORTED_MODULE_2__.default(),
            JSON.parse(localStorage.getItem(_boardName))
        );

        board.setProjects(
            board.getProjects()
                 .map(project => Object.assign(new _project_js__WEBPACK_IMPORTED_MODULE_1__.default(), project))
        );

        //board.setProjects([]);
        var b = board.getProjects();

        board.getProjects().forEach(project => {
            project.setTaskList(
                project.getTaskList().map(task => Object.assign(new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(), task))
            );
        });

        return board
    }

    function _storeBoard(board){
        localStorage.setItem(_boardName, JSON.stringify(board));
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
        getTask
    }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);



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

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });

class Task{

    constructor(title, desc, dueDate, priority, notes){
        this._title = title;
        this._desc = desc;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;

        this._maxTitle = 500;
        this._maxDesc = 1000;
        this._minTitle = 1;
        this._minDesc = 1;
    }

    getTitle(){
        return this._title
    }
    setTitle(value){
        if (value.length > this._maxTitle || value.length < this._minTitle){
            throw new Error(`Invalid title length ${value.length}/${this._maxTitle}`)
        }
        this._title = value;
    }

    get description(){
        return this._desc
    }
    set description(value){
        if(value.length > this._maxDesc || value.length < this._minTitle){
            throw new Error(`Invalid description length ${value.length}/${this._maxDesc}`)
        }
        this._desc = value;
    }

    get dueDate(){
        return this._dueDate
    }
    set dueDate(value){
        //check
        this._dueDate = value;
    }

    get priority(){
        return this._priority
    }
    set priority(value){
        //check
        this._priority = value;
    }

    get notes(){
        return this._notes
    }
    set notes(value){
        //check
        this._notes = value;
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController.js */ "./src/displayController.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageManager.js */ "./src/storageManager.js");
/* harmony import */ var _boardCoordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boardCoordinator.js */ "./src/boardCoordinator.js");







/*MyStorage.storeProject("Kelly's Pickles");
console.log(MyStorage.getStoredProject("Kelly's Pickles"));
MyStorage.removeStoredProject("Kelly's Pickles");
MyStorage.storeProject("Friday's Project");
MyStorage.storeProject("Lilly's Project");
MyStorage.renameStoredProject("Lilly's Project", "Millie's Project");

var myTask = new Task("My title", "my description", "due date", "high", "these are my notes");
MyStorage.storeTask("Millie's Project", myTask);

console.log(MyStorage.getTask("Millie's Project", myTask.getTitle()));
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYm9hcmRDb29yZGluYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0b3JhZ2VNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJvamVjdEhUTUwsIGNyZWF0ZVRhc2tIVE1MIH0gZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlci5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZU1hbmFnZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkQ29vcmRpbmF0b3Ige1xuXG4gICAgY29uc3RydWN0b3IgKCl7XG4gICAgICAgIHRoaXMuX3Byb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdHM7XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdHMgKHByb2pzKSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3RzID0gcHJvanM7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChwcm9qVGl0bGUpe1xuICAgICAgICAvLyBjcmVhdGUgcHJvamVjdCBhZGQgdG8gYm9hcmRcbiAgICAgICAgdmFyIHByb2ogPSBuZXcgUHJvamVjdChwcm9qVGl0bGUpO1xuICAgICAgICB0aGlzLl9wcm9qZWN0cy5wdXNoKHByb2opO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QodGl0bGUpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9wcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHRpdGxlKTtcbiAgICAgICAgdGhpcy5fcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KHRpdGxlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHRpdGxlKVxuICAgIH1cblxuICAgIHJlbmFtZVByb2plY3Qob2xkVGl0bGUsIG5ld1RpdGxlKXtcbiAgICAgICAgdmFyIHByb2ogPSB0aGlzLmdldFByb2plY3Qob2xkVGl0bGUpO1xuICAgICAgICBwcm9qLnJlbmFtZVByb2plY3QobmV3VGl0bGUpO1xuICAgIH1cblxuICAgIGFkZFRhc2socHJvamVjdFRpdGxlLCB0YXNrKXtcbiAgICAgICAgdmFyIHByb2ogPSB0aGlzLmdldFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgcHJvai5hZGRUYXNrKHRhc2spO1xuICAgIH1cblxuICAgIHJlbW92ZVRhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUpe1xuICAgICAgICB2YXIgcHJvaiA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qLnJlbW92ZVRhc2sodGFza1RpdGxlKTtcbiAgICB9XG5cbiAgICBnZXRUYXNrKHByb2plY3RUaXRsZSwgdGFza1RpdGxlKXtcbiAgICAgICAgdmFyIHByb2ogPSB0aGlzLmdldFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgcmV0dXJuIHByb2ouZ2V0VGFzayh0YXNrVGl0bGUpO1xuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2VNYW5hZ2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW50ZXJmYWNlIHtcblxuICAgIGxvYWRIb21lUGFnZSgpe1xuICAgICAgICBcbiAgICB9XG5cbn1cblxuLy9VU0UgRlVOQ1RJT05TIEZST00gQ09OVFJPTExFUlxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEhUTUwocHJvamVjdCl7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0hUTUwocHJvamVjdCwgdGFzayl7XG5cbn1cblxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0SFRNTCwgY3JlYXRlVGFza0hUTUwgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUpe1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl90YXNrTGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGdldFRpdGxlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG4gICAgcmVuYW1lUHJvamVjdCh2YWx1ZSl7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0VGFza0xpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tMaXN0O1xuICAgIH1cbiAgICBzZXRUYXNrTGlzdCh2YWx1ZSl7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy5fdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBnZXRUYXNrKHRhc2tUaXRsZSl7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrTGlzdC5maW5kKHRhc2sgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrVGl0bGUpXG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayh0YXNrVGl0bGUpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl90YXNrTGlzdC5maW5kSW5kZXgodGFzayA9PiB0YXNrLmdldFRpdGxlID09PSB0YXNrVGl0bGUpO1xuICAgICAgICB0aGlzLl90YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuXG5cbn1cbiIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkQ29vcmRpbmF0b3IuanMnXG5cbnZhciBzdG9yYWdlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGNyZWF0ZSBhbmQgc3RvcmUgZW1wdHkgYm9hcmRcbiAgICB2YXIgX2JvYXJkTmFtZSA9IFwiYm9hcmRcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShfYm9hcmROYW1lLCBKU09OLnN0cmluZ2lmeShuZXcgQm9hcmQoKSkpOyBcblxuICAgIGZ1bmN0aW9uIF9nZXRCb2FyZCgpe1xuICAgICAgICB2YXIgYm9hcmQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IEJvYXJkKCksXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKF9ib2FyZE5hbWUpKVxuICAgICAgICApO1xuXG4gICAgICAgIGJvYXJkLnNldFByb2plY3RzKFxuICAgICAgICAgICAgYm9hcmQuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgICAgICAgICAubWFwKHByb2plY3QgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSlcbiAgICAgICAgKTtcblxuICAgICAgICAvL2JvYXJkLnNldFByb2plY3RzKFtdKTtcbiAgICAgICAgdmFyIGIgPSBib2FyZC5nZXRQcm9qZWN0cygpO1xuXG4gICAgICAgIGJvYXJkLmdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2V0VGFza0xpc3QoXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrTGlzdCgpLm1hcCh0YXNrID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYm9hcmRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc3RvcmVCb2FyZChib2FyZCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKF9ib2FyZE5hbWUsIEpTT04uc3RyaW5naWZ5KGJvYXJkKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcmVQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICB2YXIgYm9hcmQgPSBfZ2V0Qm9hcmQoKTtcbiAgICAgICAgYm9hcmQuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgX3N0b3JlQm9hcmQoYm9hcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFN0b3JlZFByb2plY3QocHJvamVjdFRpdGxlKXtcbiAgICAgICAgcmV0dXJuIF9nZXRCb2FyZCgpLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JlZFByb2plY3QocHJvamVjdFRpdGxlKXtcbiAgICAgICAgdmFyIGJvYXJkID0gX2dldEJvYXJkKCk7XG4gICAgICAgIGJvYXJkLnJlbW92ZVByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgX3N0b3JlQm9hcmQoYm9hcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmFtZVN0b3JlZFByb2plY3Qob2xkUHJvamVjdFRpdGxlLCBuZXdQcm9qZWN0VGl0bGUpe1xuICAgICAgICB2YXIgYm9hcmQgPSBfZ2V0Qm9hcmQoKTtcbiAgICAgICAgYm9hcmQucmVuYW1lUHJvamVjdChvbGRQcm9qZWN0VGl0bGUsIG5ld1Byb2plY3RUaXRsZSk7XG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9yZVRhc2socHJvamVjdE5hbWUsIHRhc2spe1xuICAgICAgICB2YXIgYm9hcmQgPSBfZ2V0Qm9hcmQoKTtcbiAgICAgICAgYm9hcmQuYWRkVGFzayhwcm9qZWN0TmFtZSwgdGFzayk7XG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSl7XG4gICAgICAgIHZhciBib2FyZCA9IF9nZXRCb2FyZCgpO1xuICAgICAgICBib2FyZC5yZW1vdmVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSl7XG4gICAgICAgIHJldHVybiBfZ2V0Qm9hcmQoKS5nZXRUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHN0b3JlUHJvamVjdCwgXG4gICAgICAgIGdldFN0b3JlZFByb2plY3QsIFxuICAgICAgICByZW1vdmVTdG9yZWRQcm9qZWN0LCBcbiAgICAgICAgcmVuYW1lU3RvcmVkUHJvamVjdCwgXG4gICAgICAgIHN0b3JlVGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICAgICAgZ2V0VGFza1xuICAgIH1cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTtcblxuXG5cbiAgICAvKmZ1bmN0aW9uIF9nZXRCb2FyZCgpe1xuICAgICAgICB2YXIgYm9hcmQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCb2FyZENvb3JkaW5hdG9yLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKF9ib2FyZE5hbWUpKSk7XG5cbiAgICAgICAgYm9hcmQucHJvamVjdHMgPSBib2FyZC5wcm9qZWN0Lm1hcChwcm9qID0+IHtcbiAgICAgICAgICAgIHByb2ogPSBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShwcm9qKSk7XG4gICAgICAgICAgICBwcm9qLnRhc2tMaXN0ID0gcHJvai50YXNrTGlzdC5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXcgVGFzaywgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvalxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYm9hcmRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc3RvcmVCb2FyZChib2FyZCl7XG4gICAgICAgIHZhciBib2FyZEpTT04gPSBib2FyZC5wcm9qZWN0cy5tYXAocHJvaiA9PiB7XG4gICAgICAgICAgICBwcm9qLnRhc2tMaXN0ID0gcHJvai50YXNrTGlzdC5tYXAodGFzayA9PiBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocHJvailcbiAgICAgICAgfSlcbiAgICAgICAgYm9hcmRKU09OID0gSlNPTi5zdHJpbmdpZnkoYm9hcmRKU09OKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oX2JvYXJkTmFtZSwgYm9hcmRKU09OKTtcbiAgICB9Ki8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKXtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLl9ub3RlcyA9IG5vdGVzO1xuXG4gICAgICAgIHRoaXMuX21heFRpdGxlID0gNTAwO1xuICAgICAgICB0aGlzLl9tYXhEZXNjID0gMTAwMDtcbiAgICAgICAgdGhpcy5fbWluVGl0bGUgPSAxO1xuICAgICAgICB0aGlzLl9taW5EZXNjID0gMTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGVcbiAgICB9XG4gICAgc2V0VGl0bGUodmFsdWUpe1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gdGhpcy5fbWF4VGl0bGUgfHwgdmFsdWUubGVuZ3RoIDwgdGhpcy5fbWluVGl0bGUpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHRpdGxlIGxlbmd0aCAke3ZhbHVlLmxlbmd0aH0vJHt0aGlzLl9tYXhUaXRsZX1gKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjXG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSl7XG4gICAgICAgIGlmKHZhbHVlLmxlbmd0aCA+IHRoaXMuX21heERlc2MgfHwgdmFsdWUubGVuZ3RoIDwgdGhpcy5fbWluVGl0bGUpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRlc2NyaXB0aW9uIGxlbmd0aCAke3ZhbHVlLmxlbmd0aH0vJHt0aGlzLl9tYXhEZXNjfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGVzYyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlXG4gICAgfVxuICAgIHNldCBkdWVEYXRlKHZhbHVlKXtcbiAgICAgICAgLy9jaGVja1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eVxuICAgIH1cbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpe1xuICAgICAgICAvL2NoZWNrXG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG5vdGVzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub3Rlc1xuICAgIH1cbiAgICBzZXQgbm90ZXModmFsdWUpe1xuICAgICAgICAvL2NoZWNrXG4gICAgICAgIHRoaXMuX25vdGVzID0gdmFsdWU7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0ICBVc2VySW50ZXJmYWNlIGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXIuanMnXG5pbXBvcnQgTXlTdG9yYWdlIGZyb20gJy4vc3RvcmFnZU1hbmFnZXIuanMnXG5pbXBvcnQgQm9hcmRDb29yZGluYXRvciBmcm9tICcuL2JvYXJkQ29vcmRpbmF0b3IuanMnXG5cblxuLypNeVN0b3JhZ2Uuc3RvcmVQcm9qZWN0KFwiS2VsbHkncyBQaWNrbGVzXCIpO1xuY29uc29sZS5sb2coTXlTdG9yYWdlLmdldFN0b3JlZFByb2plY3QoXCJLZWxseSdzIFBpY2tsZXNcIikpO1xuTXlTdG9yYWdlLnJlbW92ZVN0b3JlZFByb2plY3QoXCJLZWxseSdzIFBpY2tsZXNcIik7XG5NeVN0b3JhZ2Uuc3RvcmVQcm9qZWN0KFwiRnJpZGF5J3MgUHJvamVjdFwiKTtcbk15U3RvcmFnZS5zdG9yZVByb2plY3QoXCJMaWxseSdzIFByb2plY3RcIik7XG5NeVN0b3JhZ2UucmVuYW1lU3RvcmVkUHJvamVjdChcIkxpbGx5J3MgUHJvamVjdFwiLCBcIk1pbGxpZSdzIFByb2plY3RcIik7XG5cbnZhciBteVRhc2sgPSBuZXcgVGFzayhcIk15IHRpdGxlXCIsIFwibXkgZGVzY3JpcHRpb25cIiwgXCJkdWUgZGF0ZVwiLCBcImhpZ2hcIiwgXCJ0aGVzZSBhcmUgbXkgbm90ZXNcIik7XG5NeVN0b3JhZ2Uuc3RvcmVUYXNrKFwiTWlsbGllJ3MgUHJvamVjdFwiLCBteVRhc2spO1xuXG5jb25zb2xlLmxvZyhNeVN0b3JhZ2UuZ2V0VGFzayhcIk1pbGxpZSdzIFByb2plY3RcIiwgbXlUYXNrLmdldFRpdGxlKCkpKTtcbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
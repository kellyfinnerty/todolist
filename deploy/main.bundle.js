/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n}\n\n.class-container{\n    display: grid;\n    grid-template-rows: repeat(3, auto);\n\n}\n\n.display-container{\n    display: grid;\n    grid-template-columns: auto auto;\n}\n\n.add{\n    background-color: bisque;\n    border: none;\n}\n\n.add:hover{\n    background-color: black;\n    color: white;\n}\n\n.hidden{\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mCAAmC;;AAEvC;;AAEA;IACI,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["body{\n    margin: 0;\n}\n\n.class-container{\n    display: grid;\n    grid-template-rows: repeat(3, auto);\n\n}\n\n.display-container{\n    display: grid;\n    grid-template-columns: auto auto;\n}\n\n.add{\n    background-color: bisque;\n    border: none;\n}\n\n.add:hover{\n    background-color: black;\n    color: white;\n}\n\n.hidden{\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/boardCoordinator.js":
/*!*****************************************!*\
  !*** ./src/modules/boardCoordinator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoardCoordinator)
/* harmony export */ });
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

    addProject(project){
        this._projects.push(project);
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

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInterface)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageManager.js */ "./src/modules/storageManager.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");





class UserInterface {

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
        var projects = _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.getAllStoredProjects();
        projects.forEach((project) => { this.#displayProject(project) });
    }

    #deleteProject(event){
        var title = event.target.id.substr(7);

        //remove HTML
        document.querySelector(`#${title}`).remove();
        //remove from storage
        _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.removeStoredProject(title);
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
            if (typeof _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.getStoredProject(title) === "object"){
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

        var proj = new _project_js__WEBPACK_IMPORTED_MODULE_1__.default(title);
        _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.storeProject(proj);
        this.#displayProject(proj);

        document.querySelector("#project-title").value = "";

    }

}


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
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

/***/ "./src/modules/storageManager.js":
/*!***************************************!*\
  !*** ./src/modules/storageManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _boardCoordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardCoordinator.js */ "./src/modules/boardCoordinator.js");




var storage = (function () {

    // create and store empty board
    var _boardName = "board";
    

    function _getBoard(){
        if(localStorage.getItem(_boardName) === null){
            localStorage.setItem(_boardName, JSON.stringify(new _boardCoordinator_js__WEBPACK_IMPORTED_MODULE_2__.default())); 
        }

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

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_displayController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayController.js */ "./src/modules/displayController.js");
/* harmony import */ var _modules_storageManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storageManager.js */ "./src/modules/storageManager.js");






var ui = new _modules_displayController_js__WEBPACK_IMPORTED_MODULE_2__.default();
ui.loadHomePage();


/*

MyStorage.storeProject(new Project("Kelly's Pickles"));
console.log(MyStorage.getStoredProject("Kelly's Pickles"));
MyStorage.removeStoredProject("Kelly's Pickles");
MyStorage.storeProject(new Project("Friday's Project"));
MyStorage.storeProject(new Project("Lilly's Project"));
MyStorage.renameStoredProject("Lilly's Project", "Millie's Project");

var myTask = new Task("My title", "my description", "due date", "high", "these are my notes");
MyStorage.storeTask("Millie's Project", myTask);

console.log(MyStorage.getTask("Millie's Project", myTask.getTitle()));

*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLG9EQUFvRCxhQUFhLEdBQUcsZUFBZTtBQUNuRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxhQUFhLEdBQUcsY0FBYztBQUN4RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDM0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDTTtBQUNpQjtBQUNSOzs7QUFHbkQsYUFBYSxrRUFBYTtBQUMxQjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvYm9hcmRDb29yZGluYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2VNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmNsYXNzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuXFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcblxcbi5hZGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7O0FBRXZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmNsYXNzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuXFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcblxcbi5hZGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRDb29yZGluYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKXtcbiAgICAgICAgdGhpcy5fcHJvamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0cyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0cztcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0cyAocHJvanMpIHtcbiAgICAgICAgdGhpcy5fcHJvamVjdHMgPSBwcm9qcztcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICB0aGlzLl9wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QodGl0bGUpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9wcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHRpdGxlKTtcbiAgICAgICAgdGhpcy5fcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KHRpdGxlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHRpdGxlKVxuICAgIH1cblxuICAgIHJlbmFtZVByb2plY3Qob2xkVGl0bGUsIG5ld1RpdGxlKXtcbiAgICAgICAgdmFyIHByb2ogPSB0aGlzLmdldFByb2plY3Qob2xkVGl0bGUpO1xuICAgICAgICBwcm9qLnJlbmFtZVByb2plY3QobmV3VGl0bGUpO1xuICAgIH1cblxuICAgIGFkZFRhc2socHJvamVjdFRpdGxlLCB0YXNrKXtcbiAgICAgICAgdmFyIHByb2ogPSB0aGlzLmdldFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgcHJvai5hZGRUYXNrKHRhc2spO1xuICAgIH1cblxuICAgIHJlbW92ZVRhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUpe1xuICAgICAgICB2YXIgcHJvaiA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qLnJlbW92ZVRhc2sodGFza1RpdGxlKTtcbiAgICB9XG5cbiAgICBnZXRUYXNrKHByb2plY3RUaXRsZSwgdGFza1RpdGxlKXtcbiAgICAgICAgdmFyIHByb2ogPSB0aGlzLmdldFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgcmV0dXJuIHByb2ouZ2V0VGFzayh0YXNrVGl0bGUpO1xuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2VNYW5hZ2VyLmpzJ1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckludGVyZmFjZSB7XG5cbiAgICAjTUFYX1RJVExFX0xFTkdUSCA9IDUwMDtcblxuICAgIGxvYWRIb21lUGFnZSgpe1xuICAgICAgICB0aGlzLiNpbml0aWFsaXplUHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICAjaW5pdGlhbGl6ZVByb2plY3RzKCl7XG4gICAgICAgIHRoaXMuI2FkZFByb2plY3RDcmVhdGlvbkV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy4jZGlzcGxheUFsbFByb2plY3RzKCk7XG4gICAgfVxuXG5cbiAgICAjYWRkUHJvamVjdENyZWF0aW9uRXZlbnRMaXN0ZW5lcigpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tcHJvamVjdC1mb3JtXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jdG9nZ2xlUHJvamVjdEZvcm0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC1hZGQtcHJvamVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI3RvZ2dsZVByb2plY3RGb3JtKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgdGhpcy4jY3JlYXRlUHJvamVjdCgpIH0gKVxuICAgIH1cblxuICAgICN0b2dnbGVQcm9qZWN0Rm9ybSgpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tcHJvamVjdC1mb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG5cblxuICAgICNkaXNwbGF5QWxsUHJvamVjdHMoKXtcbiAgICAgICAgdmFyIHByb2plY3RzID0gU3RvcmFnZS5nZXRBbGxTdG9yZWRQcm9qZWN0cygpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7IHRoaXMuI2Rpc3BsYXlQcm9qZWN0KHByb2plY3QpIH0pO1xuICAgIH1cblxuICAgICNkZWxldGVQcm9qZWN0KGV2ZW50KXtcbiAgICAgICAgdmFyIHRpdGxlID0gZXZlbnQudGFyZ2V0LmlkLnN1YnN0cig3KTtcblxuICAgICAgICAvL3JlbW92ZSBIVE1MXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RpdGxlfWApLnJlbW92ZSgpO1xuICAgICAgICAvL3JlbW92ZSBmcm9tIHN0b3JhZ2VcbiAgICAgICAgU3RvcmFnZS5yZW1vdmVTdG9yZWRQcm9qZWN0KHRpdGxlKTtcbiAgICB9XG5cbiAgICAjZGlzcGxheVByb2plY3QocHJvamVjdCl7XG4gICAgICAgIHZhciBwcm9qVGl0bGUgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG5cbiAgICAgICAgdmFyIHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qRGl2LmlkID0gcHJvalRpdGxlO1xuICAgICAgICBwcm9qRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgICAgIHByb2pEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGgzIGlkPVwiJHtwcm9qVGl0bGV9LWhlYWRlclwiIGNsYXNzPVwicHJvai10aXRsZVwiPiR7cHJvalRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLSR7cHJvalRpdGxlfVwiIGNsYXNzPVwiZGVsZXRlXCI+eDwvYnV0dG9uPlxuICAgICAgICBgO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpLmFwcGVuZENoaWxkKHByb2pEaXYpO1xuXG4gICAgICAgIHZhciBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGVsZXRlLSR7cHJvalRpdGxlfWApO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4geyB0aGlzLiNkZWxldGVQcm9qZWN0KGV2ZW50KSB9KTtcbiAgICB9XG5cbiAgICBjaGVja1Byb2plY3RVc2VySW5wdXQodGl0bGUpe1xuICAgICAgICBpZiAodGl0bGUubGVuZ3RoID4gdGhpcy4jTUFYX1RJVExFX0xFTkdUSCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvciAoXCJQcm9qZWN0IHRpdGxlIGV4Y2VlZGVkIDUwMCBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRpdGxlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yIChcIlByb2plY3QgdGl0bGUgdG9vIHNob3J0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdW5pcXVlIHRpdGxlXG4gICAgICAgICAgICBpZiAodHlwZW9mIFN0b3JhZ2UuZ2V0U3RvcmVkUHJvamVjdCh0aXRsZSkgPT09IFwib2JqZWN0XCIpe1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yIChcIk11c3QgYmUgdW5pcXVlIHByb2plY3QgdGl0bGVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyIG1ldGhvZFxuICAgICNjcmVhdGVQcm9qZWN0KCl7XG4gICAgICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgdGl0bGUgaXMgZW1wdHkgc3RyaW5nXG4gICAgICAgIGlmICh0aXRsZSA8IDEpIHJldHVyblxuXG4gICAgICAgIHRyeSB7IHRoaXMuY2hlY2tQcm9qZWN0VXNlcklucHV0KHRpdGxlKTsgfSBcbiAgICAgICAgY2F0Y2ggKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb2ogPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIFN0b3JhZ2Uuc3RvcmVQcm9qZWN0KHByb2opO1xuICAgICAgICB0aGlzLiNkaXNwbGF5UHJvamVjdChwcm9qKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXG4gICAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fdGFza0xpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuICAgIHJlbmFtZVByb2plY3QodmFsdWUpe1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldFRhc2tMaXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrTGlzdDtcbiAgICB9XG4gICAgc2V0VGFza0xpc3QodmFsdWUpe1xuICAgICAgICB0aGlzLl90YXNrTGlzdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgZ2V0VGFzayh0YXNrVGl0bGUpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0xpc3QuZmluZCh0YXNrID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza1RpdGxlKVxuICAgIH1cblxuICAgIHJlbW92ZVRhc2sodGFza1RpdGxlKXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fdGFza0xpc3QuZmluZEluZGV4KHRhc2sgPT4gdGFzay5nZXRUaXRsZSA9PT0gdGFza1RpdGxlKTtcbiAgICAgICAgdGhpcy5fdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cblxuXG59XG4iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZENvb3JkaW5hdG9yLmpzJ1xuXG52YXIgc3RvcmFnZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBjcmVhdGUgYW5kIHN0b3JlIGVtcHR5IGJvYXJkXG4gICAgdmFyIF9ib2FyZE5hbWUgPSBcImJvYXJkXCI7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBfZ2V0Qm9hcmQoKXtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oX2JvYXJkTmFtZSkgPT09IG51bGwpe1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oX2JvYXJkTmFtZSwgSlNPTi5zdHJpbmdpZnkobmV3IEJvYXJkKCkpKTsgXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYm9hcmQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IEJvYXJkKCksXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKF9ib2FyZE5hbWUpKVxuICAgICAgICApO1xuXG4gICAgICAgIGJvYXJkLnNldFByb2plY3RzKFxuICAgICAgICAgICAgYm9hcmQuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgICAgICAgICAubWFwKHByb2plY3QgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSlcbiAgICAgICAgKTtcblxuICAgICAgICAvL2JvYXJkLnNldFByb2plY3RzKFtdKTtcbiAgICAgICAgdmFyIGIgPSBib2FyZC5nZXRQcm9qZWN0cygpO1xuXG4gICAgICAgIGJvYXJkLmdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2V0VGFza0xpc3QoXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrTGlzdCgpLm1hcCh0YXNrID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYm9hcmRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc3RvcmVCb2FyZChib2FyZCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKF9ib2FyZE5hbWUsIEpTT04uc3RyaW5naWZ5KGJvYXJkKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWxsU3RvcmVkUHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIF9nZXRCb2FyZCgpLmdldFByb2plY3RzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcmVQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICB2YXIgYm9hcmQgPSBfZ2V0Qm9hcmQoKTtcbiAgICAgICAgYm9hcmQuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgX3N0b3JlQm9hcmQoYm9hcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFN0b3JlZFByb2plY3QocHJvamVjdFRpdGxlKXtcbiAgICAgICAgcmV0dXJuIF9nZXRCb2FyZCgpLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JlZFByb2plY3QocHJvamVjdFRpdGxlKXtcbiAgICAgICAgdmFyIGJvYXJkID0gX2dldEJvYXJkKCk7XG4gICAgICAgIGJvYXJkLnJlbW92ZVByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgX3N0b3JlQm9hcmQoYm9hcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmFtZVN0b3JlZFByb2plY3Qob2xkUHJvamVjdFRpdGxlLCBuZXdQcm9qZWN0VGl0bGUpe1xuICAgICAgICB2YXIgYm9hcmQgPSBfZ2V0Qm9hcmQoKTtcbiAgICAgICAgYm9hcmQucmVuYW1lUHJvamVjdChvbGRQcm9qZWN0VGl0bGUsIG5ld1Byb2plY3RUaXRsZSk7XG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9yZVRhc2socHJvamVjdE5hbWUsIHRhc2spe1xuICAgICAgICB2YXIgYm9hcmQgPSBfZ2V0Qm9hcmQoKTtcbiAgICAgICAgYm9hcmQuYWRkVGFzayhwcm9qZWN0TmFtZSwgdGFzayk7XG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSl7XG4gICAgICAgIHZhciBib2FyZCA9IF9nZXRCb2FyZCgpO1xuICAgICAgICBib2FyZC5yZW1vdmVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSl7XG4gICAgICAgIHJldHVybiBfZ2V0Qm9hcmQoKS5nZXRUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHN0b3JlUHJvamVjdCwgXG4gICAgICAgIGdldFN0b3JlZFByb2plY3QsIFxuICAgICAgICByZW1vdmVTdG9yZWRQcm9qZWN0LCBcbiAgICAgICAgcmVuYW1lU3RvcmVkUHJvamVjdCwgXG4gICAgICAgIHN0b3JlVGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICAgICAgZ2V0VGFzayxcbiAgICAgICAgZ2V0QWxsU3RvcmVkUHJvamVjdHNcbiAgICB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7XG5cblxuXG4gICAgLypmdW5jdGlvbiBfZ2V0Qm9hcmQoKXtcbiAgICAgICAgdmFyIGJvYXJkID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQm9hcmRDb29yZGluYXRvciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShfYm9hcmROYW1lKSkpO1xuXG4gICAgICAgIGJvYXJkLnByb2plY3RzID0gYm9hcmQucHJvamVjdC5tYXAocHJvaiA9PiB7XG4gICAgICAgICAgICBwcm9qID0gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkocHJvaikpO1xuICAgICAgICAgICAgcHJvai50YXNrTGlzdCA9IHByb2oudGFza0xpc3QubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3IFRhc2ssIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByb2pcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJvYXJkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3N0b3JlQm9hcmQoYm9hcmQpe1xuICAgICAgICB2YXIgYm9hcmRKU09OID0gYm9hcmQucHJvamVjdHMubWFwKHByb2ogPT4ge1xuICAgICAgICAgICAgcHJvai50YXNrTGlzdCA9IHByb2oudGFza0xpc3QubWFwKHRhc2sgPT4gSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHByb2opXG4gICAgICAgIH0pXG4gICAgICAgIGJvYXJkSlNPTiA9IEpTT04uc3RyaW5naWZ5KGJvYXJkSlNPTik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKF9ib2FyZE5hbWUsIGJvYXJkSlNPTik7XG4gICAgfSovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyl7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5fbm90ZXMgPSBub3RlcztcblxuICAgICAgICB0aGlzLl9tYXhUaXRsZSA9IDUwMDtcbiAgICAgICAgdGhpcy5fbWF4RGVzYyA9IDEwMDA7XG4gICAgICAgIHRoaXMuX21pblRpdGxlID0gMTtcbiAgICAgICAgdGhpcy5fbWluRGVzYyA9IDE7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlXG4gICAgfVxuICAgIHNldFRpdGxlKHZhbHVlKXtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IHRoaXMuX21heFRpdGxlIHx8IHZhbHVlLmxlbmd0aCA8IHRoaXMuX21pblRpdGxlKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB0aXRsZSBsZW5ndGggJHt2YWx1ZS5sZW5ndGh9LyR7dGhpcy5fbWF4VGl0bGV9YClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY1xuICAgIH1cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpe1xuICAgICAgICBpZih2YWx1ZS5sZW5ndGggPiB0aGlzLl9tYXhEZXNjIHx8IHZhbHVlLmxlbmd0aCA8IHRoaXMuX21pblRpdGxlKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkZXNjcmlwdGlvbiBsZW5ndGggJHt2YWx1ZS5sZW5ndGh9LyR7dGhpcy5fbWF4RGVzY31gKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc2MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZVxuICAgIH1cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSl7XG4gICAgICAgIC8vY2hlY2tcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHlcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKXtcbiAgICAgICAgLy9jaGVja1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBub3Rlcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbm90ZXNcbiAgICB9XG4gICAgc2V0IG5vdGVzKHZhbHVlKXtcbiAgICAgICAgLy9jaGVja1xuICAgICAgICB0aGlzLl9ub3RlcyA9IHZhbHVlO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdC5qcydcbmltcG9ydCAgVXNlckludGVyZmFjZSBmcm9tICcuL21vZHVsZXMvZGlzcGxheUNvbnRyb2xsZXIuanMnXG5pbXBvcnQgTXlTdG9yYWdlIGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlTWFuYWdlci5qcydcblxuXG52YXIgdWkgPSBuZXcgVXNlckludGVyZmFjZSgpO1xudWkubG9hZEhvbWVQYWdlKCk7XG5cblxuLypcblxuTXlTdG9yYWdlLnN0b3JlUHJvamVjdChuZXcgUHJvamVjdChcIktlbGx5J3MgUGlja2xlc1wiKSk7XG5jb25zb2xlLmxvZyhNeVN0b3JhZ2UuZ2V0U3RvcmVkUHJvamVjdChcIktlbGx5J3MgUGlja2xlc1wiKSk7XG5NeVN0b3JhZ2UucmVtb3ZlU3RvcmVkUHJvamVjdChcIktlbGx5J3MgUGlja2xlc1wiKTtcbk15U3RvcmFnZS5zdG9yZVByb2plY3QobmV3IFByb2plY3QoXCJGcmlkYXkncyBQcm9qZWN0XCIpKTtcbk15U3RvcmFnZS5zdG9yZVByb2plY3QobmV3IFByb2plY3QoXCJMaWxseSdzIFByb2plY3RcIikpO1xuTXlTdG9yYWdlLnJlbmFtZVN0b3JlZFByb2plY3QoXCJMaWxseSdzIFByb2plY3RcIiwgXCJNaWxsaWUncyBQcm9qZWN0XCIpO1xuXG52YXIgbXlUYXNrID0gbmV3IFRhc2soXCJNeSB0aXRsZVwiLCBcIm15IGRlc2NyaXB0aW9uXCIsIFwiZHVlIGRhdGVcIiwgXCJoaWdoXCIsIFwidGhlc2UgYXJlIG15IG5vdGVzXCIpO1xuTXlTdG9yYWdlLnN0b3JlVGFzayhcIk1pbGxpZSdzIFByb2plY3RcIiwgbXlUYXNrKTtcblxuY29uc29sZS5sb2coTXlTdG9yYWdlLmdldFRhc2soXCJNaWxsaWUncyBQcm9qZWN0XCIsIG15VGFzay5nZXRUaXRsZSgpKSk7XG5cbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
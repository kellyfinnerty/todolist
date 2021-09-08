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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --dark-green: #002500;\n    --russian-green: #6A8D73;\n    --blanched-almond: #f0efeb;\n    --mydarkpurple: #5D576B;\n    --my-purple: #807891;\n    --task-header: #f0efeb;\n}\n\nbody{\n    margin: 0;\n    font-family: Arial, sans-serif;\n    \n}\n\n.site-container{\n    display: grid;\n    grid-template-rows: 11.3vh 88.7vh;\n}\n\n.class-container{\n    display: grid;\n    grid-template-rows: repeat(3, auto);\n}\n\n#header{\n    align-self: center;\n    background-color: var(--my-purple);\n    color: white;\n    padding: 5px;\n    padding-left: 20px;\n}\n\n.display-container{\n    display: grid;\n    grid-template-columns: 16rem auto;\n    gap: 4%;\n}\n\n.add{\n    background-color: rgb(230, 163, 82);\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\n    border: none;\n    color: white;\n}\n\n.add:hover{\n    background-color: black;\n    background: black;\n    color: white;\n}\n\n.hidden{\n    display: none;\n}\n\n.active, .project:hover{\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n    color: white;\n    width: 100%;\n}\n\n.project:hover .delete-project{\n    display: block;\n}\n\nbutton{\n    background-color:white;\n    color: black;\n    border: solid .7px black;\n    border-radius: 10px;\n    padding: 4px 8px 4px 8px;\n}\n\n.project{\n    border-radius: 10px;\n    align-content: center;\n    margin-left: 1rem;\n\n    display: grid;\n    grid-template-columns: 11.5rem 2rem;\n    grid-gap: 0.5em;\n\n}\n\n#project-area{\n    background-color: var(--blanched-almond);\n}\n\n.project-title{\n    padding-left: 1.2em;\n\n    word-wrap: normal;\n    font-size: 0.95rem;\n}\n\n.project-category{\n    font-size: 1.15rem;\n    margin-left: 1.1em;\n}\n\n.delete-task, .edit-task{\n    align-self: center;\n    justify-self: center;\n    height: 1.8rem;\n}\n\n.delete-task:hover{\n    background-color: rgb(230, 230, 230);\n    color: white;\n    border: none;\n}\n\n.delete-project{\n    display: none;\n    align-self: center;\n    justify-self: left;\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n    background-color: transparent;\n    color: white;\n    border: none;\n}\n\n.delete-project:hover{\n    background-color: white;\n    color: rgba(252,176,69,1);\n    border: none;\n}\n\n#project-form-container{\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto auto;\n    grid-template-areas: \n        'input input'\n        'add cancel'\n}\n\n#project-title{\n    grid-area: input;\n\n    width: 75%;\n    align-self: center;\n    justify-self: center;\n\n    padding: 0.2rem;\n    margin-left: 1.4rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    height: 1.5rem;\n}\n\n#cancel-add-project{\n    width: 30%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 0.5rem;\n}\n\n#add-project{\n    justify-self: right;\n    width: 25%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 2.3rem;\n}\n\n\n\n#open-project-form, #open-task-form{\n    margin-left: 3.5rem;\n    margin-top: 2rem;\n    justify-self: center;\n    align-self: center;\n    grid-row-start: 1;\n    grid-row-end: 3;\n\n    padding: 0.6rem;\n    padding-right: 0.7rem;\n\n    font-size: 1rem;\n}\n\n\n#task-list{\n    display: grid;\n    gap: 10px;\n}\n\n#project-list{\n    overflow-y: scroll;\n    overflow-x: hidden;\n    margin: 0;\n    padding: 0;\n    padding-right: 17px;\n    max-height: 50vh;\n    max-width: 700px;\n}\n\n#open-task-form{\n    margin-left: 0;\n    margin-top: 15px;\n    margin-bottom: 20px;\n}\n\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 180px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content */\n  .modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    border-radius: 3.5px;\n    width: 40%;\n  }\n  \n  /* The Close Button */\n  .close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  #curr-project-title{\n      margin-top: 50px;\n      margin-bottom: 20px;\n  }\n\n  .task-details, .task-title{\n      margin-left: 15px;\n  }\n\n  .due-date{\n      align-self: center;\n  }\n\n  .task-header{\n      background-color: var(--task-header);\n      margin: 0;\n      padding: 0;\n      border-radius: 3px;\n\n      display: grid;\n      grid-template-columns: 60% 15% 8% 6%;\n      margin-right: 10%;\n  }\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --dark-green: #002500;\n    --russian-green: #6A8D73;\n    --blanched-almond: #f0efeb;\n    --mydarkpurple: #5D576B;\n    --my-purple: #807891;\n    --task-header: #f0efeb;\n}\n\nbody{\n    margin: 0;\n    font-family: Arial, sans-serif;\n    \n}\n\n.site-container{\n    display: grid;\n    grid-template-rows: 11.3vh 88.7vh;\n}\n\n.class-container{\n    display: grid;\n    grid-template-rows: repeat(3, auto);\n}\n\n#header{\n    align-self: center;\n    background-color: var(--my-purple);\n    color: white;\n    padding: 5px;\n    padding-left: 20px;\n}\n\n.display-container{\n    display: grid;\n    grid-template-columns: 16rem auto;\n    gap: 4%;\n}\n\n.add{\n    background-color: rgb(230, 163, 82);\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\n    border: none;\n    color: white;\n}\n\n.add:hover{\n    background-color: black;\n    background: black;\n    color: white;\n}\n\n.hidden{\n    display: none;\n}\n\n.active, .project:hover{\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n    color: white;\n    width: 100%;\n}\n\n.project:hover .delete-project{\n    display: block;\n}\n\nbutton{\n    background-color:white;\n    color: black;\n    border: solid .7px black;\n    border-radius: 10px;\n    padding: 4px 8px 4px 8px;\n}\n\n.project{\n    border-radius: 10px;\n    align-content: center;\n    margin-left: 1rem;\n\n    display: grid;\n    grid-template-columns: 11.5rem 2rem;\n    grid-gap: 0.5em;\n\n}\n\n#project-area{\n    background-color: var(--blanched-almond);\n}\n\n.project-title{\n    padding-left: 1.2em;\n\n    word-wrap: normal;\n    font-size: 0.95rem;\n}\n\n.project-category{\n    font-size: 1.15rem;\n    margin-left: 1.1em;\n}\n\n.delete-task, .edit-task{\n    align-self: center;\n    justify-self: center;\n    height: 1.8rem;\n}\n\n.delete-task:hover{\n    background-color: rgb(230, 230, 230);\n    color: white;\n    border: none;\n}\n\n.delete-project{\n    display: none;\n    align-self: center;\n    justify-self: left;\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n    background-color: transparent;\n    color: white;\n    border: none;\n}\n\n.delete-project:hover{\n    background-color: white;\n    color: rgba(252,176,69,1);\n    border: none;\n}\n\n#project-form-container{\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto auto;\n    grid-template-areas: \n        'input input'\n        'add cancel'\n}\n\n#project-title{\n    grid-area: input;\n\n    width: 75%;\n    align-self: center;\n    justify-self: center;\n\n    padding: 0.2rem;\n    margin-left: 1.4rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    height: 1.5rem;\n}\n\n#cancel-add-project{\n    width: 30%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 0.5rem;\n}\n\n#add-project{\n    justify-self: right;\n    width: 25%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 2.3rem;\n}\n\n\n\n#open-project-form, #open-task-form{\n    margin-left: 3.5rem;\n    margin-top: 2rem;\n    justify-self: center;\n    align-self: center;\n    grid-row-start: 1;\n    grid-row-end: 3;\n\n    padding: 0.6rem;\n    padding-right: 0.7rem;\n\n    font-size: 1rem;\n}\n\n\n#task-list{\n    display: grid;\n    gap: 10px;\n}\n\n#project-list{\n    overflow-y: scroll;\n    overflow-x: hidden;\n    margin: 0;\n    padding: 0;\n    padding-right: 17px;\n    max-height: 50vh;\n    max-width: 700px;\n}\n\n#open-task-form{\n    margin-left: 0;\n    margin-top: 15px;\n    margin-bottom: 20px;\n}\n\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 180px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content */\n  .modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    border-radius: 3.5px;\n    width: 40%;\n  }\n  \n  /* The Close Button */\n  .close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  #curr-project-title{\n      margin-top: 50px;\n      margin-bottom: 20px;\n  }\n\n  .task-details, .task-title{\n      margin-left: 15px;\n  }\n\n  .due-date{\n      align-self: center;\n  }\n\n  .task-header{\n      background-color: var(--task-header);\n      margin: 0;\n      padding: 0;\n      border-radius: 3px;\n\n      display: grid;\n      grid-template-columns: 60% 15% 8% 6%;\n      margin-right: 10%;\n  }\n"],"sourceRoot":""}]);
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
/* eslint-disable no-underscore-dangle */
class BoardCoordinator {
    constructor() {
        this._projects = []
    }

    getProjects() {
        return this._projects
    }

    setProjects(projs) {
        this._projects = projs
    }

    addProject(project) {
        this._projects.push(project)
    }

    removeProject(title) {
        const index = this._projects.findIndex(
            (project) => project.getTitle() === title
        )
        this._projects.splice(index, 1)
    }

    getProject(title) {
        return this._projects.find((project) => project.getTitle() === title)
    }

    renameProject(oldTitle, newTitle) {
        const proj = this.getProject(oldTitle)
        proj.renameProject(newTitle)
    }

    addTask(projectTitle, task) {
        const proj = this.getProject(projectTitle)
        proj.addTask(task)
    }

    removeTask(projectTitle, taskTitle) {
        const proj = this.getProject(projectTitle)
        proj.removeTask(taskTitle)
    }

    getTask(projectTitle, taskTitle) {
        const proj = this.getProject(projectTitle)
        return proj.getTask(taskTitle)
    }

    getTasks(projectTitle) {
        const proj = this.getProject(projectTitle)
        return proj.getTaskList()
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
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageManager.js */ "./src/modules/storageManager.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _displayModules_displayTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayModules/displayTask.js */ "./src/modules/displayModules/displayTask.js");
// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/extensions


// eslint-disable-next-line import/extensions


class UI {
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
        _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.default.getAllStoredProjects().forEach((project) => {
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
        _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.default.removeStoredProject(title)

        // display next project
    }

    static selectProject(event, project) {
        // check if project has been deleted
        if (
            typeof _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.default.getStoredProject(project.firstChild.textContent) !==
            'object'
        )
            return

        const projects = Array.from(document.querySelectorAll('.project'))

        projects.forEach((proj) => proj.classList.remove('active'))
        project.classList.add('active')

        const taskMaster = new _displayModules_displayTask_js__WEBPACK_IMPORTED_MODULE_3__.default()
        taskMaster.createTaskBoard(project)
    }

    static checkProjectUserInput(title) {
        const maxTitleLength = 500

        if (title.length > maxTitleLength) {
            throw Error('Project title exceeded 500 characters')
        } else if (title.length < 1) {
            throw Error('Project title too short')
        } else if (typeof _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.default.getStoredProject(title) === 'object') {
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

        const proj = new _project_js__WEBPACK_IMPORTED_MODULE_0__.default(title)
        _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.default.storeProject(proj)
        this.displayProject(proj)

        document.querySelector('#project-title').value = ''

        this.initProjectButtons()
    }
}


/***/ }),

/***/ "./src/modules/displayModules/displayTask.js":
/*!***************************************************!*\
  !*** ./src/modules/displayModules/displayTask.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisplayTask)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task.js */ "./src/modules/task.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/style.css */ "./src/css/style.css");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storageManager.js */ "./src/modules/storageManager.js");
// eslint-disable-next-line import/extensions


// eslint-disable-next-line import/extensions


class DisplayTask {
    // eslint-disable-next-line class-methods-use-this
    createTaskBoard(project) {
        DisplayTask.clearTaskBoard()

        document.getElementById('welcome').classList.add('hidden')
        document.getElementById('task-area').classList.remove('hidden')

        const projectTitle = project.firstChild.textContent
        document.getElementById(
            'curr-project-title'
        ).textContent = `${projectTitle}`

        Array.from(_storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.getTasks(projectTitle)).forEach((task) =>
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
        dueDate.textContent = task.getDueDate()
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
        const storedTask = _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.getTask(projTitle, taskName)

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

        _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.removeTask(projectTitle, taskName)

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

        const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(
            taskTitle.value,
            description.value,
            dueDate.value,
            DisplayTask.getPriority(priority),
            'notes'
        )

        _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.storeTask(projectTitle, newTask)
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
        } else if (typeof _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.getTask(projectName, name) === 'object') {
            throw Error('Must be a unique task name')
        }
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
/* eslint-disable no-underscore-dangle */
class Project {
    constructor(title) {
        this._title = title
        this._taskList = []
    }

    getTitle() {
        return this._title
    }

    renameProject(value) {
        this._title = value
    }

    getTaskList() {
        return this._taskList
    }

    setTaskList(value) {
        this._taskList = value
    }

    addTask(task) {
        this._taskList.push(task)
    }

    getTask(taskTitle) {
        return this._taskList.find((task) => task.getTitle() === taskTitle)
    }

    removeTask(taskTitle) {
        const index = this._taskList.findIndex(
            (task) => task.getTitle === taskTitle
        )
        this._taskList.splice(index, 1)
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
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */




const storage = (function () {
    // create and store empty board
    const _boardName = 'board'

    function _getBoard() {
        if (localStorage.getItem(_boardName) === null) {
            localStorage.setItem(_boardName, JSON.stringify(new _boardCoordinator_js__WEBPACK_IMPORTED_MODULE_2__.default()))
        }

        const board = Object.assign(
            new _boardCoordinator_js__WEBPACK_IMPORTED_MODULE_2__.default(),
            JSON.parse(localStorage.getItem(_boardName))
        )

        board.setProjects(
            board
                .getProjects()
                .map((project) => Object.assign(new _project_js__WEBPACK_IMPORTED_MODULE_1__.default(), project))
        )

        // board.setProjects([]);
        const b = board.getProjects()

        board.getProjects().forEach((project) => {
            project.setTaskList(
                project
                    .getTaskList()
                    .map((task) => Object.assign(new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(), task))
            )
        })

        return board
    }

    function _storeBoard(board) {
        localStorage.setItem(_boardName, JSON.stringify(board))
    }

    function getAllStoredProjects() {
        return _getBoard().getProjects()
    }

    function storeProject(project) {
        const board = _getBoard()
        board.addProject(project)
        _storeBoard(board)
    }

    function getStoredProject(projectTitle) {
        return _getBoard().getProject(projectTitle)
    }

    function removeStoredProject(projectTitle) {
        const board = _getBoard()
        board.removeProject(projectTitle)
        _storeBoard(board)
    }

    function renameStoredProject(oldProjectTitle, newProjectTitle) {
        const board = _getBoard()
        board.renameProject(oldProjectTitle, newProjectTitle)
        _storeBoard(board)
    }

    function storeTask(projectName, task) {
        const board = _getBoard()
        board.addTask(projectName, task)
        _storeBoard(board)
    }

    function removeTask(projectName, taskName) {
        const board = _getBoard()
        board.removeTask(projectName, taskName)
        _storeBoard(board)
    }

    function getTask(projectName, taskName) {
        return _getBoard().getTask(projectName, taskName)
    }

    function getTasks(projectName) {
        return _getBoard().getTasks(projectName)
    }

    return {
        storeProject,
        getStoredProject,
        removeStoredProject,
        renameStoredProject,
        storeTask,
        removeTask,
        getTask,
        getAllStoredProjects,
        getTasks,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/* function _getBoard(){
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
    } */


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
/* eslint-disable no-underscore-dangle */

class Task {
    constructor(title, desc, dueDate, priority, notes) {
        this._title = title
        this._desc = desc
        this._dueDate = dueDate
        this._priority = priority
        this._notes = notes

        this._maxTitle = 500
        this._maxDesc = 1000
        this._minTitle = 1
        this._minDesc = 1
    }

    getTitle() {
        return this._title
    }

    setTitle(value) {
        if (value.length > this._maxTitle || value.length < this._minTitle) {
            throw new Error(
                `Invalid title length ${value.length}/${this._maxTitle}`
            )
        }
        this._title = value
    }

    getDescription() {
        return this._desc
    }

    setDescription(value) {
        if (value.length > this._maxDesc || value.length < this._minTitle) {
            throw new Error(
                `Invalid description length ${value.length}/${this._maxDesc}`
            )
        }
        this._desc = value
    }

    getDueDate() {
        return this._dueDate
    }

    setDueDate(value) {
        // check
        this._dueDate = value
    }

    getPriority() {
        return this._priority
    }

    setPriority(value) {
        // check
        this._priority = value
    }

    get notes() {
        return this._notes
    }

    set notes(value) {
        // check
        this._notes = value
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
/* harmony import */ var _modules_displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displayController.js */ "./src/modules/displayController.js");
/* eslint-disable import/extensions */


const ui = new _modules_displayController_js__WEBPACK_IMPORTED_MODULE_0__.default()
ui.loadHomePage()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDMEQ7O0FBRTFELGVBQWUsa0VBQWE7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvYm9hcmRDb29yZGluYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheU1vZHVsZXMvZGlzcGxheVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tZGFyay1ncmVlbjogIzAwMjUwMDtcXG4gICAgLS1ydXNzaWFuLWdyZWVuOiAjNkE4RDczO1xcbiAgICAtLWJsYW5jaGVkLWFsbW9uZDogI2YwZWZlYjtcXG4gICAgLS1teWRhcmtwdXJwbGU6ICM1RDU3NkI7XFxuICAgIC0tbXktcHVycGxlOiAjODA3ODkxO1xcbiAgICAtLXRhc2staGVhZGVyOiAjZjBlZmViO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgXFxufVxcblxcbi5zaXRlLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMS4zdmggODguN3ZoO1xcbn1cXG5cXG4uY2xhc3MtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teS1wdXJwbGUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZyZW0gYXV0bztcXG4gICAgZ2FwOiA0JTtcXG59XFxuXFxuLmFkZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTYzLCA4Mik7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjM4LDE3NCwyMDIsMSkgMCUsIHJnYmEoMTQ4LDE4NywyMzMsMSkgMTAwJSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZSwgLnByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMzEsNTgsMTgwLDEpIDAlLCByZ2JhKDI1MywyOSwyOSwxKSA1MCUsIHJnYmEoMjUyLDE3Niw2OSwxKSAxMDAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogc29saWQgLjdweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNHB4IDhweCA0cHggOHB4O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMS41cmVtIDJyZW07XFxuICAgIGdyaWQtZ2FwOiAwLjVlbTtcXG5cXG59XFxuXFxuI3Byb2plY3QtYXJlYXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhbmNoZWQtYWxtb25kKTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGV7XFxuICAgIHBhZGRpbmctbGVmdDogMS4yZW07XFxuXFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDAuOTVyZW07XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5e1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjFlbTtcXG59XFxuXFxuLmRlbGV0ZS10YXNrLCAuZWRpdC10YXNre1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3R7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZ2JhKDI1MiwxNzYsNjksMSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAnaW5wdXQgaW5wdXQnXFxuICAgICAgICAnYWRkIGNhbmNlbCdcXG59XFxuXFxuI3Byb2plY3QtdGl0bGV7XFxuICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxuXFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNjYW5jZWwtYWRkLXByb2plY3R7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0e1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMCAwLjVyZW0gMCAyLjNyZW07XFxufVxcblxcblxcblxcbiNvcGVuLXByb2plY3QtZm9ybSwgI29wZW4tdGFzay1mb3Jte1xcbiAgICBtYXJnaW4tbGVmdDogMy41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcblxcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5cXG4jdGFzay1saXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3R7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XFxuICAgIG1heC1oZWlnaHQ6IDUwdmg7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxufVxcblxcbiNvcGVuLXRhc2stZm9ybXtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcblxcblxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBwYWRkaW5nLXRvcDogMTgwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIH1cXG4gIFxcbiAgLyogTW9kYWwgQ29udGVudCAqL1xcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMuNXB4O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuICAuY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYWFhYTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAuY2xvc2U6aG92ZXIsXFxuICAuY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAjY3Vyci1wcm9qZWN0LXRpdGxle1xcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC50YXNrLWRldGFpbHMsIC50YXNrLXRpdGxle1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgfVxcblxcbiAgLmR1ZS1kYXRle1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC50YXNrLWhlYWRlcntcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWhlYWRlcik7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgMTUlIDglIDYlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxc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YyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0VBQzFEOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsVUFBVTtFQUNaOztFQUVBLHFCQUFxQjtFQUNyQjtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7TUFDSSxnQkFBZ0I7TUFDaEIsbUJBQW1CO0VBQ3ZCOztFQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksb0NBQW9DO01BQ3BDLFNBQVM7TUFDVCxVQUFVO01BQ1Ysa0JBQWtCOztNQUVsQixhQUFhO01BQ2Isb0NBQW9DO01BQ3BDLGlCQUFpQjtFQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1kYXJrLWdyZWVuOiAjMDAyNTAwO1xcbiAgICAtLXJ1c3NpYW4tZ3JlZW46ICM2QThENzM7XFxuICAgIC0tYmxhbmNoZWQtYWxtb25kOiAjZjBlZmViO1xcbiAgICAtLW15ZGFya3B1cnBsZTogIzVENTc2QjtcXG4gICAgLS1teS1wdXJwbGU6ICM4MDc4OTE7XFxuICAgIC0tdGFzay1oZWFkZXI6ICNmMGVmZWI7XFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBcXG59XFxuXFxuLnNpdGUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDExLjN2aCA4OC43dmg7XFxufVxcblxcbi5jbGFzcy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15LXB1cnBsZSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNnJlbSBhdXRvO1xcbiAgICBnYXA6IDQlO1xcbn1cXG5cXG4uYWRke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAxNjMsIDgyKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzgsMTc0LDIwMiwxKSAwJSwgcmdiYSgxNDgsMTg3LDIzMywxKSAxMDAlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWN0aXZlLCAucHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEzMSw1OCwxODAsMSkgMCUsIHJnYmEoMjUzLDI5LDI5LDEpIDUwJSwgcmdiYSgyNTIsMTc2LDY5LDEpIDEwMCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciAuZGVsZXRlLXByb2plY3R7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBzb2xpZCAuN3B4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4IDRweCA4cHg7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDExLjVyZW0gMnJlbTtcXG4gICAgZ3JpZC1nYXA6IDAuNWVtO1xcblxcbn1cXG5cXG4jcHJvamVjdC1hcmVhe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFuY2hlZC1hbG1vbmQpO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZXtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjJlbTtcXG5cXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG59XFxuXFxuLnByb2plY3QtY2F0ZWdvcnl7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuMWVtO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2ssIC5lZGl0LXRhc2t7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMS44cmVtO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHJnYmEoMjUyLDE3Niw2OSwxKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgICdpbnB1dCBpbnB1dCdcXG4gICAgICAgICdhZGQgY2FuY2VsJ1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZXtcXG4gICAgZ3JpZC1hcmVhOiBpbnB1dDtcXG5cXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogMC4ycmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMS40cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2NhbmNlbC1hZGQtcHJvamVjdHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW46IDAgMC41cmVtIDAgMC41cmVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3R7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbSAwIDIuM3JlbTtcXG59XFxuXFxuXFxuXFxuI29wZW4tcHJvamVjdC1mb3JtLCAjb3Blbi10YXNrLWZvcm17XFxuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuXFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC43cmVtO1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcblxcbiN0YXNrLWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcGFkZGluZy1yaWdodDogMTdweDtcXG4gICAgbWF4LWhlaWdodDogNTB2aDtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG59XFxuXFxuI29wZW4tdGFzay1mb3Jte1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuXFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIHBhZGRpbmctdG9wOiAxODBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgfVxcbiAgXFxuICAvKiBNb2RhbCBDb250ZW50ICovXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgYm9yZGVyLXJhZGl1czogMy41cHg7XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxuICBcXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4gIC5jbG9zZSB7XFxuICAgIGNvbG9yOiAjYWFhYWFhO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC5jbG9zZTpob3ZlcixcXG4gIC5jbG9zZTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICNjdXJyLXByb2plY3QtdGl0bGV7XFxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLnRhc2stZGV0YWlscywgLnRhc2stdGl0bGV7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICB9XFxuXFxuICAuZHVlLWRhdGV7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRhc2staGVhZGVye1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2staGVhZGVyKTtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSAxNSUgOCUgNiU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZENvb3JkaW5hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcHJvamVjdHMgPSBbXVxuICAgIH1cblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdHNcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0cyhwcm9qcykge1xuICAgICAgICB0aGlzLl9wcm9qZWN0cyA9IHByb2pzXG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3RzLnB1c2gocHJvamVjdClcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gdGl0bGVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLl9wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdCh0aXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpID09PSB0aXRsZSlcbiAgICB9XG5cbiAgICByZW5hbWVQcm9qZWN0KG9sZFRpdGxlLCBuZXdUaXRsZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5nZXRQcm9qZWN0KG9sZFRpdGxlKVxuICAgICAgICBwcm9qLnJlbmFtZVByb2plY3QobmV3VGl0bGUpXG4gICAgfVxuXG4gICAgYWRkVGFzayhwcm9qZWN0VGl0bGUsIHRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgICAgIHByb2ouYWRkVGFzayh0YXNrKVxuICAgIH1cblxuICAgIHJlbW92ZVRhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgICAgIHByb2oucmVtb3ZlVGFzayh0YXNrVGl0bGUpXG4gICAgfVxuXG4gICAgZ2V0VGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgcmV0dXJuIHByb2ouZ2V0VGFzayh0YXNrVGl0bGUpXG4gICAgfVxuXG4gICAgZ2V0VGFza3MocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSB0aGlzLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxuICAgICAgICByZXR1cm4gcHJvai5nZXRUYXNrTGlzdCgpXG4gICAgfVxufVxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZU1hbmFnZXIuanMnXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBEaXNwbGF5VGFzayBmcm9tICcuL2Rpc3BsYXlNb2R1bGVzL2Rpc3BsYXlUYXNrLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0cygpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5QWxsUHJvamVjdHMoKVxuICAgICAgICB0aGlzLmluaXRQcm9qZWN0QnV0dG9ucygpXG4gICAgICAgIHRoaXMuaW5pdE5ld1Byb2plY3RCdXR0b25zKClcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheUFsbFByb2plY3RzKCkge1xuICAgICAgICBTdG9yYWdlLmdldEFsbFN0b3JlZFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdChwcm9qZWN0KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IHByb2plY3QuZ2V0VGl0bGUoKVxuXG4gICAgICAgIGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qRGl2LmlkID0gcHJvalRpdGxlXG4gICAgICAgIHByb2pEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKS5hcHBlbmRDaGlsZChwcm9qRGl2KVxuXG4gICAgICAgIGNvbnN0IHRpdGxlSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgdGl0bGVIVE1MLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxuICAgICAgICB0aXRsZUhUTUwudGV4dENvbnRlbnQgPSBwcm9qVGl0bGVcblxuICAgICAgICBwcm9qRGl2LmFwcGVuZENoaWxkKHRpdGxlSFRNTClcblxuICAgICAgICBjb25zdCBkZWxldGVIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsZXRlSFRNTC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpXG4gICAgICAgIGRlbGV0ZUhUTUwudGV4dENvbnRlbnQgPSAneCdcbiAgICAgICAgZGVsZXRlSFRNTC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0KGV2ZW50KVxuICAgICAgICB9KVxuICAgICAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUhUTUwpXG4gICAgfVxuXG4gICAgc3RhdGljIGluaXROZXdQcm9qZWN0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3Qgb3Blbk5ld1Byb2pCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1wcm9qZWN0LWZvcm0nKVxuICAgICAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjY2FuY2VsLWFkZC1wcm9qZWN0J1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKVxuXG4gICAgICAgIG9wZW5OZXdQcm9qQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVQcm9qZWN0Rm9ybSlcbiAgICAgICAgY2FuY2VsTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlUHJvamVjdEZvcm0pXG4gICAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBVSS5jcmVhdGVQcm9qZWN0KClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9nZ2xlUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXByb2plY3QtZm9ybScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpKVxuXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+XG4gICAgICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgVUkuc2VsZWN0UHJvamVjdChldmVudCwgcHJvamVjdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdChldmVudCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgICAgY29uc3QgdGl0bGUgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudFxuXG4gICAgICAgIGlmIChwcm9qZWN0RGl2LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUYXNrQm9hcmQoKVxuICAgICAgICB9IC8vIGRlbGV0ZSB0aGUgdGFza3NcblxuICAgICAgICBwcm9qZWN0RGl2LnJlbW92ZSgpIC8vIHJlbW92ZSBwcm9qZWN0IERpdlxuXG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIHN0b3JhZ2VcbiAgICAgICAgU3RvcmFnZS5yZW1vdmVTdG9yZWRQcm9qZWN0KHRpdGxlKVxuXG4gICAgICAgIC8vIGRpc3BsYXkgbmV4dCBwcm9qZWN0XG4gICAgfVxuXG4gICAgc3RhdGljIHNlbGVjdFByb2plY3QoZXZlbnQsIHByb2plY3QpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgcHJvamVjdCBoYXMgYmVlbiBkZWxldGVkXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBTdG9yYWdlLmdldFN0b3JlZFByb2plY3QocHJvamVjdC5maXJzdENoaWxkLnRleHRDb250ZW50KSAhPT1cbiAgICAgICAgICAgICdvYmplY3QnXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpKVxuXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2opID0+IHByb2ouY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICBjb25zdCB0YXNrTWFzdGVyID0gbmV3IERpc3BsYXlUYXNrKClcbiAgICAgICAgdGFza01hc3Rlci5jcmVhdGVUYXNrQm9hcmQocHJvamVjdClcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tQcm9qZWN0VXNlcklucHV0KHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IG1heFRpdGxlTGVuZ3RoID0gNTAwXG5cbiAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+IG1heFRpdGxlTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUHJvamVjdCB0aXRsZSBleGNlZWRlZCA1MDAgY2hhcmFjdGVycycpXG4gICAgICAgIH0gZWxzZSBpZiAodGl0bGUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Byb2plY3QgdGl0bGUgdG9vIHNob3J0JylcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgU3RvcmFnZS5nZXRTdG9yZWRQcm9qZWN0KHRpdGxlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHVuaXF1ZSB0aXRsZVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ011c3QgYmUgdW5pcXVlIHByb2plY3QgdGl0bGUnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXIgbWV0aG9kXG4gICAgc3RhdGljIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKS52YWx1ZVxuXG4gICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgdGl0bGUgaXMgZW1wdHkgc3RyaW5nXG4gICAgICAgIGlmICh0aXRsZSA8IDEpIHJldHVyblxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUHJvamVjdFVzZXJJbnB1dCh0aXRsZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2ogPSBuZXcgUHJvamVjdCh0aXRsZSlcbiAgICAgICAgU3RvcmFnZS5zdG9yZVByb2plY3QocHJvailcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdChwcm9qKVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJykudmFsdWUgPSAnJ1xuXG4gICAgICAgIHRoaXMuaW5pdFByb2plY3RCdXR0b25zKClcbiAgICB9XG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBUYXNrIGZyb20gJy4uL3Rhc2suanMnXG5pbXBvcnQgJy4uLy4uL2Nzcy9zdHlsZS5jc3MnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4uL3N0b3JhZ2VNYW5hZ2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VGFzayB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBjcmVhdGVUYXNrQm9hcmQocHJvamVjdCkge1xuICAgICAgICBEaXNwbGF5VGFzay5jbGVhclRhc2tCb2FyZCgpXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWUnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1hcmVhJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAnY3Vyci1wcm9qZWN0LXRpdGxlJ1xuICAgICAgICApLnRleHRDb250ZW50ID0gYCR7cHJvamVjdFRpdGxlfWBcblxuICAgICAgICBBcnJheS5mcm9tKFN0b3JhZ2UuZ2V0VGFza3MocHJvamVjdFRpdGxlKSkuZm9yRWFjaCgodGFzaykgPT5cbiAgICAgICAgICAgIERpc3BsYXlUYXNrLmRpc3BsYXlUYXNrKHRhc2spXG4gICAgICAgIClcblxuICAgICAgICBEaXNwbGF5VGFzay5pbml0TmV3VGFza0Zvcm0oKVxuICAgICAgICBEaXNwbGF5VGFzay5pbml0aWFsaXplVGFza0J1dHRvbnMoKVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhclRhc2tCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykpXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHRhc2sucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXNrKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVRhc2sodGFzaykge1xuICAgICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpXG5cbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpXG5cbiAgICAgICAgY29uc3QgdGFza0hlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInKVxuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJylcblxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmdldER1ZURhdGUoKVxuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJylcblxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9ICdFZGl0J1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFzaycpXG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRlbGV0ZVRhc2sudGV4dENvbnRlbnQgPSAneCdcbiAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzaycpXG5cbiAgICAgICAgYXJlYS5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tIZWFkZXJEaXYpXG4gICAgICAgIHRhc2tIZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgICAgICB0YXNrSGVhZGVyRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgICAgIHRhc2tIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZWRpdClcbiAgICAgICAgdGFza0hlYWRlckRpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrKVxuICAgIH1cblxuICAgIHN0YXRpYyBpbml0aWFsaXplVGFza0J1dHRvbnMoKSB7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS10YXNrJykpLmZvckVhY2goXG4gICAgICAgICAgICAoZGVsZXRlQnRuKSA9PlxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIERpc3BsYXlUYXNrLmRlbGV0ZVRhc2soZGVsZXRlQnRuKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWhlYWRlcicpKS5mb3JFYWNoKCh0YXNrKSA9PlxuICAgICAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC10YXNrJykpIHJldHVyblxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS10YXNrJykpIHJldHVyblxuICAgICAgICAgICAgICAgIGlmICghdGFzay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygndGFzay1leHBhbmRlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIERpc3BsYXlUYXNrLm9wZW5UYXNrKHRhc2sucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBEaXNwbGF5VGFzay5jbG9zZVRhc2sodGFzay5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWN0aXZlUHJvamVjdFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgb3BlblRhc2sodGFzaykge1xuICAgICAgICBjb25zdCBwcm9qVGl0bGUgPSBEaXNwbGF5VGFzay5nZXRBY3RpdmVQcm9qZWN0VGl0bGUoKVxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2suZmlyc3RDaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50XG4gICAgICAgIGNvbnN0IHN0b3JlZFRhc2sgPSBTdG9yYWdlLmdldFRhc2socHJvalRpdGxlLCB0YXNrTmFtZSlcblxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZXhwYW5kZWQnKVxuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRldGFpbHMnKVxuXG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IHN0b3JlZFRhc2suZ2V0RGVzY3JpcHRpb24oKVxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5VHh0ID0gc3RvcmVkVGFzay5nZXRQcmlvcml0eSgpXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke1xuICAgICAgICAgICAgcHJpb3JpdHlUeHRbMF0udG9VcHBlckNhc2UoKSArIHByaW9yaXR5VHh0LnN1YnN0cmluZygxKVxuICAgICAgICB9YFxuXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzYylcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgIH1cblxuICAgIHN0YXRpYyBjbG9zZVRhc2sodGFzaykge1xuICAgICAgICB0YXNrLnJlbW92ZUNoaWxkKHRhc2suZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1kZXRhaWxzJylbMF0pXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1leHBhbmRlZCcpXG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVRhc2soZGVsZXRlQnRuKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IERpc3BsYXlUYXNrLmdldEFjdGl2ZVByb2plY3RUaXRsZSgpXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZGVsZXRlQnRuLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnRcblxuICAgICAgICBTdG9yYWdlLnJlbW92ZVRhc2socHJvamVjdFRpdGxlLCB0YXNrTmFtZSlcblxuICAgICAgICAvLyByZW1vdmUgSFRNTFxuICAgICAgICBkZWxldGVCdG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuXG4gICAgc3RhdGljIGluaXROZXdUYXNrRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgb3Blbk5ld1Byb2pCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi10YXNrLWZvcm0nKVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJylcblxuICAgICAgICBvcGVuTmV3UHJvakJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlUYXNrLm9wZW5Nb2RhbClcbiAgICAgICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlUYXNrLmNsb3NlTW9kYWwpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgRGlzcGxheVRhc2suY2xvc2VNb2RhbCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5VGFzay5jcmVhdGVUYXNrKVxuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuTW9kYWwoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxuXG4gICAgc3RhdGljIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVGFzaygpIHtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrLWRlc2NyaXB0aW9uJylcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrLWR1ZURhdGUnKVxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3ByaW9yaXR5JykpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gRGlzcGxheVRhc2suZ2V0QWN0aXZlUHJvamVjdFRpdGxlKClcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgRGlzcGxheVRhc2suY2hlY2tUYXNrVXNlcklucHV0KHByb2plY3RUaXRsZSwgdGFza1RpdGxlKVxuICAgICAgICB9IGNhdGNoIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgdGFza1RpdGxlLnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgRGlzcGxheVRhc2suZ2V0UHJpb3JpdHkocHJpb3JpdHkpLFxuICAgICAgICAgICAgJ25vdGVzJ1xuICAgICAgICApXG5cbiAgICAgICAgU3RvcmFnZS5zdG9yZVRhc2socHJvamVjdFRpdGxlLCBuZXdUYXNrKVxuICAgICAgICBEaXNwbGF5VGFzay5kaXNwbGF5VGFzayhuZXdUYXNrKVxuXG4gICAgICAgIERpc3BsYXlUYXNrLmluaXRpYWxpemVUYXNrQnV0dG9ucygpXG5cbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gJydcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IHRvZGF5LmdldERhdGUoKVxuICAgICAgICBEaXNwbGF5VGFzay5jbGVhclByaW9yaXR5KHByaW9yaXR5KVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhclByaW9yaXR5KHByaW9yaXRpZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJpb3JpdGllc1tpXS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdGllc1tpXS5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQcmlvcml0eShwcmlvcml0aWVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByaW9yaXRpZXNbaV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmlvcml0aWVzW2ldLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ25vbmUnXG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrVGFza1VzZXJJbnB1dChwcm9qZWN0TmFtZSwgbmFtZSkge1xuICAgICAgICBjb25zdCBtYXhOYW1lTGVuZ3RoID0gNzUwXG5cbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gbWF4TmFtZUxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Rhc2sgbmFtZSBleGNlZWRlZCA3NTAgY2hhcmFjdGVycycpXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUHJvamVjdCB0aXRsZSB0b28gc2hvcnQnKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBTdG9yYWdlLmdldFRhc2socHJvamVjdE5hbWUsIG5hbWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ011c3QgYmUgYSB1bmlxdWUgdGFzayBuYW1lJylcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gW11cbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlXG4gICAgfVxuXG4gICAgcmVuYW1lUHJvamVjdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0VGFza0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrTGlzdFxuICAgIH1cblxuICAgIHNldFRhc2tMaXN0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdmFsdWVcbiAgICB9XG5cbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy5fdGFza0xpc3QucHVzaCh0YXNrKVxuICAgIH1cblxuICAgIGdldFRhc2sodGFza1RpdGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrTGlzdC5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tUaXRsZSlcbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKHRhc2tUaXRsZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3Rhc2tMaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLmdldFRpdGxlID09PSB0YXNrVGl0bGVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLl90YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZENvb3JkaW5hdG9yLmpzJ1xuXG5jb25zdCBzdG9yYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjcmVhdGUgYW5kIHN0b3JlIGVtcHR5IGJvYXJkXG4gICAgY29uc3QgX2JvYXJkTmFtZSA9ICdib2FyZCdcblxuICAgIGZ1bmN0aW9uIF9nZXRCb2FyZCgpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKF9ib2FyZE5hbWUpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShfYm9hcmROYW1lLCBKU09OLnN0cmluZ2lmeShuZXcgQm9hcmQoKSkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib2FyZCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBuZXcgQm9hcmQoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oX2JvYXJkTmFtZSkpXG4gICAgICAgIClcblxuICAgICAgICBib2FyZC5zZXRQcm9qZWN0cyhcbiAgICAgICAgICAgIGJvYXJkXG4gICAgICAgICAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuICAgICAgICApXG5cbiAgICAgICAgLy8gYm9hcmQuc2V0UHJvamVjdHMoW10pO1xuICAgICAgICBjb25zdCBiID0gYm9hcmQuZ2V0UHJvamVjdHMoKVxuXG4gICAgICAgIGJvYXJkLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5zZXRUYXNrTGlzdChcbiAgICAgICAgICAgICAgICBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgIC5nZXRUYXNrTGlzdCgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGJvYXJkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3N0b3JlQm9hcmQoYm9hcmQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oX2JvYXJkTmFtZSwgSlNPTi5zdHJpbmdpZnkoYm9hcmQpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFsbFN0b3JlZFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gX2dldEJvYXJkKCkuZ2V0UHJvamVjdHMoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3JlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gX2dldEJvYXJkKClcbiAgICAgICAgYm9hcmQuYWRkUHJvamVjdChwcm9qZWN0KVxuICAgICAgICBfc3RvcmVCb2FyZChib2FyZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTdG9yZWRQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICByZXR1cm4gX2dldEJvYXJkKCkuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmVkUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBfZ2V0Qm9hcmQoKVxuICAgICAgICBib2FyZC5yZW1vdmVQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgX3N0b3JlQm9hcmQoYm9hcmQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuYW1lU3RvcmVkUHJvamVjdChvbGRQcm9qZWN0VGl0bGUsIG5ld1Byb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCBib2FyZCA9IF9nZXRCb2FyZCgpXG4gICAgICAgIGJvYXJkLnJlbmFtZVByb2plY3Qob2xkUHJvamVjdFRpdGxlLCBuZXdQcm9qZWN0VGl0bGUpXG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3JlVGFzayhwcm9qZWN0TmFtZSwgdGFzaykge1xuICAgICAgICBjb25zdCBib2FyZCA9IF9nZXRCb2FyZCgpXG4gICAgICAgIGJvYXJkLmFkZFRhc2socHJvamVjdE5hbWUsIHRhc2spXG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gX2dldEJvYXJkKClcbiAgICAgICAgYm9hcmQucmVtb3ZlVGFzayhwcm9qZWN0TmFtZSwgdGFza05hbWUpXG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgICAgIHJldHVybiBfZ2V0Qm9hcmQoKS5nZXRUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUYXNrcyhwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gX2dldEJvYXJkKCkuZ2V0VGFza3MocHJvamVjdE5hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcmVQcm9qZWN0LFxuICAgICAgICBnZXRTdG9yZWRQcm9qZWN0LFxuICAgICAgICByZW1vdmVTdG9yZWRQcm9qZWN0LFxuICAgICAgICByZW5hbWVTdG9yZWRQcm9qZWN0LFxuICAgICAgICBzdG9yZVRhc2ssXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgICAgIGdldFRhc2ssXG4gICAgICAgIGdldEFsbFN0b3JlZFByb2plY3RzLFxuICAgICAgICBnZXRUYXNrcyxcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VcblxuLyogZnVuY3Rpb24gX2dldEJvYXJkKCl7XG4gICAgICAgIHZhciBib2FyZCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJvYXJkQ29vcmRpbmF0b3IsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oX2JvYXJkTmFtZSkpKTtcblxuICAgICAgICBib2FyZC5wcm9qZWN0cyA9IGJvYXJkLnByb2plY3QubWFwKHByb2ogPT4ge1xuICAgICAgICAgICAgcHJvaiA9IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QsIEpTT04uc3RyaW5naWZ5KHByb2opKTtcbiAgICAgICAgICAgIHByb2oudGFza0xpc3QgPSBwcm9qLnRhc2tMaXN0Lm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG5ldyBUYXNrLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9qXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBib2FyZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zdG9yZUJvYXJkKGJvYXJkKXtcbiAgICAgICAgdmFyIGJvYXJkSlNPTiA9IGJvYXJkLnByb2plY3RzLm1hcChwcm9qID0+IHtcbiAgICAgICAgICAgIHByb2oudGFza0xpc3QgPSBwcm9qLnRhc2tMaXN0Lm1hcCh0YXNrID0+IEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShwcm9qKVxuICAgICAgICB9KVxuICAgICAgICBib2FyZEpTT04gPSBKU09OLnN0cmluZ2lmeShib2FyZEpTT04pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShfYm9hcmROYW1lLCBib2FyZEpTT04pO1xuICAgIH0gKi9cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLl9kZXNjID0gZGVzY1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuX25vdGVzID0gbm90ZXNcblxuICAgICAgICB0aGlzLl9tYXhUaXRsZSA9IDUwMFxuICAgICAgICB0aGlzLl9tYXhEZXNjID0gMTAwMFxuICAgICAgICB0aGlzLl9taW5UaXRsZSA9IDFcbiAgICAgICAgdGhpcy5fbWluRGVzYyA9IDFcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlXG4gICAgfVxuXG4gICAgc2V0VGl0bGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IHRoaXMuX21heFRpdGxlIHx8IHZhbHVlLmxlbmd0aCA8IHRoaXMuX21pblRpdGxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYEludmFsaWQgdGl0bGUgbGVuZ3RoICR7dmFsdWUubGVuZ3RofS8ke3RoaXMuX21heFRpdGxlfWBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IHRoaXMuX21heERlc2MgfHwgdmFsdWUubGVuZ3RoIDwgdGhpcy5fbWluVGl0bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgSW52YWxpZCBkZXNjcmlwdGlvbiBsZW5ndGggJHt2YWx1ZS5sZW5ndGh9LyR7dGhpcy5fbWF4RGVzY31gXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGVzYyA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGVcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKHZhbHVlKSB7XG4gICAgICAgIC8vIGNoZWNrXG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHlcbiAgICB9XG5cbiAgICBzZXRQcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICAvLyBjaGVja1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0IG5vdGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm90ZXNcbiAgICB9XG5cbiAgICBzZXQgbm90ZXModmFsdWUpIHtcbiAgICAgICAgLy8gY2hlY2tcbiAgICAgICAgdGhpcy5fbm90ZXMgPSB2YWx1ZVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlDb250cm9sbGVyLmpzJ1xuXG5jb25zdCB1aSA9IG5ldyBVc2VySW50ZXJmYWNlKClcbnVpLmxvYWRIb21lUGFnZSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
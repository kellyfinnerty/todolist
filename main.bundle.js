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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --dark-green: #002500;\n    --russian-green: #6A8D73;\n    --blanched-almond: #f0efeb;\n    --mydarkpurple: #5D576B;\n    --my-purple: #807891;\n    --task-header: #f0efeb;\n    --task-header-hover: #f8f8f6;\n    --background: #e69c7571;\n    --salmon: #f28482;\n    --pinky: #eeacab;\n}\n\nbody{\n    margin: 0;\n    font-family: Arial, sans-serif;\n    background-color: white;\n    color: #333;\n}\n\n.site-container{\n    display: grid;\n    /* grid-template-rows: 90px 745px; */\n    grid-template-rows: 90px 89.5vh;\n}\n\n.class-container{\n    display: grid;\n    grid-template-rows: repeat(3, auto);\n}\n\n#header{\n    align-self: center;\n    background-color: var(--salmon);\n    color: white;\n    padding: 5px;\n    padding-left: 2rem;\n    padding-top: 1rem;\n\n    box-shadow: 1px 0.5px 5px rgb(155, 155, 155);\n    position: relative;\n    z-index: 2;\n}\n\n.logo{\n    font-family: 'Bungee Shade', cursive;\n    font-size: 2.3rem;\n    cursor: default;\n}\n\n.display-container{\n    display: grid;\n    grid-template-columns: 17rem auto;\n    gap: 4%;\n}\n\n.add{\n    background-color: rgb(230, 163, 82);\n    background: radial-gradient(circle,rgba(157, 75, 211, 0.7) 20%,  rgba(167, 96, 214, 0.7)100%);\n    border: none;\n    color: white;\n}\n\n.add:hover{\n    background: radial-gradient(circle,rgba(131,58,180, .55) 20%,  rgba(146, 89, 184, 0.55)100%);\n    color: white;\n}\n\n.hidden{\n    display: none;\n}\n\n.active, .project:hover{\n    background: linear-gradient(90deg, rgba(131,58,180, 0.6) 0%, rgba(253,29,29, 0.6) 50%, rgba(252,176,69, 0.6) 100%);\n    color: white;\n}\n\n.project:hover .delete-project{\n    display: block;\n    cursor: pointer;\n}\n\nbutton{\n    background-color:white;\n    color: black;\n    border: solid .7px black;\n    border-radius: 10px;\n    padding: 4px 8px 4px 8px;\n    cursor: grab;\n}\n\n.project{\n    border-radius: 7px;\n    align-content: center;\n    margin-left: 0.8rem;\n\n    display: grid;\n    grid-template-columns: 10.5rem 1rem;\n    grid-gap: 0.5em;\n\n    cursor: pointer;\n    width: 95%;\n}\n\n#project-area{\n    background-color: var(--pinky);\n    padding: 1rem;\n    padding-right: 0.6em;\n}\n\n.project-title{\n    padding-left: 1.2em;\n\n    word-wrap: normal;\n    font-size: 0.95rem;\n}\n\n.project-category{\n    font-size: 1.15rem;\n    margin-left: 1.1em;\n    cursor: default;\n}\n\n#project-list{\n    overflow-y: scroll;\n    overflow-x: hidden;\n    margin: 0;\n    padding: 0;\n    max-height: 50vh;\n    max-width: 700px;\n\n    box-shadow: inset -10px -10px 10px 30px var(--pinky);\n    position: relative;\n    z-index: 1;\n}\n\n.delete-project{\n    display: none;\n    align-self: center;\n    justify-self: left;\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n    background-color: transparent;\n    color: white;\n    border: none;\n}\n\n.delete-project:hover{\n    background-color: white;\n    color: rgba(252,176,69,1);\n    border: none;\n}\n\n#project-form-container{\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto auto;\n    grid-template-areas: \n        'input input'\n        'add cancel'\n}\n\n#project-title{\n    grid-area: input;\n\n    width: 75%;\n    align-self: center;\n    justify-self: center;\n\n    padding: 0.2rem;\n    margin-left: 1.4rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    height: 1.5rem;\n}\n\n#cancel-add-project{\n    width: 30%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 0.5rem;\n}\n\n#add-project{\n    justify-self: right;\n    width: 25%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 2.3rem;\n}\n\n\n.logo, .project-category{\n    -webkit-user-select: none; /* Safari */        \n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* IE10+/Edge */\n    user-select: none; /* Standard */\n}\n\nh3{\n    font-weight: normal;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB;IACpB,sBAAsB;IACtB,4BAA4B;IAC5B,uBAAuB;IACvB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,8BAA8B;IAC9B,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,+BAA+B;IAC/B,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;;IAEjB,4CAA4C;IAC5C,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,OAAO;AACX;;AAEA;IACI,mCAAmC;IACnC,6FAA6F;IAC7F,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,4FAA4F;IAC5F,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kHAAkH;IAClH,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,wBAAwB;IACxB,mBAAmB;IACnB,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;;IAEnB,aAAa;IACb,mCAAmC;IACnC,eAAe;;IAEf,eAAe;IACf,UAAU;AACd;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;;IAEnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,gBAAgB;;IAEhB,oDAAoD;IACpD,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,6BAA6B;IAC7B,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B;;;AAGJ;;AAEA;IACI,gBAAgB;;IAEhB,UAAU;IACV,kBAAkB;IAClB,oBAAoB;;IAEpB,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,eAAe;IACf,yBAAyB;AAC7B;;;AAGA;IACI,yBAAyB,EAAE,WAAW;IACtC,sBAAsB,EAAE,YAAY;IACpC,qBAAqB,EAAE,eAAe;IACtC,iBAAiB,EAAE,aAAa;AACpC;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":[":root{\n    --dark-green: #002500;\n    --russian-green: #6A8D73;\n    --blanched-almond: #f0efeb;\n    --mydarkpurple: #5D576B;\n    --my-purple: #807891;\n    --task-header: #f0efeb;\n    --task-header-hover: #f8f8f6;\n    --background: #e69c7571;\n    --salmon: #f28482;\n    --pinky: #eeacab;\n}\n\nbody{\n    margin: 0;\n    font-family: Arial, sans-serif;\n    background-color: white;\n    color: #333;\n}\n\n.site-container{\n    display: grid;\n    /* grid-template-rows: 90px 745px; */\n    grid-template-rows: 90px 89.5vh;\n}\n\n.class-container{\n    display: grid;\n    grid-template-rows: repeat(3, auto);\n}\n\n#header{\n    align-self: center;\n    background-color: var(--salmon);\n    color: white;\n    padding: 5px;\n    padding-left: 2rem;\n    padding-top: 1rem;\n\n    box-shadow: 1px 0.5px 5px rgb(155, 155, 155);\n    position: relative;\n    z-index: 2;\n}\n\n.logo{\n    font-family: 'Bungee Shade', cursive;\n    font-size: 2.3rem;\n    cursor: default;\n}\n\n.display-container{\n    display: grid;\n    grid-template-columns: 17rem auto;\n    gap: 4%;\n}\n\n.add{\n    background-color: rgb(230, 163, 82);\n    background: radial-gradient(circle,rgba(157, 75, 211, 0.7) 20%,  rgba(167, 96, 214, 0.7)100%);\n    border: none;\n    color: white;\n}\n\n.add:hover{\n    background: radial-gradient(circle,rgba(131,58,180, .55) 20%,  rgba(146, 89, 184, 0.55)100%);\n    color: white;\n}\n\n.hidden{\n    display: none;\n}\n\n.active, .project:hover{\n    background: linear-gradient(90deg, rgba(131,58,180, 0.6) 0%, rgba(253,29,29, 0.6) 50%, rgba(252,176,69, 0.6) 100%);\n    color: white;\n}\n\n.project:hover .delete-project{\n    display: block;\n    cursor: pointer;\n}\n\nbutton{\n    background-color:white;\n    color: black;\n    border: solid .7px black;\n    border-radius: 10px;\n    padding: 4px 8px 4px 8px;\n    cursor: grab;\n}\n\n.project{\n    border-radius: 7px;\n    align-content: center;\n    margin-left: 0.8rem;\n\n    display: grid;\n    grid-template-columns: 10.5rem 1rem;\n    grid-gap: 0.5em;\n\n    cursor: pointer;\n    width: 95%;\n}\n\n#project-area{\n    background-color: var(--pinky);\n    padding: 1rem;\n    padding-right: 0.6em;\n}\n\n.project-title{\n    padding-left: 1.2em;\n\n    word-wrap: normal;\n    font-size: 0.95rem;\n}\n\n.project-category{\n    font-size: 1.15rem;\n    margin-left: 1.1em;\n    cursor: default;\n}\n\n#project-list{\n    overflow-y: scroll;\n    overflow-x: hidden;\n    margin: 0;\n    padding: 0;\n    max-height: 50vh;\n    max-width: 700px;\n\n    box-shadow: inset -10px -10px 10px 30px var(--pinky);\n    position: relative;\n    z-index: 1;\n}\n\n.delete-project{\n    display: none;\n    align-self: center;\n    justify-self: left;\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n    background-color: transparent;\n    color: white;\n    border: none;\n}\n\n.delete-project:hover{\n    background-color: white;\n    color: rgba(252,176,69,1);\n    border: none;\n}\n\n#project-form-container{\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto auto;\n    grid-template-areas: \n        'input input'\n        'add cancel'\n}\n\n#project-title{\n    grid-area: input;\n\n    width: 75%;\n    align-self: center;\n    justify-self: center;\n\n    padding: 0.2rem;\n    margin-left: 1.4rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    height: 1.5rem;\n}\n\n#cancel-add-project{\n    width: 30%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 0.5rem;\n}\n\n#add-project{\n    justify-self: right;\n    width: 25%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 2.3rem;\n}\n\n\n.logo, .project-category{\n    -webkit-user-select: none; /* Safari */        \n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* IE10+/Edge */\n    user-select: none; /* Standard */\n}\n\nh3{\n    font-weight: normal;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/task-style.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/task-style.css ***!
  \**********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --dark-green: #002500;\n    --russian-green: #6A8D73;\n    --blanched-almond: #f0efeb;\n    --mydarkpurple: #5D576B;\n    --my-purple: #807891;\n    --task-header: #f0efeb;\n    --task-header-hover: #f8f8f6;\n}\n\n#open-project-form, #open-task-form{\n    margin-left: 3.5rem;\n    margin-top: 2rem;\n    justify-self: center;\n    align-self: center;\n    grid-row-start: 1;\n    grid-row-end: 3;\n\n    padding: 0.6rem;\n    padding-right: 0.7rem;\n\n    font-size: 1rem;\n}\n\n#task-area{\n    padding: 3rem;\n    padding-top: 2.5rem;\n}\n\n.task-title{\n    font-size: 1.1em;\n    margin: 0.6em;\n}\n\n#task-list{\n    display: grid;\n    gap: 10px;\n}\n\n\n#open-task-form{\n    margin-left: 0;\n    margin-top: 15px;\n    margin-bottom: 20px;\n}\n\n.delete-task{\n    align-self: center;\n    justify-self: center;\n    height: 1.4rem;\n    width: 1.4rem;\n    border-radius: 30%;\n    display: none;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n    margin: 0;\n}\n\n.task-header:hover .delete-task{\n    display: block;\n}\n\n.delete-task:hover{\n    background-color: var(--my-purple);\n    color: white;\n}\n\n\n#curr-project-title{\n    margin-top: 2rem;\n    margin-bottom: 20px;\n    font-size: 1.8rem;\n    padding-bottom: 0.25rem;\n\n    cursor: default;\n\n    -webkit-user-select: none; /* Safari */        \n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* IE10+/Edge */\n    user-select: none; /* Standard */\n}\n\n.task-details, .task-title{\n    margin-left: 15px;\n}\n\n.task-details{\n    border: solid var(--task-header) 1px;\n    border-top: none;\n    border-radius: 0px 0px 3px 3px;\n\n    margin: 0;\n    padding: 0;\n    margin-right: 10%;\n\n    padding-left: 0.8rem;\n    padding-top: 0.4rem;\n    padding-bottom: 0.4rem;\n\n}\n\n.task-description, .task-priority{\nmargin: 0.65em;\n}\n.task-description{\n    font-style: italic;\n}\n\n.due-date{\n    align-self: center;\n    justify-self: right;\n    padding-right: 1rem;\n    font-size: 0.85rem;\n}\n\n.task-header{\n    background-color: var(--task-header);\n    margin: 0;\n    padding: 0;\n    border-radius: 3px;\n\n    display: grid;\n    grid-template-columns: 68% 26% 3% 3%;\n    margin-right: 10%;\n\n    cursor: pointer;\n}\n\n.task-header{\n    grid-template-columns: 74% 26%;\n}\n\n.task-header:hover{\n    grid-template-columns: 66% 26% 4% 4%;\n}\n\n.task-header:hover{\n    background-color: var(--task-header-hover);\n}\n\n.overdue{\n    color: red;\n}\n\n#add-task-header{\n    text-align: center;\n}\n\n.edit-task{\n    display: none;\n    align-self: center;\n    justify-self: center;\n    height: 1.8rem;\n    background-color: transparent;\n    border: none;\n}\n\n.task-header:hover .edit-task{\n    display: block;\n}\n\n.edit-task:hover{\n    background-color: var(--my-purple);\n    color: white;\n}\n\n.high{\n    border-left: red solid 4px;\n}\n\n.medium{\n    border-left: yellow solid 4px;\n}\n\n.low{\n    border-left: green solid 4px;\n}\n\n.task{\n    cursor: default;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/css/task-style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB;IACpB,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;;IAEf,eAAe;IACf,qBAAqB;;IAErB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;;AAGA;IACI,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,UAAU;IACV,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;;AAGA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;;IAEvB,eAAe;;IAEf,yBAAyB,EAAE,WAAW;IACtC,sBAAsB,EAAE,YAAY;IACpC,qBAAqB,EAAE,eAAe;IACtC,iBAAiB,EAAE,aAAa;AACpC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,8BAA8B;;IAE9B,SAAS;IACT,UAAU;IACV,iBAAiB;;IAEjB,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;;AAE1B;;AAEA;AACA,cAAc;AACd;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,SAAS;IACT,UAAU;IACV,kBAAkB;;IAElB,aAAa;IACb,oCAAoC;IACpC,iBAAiB;;IAEjB,eAAe;AACnB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,eAAe;AACnB","sourcesContent":[":root{\n    --dark-green: #002500;\n    --russian-green: #6A8D73;\n    --blanched-almond: #f0efeb;\n    --mydarkpurple: #5D576B;\n    --my-purple: #807891;\n    --task-header: #f0efeb;\n    --task-header-hover: #f8f8f6;\n}\n\n#open-project-form, #open-task-form{\n    margin-left: 3.5rem;\n    margin-top: 2rem;\n    justify-self: center;\n    align-self: center;\n    grid-row-start: 1;\n    grid-row-end: 3;\n\n    padding: 0.6rem;\n    padding-right: 0.7rem;\n\n    font-size: 1rem;\n}\n\n#task-area{\n    padding: 3rem;\n    padding-top: 2.5rem;\n}\n\n.task-title{\n    font-size: 1.1em;\n    margin: 0.6em;\n}\n\n#task-list{\n    display: grid;\n    gap: 10px;\n}\n\n\n#open-task-form{\n    margin-left: 0;\n    margin-top: 15px;\n    margin-bottom: 20px;\n}\n\n.delete-task{\n    align-self: center;\n    justify-self: center;\n    height: 1.4rem;\n    width: 1.4rem;\n    border-radius: 30%;\n    display: none;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n    margin: 0;\n}\n\n.task-header:hover .delete-task{\n    display: block;\n}\n\n.delete-task:hover{\n    background-color: var(--my-purple);\n    color: white;\n}\n\n\n#curr-project-title{\n    margin-top: 2rem;\n    margin-bottom: 20px;\n    font-size: 1.8rem;\n    padding-bottom: 0.25rem;\n\n    cursor: default;\n\n    -webkit-user-select: none; /* Safari */        \n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* IE10+/Edge */\n    user-select: none; /* Standard */\n}\n\n.task-details, .task-title{\n    margin-left: 15px;\n}\n\n.task-details{\n    border: solid var(--task-header) 1px;\n    border-top: none;\n    border-radius: 0px 0px 3px 3px;\n\n    margin: 0;\n    padding: 0;\n    margin-right: 10%;\n\n    padding-left: 0.8rem;\n    padding-top: 0.4rem;\n    padding-bottom: 0.4rem;\n\n}\n\n.task-description, .task-priority{\nmargin: 0.65em;\n}\n.task-description{\n    font-style: italic;\n}\n\n.due-date{\n    align-self: center;\n    justify-self: right;\n    padding-right: 1rem;\n    font-size: 0.85rem;\n}\n\n.task-header{\n    background-color: var(--task-header);\n    margin: 0;\n    padding: 0;\n    border-radius: 3px;\n\n    display: grid;\n    grid-template-columns: 68% 26% 3% 3%;\n    margin-right: 10%;\n\n    cursor: pointer;\n}\n\n.task-header{\n    grid-template-columns: 74% 26%;\n}\n\n.task-header:hover{\n    grid-template-columns: 66% 26% 4% 4%;\n}\n\n.task-header:hover{\n    background-color: var(--task-header-hover);\n}\n\n.overdue{\n    color: red;\n}\n\n#add-task-header{\n    text-align: center;\n}\n\n.edit-task{\n    display: none;\n    align-self: center;\n    justify-self: center;\n    height: 1.8rem;\n    background-color: transparent;\n    border: none;\n}\n\n.task-header:hover .edit-task{\n    display: block;\n}\n\n.edit-task:hover{\n    background-color: var(--my-purple);\n    color: white;\n}\n\n.high{\n    border-left: red solid 4px;\n}\n\n.medium{\n    border-left: yellow solid 4px;\n}\n\n.low{\n    border-left: green solid 4px;\n}\n\n.task{\n    cursor: default;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/taskform-style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/taskform-style.css ***!
  \**************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 110px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    padding-bottom: 30px;\n    border: 1px solid #888;\n    border-radius: 3.5px;\n    width: 50%;\n}\n\n/* The Close Button */\n.close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n\nlabel{\n    font-size: 0.9em;\n}\n\n.form-error{\n    font-size: 0.7em;\n    color: red;\n}\n\n.user-input{\n    margin: 1rem;\n    margin-top: 1.3rem;\n}\n\n#priority{\n    width: 85%;\n}\n\n.user-input{\n    margin-bottom: 10px;\n    padding-bottom: 20px;\n    position: relative;\n}\n\n.user-input label{\n    display: inline-block;\n    margin-bottom: 5px;\n}\n\n.user-input input, textarea{\n    border: 2px solid #f0f0f0;\n    border-radius: 4px;\n    display: block;\n    font-family: inherit;\n    font-size: 14px;\n    padding: 10px;\n    width: 95%;\n}\n\n#priority span {\n    float: left;\n}\n\n#priority label {\n    display: block;\n    float: left;\n    margin: 10px;\n    margin-left: 0px;\n}\n\n.user-input input[type='radio']{    \n    width: auto;\n    padding: 10px;\n    margin: 10px;\n    display: inherit;\n\n    float: left;\n}\n\n.user-input textarea{\n    resize: none;\n}\n\n.user-input input:focus, .user-input textarea:focus {\n    outline: 0;\n    border-color: #777;\n}\n\n.user-input.success input{\n    border-color: #2ecc71;\n}\n\n.user-input.error input{\n    border-color: #e74c3c;\n}\n\n.user-input i {\n    visibility: hidden;\n    position: absolute;\n    top: 40px;\n    right: 10px;\n}\n\n.user-input.success i.fa-check-circle {\n    color: #2ecc71;\n    visibility: visible;\n}\n\n.user-input.error i.fa-exclamation-circle {\n    color: #e74c3c;\n    visibility: visible;\n}\n\n.user-input small{\n    color: #e74c3c;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    visibility: hidden;\n}\n\n.form-control.error small {\n    visibility: visible;\n}\n\nform button {\n\tbackground: linear-gradient(90deg, rgba(131,58,180, 0.6) 0%, rgba(253,29,29, 0.6) 50%, rgba(252,176,69, 0.6) 100%);\n\tborder-radius: 4px;\n    border: none;\n\tcolor: #fff;\n\tdisplay: block;\n\tfont-family: inherit;\n\tfont-size: 16px;\n\tpadding: 14px;\n\tmargin-top: 20px;\n\twidth: 100%;\n}\n\n/* #newTask-dueDate, #newTask-description, #task-title, #add-task{\n    margin-left: 15px;\n    height: 2em;\n    padding-left: 0.4rem;\n    padding-right: 0.4rem;\n    width: 40%;\n}\n\n#add-task{\n    width: 105px;\n    height: 40px;\n\n    margin-top: 10px;\n\n    align-self: center;\n    justify-self: center;\n}\n\n#newTask-dueDate{\n    width: 8.11rem;\n} */", "",{"version":3,"sources":["webpack://./src/css/taskform-style.css"],"names":[],"mappings":"AAAA,2BAA2B;AAC3B;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,kBAAkB,EAAE,wBAAwB;IAC5C,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;AAC5D;;AAEA,kBAAkB;AAClB;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,sBAAsB;IACtB,oBAAoB;IACpB,UAAU;AACd;;AAEA,qBAAqB;AACrB;IACI,cAAc;IACd,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,aAAa;IACb,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,gBAAgB;;IAEhB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;CACC,kHAAkH;CAClH,kBAAkB;IACf,YAAY;CACf,WAAW;CACX,cAAc;CACd,oBAAoB;CACpB,eAAe;CACf,aAAa;CACb,gBAAgB;CAChB,WAAW;AACZ;;AAEA;;;;;;;;;;;;;;;;;;;;GAoBG","sourcesContent":["/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 110px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    padding-bottom: 30px;\n    border: 1px solid #888;\n    border-radius: 3.5px;\n    width: 50%;\n}\n\n/* The Close Button */\n.close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n\nlabel{\n    font-size: 0.9em;\n}\n\n.form-error{\n    font-size: 0.7em;\n    color: red;\n}\n\n.user-input{\n    margin: 1rem;\n    margin-top: 1.3rem;\n}\n\n#priority{\n    width: 85%;\n}\n\n.user-input{\n    margin-bottom: 10px;\n    padding-bottom: 20px;\n    position: relative;\n}\n\n.user-input label{\n    display: inline-block;\n    margin-bottom: 5px;\n}\n\n.user-input input, textarea{\n    border: 2px solid #f0f0f0;\n    border-radius: 4px;\n    display: block;\n    font-family: inherit;\n    font-size: 14px;\n    padding: 10px;\n    width: 95%;\n}\n\n#priority span {\n    float: left;\n}\n\n#priority label {\n    display: block;\n    float: left;\n    margin: 10px;\n    margin-left: 0px;\n}\n\n.user-input input[type='radio']{    \n    width: auto;\n    padding: 10px;\n    margin: 10px;\n    display: inherit;\n\n    float: left;\n}\n\n.user-input textarea{\n    resize: none;\n}\n\n.user-input input:focus, .user-input textarea:focus {\n    outline: 0;\n    border-color: #777;\n}\n\n.user-input.success input{\n    border-color: #2ecc71;\n}\n\n.user-input.error input{\n    border-color: #e74c3c;\n}\n\n.user-input i {\n    visibility: hidden;\n    position: absolute;\n    top: 40px;\n    right: 10px;\n}\n\n.user-input.success i.fa-check-circle {\n    color: #2ecc71;\n    visibility: visible;\n}\n\n.user-input.error i.fa-exclamation-circle {\n    color: #e74c3c;\n    visibility: visible;\n}\n\n.user-input small{\n    color: #e74c3c;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    visibility: hidden;\n}\n\n.form-control.error small {\n    visibility: visible;\n}\n\nform button {\n\tbackground: linear-gradient(90deg, rgba(131,58,180, 0.6) 0%, rgba(253,29,29, 0.6) 50%, rgba(252,176,69, 0.6) 100%);\n\tborder-radius: 4px;\n    border: none;\n\tcolor: #fff;\n\tdisplay: block;\n\tfont-family: inherit;\n\tfont-size: 16px;\n\tpadding: 14px;\n\tmargin-top: 20px;\n\twidth: 100%;\n}\n\n/* #newTask-dueDate, #newTask-description, #task-title, #add-task{\n    margin-left: 15px;\n    height: 2em;\n    padding-left: 0.4rem;\n    padding-right: 0.4rem;\n    width: 40%;\n}\n\n#add-task{\n    width: 105px;\n    height: 40px;\n\n    margin-top: 10px;\n\n    align-self: center;\n    justify-self: center;\n}\n\n#newTask-dueDate{\n    width: 8.11rem;\n} */"],"sourceRoot":""}]);
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

/***/ "./src/css/task-style.css":
/*!********************************!*\
  !*** ./src/css/task-style.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./task-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/task-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_task_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_task_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/css/taskform-style.css":
/*!************************************!*\
  !*** ./src/css/taskform-style.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskform_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./taskform-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/taskform-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskform_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskform_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_taskform_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_taskform_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
        this.today()
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
        deleteHTML.innerHTML = '&times'
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
            project.addEventListener('click', () => {
                UI.selectProject(project)
            })
        )
    }

    static deleteProject(event) {
        const projectDiv = event.target.parentElement
        const title = event.target.previousElementSibling.textContent

        if (projectDiv.classList.contains('active')) {
            this.displayNextProject(projectDiv)
        }

        projectDiv.remove() // remove project Div

        // remove from storage
        _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.default.removeStoredProject(title)
    }

    static displayNextProject(project) {
        // last project
        const nextProj = project.nextSibling
        console.log(project)
        const prevProj = project.previousSibling
        let selProj = null

        if (nextProj === null && prevProj === null) {
            document.getElementById('task-area').classList.toggle('hidden')
            document.getElementById('welcome').classList.toggle('hidden')
        } else if (nextProj === null) {
            selProj = prevProj
        } else {
            selProj = nextProj
        }

        selProj.classList.add('active')

        this.selectProject(selProj)
    }

    static selectProject(project) {
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

    static today() {
        document.getElementById('today').addEventListener('click', () => {
            const projs = Array.from(_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.default.getAllStoredProjects())
            projs.forEach((proj) => {
                proj.getTaskList().forEach((task) => {
                    const today = new Date()
                    // today = `${today.getFullYear()}-${today.getDate()}-${today.getMonth()}`
                    const taskDate = task.getDueDate()
                    // const taskDate = new Date(task.getDueDate())

                    today.setHours(0, 0, 0, 0)

                    if (today === taskDate) {
                        _displayModules_displayTask_js__WEBPACK_IMPORTED_MODULE_3__.default.displayTask(task)
                    }
                })
            })
        })
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
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm.js */ "./src/modules/displayModules/taskForm.js");
/* harmony import */ var _css_task_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/task-style.css */ "./src/css/task-style.css");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storageManager.js */ "./src/modules/storageManager.js");
// eslint-disable-next-line import/extensions
// import Task from '../task.js'


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
            this.displayTask(task)
        )

        const taskForm = new _taskForm_js__WEBPACK_IMPORTED_MODULE_0__.default()
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

        const taskTitle = document.createElement('h3')
        taskTitle.textContent = task.getTitle()
        taskTitle.classList.add('task-title')

        const dueDate = DisplayTask.displayDate(task.getDueDate())

        const edit = document.createElement('button')
        edit.innerHTML = `<i class="fas fa-edit"></i>`
        edit.classList.add('edit-task')

        const deleteTask = document.createElement('button')
        deleteTask.innerHTML = '&times'
        deleteTask.classList.add('delete-task')

        DisplayTask.addPriorityClass(taskHeaderDiv, task.getPriority())

        area.appendChild(taskDiv)
        taskDiv.appendChild(taskHeaderDiv)
        taskHeaderDiv.appendChild(taskTitle)
        taskHeaderDiv.appendChild(dueDate)
        taskHeaderDiv.appendChild(edit)
        taskHeaderDiv.appendChild(deleteTask)

        // EVENT LISTENERS
        deleteTask.addEventListener('click', () =>
            DisplayTask.deleteTask(deleteTask)
        )
        taskHeaderDiv.addEventListener('click', (e) => {
            this.expandTask(taskHeaderDiv, e.target)
        })
    }

    static displayDate(dueDate) {
        const dueDatePar = document.createElement('p')
        let formattedDate = dueDate

        try {
            formattedDate = `due ${format(new Date(dueDate), 'MM-dd-yyyy')}`
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
        const taskName = task.firstChild.firstChild.textContent
        const storedTask = _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.getTask(projTitle, taskName)

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
        const taskName = deleteBtn.previousElementSibling.textContent

        _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.removeTask(projectTitle, taskName)

        // remove HTML
        deleteBtn.parentElement.parentElement.remove()
    }

    static addPriorityClass(taskHTML, priority) {
        if (priority !== 'none') {
            taskHTML.classList.add(priority)
        }
    }
}


/***/ }),

/***/ "./src/modules/displayModules/taskForm.js":
/*!************************************************!*\
  !*** ./src/modules/displayModules/taskForm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskForm)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task.js */ "./src/modules/task.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storageManager.js */ "./src/modules/storageManager.js");
/* harmony import */ var _displayTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTask.js */ "./src/modules/displayModules/displayTask.js");
/* harmony import */ var _css_taskform_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/taskform-style.css */ "./src/css/taskform-style.css");
// eslint-disable-next-line import/extensions





class TaskForm {
    // eslint-disable-next-line class-methods-use-this
    initNewTaskForm() {
        const openNewProjButton = document.querySelector('#open-task-form')
        const closeModal = document.querySelector('.close')
        const modal = document.querySelector('.modal')
        const addTask = document.getElementById('add-task')
        const title = document.getElementById('task-title')

        openNewProjButton.addEventListener('click', TaskForm.openModal)
        closeModal.addEventListener('click', TaskForm.closeModal)
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                TaskForm.closeModal()
                // clear error messages!!
            }
        })

        title.addEventListener('input', () => {
            TaskForm.errorCheck()
        })

        addTask.addEventListener('click', (e) => {
            e.preventDefault()

            try {
                TaskForm.errorCheck()
            } catch {
                return
            }
            TaskForm.submitForm()
        })
    }

    static openModal() {
        document.querySelector('.modal').style.display = 'block'
    }

    static closeModal() {
        document.querySelector('.modal').style.display = 'none'
    }

    static getActiveProjectTitle() {
        return document.querySelector('.active').firstChild.textContent
    }

    static getInputs() {
        const priorityArr = Array.from(document.getElementsByName('priority'))
        return {
            title: document.getElementById('task-title'),
            description: document.getElementById('newTask-description'),
            date: document.getElementById('newTask-dueDate'),
            priority: TaskForm.getPriority(priorityArr),
        }
    }

    static submitForm() {
        const inputs = TaskForm.getInputs()
        const projectTitle = TaskForm.getActiveProjectTitle()

        const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(
            inputs.title.value.trim(),
            inputs.description.value.trim(),
            inputs.date.value.trim(),
            inputs.priority,
            'notes'
        )

        _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.default.storeTask(projectTitle, newTask)
        const taskDisplay = new _displayTask_js__WEBPACK_IMPORTED_MODULE_2__.default()
        taskDisplay.displayTask(newTask)

        inputs.title.value = ''
        inputs.description.value = ''
        const today = new Date()
        inputs.date.value = today.getDate()
        TaskForm.clearPriority(inputs.priority)
    }

    static clearPriority(priorities) {
        for (let i = 0; i < priorities.length; i += 1) {
            if (priorities[i].checked) {
                // eslint-disable-next-line no-param-reassign
                priorities[i].checked = false
            }
        }
    }

    static getPriority(priorities) {
        for (let i = 0; i < priorities.length; i += 1) {
            if (priorities[i].checked) {
                return priorities[i].value
            }
        }

        return 'none'
    }

    static errorCheck() {
        const projectTitle = TaskForm.getActiveProjectTitle()
        const inputs = TaskForm.getInputs()

        try {
            TaskForm.checkTaskTitle(projectTitle, inputs.title.value)
            document.getElementById('title-error').textContent = ''
        } catch (errorMessage) {
            document.getElementById('title-error').textContent = errorMessage
            throw Error('Failed data check')
        }
    }

    static checkTaskTitle(projectName, title) {
        const maxNameLength = 750

        if (title.length < 1) {
            throw Error('Project title too short')
        } else if (title.length > maxNameLength) {
            throw Error('Task name exceeded 750 characters')
        } else if (typeof _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.default.getTask(projectName, title) === 'object') {
            throw Error('Please enter a unique task name')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsYUFBYSxHQUFHLGVBQWU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxhQUFhLEdBQUcsY0FBYztBQUM1RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUMwRDs7QUFFMUQsZUFBZSxrRUFBYTtBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3NzL3Rhc2stc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Nzcy90YXNrZm9ybS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Nzcy90YXNrLXN0eWxlLmNzcz9jZjg5Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Nzcy90YXNrZm9ybS1zdHlsZS5jc3M/MjZmYiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvYm9hcmRDb29yZGluYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheU1vZHVsZXMvZGlzcGxheVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5TW9kdWxlcy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1kYXJrLWdyZWVuOiAjMDAyNTAwO1xcbiAgICAtLXJ1c3NpYW4tZ3JlZW46ICM2QThENzM7XFxuICAgIC0tYmxhbmNoZWQtYWxtb25kOiAjZjBlZmViO1xcbiAgICAtLW15ZGFya3B1cnBsZTogIzVENTc2QjtcXG4gICAgLS1teS1wdXJwbGU6ICM4MDc4OTE7XFxuICAgIC0tdGFzay1oZWFkZXI6ICNmMGVmZWI7XFxuICAgIC0tdGFzay1oZWFkZXItaG92ZXI6ICNmOGY4ZjY7XFxuICAgIC0tYmFja2dyb3VuZDogI2U2OWM3NTcxO1xcbiAgICAtLXNhbG1vbjogI2YyODQ4MjtcXG4gICAgLS1waW5reTogI2VlYWNhYjtcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuXFxuLnNpdGUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggNzQ1cHg7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCA4OS41dmg7XFxufVxcblxcbi5jbGFzcy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbG1vbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcblxcbiAgICBib3gtc2hhZG93OiAxcHggMC41cHggNXB4IHJnYigxNTUsIDE1NSwgMTU1KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubG9nb3tcXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUgU2hhZGUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTdyZW0gYXV0bztcXG4gICAgZ2FwOiA0JTtcXG59XFxuXFxuLmFkZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTYzLCA4Mik7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUscmdiYSgxNTcsIDc1LCAyMTEsIDAuNykgMjAlLCAgcmdiYSgxNjcsIDk2LCAyMTQsIDAuNykxMDAlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUscmdiYSgxMzEsNTgsMTgwLCAuNTUpIDIwJSwgIHJnYmEoMTQ2LCA4OSwgMTg0LCAwLjU1KTEwMCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUsIC5wcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTMxLDU4LDE4MCwgMC42KSAwJSwgcmdiYSgyNTMsMjksMjksIDAuNikgNTAlLCByZ2JhKDI1MiwxNzYsNjksIDAuNikgMTAwJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBzb2xpZCAuN3B4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4IDRweCA4cHg7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwLjVyZW0gMXJlbTtcXG4gICAgZ3JpZC1nYXA6IDAuNWVtO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbiNwcm9qZWN0LWFyZWF7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmt5KTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC42ZW07XFxufVxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMmVtO1xcblxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXRlZ29yeXtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMS4xZW07XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWF4LWhlaWdodDogNTB2aDtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTBweCAzMHB4IHZhcigtLXBpbmt5KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3R7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZ2JhKDI1MiwxNzYsNjksMSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAnaW5wdXQgaW5wdXQnXFxuICAgICAgICAnYWRkIGNhbmNlbCdcXG59XFxuXFxuI3Byb2plY3QtdGl0bGV7XFxuICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxuXFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNjYW5jZWwtYWRkLXByb2plY3R7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0e1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMCAwLjVyZW0gMCAyLjNyZW07XFxufVxcblxcblxcbi5sb2dvLCAucHJvamVjdC1jYXRlZ29yeXtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovICAgICAgICBcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXFxufVxcblxcbmgze1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCOztJQUVqQiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsT0FBTztBQUNYOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZGQUE2RjtJQUM3RixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRGQUE0RjtJQUM1RixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtIQUFrSDtJQUNsSCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxlQUFlOztJQUVmLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQixvREFBb0Q7SUFDcEQsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCOzs7QUFHSjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7O0lBRXBCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0kseUJBQXlCLEVBQUUsV0FBVztJQUN0QyxzQkFBc0IsRUFBRSxZQUFZO0lBQ3BDLHFCQUFxQixFQUFFLGVBQWU7SUFDdEMsaUJBQWlCLEVBQUUsYUFBYTtBQUNwQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1kYXJrLWdyZWVuOiAjMDAyNTAwO1xcbiAgICAtLXJ1c3NpYW4tZ3JlZW46ICM2QThENzM7XFxuICAgIC0tYmxhbmNoZWQtYWxtb25kOiAjZjBlZmViO1xcbiAgICAtLW15ZGFya3B1cnBsZTogIzVENTc2QjtcXG4gICAgLS1teS1wdXJwbGU6ICM4MDc4OTE7XFxuICAgIC0tdGFzay1oZWFkZXI6ICNmMGVmZWI7XFxuICAgIC0tdGFzay1oZWFkZXItaG92ZXI6ICNmOGY4ZjY7XFxuICAgIC0tYmFja2dyb3VuZDogI2U2OWM3NTcxO1xcbiAgICAtLXNhbG1vbjogI2YyODQ4MjtcXG4gICAgLS1waW5reTogI2VlYWNhYjtcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuXFxuLnNpdGUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggNzQ1cHg7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCA4OS41dmg7XFxufVxcblxcbi5jbGFzcy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbG1vbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcblxcbiAgICBib3gtc2hhZG93OiAxcHggMC41cHggNXB4IHJnYigxNTUsIDE1NSwgMTU1KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubG9nb3tcXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUgU2hhZGUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTdyZW0gYXV0bztcXG4gICAgZ2FwOiA0JTtcXG59XFxuXFxuLmFkZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTYzLCA4Mik7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUscmdiYSgxNTcsIDc1LCAyMTEsIDAuNykgMjAlLCAgcmdiYSgxNjcsIDk2LCAyMTQsIDAuNykxMDAlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUscmdiYSgxMzEsNTgsMTgwLCAuNTUpIDIwJSwgIHJnYmEoMTQ2LCA4OSwgMTg0LCAwLjU1KTEwMCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUsIC5wcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTMxLDU4LDE4MCwgMC42KSAwJSwgcmdiYSgyNTMsMjksMjksIDAuNikgNTAlLCByZ2JhKDI1MiwxNzYsNjksIDAuNikgMTAwJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBzb2xpZCAuN3B4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4IDRweCA4cHg7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwLjVyZW0gMXJlbTtcXG4gICAgZ3JpZC1nYXA6IDAuNWVtO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbiNwcm9qZWN0LWFyZWF7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmt5KTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC42ZW07XFxufVxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMmVtO1xcblxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXRlZ29yeXtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMS4xZW07XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWF4LWhlaWdodDogNTB2aDtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTBweCAzMHB4IHZhcigtLXBpbmt5KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3R7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZ2JhKDI1MiwxNzYsNjksMSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAnaW5wdXQgaW5wdXQnXFxuICAgICAgICAnYWRkIGNhbmNlbCdcXG59XFxuXFxuI3Byb2plY3QtdGl0bGV7XFxuICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxuXFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNjYW5jZWwtYWRkLXByb2plY3R7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0e1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMCAwLjVyZW0gMCAyLjNyZW07XFxufVxcblxcblxcbi5sb2dvLCAucHJvamVjdC1jYXRlZ29yeXtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovICAgICAgICBcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXFxufVxcblxcbmgze1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1kYXJrLWdyZWVuOiAjMDAyNTAwO1xcbiAgICAtLXJ1c3NpYW4tZ3JlZW46ICM2QThENzM7XFxuICAgIC0tYmxhbmNoZWQtYWxtb25kOiAjZjBlZmViO1xcbiAgICAtLW15ZGFya3B1cnBsZTogIzVENTc2QjtcXG4gICAgLS1teS1wdXJwbGU6ICM4MDc4OTE7XFxuICAgIC0tdGFzay1oZWFkZXI6ICNmMGVmZWI7XFxuICAgIC0tdGFzay1oZWFkZXItaG92ZXI6ICNmOGY4ZjY7XFxufVxcblxcbiNvcGVuLXByb2plY3QtZm9ybSwgI29wZW4tdGFzay1mb3Jte1xcbiAgICBtYXJnaW4tbGVmdDogMy41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcblxcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jdGFzay1hcmVhe1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbn1cXG5cXG4udGFzay10aXRsZXtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgbWFyZ2luOiAwLjZlbTtcXG59XFxuXFxuI3Rhc2stbGlzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cXG4jb3Blbi10YXNrLWZvcm17XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2t7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgICB3aWR0aDogMS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay1oZWFkZXI6aG92ZXIgLmRlbGV0ZS10YXNre1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teS1wdXJwbGUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbiNjdXJyLXByb2plY3QtdGl0bGV7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcXG5cXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcblxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi8gICAgICAgIFxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUxMCsvRWRnZSAqL1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgKi9cXG59XFxuXFxuLnRhc2stZGV0YWlscywgLnRhc2stdGl0bGV7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxze1xcbiAgICBib3JkZXI6IHNvbGlkIHZhcigtLXRhc2staGVhZGVyKSAxcHg7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggM3B4IDNweDtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjRyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxuXFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uLCAudGFzay1wcmlvcml0eXtcXG5tYXJnaW46IDAuNjVlbTtcXG59XFxuLnRhc2stZGVzY3JpcHRpb257XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmR1ZS1kYXRle1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXFxuLnRhc2staGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWhlYWRlcik7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY4JSAyNiUgMyUgMyU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWhlYWRlcntcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NCUgMjYlO1xcbn1cXG5cXG4udGFzay1oZWFkZXI6aG92ZXJ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjYlIDI2JSA0JSA0JTtcXG59XFxuXFxuLnRhc2staGVhZGVyOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWhlYWRlci1ob3Zlcik7XFxufVxcblxcbi5vdmVyZHVle1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jYWRkLXRhc2staGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lZGl0LXRhc2t7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMS44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGFzay1oZWFkZXI6aG92ZXIgLmVkaXQtdGFza3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5lZGl0LXRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15LXB1cnBsZSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZ2h7XFxuICAgIGJvcmRlci1sZWZ0OiByZWQgc29saWQgNHB4O1xcbn1cXG5cXG4ubWVkaXVte1xcbiAgICBib3JkZXItbGVmdDogeWVsbG93IHNvbGlkIDRweDtcXG59XFxuXFxuLmxvd3tcXG4gICAgYm9yZGVyLWxlZnQ6IGdyZWVuIHNvbGlkIDRweDtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy90YXNrLXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixlQUFlO0lBQ2YscUJBQXFCOztJQUVyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdUJBQXVCOztJQUV2QixlQUFlOztJQUVmLHlCQUF5QixFQUFFLFdBQVc7SUFDdEMsc0JBQXNCLEVBQUUsWUFBWTtJQUNwQyxxQkFBcUIsRUFBRSxlQUFlO0lBQ3RDLGlCQUFpQixFQUFFLGFBQWE7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLDhCQUE4Qjs7SUFFOUIsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7O0lBRWpCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCOztBQUUxQjs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGlCQUFpQjs7SUFFakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tZGFyay1ncmVlbjogIzAwMjUwMDtcXG4gICAgLS1ydXNzaWFuLWdyZWVuOiAjNkE4RDczO1xcbiAgICAtLWJsYW5jaGVkLWFsbW9uZDogI2YwZWZlYjtcXG4gICAgLS1teWRhcmtwdXJwbGU6ICM1RDU3NkI7XFxuICAgIC0tbXktcHVycGxlOiAjODA3ODkxO1xcbiAgICAtLXRhc2staGVhZGVyOiAjZjBlZmViO1xcbiAgICAtLXRhc2staGVhZGVyLWhvdmVyOiAjZjhmOGY2O1xcbn1cXG5cXG4jb3Blbi1wcm9qZWN0LWZvcm0sICNvcGVuLXRhc2stZm9ybXtcXG4gICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG5cXG4gICAgcGFkZGluZzogMC42cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjdyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3Rhc2stYXJlYXtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG59XFxuXFxuLnRhc2stdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIG1hcmdpbjogMC42ZW07XFxufVxcblxcbiN0YXNrLWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuI29wZW4tdGFzay1mb3Jte1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmRlbGV0ZS10YXNre1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgd2lkdGg6IDEuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2staGVhZGVyOmhvdmVyIC5kZWxldGUtdGFza3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kZWxldGUtdGFzazpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXktcHVycGxlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4jY3Vyci1wcm9qZWN0LXRpdGxle1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XFxuXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG5cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovICAgICAgICBcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXFxufVxcblxcbi50YXNrLWRldGFpbHMsIC50YXNrLXRpdGxle1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuLnRhc2stZGV0YWlsc3tcXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS10YXNrLWhlYWRlcikgMXB4O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDNweCAzcHg7XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC40cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcblxcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiwgLnRhc2stcHJpb3JpdHl7XFxubWFyZ2luOiAwLjY1ZW07XFxufVxcbi50YXNrLWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5kdWUtZGF0ZXtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxufVxcblxcbi50YXNrLWhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1oZWFkZXIpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2OCUgMjYlIDMlIDMlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1oZWFkZXJ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzQlIDI2JTtcXG59XFxuXFxuLnRhc2staGVhZGVyOmhvdmVye1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY2JSAyNiUgNCUgNCU7XFxufVxcblxcbi50YXNrLWhlYWRlcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1oZWFkZXItaG92ZXIpO1xcbn1cXG5cXG4ub3ZlcmR1ZXtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2FkZC10YXNrLWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZWRpdC10YXNre1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRhc2staGVhZGVyOmhvdmVyIC5lZGl0LXRhc2t7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZWRpdC10YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teS1wdXJwbGUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWdoe1xcbiAgICBib3JkZXItbGVmdDogcmVkIHNvbGlkIDRweDtcXG59XFxuXFxuLm1lZGl1bXtcXG4gICAgYm9yZGVyLWxlZnQ6IHllbGxvdyBzb2xpZCA0cHg7XFxufVxcblxcbi5sb3d7XFxuICAgIGJvcmRlci1sZWZ0OiBncmVlbiBzb2xpZCA0cHg7XFxufVxcblxcbi50YXNre1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBwYWRkaW5nLXRvcDogMTEwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgYm9yZGVyLXJhZGl1czogMy41cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYWFhYTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsIC5jbG9zZTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5mb3JtLWVycm9ye1xcbiAgICBmb250LXNpemU6IDAuN2VtO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udXNlci1pbnB1dHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjNyZW07XFxufVxcblxcbiNwcmlvcml0eXtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLnVzZXItaW5wdXR7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi51c2VyLWlucHV0IGxhYmVse1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnVzZXItaW5wdXQgaW5wdXQsIHRleHRhcmVhe1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjBmMGYwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jcHJpb3JpdHkgc3BhbiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4jcHJpb3JpdHkgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxuXFxuLnVzZXItaW5wdXQgaW5wdXRbdHlwZT0ncmFkaW8nXXsgICAgXFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxuXFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4udXNlci1pbnB1dCB0ZXh0YXJlYXtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udXNlci1pbnB1dCBpbnB1dDpmb2N1cywgLnVzZXItaW5wdXQgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXItY29sb3I6ICM3Nzc7XFxufVxcblxcbi51c2VyLWlucHV0LnN1Y2Nlc3MgaW5wdXR7XFxuICAgIGJvcmRlci1jb2xvcjogIzJlY2M3MTtcXG59XFxuXFxuLnVzZXItaW5wdXQuZXJyb3IgaW5wdXR7XFxuICAgIGJvcmRlci1jb2xvcjogI2U3NGMzYztcXG59XFxuXFxuLnVzZXItaW5wdXQgaSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udXNlci1pbnB1dC5zdWNjZXNzIGkuZmEtY2hlY2stY2lyY2xlIHtcXG4gICAgY29sb3I6ICMyZWNjNzE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi51c2VyLWlucHV0LmVycm9yIGkuZmEtZXhjbGFtYXRpb24tY2lyY2xlIHtcXG4gICAgY29sb3I6ICNlNzRjM2M7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi51c2VyLWlucHV0IHNtYWxse1xcbiAgICBjb2xvcjogI2U3NGMzYztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmZvcm0tY29udHJvbC5lcnJvciBzbWFsbCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTMxLDU4LDE4MCwgMC42KSAwJSwgcmdiYSgyNTMsMjksMjksIDAuNikgNTAlLCByZ2JhKDI1MiwxNzYsNjksIDAuNikgMTAwJSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmc6IDE0cHg7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogI25ld1Rhc2stZHVlRGF0ZSwgI25ld1Rhc2stZGVzY3JpcHRpb24sICN0YXNrLXRpdGxlLCAjYWRkLXRhc2t7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNHJlbTtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuI2FkZC10YXNre1xcbiAgICB3aWR0aDogMTA1cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI25ld1Rhc2stZHVlRGF0ZXtcXG4gICAgd2lkdGg6IDguMTFyZW07XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGFza2Zvcm0tc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUM1RDs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7O0lBRWhCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0Msa0hBQWtIO0NBQ2xILGtCQUFrQjtJQUNmLFlBQVk7Q0FDZixXQUFXO0NBQ1gsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBwYWRkaW5nLXRvcDogMTEwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgYm9yZGVyLXJhZGl1czogMy41cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYWFhYTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsIC5jbG9zZTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5mb3JtLWVycm9ye1xcbiAgICBmb250LXNpemU6IDAuN2VtO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udXNlci1pbnB1dHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjNyZW07XFxufVxcblxcbiNwcmlvcml0eXtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLnVzZXItaW5wdXR7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi51c2VyLWlucHV0IGxhYmVse1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnVzZXItaW5wdXQgaW5wdXQsIHRleHRhcmVhe1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjBmMGYwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jcHJpb3JpdHkgc3BhbiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4jcHJpb3JpdHkgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxuXFxuLnVzZXItaW5wdXQgaW5wdXRbdHlwZT0ncmFkaW8nXXsgICAgXFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxuXFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4udXNlci1pbnB1dCB0ZXh0YXJlYXtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udXNlci1pbnB1dCBpbnB1dDpmb2N1cywgLnVzZXItaW5wdXQgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXItY29sb3I6ICM3Nzc7XFxufVxcblxcbi51c2VyLWlucHV0LnN1Y2Nlc3MgaW5wdXR7XFxuICAgIGJvcmRlci1jb2xvcjogIzJlY2M3MTtcXG59XFxuXFxuLnVzZXItaW5wdXQuZXJyb3IgaW5wdXR7XFxuICAgIGJvcmRlci1jb2xvcjogI2U3NGMzYztcXG59XFxuXFxuLnVzZXItaW5wdXQgaSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udXNlci1pbnB1dC5zdWNjZXNzIGkuZmEtY2hlY2stY2lyY2xlIHtcXG4gICAgY29sb3I6ICMyZWNjNzE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi51c2VyLWlucHV0LmVycm9yIGkuZmEtZXhjbGFtYXRpb24tY2lyY2xlIHtcXG4gICAgY29sb3I6ICNlNzRjM2M7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi51c2VyLWlucHV0IHNtYWxse1xcbiAgICBjb2xvcjogI2U3NGMzYztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmZvcm0tY29udHJvbC5lcnJvciBzbWFsbCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTMxLDU4LDE4MCwgMC42KSAwJSwgcmdiYSgyNTMsMjksMjksIDAuNikgNTAlLCByZ2JhKDI1MiwxNzYsNjksIDAuNikgMTAwJSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmc6IDE0cHg7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogI25ld1Rhc2stZHVlRGF0ZSwgI25ld1Rhc2stZGVzY3JpcHRpb24sICN0YXNrLXRpdGxlLCAjYWRkLXRhc2t7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNHJlbTtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuI2FkZC10YXNre1xcbiAgICB3aWR0aDogMTA1cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI25ld1Rhc2stZHVlRGF0ZXtcXG4gICAgd2lkdGg6IDguMTFyZW07XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2stc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrZm9ybS1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tmb3JtLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkQ29vcmRpbmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wcm9qZWN0cyA9IFtdXG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0c1xuICAgIH1cblxuICAgIHNldFByb2plY3RzKHByb2pzKSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3RzID0gcHJvanNcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5fcHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QodGl0bGUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpID09PSB0aXRsZVxuICAgICAgICApXG4gICAgICAgIHRoaXMuX3Byb2plY3RzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHRpdGxlKVxuICAgIH1cblxuICAgIHJlbmFtZVByb2plY3Qob2xkVGl0bGUsIG5ld1RpdGxlKSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSB0aGlzLmdldFByb2plY3Qob2xkVGl0bGUpXG4gICAgICAgIHByb2oucmVuYW1lUHJvamVjdChuZXdUaXRsZSlcbiAgICB9XG5cbiAgICBhZGRUYXNrKHByb2plY3RUaXRsZSwgdGFzaykge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgcHJvai5hZGRUYXNrKHRhc2spXG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgcHJvai5yZW1vdmVUYXNrKHRhc2tUaXRsZSlcbiAgICB9XG5cbiAgICBnZXRUYXNrKHByb2plY3RUaXRsZSwgdGFza1RpdGxlKSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSB0aGlzLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxuICAgICAgICByZXR1cm4gcHJvai5nZXRUYXNrKHRhc2tUaXRsZSlcbiAgICB9XG5cbiAgICBnZXRUYXNrcyhwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgICAgIHJldHVybiBwcm9qLmdldFRhc2tMaXN0KClcbiAgICB9XG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZXh0ZW5zaW9uc1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlTWFuYWdlci5qcydcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcydcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZXh0ZW5zaW9uc1xuaW1wb3J0IERpc3BsYXlUYXNrIGZyb20gJy4vZGlzcGxheU1vZHVsZXMvZGlzcGxheVRhc2suanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIGxvYWRIb21lUGFnZSgpIHtcbiAgICAgICAgVUkubG9hZFByb2plY3RzKClcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFByb2plY3RzKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlBbGxQcm9qZWN0cygpXG4gICAgICAgIHRoaXMuaW5pdFByb2plY3RCdXR0b25zKClcbiAgICAgICAgdGhpcy5pbml0TmV3UHJvamVjdEJ1dHRvbnMoKVxuICAgICAgICB0aGlzLnRvZGF5KClcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheUFsbFByb2plY3RzKCkge1xuICAgICAgICBTdG9yYWdlLmdldEFsbFN0b3JlZFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdChwcm9qZWN0KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IHByb2plY3QuZ2V0VGl0bGUoKVxuXG4gICAgICAgIGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qRGl2LmlkID0gcHJvalRpdGxlXG4gICAgICAgIHByb2pEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKS5hcHBlbmRDaGlsZChwcm9qRGl2KVxuXG4gICAgICAgIGNvbnN0IHRpdGxlSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgdGl0bGVIVE1MLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxuICAgICAgICB0aXRsZUhUTUwudGV4dENvbnRlbnQgPSBwcm9qVGl0bGVcblxuICAgICAgICBwcm9qRGl2LmFwcGVuZENoaWxkKHRpdGxlSFRNTClcblxuICAgICAgICBjb25zdCBkZWxldGVIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsZXRlSFRNTC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpXG4gICAgICAgIGRlbGV0ZUhUTUwuaW5uZXJIVE1MID0gJyZ0aW1lcydcbiAgICAgICAgZGVsZXRlSFRNTC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0KGV2ZW50KVxuICAgICAgICB9KVxuICAgICAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUhUTUwpXG4gICAgfVxuXG4gICAgc3RhdGljIGluaXROZXdQcm9qZWN0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3Qgb3Blbk5ld1Byb2pCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1wcm9qZWN0LWZvcm0nKVxuICAgICAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjY2FuY2VsLWFkZC1wcm9qZWN0J1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKVxuXG4gICAgICAgIG9wZW5OZXdQcm9qQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVQcm9qZWN0Rm9ybSlcbiAgICAgICAgY2FuY2VsTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlUHJvamVjdEZvcm0pXG4gICAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBVSS5jcmVhdGVQcm9qZWN0KClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9nZ2xlUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXByb2plY3QtZm9ybScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpKVxuXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+XG4gICAgICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFVJLnNlbGVjdFByb2plY3QocHJvamVjdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdChldmVudCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgICAgY29uc3QgdGl0bGUgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudFxuXG4gICAgICAgIGlmIChwcm9qZWN0RGl2LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU5leHRQcm9qZWN0KHByb2plY3REaXYpXG4gICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0RGl2LnJlbW92ZSgpIC8vIHJlbW92ZSBwcm9qZWN0IERpdlxuXG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIHN0b3JhZ2VcbiAgICAgICAgU3RvcmFnZS5yZW1vdmVTdG9yZWRQcm9qZWN0KHRpdGxlKVxuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5TmV4dFByb2plY3QocHJvamVjdCkge1xuICAgICAgICAvLyBsYXN0IHByb2plY3RcbiAgICAgICAgY29uc3QgbmV4dFByb2ogPSBwcm9qZWN0Lm5leHRTaWJsaW5nXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgICAgIGNvbnN0IHByZXZQcm9qID0gcHJvamVjdC5wcmV2aW91c1NpYmxpbmdcbiAgICAgICAgbGV0IHNlbFByb2ogPSBudWxsXG5cbiAgICAgICAgaWYgKG5leHRQcm9qID09PSBudWxsICYmIHByZXZQcm9qID09PSBudWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1hcmVhJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0UHJvaiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsUHJvaiA9IHByZXZQcm9qXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxQcm9qID0gbmV4dFByb2pcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbFByb2ouY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICB0aGlzLnNlbGVjdFByb2plY3Qoc2VsUHJvailcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VsZWN0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHByb2plY3QgaGFzIGJlZW4gZGVsZXRlZFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgU3RvcmFnZS5nZXRTdG9yZWRQcm9qZWN0KHByb2plY3QuZmlyc3RDaGlsZC50ZXh0Q29udGVudCkgIT09XG4gICAgICAgICAgICAnb2JqZWN0J1xuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKSlcblxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiBwcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgICAgY29uc3QgdGFza01hc3RlciA9IG5ldyBEaXNwbGF5VGFzaygpXG4gICAgICAgIHRhc2tNYXN0ZXIuY3JlYXRlVGFza0JvYXJkKHByb2plY3QpXG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrUHJvamVjdFVzZXJJbnB1dCh0aXRsZSkge1xuICAgICAgICBjb25zdCBtYXhUaXRsZUxlbmd0aCA9IDUwMFxuXG4gICAgICAgIGlmICh0aXRsZS5sZW5ndGggPiBtYXhUaXRsZUxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Byb2plY3QgdGl0bGUgZXhjZWVkZWQgNTAwIGNoYXJhY3RlcnMnKVxuICAgICAgICB9IGVsc2UgaWYgKHRpdGxlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdQcm9qZWN0IHRpdGxlIHRvbyBzaG9ydCcpXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIFN0b3JhZ2UuZ2V0U3RvcmVkUHJvamVjdCh0aXRsZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB1bmlxdWUgdGl0bGVcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdNdXN0IGJlIHVuaXF1ZSBwcm9qZWN0IHRpdGxlJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyIG1ldGhvZFxuICAgIHN0YXRpYyBjcmVhdGVQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJykudmFsdWVcblxuICAgICAgICAvLyBkbyBub3RoaW5nIGlmIHRpdGxlIGlzIGVtcHR5IHN0cmluZ1xuICAgICAgICBpZiAodGl0bGUgPCAxKSByZXR1cm5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1Byb2plY3RVc2VySW5wdXQodGl0bGUpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qID0gbmV3IFByb2plY3QodGl0bGUpXG4gICAgICAgIFN0b3JhZ2Uuc3RvcmVQcm9qZWN0KHByb2opXG4gICAgICAgIHRoaXMuZGlzcGxheVByb2plY3QocHJvailcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpLnZhbHVlID0gJydcblxuICAgICAgICB0aGlzLmluaXRQcm9qZWN0QnV0dG9ucygpXG4gICAgfVxuXG4gICAgc3RhdGljIHRvZGF5KCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2pzID0gQXJyYXkuZnJvbShTdG9yYWdlLmdldEFsbFN0b3JlZFByb2plY3RzKCkpXG4gICAgICAgICAgICBwcm9qcy5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvai5nZXRUYXNrTGlzdCgpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZGF5ID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHt0b2RheS5nZXREYXRlKCl9LSR7dG9kYXkuZ2V0TW9udGgoKX1gXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gdGFzay5nZXREdWVEYXRlKClcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmdldER1ZURhdGUoKSlcblxuICAgICAgICAgICAgICAgICAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2RheSA9PT0gdGFza0RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3BsYXlUYXNrLmRpc3BsYXlUYXNrKHRhc2spXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbi8vIGltcG9ydCBUYXNrIGZyb20gJy4uL3Rhc2suanMnXG5pbXBvcnQgVGFza0Zvcm0gZnJvbSAnLi90YXNrRm9ybS5qcydcbmltcG9ydCAnLi4vLi4vY3NzL3Rhc2stc3R5bGUuY3NzJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuLi9zdG9yYWdlTWFuYWdlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRhc2sge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgY3JlYXRlVGFza0JvYXJkKHByb2plY3QpIHtcbiAgICAgICAgRGlzcGxheVRhc2suY2xlYXJUYXNrQm9hcmQoKVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYXJlYScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC5maXJzdENoaWxkLnRleHRDb250ZW50XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgJ2N1cnItcHJvamVjdC10aXRsZSdcbiAgICAgICAgKS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RUaXRsZX1gXG5cbiAgICAgICAgQXJyYXkuZnJvbShTdG9yYWdlLmdldFRhc2tzKHByb2plY3RUaXRsZSkpLmZvckVhY2goKHRhc2spID0+XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUYXNrKHRhc2spXG4gICAgICAgIClcblxuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IG5ldyBUYXNrRm9ybSgpXG4gICAgICAgIHRhc2tGb3JtLmluaXROZXdUYXNrRm9ybSgpXG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyVGFza0JvYXJkKCkge1xuICAgICAgICBjb25zdCB0YXNrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSlcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4gdGFzay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhc2spKVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZGlzcGxheVRhc2sodGFzaykge1xuICAgICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpXG5cbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpXG5cbiAgICAgICAgY29uc3QgdGFza0hlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInKVxuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJylcblxuICAgICAgICBjb25zdCBkdWVEYXRlID0gRGlzcGxheVRhc2suZGlzcGxheURhdGUodGFzay5nZXREdWVEYXRlKCkpXG5cbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGVkaXQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+YFxuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFzaycpXG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRlbGV0ZVRhc2suaW5uZXJIVE1MID0gJyZ0aW1lcydcbiAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzaycpXG5cbiAgICAgICAgRGlzcGxheVRhc2suYWRkUHJpb3JpdHlDbGFzcyh0YXNrSGVhZGVyRGl2LCB0YXNrLmdldFByaW9yaXR5KCkpXG5cbiAgICAgICAgYXJlYS5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tIZWFkZXJEaXYpXG4gICAgICAgIHRhc2tIZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgICAgICB0YXNrSGVhZGVyRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgICAgIHRhc2tIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZWRpdClcbiAgICAgICAgdGFza0hlYWRlckRpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrKVxuXG4gICAgICAgIC8vIEVWRU5UIExJU1RFTkVSU1xuICAgICAgICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgIERpc3BsYXlUYXNrLmRlbGV0ZVRhc2soZGVsZXRlVGFzaylcbiAgICAgICAgKVxuICAgICAgICB0YXNrSGVhZGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kVGFzayh0YXNrSGVhZGVyRGl2LCBlLnRhcmdldClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheURhdGUoZHVlRGF0ZSkge1xuICAgICAgICBjb25zdCBkdWVEYXRlUGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gZHVlRGF0ZVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gYGR1ZSAke2Zvcm1hdChuZXcgRGF0ZShkdWVEYXRlKSwgJ01NLWRkLXl5eXknKX1gXG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gYGR1ZSAke2Zvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUoZHVlRGF0ZSksIHtcbiAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWUsXG4gICAgICAgICAgICB9KX1gXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIGR1ZURhdGVQYXIudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWREYXRlXG4gICAgICAgIGR1ZURhdGVQYXIuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKVxuXG4gICAgICAgIGlmIChmb3JtYXR0ZWREYXRlLmluY2x1ZGVzKCdhZ28nKSkge1xuICAgICAgICAgICAgZHVlRGF0ZVBhci5jbGFzc0xpc3QuYWRkKCdvdmVyZHVlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkdWVEYXRlUGFyXG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBpbml0aWFsaXplVGFza0J1dHRvbnMoKSB7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS10YXNrJykpLmZvckVhY2goXG4gICAgICAgICAgICAoZGVsZXRlQnRuKSA9PlxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIERpc3BsYXlUYXNrLmRlbGV0ZVRhc2soZGVsZXRlQnRuKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWhlYWRlcicpKS5mb3JFYWNoKCh0YXNrKSA9PlxuICAgICAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmR0YXNrKHRhc2ssIGUudGFyZ2V0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZXhwYW5kVGFzayh0YXNrLCB0YXNrSGVhZGVyKSB7XG4gICAgICAgIGlmICh0YXNrSGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnZWRpdC10YXNrJykpIHJldHVyblxuICAgICAgICBpZiAodGFza0hlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS10YXNrJykpIHJldHVyblxuICAgICAgICBpZiAoIXRhc2sucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgRGlzcGxheVRhc2sub3BlblRhc2sodGFzay5wYXJlbnROb2RlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRGlzcGxheVRhc2suY2xvc2VUYXNrKHRhc2sucGFyZW50Tm9kZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBY3RpdmVQcm9qZWN0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IERpc3BsYXlUYXNrLmdldEFjdGl2ZVByb2plY3RUaXRsZSgpXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFzay5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgY29uc3Qgc3RvcmVkVGFzayA9IFN0b3JhZ2UuZ2V0VGFzayhwcm9qVGl0bGUsIHRhc2tOYW1lKVxuXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1leHBhbmRlZCcpXG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscycpXG5cbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKVxuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gc3RvcmVkVGFzay5nZXREZXNjcmlwdGlvbigpXG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eScpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5VHh0ID0gc3RvcmVkVGFzay5nZXRQcmlvcml0eSgpXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke1xuICAgICAgICAgICAgcHJpb3JpdHlUeHRbMF0udG9VcHBlckNhc2UoKSArIHByaW9yaXR5VHh0LnN1YnN0cmluZygxKVxuICAgICAgICB9YFxuXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzYylcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgIH1cblxuICAgIHN0YXRpYyBjbG9zZVRhc2sodGFzaykge1xuICAgICAgICB0YXNrLnJlbW92ZUNoaWxkKHRhc2suZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1kZXRhaWxzJylbMF0pXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1leHBhbmRlZCcpXG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVRhc2soZGVsZXRlQnRuKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IERpc3BsYXlUYXNrLmdldEFjdGl2ZVByb2plY3RUaXRsZSgpXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZGVsZXRlQnRuLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnRcblxuICAgICAgICBTdG9yYWdlLnJlbW92ZVRhc2socHJvamVjdFRpdGxlLCB0YXNrTmFtZSlcblxuICAgICAgICAvLyByZW1vdmUgSFRNTFxuICAgICAgICBkZWxldGVCdG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFByaW9yaXR5Q2xhc3ModGFza0hUTUwsIHByaW9yaXR5KSB7XG4gICAgICAgIGlmIChwcmlvcml0eSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICB0YXNrSFRNTC5jbGFzc0xpc3QuYWRkKHByaW9yaXR5KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zXG5pbXBvcnQgVGFzayBmcm9tICcuLi90YXNrLmpzJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi4vc3RvcmFnZU1hbmFnZXIuanMnXG5pbXBvcnQgRGlzcGxheVRhc2sgZnJvbSAnLi9kaXNwbGF5VGFzay5qcydcbmltcG9ydCAnLi4vLi4vY3NzL3Rhc2tmb3JtLXN0eWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0Zvcm0ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgaW5pdE5ld1Rhc2tGb3JtKCkge1xuICAgICAgICBjb25zdCBvcGVuTmV3UHJvakJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXRhc2stZm9ybScpXG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKVxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJylcblxuICAgICAgICBvcGVuTmV3UHJvakJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFRhc2tGb3JtLm9wZW5Nb2RhbClcbiAgICAgICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFRhc2tGb3JtLmNsb3NlTW9kYWwpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgVGFza0Zvcm0uY2xvc2VNb2RhbCgpXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgZXJyb3IgbWVzc2FnZXMhIVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgVGFza0Zvcm0uZXJyb3JDaGVjaygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBUYXNrRm9ybS5lcnJvckNoZWNrKClcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVGFza0Zvcm0uc3VibWl0Rm9ybSgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBY3RpdmVQcm9qZWN0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnB1dHMoKSB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5QXJyID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZScpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrLWRlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFzay1kdWVEYXRlJyksXG4gICAgICAgICAgICBwcmlvcml0eTogVGFza0Zvcm0uZ2V0UHJpb3JpdHkocHJpb3JpdHlBcnIpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHN1Ym1pdEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IFRhc2tGb3JtLmdldElucHV0cygpXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IFRhc2tGb3JtLmdldEFjdGl2ZVByb2plY3RUaXRsZSgpXG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgaW5wdXRzLnRpdGxlLnZhbHVlLnRyaW0oKSxcbiAgICAgICAgICAgIGlucHV0cy5kZXNjcmlwdGlvbi52YWx1ZS50cmltKCksXG4gICAgICAgICAgICBpbnB1dHMuZGF0ZS52YWx1ZS50cmltKCksXG4gICAgICAgICAgICBpbnB1dHMucHJpb3JpdHksXG4gICAgICAgICAgICAnbm90ZXMnXG4gICAgICAgIClcblxuICAgICAgICBTdG9yYWdlLnN0b3JlVGFzayhwcm9qZWN0VGl0bGUsIG5ld1Rhc2spXG4gICAgICAgIGNvbnN0IHRhc2tEaXNwbGF5ID0gbmV3IERpc3BsYXlUYXNrKClcbiAgICAgICAgdGFza0Rpc3BsYXkuZGlzcGxheVRhc2sobmV3VGFzaylcblxuICAgICAgICBpbnB1dHMudGl0bGUudmFsdWUgPSAnJ1xuICAgICAgICBpbnB1dHMuZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgaW5wdXRzLmRhdGUudmFsdWUgPSB0b2RheS5nZXREYXRlKClcbiAgICAgICAgVGFza0Zvcm0uY2xlYXJQcmlvcml0eShpbnB1dHMucHJpb3JpdHkpXG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyUHJpb3JpdHkocHJpb3JpdGllcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXRpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChwcmlvcml0aWVzW2ldLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgICBwcmlvcml0aWVzW2ldLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFByaW9yaXR5KHByaW9yaXRpZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAocHJpb3JpdGllc1tpXS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByaW9yaXRpZXNbaV0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnbm9uZSdcbiAgICB9XG5cbiAgICBzdGF0aWMgZXJyb3JDaGVjaygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gVGFza0Zvcm0uZ2V0QWN0aXZlUHJvamVjdFRpdGxlKClcbiAgICAgICAgY29uc3QgaW5wdXRzID0gVGFza0Zvcm0uZ2V0SW5wdXRzKClcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgVGFza0Zvcm0uY2hlY2tUYXNrVGl0bGUocHJvamVjdFRpdGxlLCBpbnB1dHMudGl0bGUudmFsdWUpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtZXJyb3InKS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWVycm9yJykudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2VcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdGYWlsZWQgZGF0YSBjaGVjaycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tUYXNrVGl0bGUocHJvamVjdE5hbWUsIHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IG1heE5hbWVMZW5ndGggPSA3NTBcblxuICAgICAgICBpZiAodGl0bGUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Byb2plY3QgdGl0bGUgdG9vIHNob3J0JylcbiAgICAgICAgfSBlbHNlIGlmICh0aXRsZS5sZW5ndGggPiBtYXhOYW1lTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVGFzayBuYW1lIGV4Y2VlZGVkIDc1MCBjaGFyYWN0ZXJzJylcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgU3RvcmFnZS5nZXRUYXNrKHByb2plY3ROYW1lLCB0aXRsZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUGxlYXNlIGVudGVyIGEgdW5pcXVlIHRhc2sgbmFtZScpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLl90YXNrTGlzdCA9IFtdXG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZVxuICAgIH1cblxuICAgIHJlbmFtZVByb2plY3QodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGdldFRhc2tMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0xpc3RcbiAgICB9XG5cbiAgICBzZXRUYXNrTGlzdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90YXNrTGlzdCA9IHZhbHVlXG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0LnB1c2godGFzaylcbiAgICB9XG5cbiAgICBnZXRUYXNrKHRhc2tUaXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0xpc3QuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrVGl0bGUpXG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayh0YXNrVGl0bGUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl90YXNrTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgICAodGFzaykgPT4gdGFzay5nZXRUaXRsZSA9PT0gdGFza1RpdGxlXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5fdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmRDb29yZGluYXRvci5qcydcblxuY29uc3Qgc3RvcmFnZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gY3JlYXRlIGFuZCBzdG9yZSBlbXB0eSBib2FyZFxuICAgIGNvbnN0IF9ib2FyZE5hbWUgPSAnYm9hcmQnXG5cbiAgICBmdW5jdGlvbiBfZ2V0Qm9hcmQoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShfYm9hcmROYW1lKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oX2JvYXJkTmFtZSwgSlNPTi5zdHJpbmdpZnkobmV3IEJvYXJkKCkpKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm9hcmQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IEJvYXJkKCksXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKF9ib2FyZE5hbWUpKVxuICAgICAgICApXG5cbiAgICAgICAgYm9hcmQuc2V0UHJvamVjdHMoXG4gICAgICAgICAgICBib2FyZFxuICAgICAgICAgICAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAgICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSlcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGJvYXJkLnNldFByb2plY3RzKFtdKTtcbiAgICAgICAgY29uc3QgYiA9IGJvYXJkLmdldFByb2plY3RzKClcblxuICAgICAgICBib2FyZC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2V0VGFza0xpc3QoXG4gICAgICAgICAgICAgICAgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAuZ2V0VGFza0xpc3QoKVxuICAgICAgICAgICAgICAgICAgICAubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKVxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBib2FyZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zdG9yZUJvYXJkKGJvYXJkKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKF9ib2FyZE5hbWUsIEpTT04uc3RyaW5naWZ5KGJvYXJkKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxTdG9yZWRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRCb2FyZCgpLmdldFByb2plY3RzKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9yZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCBib2FyZCA9IF9nZXRCb2FyZCgpXG4gICAgICAgIGJvYXJkLmFkZFByb2plY3QocHJvamVjdClcbiAgICAgICAgX3N0b3JlQm9hcmQoYm9hcmQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmVkUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRCb2FyZCgpLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JlZFByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gX2dldEJvYXJkKClcbiAgICAgICAgYm9hcmQucmVtb3ZlUHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmFtZVN0b3JlZFByb2plY3Qob2xkUHJvamVjdFRpdGxlLCBuZXdQcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBfZ2V0Qm9hcmQoKVxuICAgICAgICBib2FyZC5yZW5hbWVQcm9qZWN0KG9sZFByb2plY3RUaXRsZSwgbmV3UHJvamVjdFRpdGxlKVxuICAgICAgICBfc3RvcmVCb2FyZChib2FyZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9yZVRhc2socHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBfZ2V0Qm9hcmQoKVxuICAgICAgICBib2FyZC5hZGRUYXNrKHByb2plY3ROYW1lLCB0YXNrKVxuICAgICAgICBfc3RvcmVCb2FyZChib2FyZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCBib2FyZCA9IF9nZXRCb2FyZCgpXG4gICAgICAgIGJvYXJkLnJlbW92ZVRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKVxuICAgICAgICBfc3RvcmVCb2FyZChib2FyZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xuICAgICAgICByZXR1cm4gX2dldEJvYXJkKCkuZ2V0VGFzayhwcm9qZWN0TmFtZSwgdGFza05hbWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGFza3MocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRCb2FyZCgpLmdldFRhc2tzKHByb2plY3ROYW1lKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN0b3JlUHJvamVjdCxcbiAgICAgICAgZ2V0U3RvcmVkUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlU3RvcmVkUHJvamVjdCxcbiAgICAgICAgcmVuYW1lU3RvcmVkUHJvamVjdCxcbiAgICAgICAgc3RvcmVUYXNrLFxuICAgICAgICByZW1vdmVUYXNrLFxuICAgICAgICBnZXRUYXNrLFxuICAgICAgICBnZXRBbGxTdG9yZWRQcm9qZWN0cyxcbiAgICAgICAgZ2V0VGFza3MsXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlXG5cbi8qIGZ1bmN0aW9uIF9nZXRCb2FyZCgpe1xuICAgICAgICB2YXIgYm9hcmQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCb2FyZENvb3JkaW5hdG9yLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKF9ib2FyZE5hbWUpKSk7XG5cbiAgICAgICAgYm9hcmQucHJvamVjdHMgPSBib2FyZC5wcm9qZWN0Lm1hcChwcm9qID0+IHtcbiAgICAgICAgICAgIHByb2ogPSBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShwcm9qKSk7XG4gICAgICAgICAgICBwcm9qLnRhc2tMaXN0ID0gcHJvai50YXNrTGlzdC5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXcgVGFzaywgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvalxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYm9hcmRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc3RvcmVCb2FyZChib2FyZCl7XG4gICAgICAgIHZhciBib2FyZEpTT04gPSBib2FyZC5wcm9qZWN0cy5tYXAocHJvaiA9PiB7XG4gICAgICAgICAgICBwcm9qLnRhc2tMaXN0ID0gcHJvai50YXNrTGlzdC5tYXAodGFzayA9PiBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocHJvailcbiAgICAgICAgfSlcbiAgICAgICAgYm9hcmRKU09OID0gSlNPTi5zdHJpbmdpZnkoYm9hcmRKU09OKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oX2JvYXJkTmFtZSwgYm9hcmRKU09OKTtcbiAgICB9ICovXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5fZGVzYyA9IGRlc2NcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLl9ub3RlcyA9IG5vdGVzXG5cbiAgICAgICAgdGhpcy5fbWF4VGl0bGUgPSA1MDBcbiAgICAgICAgdGhpcy5fbWF4RGVzYyA9IDEwMDBcbiAgICAgICAgdGhpcy5fbWluVGl0bGUgPSAxXG4gICAgICAgIHRoaXMuX21pbkRlc2MgPSAxXG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZVxuICAgIH1cblxuICAgIHNldFRpdGxlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiB0aGlzLl9tYXhUaXRsZSB8fCB2YWx1ZS5sZW5ndGggPCB0aGlzLl9taW5UaXRsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBJbnZhbGlkIHRpdGxlIGxlbmd0aCAke3ZhbHVlLmxlbmd0aH0vJHt0aGlzLl9tYXhUaXRsZX1gXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiB0aGlzLl9tYXhEZXNjIHx8IHZhbHVlLmxlbmd0aCA8IHRoaXMuX21pblRpdGxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYEludmFsaWQgZGVzY3JpcHRpb24gbGVuZ3RoICR7dmFsdWUubGVuZ3RofS8ke3RoaXMuX21heERlc2N9YFxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc2MgPSB2YWx1ZVxuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlXG4gICAgfVxuXG4gICAgc2V0RHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICAvLyBjaGVja1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWVcbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5XG4gICAgfVxuXG4gICAgc2V0UHJpb3JpdHkodmFsdWUpIHtcbiAgICAgICAgLy8gY2hlY2tcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZVxuICAgIH1cblxuICAgIGdldCBub3RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vdGVzXG4gICAgfVxuXG4gICAgc2V0IG5vdGVzKHZhbHVlKSB7XG4gICAgICAgIC8vIGNoZWNrXG4gICAgICAgIHRoaXMuX25vdGVzID0gdmFsdWVcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5Q29udHJvbGxlci5qcydcblxuY29uc3QgdWkgPSBuZXcgVXNlckludGVyZmFjZSgpXG51aS5sb2FkSG9tZVBhZ2UoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    font-family: Arial, sans-serif;\n}\n\n.class-container{\n    display: grid;\n    grid-template-rows: repeat(3, auto);\n\n}\n\n.header{\n    align-self: center;\n    justify-self: center;\n    text-align: center;\n}\n\n.display-container{\n    display: grid;\n    grid-template-columns: 15rem auto;\n    gap: 4%;\n}\n\n.add{\n    background-color: rgb(230, 163, 82);\n    border: none;\n    color: white;\n}\n\n.add:hover{\n    background-color: black;\n    color: white;\n}\n\n.hidden{\n    display: none;\n}\n\n.active{\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n    color: white;\n}\n\nbutton{\n    background-color:white;\n    color: black;\n    border: solid .7px black;\n    border-radius: 10px;\n    padding: 4px 8px 4px 8px;\n}\n\n.project{\n    border-radius: 10px;\n    align-content: center;\n\n    display: grid;\n    grid-template-columns: 12rem 2rem;\n    grid-gap: 0.5em;\n\n}\n\n.project-title{\n    padding-left: 1.7em;\n\n    word-wrap: normal;\n    font-size: 0.95rem;\n}\n\n.project-category{\n    font-size: 1.15rem;\n    margin-left: 1.1em;\n}\n\n.delete-project, .delete-task, .edit-task{\n    align-self: center;\n    justify-self: center;\n    height: 1.8rem;\n}\n\n.delete-project:hover, .delete-task:hover{\n    background-color: rgb(230, 230, 230);\n    color: white;\n    border: none;\n}\n\n#project-form-container{\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto auto;\n    grid-template-areas: \n        'input input'\n        'add cancel'\n}\n\n#project-title{\n    grid-area: input;\n\n    width: 75%;\n    align-self: center;\n    justify-self: center;\n\n    padding: 0.2rem;\n    margin-left: 1.4rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    height: 1.5rem;\n}\n\n#cancel-add-project{\n    width: 30%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 0.5rem;\n}\n\n#add-project{\n    justify-self: right;\n    width: 25%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 2.3rem;\n}\n\n\n\n#open-project-form, #open-task-form{\n    margin-left: 1.4rem;\n    margin-top: 0.6rem;\n    justify-self: center;\n    align-self: center;\n    grid-row-start: 1;\n    grid-row-end: 3;\n\n    padding: 0.6rem;\n    padding-right: 0.7rem;\n\n    font-size: 1rem;\n}\n\n\n#task-list{\n    display: grid;\n    gap: 10px;\n}\n\n.task{\n    border: solid black 1px;\n    border-radius: 5px;\n\n    display: grid;\n    grid-template-columns: 60% 15% 8% 6%;\n}\n\n#project-list{\n    overflow-y: scroll;\n    margin: 0;\n    padding: 0;\n    max-height: 50vh;\n    max-width: 700px;\n}\n\n.task-title{\n    padding-left: 10px;\n}\n\n#open-task-form{\n    margin-left: 0;\n}\n\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content */\n  .modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%;\n  }\n  \n  /* The Close Button */\n  .close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mCAAmC;;AAEvC;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,OAAO;AACX;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yGAAyG;IACzG,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,wBAAwB;IACxB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;;IAErB,aAAa;IACb,iCAAiC;IACjC,eAAe;;AAEnB;;AAEA;IACI,mBAAmB;;IAEnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B;;;AAGJ;;AAEA;IACI,gBAAgB;;IAEhB,UAAU;IACV,kBAAkB;IAClB,oBAAoB;;IAEpB,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,eAAe;IACf,yBAAyB;AAC7B;;;;AAIA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;;IAEf,eAAe;IACf,qBAAqB;;IAErB,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;;IAElB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;;;AAIA,2BAA2B;AAC3B;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,kBAAkB,EAAE,wBAAwB;IAC5C,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;EAC1D;;EAEA,kBAAkB;EAClB;IACE,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,UAAU;EACZ;;EAEA,qBAAqB;EACrB;IACE,cAAc;IACd,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;;EAEA;;IAEE,WAAW;IACX,qBAAqB;IACrB,eAAe;EACjB","sourcesContent":["body{\n    margin: 0;\n    font-family: Arial, sans-serif;\n}\n\n.class-container{\n    display: grid;\n    grid-template-rows: repeat(3, auto);\n\n}\n\n.header{\n    align-self: center;\n    justify-self: center;\n    text-align: center;\n}\n\n.display-container{\n    display: grid;\n    grid-template-columns: 15rem auto;\n    gap: 4%;\n}\n\n.add{\n    background-color: rgb(230, 163, 82);\n    border: none;\n    color: white;\n}\n\n.add:hover{\n    background-color: black;\n    color: white;\n}\n\n.hidden{\n    display: none;\n}\n\n.active{\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n    color: white;\n}\n\nbutton{\n    background-color:white;\n    color: black;\n    border: solid .7px black;\n    border-radius: 10px;\n    padding: 4px 8px 4px 8px;\n}\n\n.project{\n    border-radius: 10px;\n    align-content: center;\n\n    display: grid;\n    grid-template-columns: 12rem 2rem;\n    grid-gap: 0.5em;\n\n}\n\n.project-title{\n    padding-left: 1.7em;\n\n    word-wrap: normal;\n    font-size: 0.95rem;\n}\n\n.project-category{\n    font-size: 1.15rem;\n    margin-left: 1.1em;\n}\n\n.delete-project, .delete-task, .edit-task{\n    align-self: center;\n    justify-self: center;\n    height: 1.8rem;\n}\n\n.delete-project:hover, .delete-task:hover{\n    background-color: rgb(230, 230, 230);\n    color: white;\n    border: none;\n}\n\n#project-form-container{\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto auto;\n    grid-template-areas: \n        'input input'\n        'add cancel'\n}\n\n#project-title{\n    grid-area: input;\n\n    width: 75%;\n    align-self: center;\n    justify-self: center;\n\n    padding: 0.2rem;\n    margin-left: 1.4rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    height: 1.5rem;\n}\n\n#cancel-add-project{\n    width: 30%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 0.5rem;\n}\n\n#add-project{\n    justify-self: right;\n    width: 25%;\n    padding: 0.5rem;\n    margin: 0 0.5rem 0 2.3rem;\n}\n\n\n\n#open-project-form, #open-task-form{\n    margin-left: 1.4rem;\n    margin-top: 0.6rem;\n    justify-self: center;\n    align-self: center;\n    grid-row-start: 1;\n    grid-row-end: 3;\n\n    padding: 0.6rem;\n    padding-right: 0.7rem;\n\n    font-size: 1rem;\n}\n\n\n#task-list{\n    display: grid;\n    gap: 10px;\n}\n\n.task{\n    border: solid black 1px;\n    border-radius: 5px;\n\n    display: grid;\n    grid-template-columns: 60% 15% 8% 6%;\n}\n\n#project-list{\n    overflow-y: scroll;\n    margin: 0;\n    padding: 0;\n    max-height: 50vh;\n    max-width: 700px;\n}\n\n.task-title{\n    padding-left: 10px;\n}\n\n#open-task-form{\n    margin-left: 0;\n}\n\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content */\n  .modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%;\n  }\n  \n  /* The Close Button */\n  .close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }"],"sourceRoot":""}]);
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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageManager.js */ "./src/modules/storageManager.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
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
        _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.getAllStoredProjects().forEach((project) => {
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
        _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.removeStoredProject(title)

        // display next project
    }

    static selectProject(event, project) {
        // check if project has been deleted
        if (
            typeof _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.getStoredProject(project.firstChild.textContent) !==
            'object'
        )
            return

        const projects = Array.from(document.querySelectorAll('.project'))

        projects.forEach((proj) => proj.classList.remove('active'))
        project.classList.add('active')

        this.createTaskBoard(project)
    }

    static createTaskBoard(project) {
        this.clearTaskBoard()

        document.getElementById('welcome').classList.add('hidden')
        document.getElementById('task-area').classList.remove('hidden')

        const projectTitle = project.firstChild.textContent
        document.getElementById(
            'curr-project-title'
        ).textContent = `${projectTitle} Tasks`

        Array.from(_storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.getTasks(projectTitle)).forEach((task) =>
            this.displayTask(task)
        )

        this.initNewTaskForm()
        this.initializeTaskButtons()
    }

    static clearTaskBoard() {
        const tasks = Array.from(document.querySelectorAll('.task'))
        tasks.forEach((task) => task.parentNode.removeChild(task))
    }

    static displayTask(task) {
        const area = document.getElementById('task-list')

        const div = document.createElement('div')
        div.classList.add('task')

        const taskTitle = document.createElement('h3')
        taskTitle.textContent = task.getTitle()
        taskTitle.classList.add('task-title')

        const dueDate = document.createElement('p')
        dueDate.textContent = `due 09-05-2021`
        dueDate.classList.add('due-date')

        const edit = document.createElement('button')
        edit.textContent = 'Edit'
        edit.classList.add('edit-task')

        const deleteTask = document.createElement('button')
        deleteTask.textContent = 'x'
        deleteTask.classList.add('delete-task')

        area.appendChild(div)
        div.appendChild(taskTitle)
        div.appendChild(dueDate)
        div.appendChild(edit)
        div.appendChild(deleteTask)
    }

    static initializeTaskButtons() {
        Array.from(document.querySelectorAll('.delete-task')).forEach(
            (deleteBtn) =>
                deleteBtn.addEventListener('click', () =>
                    this.deleteTask(deleteBtn)
                )
        )
    }

    static getActiveProjectTitle() {
        return document.querySelector('.active').firstChild.textContent
    }

    static deleteTask(deleteBtn) {
        const projectTitle = this.getActiveProjectTitle()
        const taskName = deleteBtn.previousElementSibling.textContent

        _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.removeTask(projectTitle, taskName)

        // remove HTML
        deleteBtn.parentElement.remove()
    }

    static initNewTaskForm() {
        const openNewProjButton = document.querySelector('#open-task-form')
        const closeModal = document.querySelector('.close')
        const modal = document.querySelector('.modal')

        openNewProjButton.addEventListener('click', this.openModal)
        closeModal.addEventListener('click', this.closeModal)
        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                this.closeModal()
            }
        })
    }

    static openModal() {
        document.querySelector('.modal').style.display = 'block'
    }

    static closeModal() {
        document.querySelector('.modal').style.display = 'none'
    }

    static createTask() {
        const taskTitle = document.getElementById('task-title').value

        if (taskTitle.length === 0) return

        const projectTitle = this.getActiveProjectTitle()

        try {
            this.checkTaskUserInput(projectTitle, taskTitle)
        } catch (errorMessage) {
            alert(errorMessage)
            return
        }

        const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(
            taskTitle,
            'desc',
            'dueDate',
            'priority',
            'notes'
        )

        _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.storeTask(projectTitle, newTask)
        this.displayTask(newTask)

        this.initializeTaskButtons()

        document.querySelector('#task-title').value = ''
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

    static checkProjectUserInput(title) {
        const maxTitleLength = 500

        if (title.length > maxTitleLength) {
            throw Error('Project title exceeded 500 characters')
        } else if (title.length < 1) {
            throw Error('Project title too short')
        } else if (typeof _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.getStoredProject(title) === 'object') {
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

        const proj = new _project_js__WEBPACK_IMPORTED_MODULE_1__.default(title)
        _storageManager_js__WEBPACK_IMPORTED_MODULE_2__.default.storeProject(proj)
        this.displayProject(proj)

        document.querySelector('#project-title').value = ''

        this.initProjectButtons()
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

    get description() {
        return this._desc
    }

    set description(value) {
        if (value.length > this._maxDesc || value.length < this._minTitle) {
            throw new Error(
                `Invalid description length ${value.length}/${this._maxDesc}`
            )
        }
        this._desc = value
    }

    get dueDate() {
        return this._dueDate
    }

    set dueDate(value) {
        // check
        this._dueDate = value
    }

    get priority() {
        return this._priority
    }

    set priority(value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNwRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQzBEOztBQUUxRCxlQUFlLGtFQUFhO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2JvYXJkQ29vcmRpbmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNsYXNzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuXFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cmVtIGF1dG87XFxuICAgIGdhcDogNCU7XFxufVxcblxcbi5hZGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDE2MywgODIpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEzMSw1OCwxODAsMSkgMCUsIHJnYmEoMjUzLDI5LDI5LDEpIDUwJSwgcmdiYSgyNTIsMTc2LDY5LDEpIDEwMCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IHNvbGlkIC43cHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDRweCA4cHggNHB4IDhweDtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMnJlbSAycmVtO1xcbiAgICBncmlkLWdhcDogMC41ZW07XFxuXFxufVxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuN2VtO1xcblxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXRlZ29yeXtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMS4xZW07XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCwgLmRlbGV0ZS10YXNrLCAuZWRpdC10YXNre1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyLCAuZGVsZXRlLXRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgJ2lucHV0IGlucHV0J1xcbiAgICAgICAgJ2FkZCBjYW5jZWwnXFxufVxcblxcbiNwcm9qZWN0LXRpdGxle1xcbiAgICBncmlkLWFyZWE6IGlucHV0O1xcblxcbiAgICB3aWR0aDogNzUlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjRyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4jY2FuY2VsLWFkZC1wcm9qZWN0e1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdHtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW46IDAgMC41cmVtIDAgMi4zcmVtO1xcbn1cXG5cXG5cXG5cXG4jb3Blbi1wcm9qZWN0LWZvcm0sICNvcGVuLXRhc2stZm9ybXtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC42cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcblxcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5cXG4jdGFzay1saXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNre1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSAxNSUgOCUgNiU7XFxufVxcblxcbiNwcm9qZWN0LWxpc3R7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4udGFzay10aXRsZXtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jb3Blbi10YXNrLWZvcm17XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG5cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICB9XFxuICBcXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuICAuY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYWFhYTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAuY2xvc2U6aG92ZXIsXFxuICAuY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQzs7QUFFdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsT0FBTztBQUNYOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUdBQXlHO0lBQ3pHLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjs7SUFFckIsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qjs7O0FBR0o7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsb0JBQW9COztJQUVwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOzs7O0FBSUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7O0lBRWYsZUFBZTtJQUNmLHFCQUFxQjs7SUFFckIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7O0FBSUEsMkJBQTJCO0FBQzNCO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGtCQUFrQixFQUFFLHdCQUF3QjtJQUM1QyxPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0VBQzFEOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNsYXNzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuXFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cmVtIGF1dG87XFxuICAgIGdhcDogNCU7XFxufVxcblxcbi5hZGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDE2MywgODIpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEzMSw1OCwxODAsMSkgMCUsIHJnYmEoMjUzLDI5LDI5LDEpIDUwJSwgcmdiYSgyNTIsMTc2LDY5LDEpIDEwMCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IHNvbGlkIC43cHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDRweCA4cHggNHB4IDhweDtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMnJlbSAycmVtO1xcbiAgICBncmlkLWdhcDogMC41ZW07XFxuXFxufVxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuN2VtO1xcblxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXRlZ29yeXtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMS4xZW07XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCwgLmRlbGV0ZS10YXNrLCAuZWRpdC10YXNre1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyLCAuZGVsZXRlLXRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgJ2lucHV0IGlucHV0J1xcbiAgICAgICAgJ2FkZCBjYW5jZWwnXFxufVxcblxcbiNwcm9qZWN0LXRpdGxle1xcbiAgICBncmlkLWFyZWE6IGlucHV0O1xcblxcbiAgICB3aWR0aDogNzUlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjRyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4jY2FuY2VsLWFkZC1wcm9qZWN0e1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdHtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW46IDAgMC41cmVtIDAgMi4zcmVtO1xcbn1cXG5cXG5cXG5cXG4jb3Blbi1wcm9qZWN0LWZvcm0sICNvcGVuLXRhc2stZm9ybXtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC42cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcblxcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5cXG4jdGFzay1saXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNre1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSAxNSUgOCUgNiU7XFxufVxcblxcbiNwcm9qZWN0LWxpc3R7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4udGFzay10aXRsZXtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jb3Blbi10YXNrLWZvcm17XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG5cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICB9XFxuICBcXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuICAuY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYWFhYTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAuY2xvc2U6aG92ZXIsXFxuICAuY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZENvb3JkaW5hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcHJvamVjdHMgPSBbXVxuICAgIH1cblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdHNcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0cyhwcm9qcykge1xuICAgICAgICB0aGlzLl9wcm9qZWN0cyA9IHByb2pzXG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3RzLnB1c2gocHJvamVjdClcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gdGl0bGVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLl9wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdCh0aXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpID09PSB0aXRsZSlcbiAgICB9XG5cbiAgICByZW5hbWVQcm9qZWN0KG9sZFRpdGxlLCBuZXdUaXRsZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5nZXRQcm9qZWN0KG9sZFRpdGxlKVxuICAgICAgICBwcm9qLnJlbmFtZVByb2plY3QobmV3VGl0bGUpXG4gICAgfVxuXG4gICAgYWRkVGFzayhwcm9qZWN0VGl0bGUsIHRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgICAgIHByb2ouYWRkVGFzayh0YXNrKVxuICAgIH1cblxuICAgIHJlbW92ZVRhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgICAgIHByb2oucmVtb3ZlVGFzayh0YXNrVGl0bGUpXG4gICAgfVxuXG4gICAgZ2V0VGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgcmV0dXJuIHByb2ouZ2V0VGFzayh0YXNrVGl0bGUpXG4gICAgfVxuXG4gICAgZ2V0VGFza3MocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSB0aGlzLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxuICAgICAgICByZXR1cm4gcHJvai5nZXRUYXNrTGlzdCgpXG4gICAgfVxufVxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZXh0ZW5zaW9uc1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlTWFuYWdlci5qcydcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgbG9hZEhvbWVQYWdlKCkge1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUFsbFByb2plY3RzKClcbiAgICAgICAgdGhpcy5pbml0UHJvamVjdEJ1dHRvbnMoKVxuICAgICAgICB0aGlzLmluaXROZXdQcm9qZWN0QnV0dG9ucygpXG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgU3RvcmFnZS5nZXRBbGxTdG9yZWRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVByb2plY3QocHJvamVjdClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qVGl0bGUgPSBwcm9qZWN0LmdldFRpdGxlKClcblxuICAgICAgICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvakRpdi5pZCA9IHByb2pUaXRsZVxuICAgICAgICBwcm9qRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JykuYXBwZW5kQ2hpbGQocHJvakRpdilcblxuICAgICAgICBjb25zdCB0aXRsZUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgIHRpdGxlSFRNTC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJylcbiAgICAgICAgdGl0bGVIVE1MLnRleHRDb250ZW50ID0gcHJvalRpdGxlXG5cbiAgICAgICAgcHJvakRpdi5hcHBlbmRDaGlsZCh0aXRsZUhUTUwpXG5cbiAgICAgICAgY29uc3QgZGVsZXRlSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRlbGV0ZUhUTUwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QnKVxuICAgICAgICBkZWxldGVIVE1MLnRleHRDb250ZW50ID0gJ3gnXG4gICAgICAgIGRlbGV0ZUhUTUwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdChldmVudClcbiAgICAgICAgfSlcbiAgICAgICAgcHJvakRpdi5hcHBlbmRDaGlsZChkZWxldGVIVE1MKVxuICAgIH1cblxuICAgIHN0YXRpYyBpbml0TmV3UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IG9wZW5OZXdQcm9qQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tcHJvamVjdC1mb3JtJylcbiAgICAgICAgY29uc3QgY2FuY2VsTmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnI2NhbmNlbC1hZGQtcHJvamVjdCdcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBhZGROZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0JylcblxuICAgICAgICBvcGVuTmV3UHJvakJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlUHJvamVjdEZvcm0pXG4gICAgICAgIGNhbmNlbE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZVByb2plY3RGb3JtKVxuICAgICAgICBhZGROZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgVUkuY3JlYXRlUHJvamVjdCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIHRvZ2dsZVByb2plY3RGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1wcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdFByb2plY3RCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKSlcblxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIFVJLnNlbGVjdFByb2plY3QoZXZlbnQsIHByb2plY3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnRcblxuICAgICAgICBpZiAocHJvamVjdERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVGFza0JvYXJkKClcbiAgICAgICAgfSAvLyBkZWxldGUgdGhlIHRhc2tzXG5cbiAgICAgICAgcHJvamVjdERpdi5yZW1vdmUoKSAvLyByZW1vdmUgcHJvamVjdCBEaXZcblxuICAgICAgICAvLyByZW1vdmUgZnJvbSBzdG9yYWdlXG4gICAgICAgIFN0b3JhZ2UucmVtb3ZlU3RvcmVkUHJvamVjdCh0aXRsZSlcblxuICAgICAgICAvLyBkaXNwbGF5IG5leHQgcHJvamVjdFxuICAgIH1cblxuICAgIHN0YXRpYyBzZWxlY3RQcm9qZWN0KGV2ZW50LCBwcm9qZWN0KSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHByb2plY3QgaGFzIGJlZW4gZGVsZXRlZFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgU3RvcmFnZS5nZXRTdG9yZWRQcm9qZWN0KHByb2plY3QuZmlyc3RDaGlsZC50ZXh0Q29udGVudCkgIT09XG4gICAgICAgICAgICAnb2JqZWN0J1xuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKSlcblxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiBwcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrQm9hcmQocHJvamVjdClcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVGFza0JvYXJkKHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5jbGVhclRhc2tCb2FyZCgpXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWUnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1hcmVhJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAnY3Vyci1wcm9qZWN0LXRpdGxlJ1xuICAgICAgICApLnRleHRDb250ZW50ID0gYCR7cHJvamVjdFRpdGxlfSBUYXNrc2BcblxuICAgICAgICBBcnJheS5mcm9tKFN0b3JhZ2UuZ2V0VGFza3MocHJvamVjdFRpdGxlKSkuZm9yRWFjaCgodGFzaykgPT5cbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVRhc2sodGFzaylcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuaW5pdE5ld1Rhc2tGb3JtKClcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVGFza0J1dHRvbnMoKVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhclRhc2tCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykpXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHRhc2sucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXNrKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVRhc2sodGFzaykge1xuICAgICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpXG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJylcblxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgZHVlIDA5LTA1LTIwMjFgXG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKVxuXG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnXG4gICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrJylcblxuICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsZXRlVGFzay50ZXh0Q29udGVudCA9ICd4J1xuICAgICAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrJylcblxuICAgICAgICBhcmVhLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlZGl0KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzaylcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdGlhbGl6ZVRhc2tCdXR0b25zKCkge1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdGFzaycpKS5mb3JFYWNoKFxuICAgICAgICAgICAgKGRlbGV0ZUJ0bikgPT5cbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVRhc2soZGVsZXRlQnRuKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBY3RpdmVQcm9qZWN0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVUYXNrKGRlbGV0ZUJ0bikge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aGlzLmdldEFjdGl2ZVByb2plY3RUaXRsZSgpXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZGVsZXRlQnRuLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnRcblxuICAgICAgICBTdG9yYWdlLnJlbW92ZVRhc2socHJvamVjdFRpdGxlLCB0YXNrTmFtZSlcblxuICAgICAgICAvLyByZW1vdmUgSFRNTFxuICAgICAgICBkZWxldGVCdG4ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgIH1cblxuICAgIHN0YXRpYyBpbml0TmV3VGFza0Zvcm0oKSB7XG4gICAgICAgIGNvbnN0IG9wZW5OZXdQcm9qQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tdGFzay1mb3JtJylcbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcblxuICAgICAgICBvcGVuTmV3UHJvakJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk1vZGFsKVxuICAgICAgICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1vZGFsKVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgb3Blbk1vZGFsKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9zZU1vZGFsKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRhc2soKSB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJykudmFsdWVcblxuICAgICAgICBpZiAodGFza1RpdGxlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gdGhpcy5nZXRBY3RpdmVQcm9qZWN0VGl0bGUoKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrVGFza1VzZXJJbnB1dChwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgIHRhc2tUaXRsZSxcbiAgICAgICAgICAgICdkZXNjJyxcbiAgICAgICAgICAgICdkdWVEYXRlJyxcbiAgICAgICAgICAgICdwcmlvcml0eScsXG4gICAgICAgICAgICAnbm90ZXMnXG4gICAgICAgIClcblxuICAgICAgICBTdG9yYWdlLnN0b3JlVGFzayhwcm9qZWN0VGl0bGUsIG5ld1Rhc2spXG4gICAgICAgIHRoaXMuZGlzcGxheVRhc2sobmV3VGFzaylcblxuICAgICAgICB0aGlzLmluaXRpYWxpemVUYXNrQnV0dG9ucygpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZSA9ICcnXG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrVGFza1VzZXJJbnB1dChwcm9qZWN0TmFtZSwgbmFtZSkge1xuICAgICAgICBjb25zdCBtYXhOYW1lTGVuZ3RoID0gNzUwXG5cbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gbWF4TmFtZUxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Rhc2sgbmFtZSBleGNlZWRlZCA3NTAgY2hhcmFjdGVycycpXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUHJvamVjdCB0aXRsZSB0b28gc2hvcnQnKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBTdG9yYWdlLmdldFRhc2socHJvamVjdE5hbWUsIG5hbWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ011c3QgYmUgYSB1bmlxdWUgdGFzayBuYW1lJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjaGVja1Byb2plY3RVc2VySW5wdXQodGl0bGUpIHtcbiAgICAgICAgY29uc3QgbWF4VGl0bGVMZW5ndGggPSA1MDBcblxuICAgICAgICBpZiAodGl0bGUubGVuZ3RoID4gbWF4VGl0bGVMZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdQcm9qZWN0IHRpdGxlIGV4Y2VlZGVkIDUwMCBjaGFyYWN0ZXJzJylcbiAgICAgICAgfSBlbHNlIGlmICh0aXRsZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUHJvamVjdCB0aXRsZSB0b28gc2hvcnQnKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBTdG9yYWdlLmdldFN0b3JlZFByb2plY3QodGl0bGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdW5pcXVlIHRpdGxlXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTXVzdCBiZSB1bmlxdWUgcHJvamVjdCB0aXRsZScpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lciBtZXRob2RcbiAgICBzdGF0aWMgY3JlYXRlUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpLnZhbHVlXG5cbiAgICAgICAgLy8gZG8gbm90aGluZyBpZiB0aXRsZSBpcyBlbXB0eSBzdHJpbmdcbiAgICAgICAgaWYgKHRpdGxlIDwgMSkgcmV0dXJuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQcm9qZWN0VXNlcklucHV0KHRpdGxlKVxuICAgICAgICB9IGNhdGNoIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvaiA9IG5ldyBQcm9qZWN0KHRpdGxlKVxuICAgICAgICBTdG9yYWdlLnN0b3JlUHJvamVjdChwcm9qKVxuICAgICAgICB0aGlzLmRpc3BsYXlQcm9qZWN0KHByb2opXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKS52YWx1ZSA9ICcnXG5cbiAgICAgICAgdGhpcy5pbml0UHJvamVjdEJ1dHRvbnMoKVxuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gW11cbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlXG4gICAgfVxuXG4gICAgcmVuYW1lUHJvamVjdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0VGFza0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrTGlzdFxuICAgIH1cblxuICAgIHNldFRhc2tMaXN0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdmFsdWVcbiAgICB9XG5cbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy5fdGFza0xpc3QucHVzaCh0YXNrKVxuICAgIH1cblxuICAgIGdldFRhc2sodGFza1RpdGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrTGlzdC5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tUaXRsZSlcbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKHRhc2tUaXRsZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3Rhc2tMaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLmdldFRpdGxlID09PSB0YXNrVGl0bGVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLl90YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZENvb3JkaW5hdG9yLmpzJ1xuXG5jb25zdCBzdG9yYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjcmVhdGUgYW5kIHN0b3JlIGVtcHR5IGJvYXJkXG4gICAgY29uc3QgX2JvYXJkTmFtZSA9ICdib2FyZCdcblxuICAgIGZ1bmN0aW9uIF9nZXRCb2FyZCgpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKF9ib2FyZE5hbWUpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShfYm9hcmROYW1lLCBKU09OLnN0cmluZ2lmeShuZXcgQm9hcmQoKSkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib2FyZCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBuZXcgQm9hcmQoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oX2JvYXJkTmFtZSkpXG4gICAgICAgIClcblxuICAgICAgICBib2FyZC5zZXRQcm9qZWN0cyhcbiAgICAgICAgICAgIGJvYXJkXG4gICAgICAgICAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuICAgICAgICApXG5cbiAgICAgICAgLy8gYm9hcmQuc2V0UHJvamVjdHMoW10pO1xuICAgICAgICBjb25zdCBiID0gYm9hcmQuZ2V0UHJvamVjdHMoKVxuXG4gICAgICAgIGJvYXJkLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5zZXRUYXNrTGlzdChcbiAgICAgICAgICAgICAgICBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgIC5nZXRUYXNrTGlzdCgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGJvYXJkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3N0b3JlQm9hcmQoYm9hcmQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oX2JvYXJkTmFtZSwgSlNPTi5zdHJpbmdpZnkoYm9hcmQpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFsbFN0b3JlZFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gX2dldEJvYXJkKCkuZ2V0UHJvamVjdHMoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3JlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gX2dldEJvYXJkKClcbiAgICAgICAgYm9hcmQuYWRkUHJvamVjdChwcm9qZWN0KVxuICAgICAgICBfc3RvcmVCb2FyZChib2FyZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTdG9yZWRQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICByZXR1cm4gX2dldEJvYXJkKCkuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmVkUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBfZ2V0Qm9hcmQoKVxuICAgICAgICBib2FyZC5yZW1vdmVQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgX3N0b3JlQm9hcmQoYm9hcmQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuYW1lU3RvcmVkUHJvamVjdChvbGRQcm9qZWN0VGl0bGUsIG5ld1Byb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCBib2FyZCA9IF9nZXRCb2FyZCgpXG4gICAgICAgIGJvYXJkLnJlbmFtZVByb2plY3Qob2xkUHJvamVjdFRpdGxlLCBuZXdQcm9qZWN0VGl0bGUpXG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3JlVGFzayhwcm9qZWN0TmFtZSwgdGFzaykge1xuICAgICAgICBjb25zdCBib2FyZCA9IF9nZXRCb2FyZCgpXG4gICAgICAgIGJvYXJkLmFkZFRhc2socHJvamVjdE5hbWUsIHRhc2spXG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gX2dldEJvYXJkKClcbiAgICAgICAgYm9hcmQucmVtb3ZlVGFzayhwcm9qZWN0TmFtZSwgdGFza05hbWUpXG4gICAgICAgIF9zdG9yZUJvYXJkKGJvYXJkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgICAgIHJldHVybiBfZ2V0Qm9hcmQoKS5nZXRUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUYXNrcyhwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gX2dldEJvYXJkKCkuZ2V0VGFza3MocHJvamVjdE5hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcmVQcm9qZWN0LFxuICAgICAgICBnZXRTdG9yZWRQcm9qZWN0LFxuICAgICAgICByZW1vdmVTdG9yZWRQcm9qZWN0LFxuICAgICAgICByZW5hbWVTdG9yZWRQcm9qZWN0LFxuICAgICAgICBzdG9yZVRhc2ssXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgICAgIGdldFRhc2ssXG4gICAgICAgIGdldEFsbFN0b3JlZFByb2plY3RzLFxuICAgICAgICBnZXRUYXNrcyxcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VcblxuLyogZnVuY3Rpb24gX2dldEJvYXJkKCl7XG4gICAgICAgIHZhciBib2FyZCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJvYXJkQ29vcmRpbmF0b3IsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oX2JvYXJkTmFtZSkpKTtcblxuICAgICAgICBib2FyZC5wcm9qZWN0cyA9IGJvYXJkLnByb2plY3QubWFwKHByb2ogPT4ge1xuICAgICAgICAgICAgcHJvaiA9IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QsIEpTT04uc3RyaW5naWZ5KHByb2opKTtcbiAgICAgICAgICAgIHByb2oudGFza0xpc3QgPSBwcm9qLnRhc2tMaXN0Lm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG5ldyBUYXNrLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9qXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBib2FyZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zdG9yZUJvYXJkKGJvYXJkKXtcbiAgICAgICAgdmFyIGJvYXJkSlNPTiA9IGJvYXJkLnByb2plY3RzLm1hcChwcm9qID0+IHtcbiAgICAgICAgICAgIHByb2oudGFza0xpc3QgPSBwcm9qLnRhc2tMaXN0Lm1hcCh0YXNrID0+IEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShwcm9qKVxuICAgICAgICB9KVxuICAgICAgICBib2FyZEpTT04gPSBKU09OLnN0cmluZ2lmeShib2FyZEpTT04pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShfYm9hcmROYW1lLCBib2FyZEpTT04pO1xuICAgIH0gKi9cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLl9kZXNjID0gZGVzY1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuX25vdGVzID0gbm90ZXNcblxuICAgICAgICB0aGlzLl9tYXhUaXRsZSA9IDUwMFxuICAgICAgICB0aGlzLl9tYXhEZXNjID0gMTAwMFxuICAgICAgICB0aGlzLl9taW5UaXRsZSA9IDFcbiAgICAgICAgdGhpcy5fbWluRGVzYyA9IDFcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlXG4gICAgfVxuXG4gICAgc2V0VGl0bGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IHRoaXMuX21heFRpdGxlIHx8IHZhbHVlLmxlbmd0aCA8IHRoaXMuX21pblRpdGxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYEludmFsaWQgdGl0bGUgbGVuZ3RoICR7dmFsdWUubGVuZ3RofS8ke3RoaXMuX21heFRpdGxlfWBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gdGhpcy5fbWF4RGVzYyB8fCB2YWx1ZS5sZW5ndGggPCB0aGlzLl9taW5UaXRsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBJbnZhbGlkIGRlc2NyaXB0aW9uIGxlbmd0aCAke3ZhbHVlLmxlbmd0aH0vJHt0aGlzLl9tYXhEZXNjfWBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kZXNjID0gdmFsdWVcbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGVcbiAgICB9XG5cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICAvLyBjaGVja1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWVcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eVxuICAgIH1cblxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICAvLyBjaGVja1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0IG5vdGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm90ZXNcbiAgICB9XG5cbiAgICBzZXQgbm90ZXModmFsdWUpIHtcbiAgICAgICAgLy8gY2hlY2tcbiAgICAgICAgdGhpcy5fbm90ZXMgPSB2YWx1ZVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlDb250cm9sbGVyLmpzJ1xuXG5jb25zdCB1aSA9IG5ldyBVc2VySW50ZXJmYWNlKClcbnVpLmxvYWRIb21lUGFnZSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
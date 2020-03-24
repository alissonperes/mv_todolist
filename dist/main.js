/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ \"./src/views.js\");\n/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDos */ \"./src/toDos.js\");\n\n\n\nconst defaultProject = Object(_toDos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Default-List\");\ndefaultProject.addNote(\"title\", \"description\", \"01012020\", \"urgent\");\n\nObject(_views__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/toDos.js":
/*!**********************!*\
  !*** ./src/toDos.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst set = (key, value) => localStorage.setItem(key, JSON.stringify(value));\n\nconst project = projectTitle => {\n  const title = projectTitle;\n  const notes = [];\n  const getNotes = () => notes;\n  const addNote = (nTitle, description, dueDate, priority) => {\n    const newNote = note(nTitle, description, dueDate, priority);\n    notes.push(newNote);\n    set(title, notes);\n  };\n\n  return { title, addNote, getNotes };\n};\n\nconst note = (nTitle, description, dueDate, priority) => {\n  return { nTitle, description, dueDate, priority };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (project);\n\n\n//# sourceURL=webpack:///./src/toDos.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDos */ \"./src/toDos.js\");\n\n\nconst mainDiv = document.getElementById('container');\n\nconst get = (key) => localStorage.getItem(key);\nconst remove = (key) => localStorage.removeItem(key);\n\nfunction StartUp() {\n  const projectContainer = elemental('div', 'id', 'project-container')\n  const toDosContainer = elemental('div', 'id', 'todos-container')\n  const projectUl = elemental('ul', 'id', 'project-ul')\n  const toDosUl = elemental('ul', 'id', 'todos-ul');\n  mainDiv.appendChild(projectContainer).appendChild(projectUl);\n  mainDiv.appendChild(toDosContainer).appendChild(toDosUl);\n\n  Object.keys(localStorage).forEach(x => {\n    let node = elemental('li', 'class', 'project-name');\n    let text = document.createTextNode(x);\n    node.appendChild(text);\n    projectUl.appendChild(node);\n\n    let node2 = elemental('li', 'class', 'todo-name');\n    let text2 = document.createTextNode(localStorage[x]);\n    node2.appendChild(text2);\n    toDosUl.appendChild(node2);\n  })\n}\n\nfunction elemental(type, property, value) {\n  const element = document.createElement(type);\n  element[property] = value;\n  return element;\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartUp);\n\n\n//# sourceURL=webpack:///./src/views.js?");

/***/ })

/******/ });
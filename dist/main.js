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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ \"./src/views.js\");\n/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDos */ \"./src/toDos.js\");\n\n\n\n\nObject(_views__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/toDos.js":
/*!**********************!*\
  !*** ./src/toDos.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst set = (key, value) => localStorage.setItem(key, JSON.stringify(value));\nconst get = (key) => JSON.parse(localStorage.getItem(key));\nconst getItems = (key, index) => {\n  const values = JSON.parse(localStorage.getItem(key));\n  return values.filter((x) => x.position === index);\n};\n\nconst note = (title, description, dueDate, priority, position) => ({\n  title,\n  description,\n  dueDate,\n  priority,\n  position,\n});\n\nconst project = (projectTitle) => {\n  const projectName = projectTitle;\n  let notePos = 0;\n  const notes = [];\n  const getNotes = () => notes;\n  const addNote = (title, description, dueDate, priority) => {\n    const newNote = note(title, description, dueDate, priority, notePos);\n    notePos += 1;\n    notes.push(newNote);\n    set(projectName, notes);\n  };\n\n  const updateNotes = (position, arr) => {\n    const currentNotes = get(projectName);\n    currentNotes[position] = note(...arr);\n    currentNotes[position].position = position;\n    set(projectName, currentNotes);\n    console.log(get(projectName));\n  };\n\n  return {\n    projectName,\n    addNote,\n    getNotes,\n    updateNotes,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (project);\n\n\n//# sourceURL=webpack:///./src/toDos.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDos */ \"./src/toDos.js\");\n\n\nconst mainDiv = document.getElementById('container');\nconst get = (key) => JSON.parse(localStorage.getItem(key));\n// const getListItem = (projectt, item) => {\n//   console.log(get(projectt)[item]);\n// };\n// eslint-disable-next-line no-unused-vars\nconst remove = (key) => localStorage.removeItem(key);\n\nfunction elemental(type, property, value) {\n  const element = document.createElement(type);\n  element[property] = value;\n  return element;\n}\n\nfunction renderTodosProject(projectName) {\n  const projectItems = get(projectName);\n\n  const toDosTable = document.getElementById('todos-table');\n  toDosTable.innerHTML = '';\n  projectItems.forEach((x, i) => {\n    if (i === 0) {\n      const tableTr = elemental('tr', 'class', 'table-row');\n      Object.keys(x).forEach((z) => {\n        if (z === 'position') return;\n        const tableRowHeader = elemental('th', 'class', 'table-header');\n        tableRowHeader.appendChild(document.createTextNode(z));\n        tableTr.appendChild(tableRowHeader);\n      });\n      toDosTable.appendChild(tableTr);\n    }\n\n    const tableRow = elemental('tr', 'class', 'table-row');\n    Object.values(x).forEach((y, z) => {\n      if (z === 4) return;\n      const tableCell = elemental('td', 'class', 'table-cell');\n      tableCell.appendChild(document.createTextNode(y));\n      tableRow.appendChild(tableCell);\n    });\n    const editButton = elemental('button', 'id', 'edit-btn');\n    editButton.appendChild(document.createTextNode('Edit'));\n    tableRow.appendChild(editButton);\n    editButton.onclick = function () {\n      // console.log(x.position);\n      // getListItem(projectName, x.position);\n      if (editButton.innerText === 'Edit') {\n        this.parentElement.className = 'editable';\n        this.parentElement.setAttribute('contenteditable', 'true');\n        this.innerText = 'Save';\n      } else {\n        this.parentElement.className = '';\n        const newValues = Object.values(this.parentElement.childNodes)\n          .filter((k) => k.tagName === 'TD')\n          .map((z) => z.innerText);\n\n        projectName.updateNotes(x.position, newValues);\n\n        this.parentElement.setAttribute('contenteditable', 'false');\n        this.innerText = 'Edit';\n      }\n    };\n    toDosTable.appendChild(tableRow);\n  });\n}\n\nfunction renderProjectsList() {\n  const projectUl = document.getElementById('project-ul');\n\n  Object.keys(localStorage).forEach((x) => {\n    const projectItem = elemental('li', 'class', 'project-name');\n    projectItem.id = x;\n    const projectName = document.createTextNode(x);\n    projectItem.appendChild(projectName);\n    projectUl.appendChild(projectItem);\n    projectItem.onclick = function() {\n      renderTodosProject(this.id);\n    };\n  });\n}\n\nfunction seedDefault() {\n  const defaultProject = Object(_toDos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Default-List');\n  defaultProject.addNote('Default1', 'description', '01012020', '000');\n  defaultProject.addNote('Default2', 'description', '01012020', '1111');\n  defaultProject.addNote('Default3', 'description', '01012020', '2222');\n  defaultProject.addNote('Default4', 'description', '01012020', '3333');\n}\n\nfunction StartUp() {\n  const projectContainer = elemental('div', 'id', 'project-container');\n  const toDosContainer = elemental('div', 'id', 'todos-container');\n  const projectUl = elemental('ul', 'id', 'project-ul');\n  const toDosTable = elemental('table', 'id', 'todos-table');\n  mainDiv.appendChild(projectContainer).appendChild(projectUl);\n  mainDiv.appendChild(toDosContainer).appendChild(toDosTable);\n\n  seedDefault();\n  renderProjectsList();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartUp);\n\n\n//# sourceURL=webpack:///./src/views.js?");

/***/ })

/******/ });
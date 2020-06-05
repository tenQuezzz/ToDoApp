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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: ToDoApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoApp\", function() { return ToDoApp; });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nclass ToDoApp {\n  constructor() {\n    this._projects = [];\n    this._projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"]('Default project'));\n  }\n\n  get projects() {\n    return this._projects;\n  }\n\n  createNewProject(title, items=[]) {\n    let idx = this._projects.findIndex(project => project.title === title);\n    if (idx === -1) {\n      let newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](title, items);\n      this._projects.push(newProject);\n      return true;\n    }\n    return false;\n  }\n\n  getProjectByTitle(title) {\n    return this._projects.find(project => project.title === title);\n  }\n\n  deleteProject(title) {\n    let idx = this._projects.findIndex(project => project.title === title);\n    if (idx != -1) this._projects.splice(idx, 1);\n  }\n\n  renameProject(oldTitle, newTitle) {\n    let project = this._projects.find(project => project.title === oldTitle);\n    if (project) {\n      project.title = newTitle;\n    }\n  }\n\n  printProjects() {\n    for (let project of this._projects) {\n      project.printProject();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _ui_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_handler */ \"./src/ui_handler.js\");\n\n// import { Project } from './project'\n\n\n\n// r(id, title, description, dueDate, priority)\n\nlet app = new _app__WEBPACK_IMPORTED_MODULE_1__[\"ToDoApp\"]();\napp.deleteProject('Default project');\n\napp.createNewProject('Test project', [\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#1', 'Finish JS tutorial',\n    `\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam doloribus quo hic quisquam voluptate harum minima eveniet, neque pariatur repellendus quam corporis perspiciatis cumque ab modi officiis expedita quaerat voluptates molestiae, adipisci tempore. Commodi, veniam atque doloribus, nihil provident est vitae cum laboriosam cumque, nobis explicabo et maiores! Ex, quisquam.\n    `,\n    'no',\n    'important'),\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#2', 'second item', 'just for test', 'no', 'important'),\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#3', 'third item', 'just for test', 'no', 'important'),\n]);\n\napp.createNewProject('Another project', [\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#1', 'first item', 'just for test', 'no', 'important'),\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#2', 'second item', 'just for test', 'no', 'important'),\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#3', 'third item', 'just for test', 'no', 'important'),\n]);\n\napp.createNewProject('Test project #2', [\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#1', 'first item', 'just for test', 'no', 'important'),\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#2', 'second item', 'just for test', 'no', 'important'),\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#3', 'third item', 'just for test', 'no', 'important'),\n]);\n\napp.createNewProject('Another project #2', [\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#1', 'first item', 'just for test', 'no', 'important'),\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#2', 'second item', 'just for test', 'no', 'important'),\n  new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"]('#3', 'third item', 'just for test', 'no', 'important'),\n]);\n\nObject(_ui_handler__WEBPACK_IMPORTED_MODULE_2__[\"createAppUI\"])(app);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/*! exports provided: ToDoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoItem\", function() { return ToDoItem; });\nclass ToDoItem {\n  constructor(id, title, description, dueDate, priority) {\n    this._id = id;\n    this._title = title;\n    this._description = description;\n    this._dueDate = dueDate;\n    this._priority = priority;\n    this._checked = false;\n  }\n\n  changeTitle(newTitle) {\n    this.title = newTitle;\n  }\n\n  changeDescription(newDescription) {\n    this.description = newDescription;\n  }\n\n  changeDueDate(newDate) {\n    this.dueDate = newDate;\n  }\n\n  changePriority(newPriority) {\n    this.priority = newPriority;\n  }\n\n  complete() {\n    this.checked = true;\n  }\n\n  get id() {\n    return this._id;\n  }\n\n  get title() {\n    return this._title;\n  }\n\n  get description() {\n    return this._description;\n  }\n\n  get dueDate() {\n    return this._dueDate;\n  }\n\n  get priority() {\n    return this._priority;\n  }\n\n  get checked() {\n    return this._checked;\n  }\n}\n\n//# sourceURL=webpack:///./src/item.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n\n\nclass Project {\n  constructor(title, items = []) {\n    this._title = title;\n    this._items = items;\n    this._item_id = 0;\n  }\n\n  get items() {\n    return this._items;\n  }\n\n  get title() {\n    return this._title;\n  }\n\n  set title(newTitle) {\n    this._title = newTitle;\n  }\n\n  addItem(item) {\n    this._items.push(item);\n  }\n\n  createItem(title, description, dueDate, priority) {\n    const newItem = new _item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"](this._item_id++, title, description, dueDate, priority);\n    this.addItem(newItem);\n  }\n\n  removeItem(id) {\n    let idx = this._items.findIndex(item => item.id === id);\n    if (idx != -1) {\n      this._items.splice(idx, 1);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/ui_handler.js":
/*!***************************!*\
  !*** ./src/ui_handler.js ***!
  \***************************/
/*! exports provided: createAppUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAppUI\", function() { return createAppUI; });\nfunction createAppUI(app) {\n  const parent = document.getElementById(\"main\");\n  const appContainer = createElement('div', '',\n    {\n      'id': 'app-container'\n    },\n    {\n      'width': '90%',\n      'margin': '0 auto',\n      'display': 'flex',\n      'flex-flow': 'row wrap'\n    });\n  for (let project of app.projects) {\n    appContainer.appendChild(createProjectContainer(project));\n  }\n  parent.appendChild(appContainer);\n}\n\nfunction createProjectContainer(project) {\n  let projectContainer = createElement('div', '', {\n    'id': project.title\n    },\n    {\n      'width': '30%',\n      'margin': '10px auto',\n      'border': '1px solid black',\n      'border-radius': '15px'\n    });\n  updateProjectContainer(projectContainer, project);\n  return projectContainer;\n}\n\nfunction updateProjectContainer(container, project) {\n  container.textContent = '';\n  container.appendChild(createElement('h2', project.title, {}, {\n    'text-align': 'center'\n  }));\n  let addButton = createElement('button', 'add');\n  addButton.addEventListener('click', e => {\n    addNewToDoItem(project);\n  });\n  container.appendChild(addButton);\n\n  for (let item of project.items) {\n    let toDoItem = createToDoItem(item);\n    let removeButton = createElement('button', 'remove');\n    removeButton.addEventListener('click', e => {\n      project.removeItem(item.id);\n      removeItemFromProject(project, item.id);\n    })\n    toDoItem.appendChild(removeButton);\n    container.appendChild(toDoItem);\n  }\n}\n\nfunction createToDoItem(item) {\n  let itemContainer = createElement('div', '',\n    {\n      'item-id': item.id\n    },\n    {\n      'width': '90%',\n      'margin': '10px auto',\n      'padding': '10px',\n      'border': '1px solid black',\n      'border-radius': '15px'\n    });\n  itemContainer.appendChild(createElement('p', item.title, {},\n    {\n      'width': '100%',\n      'margin': '0 auto',\n      'font-weight': 'bold'\n    }));\n  itemContainer.appendChild(createElement('p', item.description));\n  itemContainer.appendChild(createElement('p', item.dueDate));\n  itemContainer.appendChild(createElement('p', item.priority));\n  return itemContainer;\n}\n\nfunction removeItemFromProject(project, item_id) {\n  const container = document.getElementById(project.title);\n  let itemToDelete = container.querySelector(`[item-id=\"${item_id}\"]`);\n  container.removeChild(itemToDelete);\n}\n\nfunction addNewToDoItem(project) {\n  const container = document.getElementById(project.title);\n  let title = prompt('Title: ');\n  let description = prompt('Description: ');\n  let dueDate = prompt('Due date (dd-mm-yyyy): ');\n  let priority = prompt('Priority(importan/medium/plain): ');\n  project.createItem(title, description, dueDate, priority);\n  updateProjectContainer(container, project);\n}\n\n\nfunction createElement(tagName, content, attributes = {}, styles = {}) {\n  const element = document.createElement(tagName);\n  Object.keys(attributes).forEach(attr => {\n    element.setAttribute(attr, attributes[attr]);\n  });\n  Object.keys(styles).forEach(style => {\n    element.style[style] = styles[style];\n  });\n  element.textContent = content;\n  return element;\n}\n\n//# sourceURL=webpack:///./src/ui_handler.js?");

/***/ })

/******/ });
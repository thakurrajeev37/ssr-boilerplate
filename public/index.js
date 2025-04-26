/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/components/App.js":
/*!**************************************!*\
  !*** ./src/client/components/App.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Organisms_NavBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Organisms/NavBar.js */ "./src/client/components/Organisms/NavBar.js");
/* harmony import */ var _routes_routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/routes.js */ "./src/client/routes/routes.js");




var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, _routes_routes_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
      key: route.path,
      path: route.path,
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(route.component, null)
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/client/components/Organisms/NavBar.js":
/*!***************************************************!*\
  !*** ./src/client/components/Organisms/NavBar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBar: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ "@mui/material/AppBar");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Toolbar */ "@mui/material/Toolbar");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "@mui/material/Button");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ "@mui/material/IconButton");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Menu */ "@mui/icons-material/Menu");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__);








var NavBar = function NavBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {
    position: "static"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "menu",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h6",
    component: "div",
    sx: {
      flexGrow: 1
    }
  }, "News"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
    color: "inherit"
  }, "Login"))));
};

/***/ }),

/***/ "./src/client/components/pages/Dashboard.js":
/*!**************************************************!*\
  !*** ./src/client/components/pages/Dashboard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dashboard: () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Dashboard = function Dashboard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Dashboard Page");
};

/***/ }),

/***/ "./src/client/components/pages/Home.js":
/*!*********************************************!*\
  !*** ./src/client/components/pages/Home.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Home: () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "homeHeader"
  }, "Home Page");
};

/***/ }),

/***/ "./src/client/components/pages/PageNotFound.js":
/*!*****************************************************!*\
  !*** ./src/client/components/pages/PageNotFound.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PageNotFound = function PageNotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "404 - Page Not Found");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageNotFound);

/***/ }),

/***/ "./src/client/routes/routes.js":
/*!*************************************!*\
  !*** ./src/client/routes/routes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_pages_Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/pages/Home.js */ "./src/client/components/pages/Home.js");
/* harmony import */ var _components_pages_Dashboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/pages/Dashboard.js */ "./src/client/components/pages/Dashboard.js");
/* harmony import */ var _components_pages_PageNotFound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pages/PageNotFound.js */ "./src/client/components/pages/PageNotFound.js");



var routes = [{
  path: "/home",
  component: _components_pages_Home_js__WEBPACK_IMPORTED_MODULE_0__.Home
}, {
  path: "/dashboard",
  component: _components_pages_Dashboard_js__WEBPACK_IMPORTED_MODULE_1__.Dashboard
}, {
  path: "*",
  component: _components_pages_PageNotFound_js__WEBPACK_IMPORTED_MODULE_2__["default"]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "@mui/icons-material/Menu":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Menu" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/client":
/*!***********************************!*\
  !*** external "react-dom/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/client");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./src/client/assets/styles/_styles.scss ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App.js */ "./src/client/components/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);




(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot)(document.getElementById('root'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNxQjtBQUNUO0FBQ1c7QUFFakQ2Qiw2REFBVyxDQUNQRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsZUFDL0JwQywwREFBQSxDQUFDQSx5REFBZ0IscUJBQ2JBLDBEQUFBLENBQUNrQywyREFBYSxxQkFDVmxDLDBEQUFBLENBQUNLLDBEQUFHLE1BQUMsQ0FDTSxDQUNELENBRXRCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5vZGUtYm9pbGVycGxhdGUvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL3JlYWN0LW5vZGUtYm9pbGVycGxhdGUvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvT3JnYW5pc21zL05hdkJhci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1ub2RlLWJvaWxlcnBsYXRlLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3BhZ2VzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1ub2RlLWJvaWxlcnBsYXRlLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9wYWdlcy9QYWdlTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS8uL3NyYy9jbGllbnQvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1ub2RlLWJvaWxlcnBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51XCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIkBtdWkvbWF0ZXJpYWwvQm94XCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiIiwid2VicGFjazovL3JlYWN0LW5vZGUtYm9pbGVycGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly9yZWFjdC1ub2RlLWJvaWxlcnBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0LWRvbS9jbGllbnRcIiIsIndlYnBhY2s6Ly9yZWFjdC1ub2RlLWJvaWxlcnBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL3JlYWN0LW5vZGUtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWFjdC1ub2RlLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWFjdC1ub2RlLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlYWN0LW5vZGUtYm9pbGVycGxhdGUvLi9zcmMvY2xpZW50L2Fzc2V0cy9zdHlsZXMvX3N0eWxlcy5zY3NzPzdkMzkiLCJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZS1ib2lsZXJwbGF0ZS8uL3NyYy9jbGllbnQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiLi9PcmdhbmlzbXMvTmF2QmFyLmpzXCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9yb3V0ZXMvcm91dGVzLmpzXCI7XG5cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgPD5cbiAgICAgICAgICAgIHsvKiA8TmF2QmFyIC8+ICovfVxuXG4gICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICB7cm91dGVzLm1hcCgocm91dGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gZWxlbWVudD17PHJvdXRlLmNvbXBvbmVudCAvPn0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgIDwvPlxuICAgICk7XG59IFxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XG5cbmV4cG9ydCBjb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcbiAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgTmV3c1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvQm94PlxuICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PkRhc2hib2FyZCBQYWdlPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoMyBjbGFzc05hbWU9J2hvbWVIZWFkZXInPkhvbWUgUGFnZTwvaDM+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgUGFnZU5vdEZvdW5kID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoMj40MDQgLSBQYWdlIE5vdCBGb3VuZDwvaDI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vdEZvdW5kIiwiaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VzL0hvbWUuanNcIjtcbmltcG9ydCB7IERhc2hib2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VzL0Rhc2hib2FyZC5qc1wiO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlcy9QYWdlTm90Rm91bmQuanNcIjtcblxuY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvaG9tZVwiLFxuICAgICAgICBjb21wb25lbnQ6IEhvbWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXG4gICAgICAgIGNvbXBvbmVudDogRGFzaGJvYXJkXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiKlwiLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VOb3RGb3VuZFxuICAgIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBoeWRyYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaHlkcmF0ZVJvb3QoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSxcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICA8QXBwLz5cbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgIFxuKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlIiwiUm91dGVzIiwiTmF2QmFyIiwicm91dGVzIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicm91dGUiLCJrZXkiLCJwYXRoIiwiZWxlbWVudCIsImNvbXBvbmVudCIsIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIk1lbnVJY29uIiwic3giLCJmbGV4R3JvdyIsInBvc2l0aW9uIiwic2l6ZSIsImVkZ2UiLCJjb2xvciIsIm1yIiwidmFyaWFudCIsIkRhc2hib2FyZCIsIkhvbWUiLCJjbGFzc05hbWUiLCJQYWdlTm90Rm91bmQiLCJoeWRyYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiU3RyaWN0TW9kZSJdLCJzb3VyY2VSb290IjoiIn0=
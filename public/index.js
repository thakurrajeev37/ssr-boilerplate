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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Organisms_NavBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Organisms/NavBar.js */ "./src/client/components/Organisms/NavBar.js");
/* harmony import */ var _routes_routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/routes.js */ "./src/client/routes/routes.js");




var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Routes, null, _routes_routes_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
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
  var handleClick = function handleClick() {
    alert('Button clicked!');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "homeHeader"
  }, "Home Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Click me!"));
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

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");

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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);




(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot)(document.getElementById("root"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUVnQixxRUFBU0E7QUFDeEIsQ0FBQyxFQUNEO0VBQ0lsQixJQUFJLEVBQUUsR0FBRztFQUNURSxTQUFTLEVBQUVzQix5RUFBWUE7QUFDM0IsQ0FBQyxDQUNKO0FBRUQsaUVBQWUvQixNQUFNOzs7Ozs7Ozs7O0FDbkJyQjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNxQjtBQUNUO0FBQ087QUFFN0NnQyw2REFBVyxDQUNQRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsZUFDL0J2QywwREFBQSxDQUFDQSx5REFBZ0IscUJBQ2JBLDBEQUFBLENBQUNxQyx1REFBYSxxQkFDVnJDLDBEQUFBLENBQUNLLDBEQUFHLE1BQUMsQ0FDTSxDQUNELENBRXRCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nzci1ib2lsZXJwbGF0ZS8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vc3NyLWJvaWxlcnBsYXRlLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL09yZ2FuaXNtcy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vc3NyLWJvaWxlcnBsYXRlLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3BhZ2VzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvUGFnZU5vdEZvdW5kLmpzIiwid2VicGFjazovL3Nzci1ib2lsZXJwbGF0ZS8uL3NyYy9jbGllbnQvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAbXVpL2ljb25zLW1hdGVyaWFsL01lbnVcIiIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiIiwid2VicGFjazovL3Nzci1ib2lsZXJwbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIkBtdWkvbWF0ZXJpYWwvQm94XCIiLCJ3ZWJwYWNrOi8vc3NyLWJvaWxlcnBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIiIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdFwiIiwid2VicGFjazovL3Nzci1ib2lsZXJwbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0LWRvbS9jbGllbnRcIiIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3NyLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Nzci1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3NyLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3NyLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3NyLWJvaWxlcnBsYXRlLy4vc3JjL2NsaWVudC9hc3NldHMvc3R5bGVzL19zdHlsZXMuc2Nzcz83ZDM5Iiwid2VicGFjazovL3Nzci1ib2lsZXJwbGF0ZS8uL3NyYy9jbGllbnQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuL09yZ2FuaXNtcy9OYXZCYXIuanNcIjtcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4uL3JvdXRlcy9yb3V0ZXMuanNcIjtcblxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICA8PlxuICAgICAgICAgICAgey8qIDxOYXZCYXIgLz4gKi99XG5cbiAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgIHtyb3V0ZXMubWFwKChyb3V0ZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Um91dGUga2V5PXtyb3V0ZS5wYXRofSBwYXRoPXtyb3V0ZS5wYXRofSBlbGVtZW50PXs8cm91dGUuY29tcG9uZW50IC8+fSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgPC8+XG4gICAgKTtcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcblxuZXhwb3J0IGNvbnN0IE5hdkJhciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxuICAgICAgICAgICAgc3g9e3sgbXI6IDIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICBOZXdzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgPC9Cb3g+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+RGFzaGJvYXJkIFBhZ2U8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGFsZXJ0KCdCdXR0b24gY2xpY2tlZCEnKTtcbiAgfTsgXG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDMgY2xhc3NOYW1lPSdob21lSGVhZGVyJz5Ib21lIFBhZ2U8L2gzPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIENsaWNrIG1lIVxuICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gICAgXG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgUGFnZU5vdEZvdW5kID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoMj40MDQgLSBQYWdlIE5vdCBGb3VuZDwvaDI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vdEZvdW5kIiwiaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VzL0hvbWUuanNcIjtcbmltcG9ydCB7IERhc2hib2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VzL0Rhc2hib2FyZC5qc1wiO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlcy9QYWdlTm90Rm91bmQuanNcIjtcblxuY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvaG9tZVwiLFxuICAgICAgICBjb21wb25lbnQ6IEhvbWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXG4gICAgICAgIGNvbXBvbmVudDogRGFzaGJvYXJkXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiKlwiLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VOb3RGb3VuZFxuICAgIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGh5ZHJhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAuanMnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmh5ZHJhdGVSb290KFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSxcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICA8QXBwLz5cbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgIFxuKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlIiwiUm91dGVzIiwiTmF2QmFyIiwicm91dGVzIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicm91dGUiLCJrZXkiLCJwYXRoIiwiZWxlbWVudCIsImNvbXBvbmVudCIsIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIk1lbnVJY29uIiwic3giLCJmbGV4R3JvdyIsInBvc2l0aW9uIiwic2l6ZSIsImVkZ2UiLCJjb2xvciIsIm1yIiwidmFyaWFudCIsIkRhc2hib2FyZCIsIkhvbWUiLCJoYW5kbGVDbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwib25DbGljayIsIlBhZ2VOb3RGb3VuZCIsImh5ZHJhdGVSb290IiwiQnJvd3NlclJvdXRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJTdHJpY3RNb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==
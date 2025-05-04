"use strict";
(self["webpackChunkssr_boilerplate"] = self["webpackChunkssr_boilerplate"] || []).push([["index"],{

/***/ "./src/client/components/App.js":
/*!**************************************!*\
  !*** ./src/client/components/App.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-AYJ5UCUI.mjs");
/* harmony import */ var _Organisms_NavBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Organisms/NavBar.js */ "./src/client/components/Organisms/NavBar.js");
/* harmony import */ var _routes_routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/routes.js */ "./src/client/routes/routes.js");




var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Routes, null, _routes_routes_js__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/esm/Menu.js");








var NavBar = function NavBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "menu",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6",
    component: "div",
    sx: {
      flexGrow: 1
    }
  }, "News"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PageNotFound = function PageNotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "404 - Page Not Found");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageNotFound);

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App.js */ "./src/client/components/App.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-AYJ5UCUI.mjs");




(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot)(document.getElementById("root"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], null))));

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_icons-material_esm_Menu_js-node_modules_mui_material_AppBar_AppBar_j-28be26"], () => (__webpack_exec__("./src/client/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLE1BQUMsQ0FDTSxDQUNELENBRXRCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmtEO0FBQ1U7QUFDRTtBQUUvRCxJQUFNRCxNQUFNLEdBQUcsQ0FDWDtFQUNJTyxJQUFJLEVBQUUsT0FBTztFQUNiRSxTQUFTLEVBQUVpQiwyREFBSUE7QUFDbkIsQ0FBQyxFQUNEO0VBQ0luQixJQUFJLEVBQUUsWUFBWTtFQUNsQkUsU0FBUyxFQUFFZ0IscUVBQVNBO0FBQ3hCLENBQUMsRUFDRDtFQUNJbEIsSUFBSSxFQUFFLEdBQUc7RUFDVEUsU0FBUyxFQUFFc0IseUVBQVlBO0FBQzNCLENBQUMsQ0FDSjtBQUVELGlFQUFlL0IsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nzci1ib2lsZXJwbGF0ZS8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vc3NyLWJvaWxlcnBsYXRlLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL09yZ2FuaXNtcy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vc3NyLWJvaWxlcnBsYXRlLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3BhZ2VzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9zc3ItYm9pbGVycGxhdGUvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvUGFnZU5vdEZvdW5kLmpzIiwid2VicGFjazovL3Nzci1ib2lsZXJwbGF0ZS8uL3NyYy9jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3NyLWJvaWxlcnBsYXRlLy4vc3JjL2NsaWVudC9yb3V0ZXMvcm91dGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiLi9PcmdhbmlzbXMvTmF2QmFyLmpzXCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9yb3V0ZXMvcm91dGVzLmpzXCI7XG5cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgPD5cbiAgICAgICAgICAgIHsvKiA8TmF2QmFyIC8+ICovfVxuXG4gICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICB7cm91dGVzLm1hcCgocm91dGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gZWxlbWVudD17PHJvdXRlLmNvbXBvbmVudCAvPn0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgIDwvPlxuICAgICk7XG59IFxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XG5cbmV4cG9ydCBjb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcbiAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgTmV3c1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvQm94PlxuICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PkRhc2hib2FyZCBQYWdlPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBhbGVydCgnQnV0dG9uIGNsaWNrZWQhJyk7XG4gIH07IFxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgzIGNsYXNzTmFtZT0naG9tZUhlYWRlcic+SG9tZSBQYWdlPC9oMz5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICBDbGljayBtZSFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICAgIFxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBhZ2VOb3RGb3VuZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aDI+NDA0IC0gUGFnZSBOb3QgRm91bmQ8L2gyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RGb3VuZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBoeWRyYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5oeWRyYXRlUm9vdChcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIiksXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgPEFwcC8+XG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gICBcbik7XG4iLCJpbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qc1wiO1xuaW1wb3J0IHsgRGFzaGJvYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZXMvRGFzaGJvYXJkLmpzXCI7XG5pbXBvcnQgUGFnZU5vdEZvdW5kIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VzL1BhZ2VOb3RGb3VuZC5qc1wiO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9ob21lXCIsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9kYXNoYm9hcmRcIixcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIqXCIsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kXG4gICAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGUiLCJSb3V0ZXMiLCJOYXZCYXIiLCJyb3V0ZXMiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJyb3V0ZSIsImtleSIsInBhdGgiLCJlbGVtZW50IiwiY29tcG9uZW50IiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJJY29uQnV0dG9uIiwiTWVudUljb24iLCJzeCIsImZsZXhHcm93IiwicG9zaXRpb24iLCJzaXplIiwiZWRnZSIsImNvbG9yIiwibXIiLCJ2YXJpYW50IiwiRGFzaGJvYXJkIiwiSG9tZSIsImhhbmRsZUNsaWNrIiwiYWxlcnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiUGFnZU5vdEZvdW5kIiwiaHlkcmF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlN0cmljdE1vZGUiXSwic291cmNlUm9vdCI6IiJ9
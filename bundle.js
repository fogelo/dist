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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kvantprogramm_web/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\nconst presentation = document.querySelector(\".presentation\")\nconst presentationCloseBtn = document.querySelector(\".presentation__btn-close\")\nconst presentationDownloadBtn = document.querySelector(\".kvantdetection__btn\")\nconst getDemoBtn = document.querySelector(\".main-block__btn\")\n\nconsole.log(presentationDownloadBtn);\npresentationCloseBtn.addEventListener(\"click\", ()=>{\n    presentation.classList.remove(\"opacity_1\")\n})\n\npresentationDownloadBtn.addEventListener(\"click\", ()=>{\n    console.log(111);\n    presentation.classList.add(\"opacity_1\")\n})\ngetDemoBtn.addEventListener(\"click\", ()=>{\n    console.log(111);\n    presentation.classList.add(\"opacity_1\")\n})\n\nconst hexagons = document.querySelectorAll(\".hexagon\")\nconst aesLabels = document.querySelectorAll(\".map__label\")\nconst map = document.querySelector(\".map\")\nconsole.log(map);\nconst observer = new IntersectionObserver(\n    (entries, observer) => {\n        console.log(entries);\n        console.log(entries[0].isIntersecting);\n\n        if (entries[0].isIntersecting) {\n\n            aesLabels.forEach(l => {\n                // l.style.opacity = \"0\"\n                l.classList.add(\"opacity_1\")\n                // console.log(l.classList);\n            })\n            hexagons.forEach(h => {\n                h.classList.add(\"opacity_1\")\n            })\n        }\n\n        //   entries.forEach((entry) => {\n        //     const currentIndex = Array.from(wrappers).indexOf(entry.target);\n        //     if (entry.isIntersecting) {\n        //       imgs[currentIndex].classList.add(animClasses[currentIndex]);\n        //     } else {\n        //       if (entry.boundingClientRect.y > 0) {\n        //         imgs[currentIndex].classList.remove(animClasses[currentIndex]);\n        //       }\n        //     }\n        //   });\n    },\n    {\n        //   root: container,\n        threshold: 0,\n    }\n);\n\n// const container = document.querySelector(\".container\");\n// const wrappers = document.querySelectorAll(\".wrapper\");\n// const imgs = document.querySelectorAll(\".img\");\n// const animClasses = [\"fadeInLeft\", \"fadeInRight\", \"fadeInBtm\", \"zoomIn\"];\n\n\nobserver.observe(map);\n\n// wrappers.forEach((wrapper) => {\n//   observer.observe(wrapper);\n// });\n\nconst carousel = document.querySelector(\".kvantdetection__carousel\")\nconst arrow = document.querySelector(\".kvantdetection__carousel-arrow\")\nconst icons = document.querySelectorAll(\".kvantdetection__carousel-icon\")\nconst tableIcon = document.querySelector(\".kvantdetection__carousel-table-icon\")\nconst formatsIcon = document.querySelector(\".kvantdetection__carousel-formats-icon\")\nconst deviceIcon = document.querySelector(\".kvantdetection__carousel-device-icon\")\nconst predictIcon = document.querySelector(\".kvantdetection__carousel-predict-icon\")\nconst targetIcon = document.querySelector(\".kvantdetection__carousel-target-icon\")\n\nconsole.log(deviceIcon);\nconsole.log(tableIcon);\n\narrow.addEventListener(\"click\", (event) => {\n    deviceIcon.style.transition = \"0.5s\"\n\n    for (let i = 0; i < icons.length; i++) {\n\n        if (icons[i].classList.contains(\"opacity_1\")) {\n            icons[i].classList.remove(\"opacity_1\")\n\n            if (icons[i + 1]) {\n                icons[i + 1].classList.add(\"opacity_1\")\n            } else {\n                icons[0].classList.add(\"opacity_1\")\n            }\n            if (icons[i + 1]?.classList.contains(\"kvantdetection__carousel-table-icon\") || icons[i + 1] === undefined) {\n                formatsIcon.classList.add(\"opacity_1\")\n            } else {\n                formatsIcon.classList.remove(\"opacity_1\")\n\n            }\n            if (icons[i + 1]?.classList.contains(\"kvantdetection__carousel-list-icon\")) {\n                deviceIcon.classList.add(\"opacity_1\")\n\n            } else if (icons[i + 1]?.classList.contains(\"kvantdetection__carousel-chart-icon\")) {\n                predictIcon.classList.add(\"opacity_1\")\n                targetIcon.classList.add(\"opacity_1\")\n                deviceIcon.classList.add(\"translate_50\")\n            } else {\n                deviceIcon.classList.remove(\"opacity_1\")\n                predictIcon.classList.remove(\"opacity_1\")\n                targetIcon.classList.remove(\"opacity_1\")\n                deviceIcon.style.transition = \"none\"\n                deviceIcon.classList.remove(\"translate_50\")\n            }\n            return\n        }\n    }\n});\n\n\n\n//# sourceURL=webpack://kvantprogramm_web/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
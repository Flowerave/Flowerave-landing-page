"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/componentns/SectionGlass/SectionGlass.js":
/*!******************************************************!*\
  !*** ./src/componentns/SectionGlass/SectionGlass.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\nfunction SectionGlass() {\n    _s();\n    const myLoader = (param)=>{\n        let { src , width , quality  } = param;\n        return \"http://flowerave.me/assets/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 100);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".sectionGlass_glass1\", {\n            duration: 1,\n            y: \"-8em\",\n            transformOrigin: \"center\",\n            scale: \"1.4\",\n            rotate: \"-30deg\",\n            transformOrigin: \"top\",\n            scrollTrigger: {\n                trigger: \".sectionGlass\",\n                start: \"top center\",\n                end: \"bottom \",\n                scrub: 1\n            }\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".sectionGlass_glass2\", {\n            duration: 1,\n            y: \"8em\",\n            transformOrigin: \"center\",\n            scale: \"1.4\",\n            rotate: \"10deg\",\n            transformOrigin: \"top\",\n            scrollTrigger: {\n                trigger: \".sectionGlass\",\n                start: \"top center\",\n                end: \"bottom \",\n                scrub: 3\n            }\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".sectionGlass_glass3\", {\n            duration: 1,\n            y: \"-5em\",\n            transformOrigin: \"center\",\n            scale: \"1.4\",\n            rotate: \"90deg\",\n            transformOrigin: \"top\",\n            scrollTrigger: {\n                trigger: \".sectionGlass\",\n                start: \"top center\",\n                end: \"bottom \",\n                scrub: 3\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sectionGlass\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"sectionGlass_glass1\",\n                loader: myLoader,\n                src: \"glass1.png\",\n                width: 500,\n                height: 500\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page-20/src/componentns/SectionGlass/SectionGlass.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"sectionGlass_glass2\",\n                loader: myLoader,\n                src: \"glass2.png\",\n                width: 500,\n                height: 500\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page-20/src/componentns/SectionGlass/SectionGlass.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"sectionGlass_glass3\",\n                loader: myLoader,\n                src: \"glass3.png\",\n                width: 500,\n                height: 500\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page-20/src/componentns/SectionGlass/SectionGlass.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page-20/src/componentns/SectionGlass/SectionGlass.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(SectionGlass, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = SectionGlass;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionGlass);\nvar _c;\n$RefreshReg$(_c, \"SectionGlass\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50bnMvU2VjdGlvbkdsYXNzL1NlY3Rpb25HbGFzcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSztBQUVIO0FBQzRCO0FBQ3RCO0FBRWxDRSxxREFBbUIsQ0FBQ0Msa0VBQWFBO0FBRWpDLFNBQVNHLGVBQWU7O0lBRXBCLE1BQU1DLFdBQVcsU0FBNkI7WUFBNUIsRUFBRUMsSUFBRyxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRTtRQUNyQyxPQUFPLDhCQUF1Q0QsT0FBVEQsS0FBSSxPQUFnQkUsT0FBWEQsT0FBTSxPQUFvQixPQUFmQyxXQUFXO0lBQ3hFO0lBRUFOLGdEQUFTQSxDQUFDLElBQU07UUFDWkYseUNBQU8sQ0FBQyx3QkFBd0I7WUFDNUJVLFVBQVU7WUFDVkMsR0FBRztZQUNIQyxpQkFBaUI7WUFDakJDLE9BQU07WUFDTkMsUUFBUTtZQUNSRixpQkFBaUI7WUFDakJHLGVBQWU7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xDLE9BQU87WUFDZjtRQUNBO1FBRUFuQix5Q0FBTyxDQUFDLHdCQUF3QjtZQUM1QlUsVUFBVTtZQUNWQyxHQUFHO1lBQ0hDLGlCQUFpQjtZQUNqQkMsT0FBTTtZQUNOQyxRQUFRO1lBQ1JGLGlCQUFpQjtZQUNqQkcsZUFBZTtnQkFDWEMsU0FBUztnQkFDVEMsT0FBTztnQkFDUEMsS0FBSztnQkFDTEMsT0FBTztZQUNmO1FBQ0E7UUFFQW5CLHlDQUFPLENBQUMsd0JBQXdCO1lBQzVCVSxVQUFVO1lBQ1ZDLEdBQUc7WUFDSEMsaUJBQWlCO1lBQ2pCQyxPQUFNO1lBQ05DLFFBQVE7WUFDUkYsaUJBQWlCO1lBQ2pCRyxlQUFlO2dCQUNYQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxLQUFLO2dCQUNMQyxPQUFPO1lBQ2Y7UUFDQTtJQUVKLEdBQUcsRUFBRTtJQUVQLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ3RCLG1EQUFLQTtnQkFDRnNCLFdBQVU7Z0JBQ1ZDLFFBQVFqQjtnQkFDUkMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUGdCLFFBQVE7Ozs7OzswQkFHWiw4REFBQ3hCLG1EQUFLQTtnQkFDRnNCLFdBQVU7Z0JBQ1ZDLFFBQVFqQjtnQkFDUkMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUGdCLFFBQVE7Ozs7OzswQkFHWiw4REFBQ3hCLG1EQUFLQTtnQkFDRnNCLFdBQVU7Z0JBQ1ZDLFFBQVFqQjtnQkFDUkMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUGdCLFFBQVE7Ozs7Ozs7Ozs7OztBQUlwQjtHQWpGU25CO0tBQUFBO0FBbUZULCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRucy9TZWN0aW9uR2xhc3MvU2VjdGlvbkdsYXNzLmpzPzA0ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZnVuY3Rpb24gU2VjdGlvbkdsYXNzKCkge1xuXG4gICAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBodHRwOi8vZmxvd2VyYXZlLm1lL2Fzc2V0cy8ke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCAxMDB9YFxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdzYXAudG8oXCIuc2VjdGlvbkdsYXNzX2dsYXNzMVwiLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgIHk6IFwiLThlbVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgc2NhbGU6XCIxLjRcIixcbiAgICAgICAgICAgIHJvdGF0ZTogXCItMzBkZWdcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJ0b3BcIixcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uR2xhc3NcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcImJvdHRvbSBcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogMSxcbiAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3NhcC50byhcIi5zZWN0aW9uR2xhc3NfZ2xhc3MyXCIsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgeTogXCI4ZW1cIixcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHNjYWxlOlwiMS40XCIsXG4gICAgICAgICAgICByb3RhdGU6IFwiMTBkZWdcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJ0b3BcIixcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uR2xhc3NcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcImJvdHRvbSBcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogMyxcbiAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3NhcC50byhcIi5zZWN0aW9uR2xhc3NfZ2xhc3MzXCIsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgeTogXCItNWVtXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBzY2FsZTpcIjEuNFwiLFxuICAgICAgICAgICAgcm90YXRlOiBcIjkwZGVnXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwidG9wXCIsXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuc2VjdGlvbkdsYXNzXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJib3R0b20gXCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25HbGFzcyc+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uR2xhc3NfZ2xhc3MxJ1xuICAgICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgICAgIHNyYz1cImdsYXNzMS5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uR2xhc3NfZ2xhc3MyJ1xuICAgICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgICAgIHNyYz1cImdsYXNzMi5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uR2xhc3NfZ2xhc3MzJ1xuICAgICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgICAgIHNyYz1cImdsYXNzMy5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25HbGFzcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJ1c2VFZmZlY3QiLCJyZWdpc3RlclBsdWdpbiIsIlNlY3Rpb25HbGFzcyIsIm15TG9hZGVyIiwic3JjIiwid2lkdGgiLCJxdWFsaXR5IiwidG8iLCJkdXJhdGlvbiIsInkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJzY2FsZSIsInJvdGF0ZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsImRpdiIsImNsYXNzTmFtZSIsImxvYWRlciIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/componentns/SectionGlass/SectionGlass.js\n"));

/***/ })

});
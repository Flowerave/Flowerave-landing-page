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

/***/ "./src/componentns/SectionService/Card/Card.js":
/*!*****************************************************!*\
  !*** ./src/componentns/SectionService/Card/Card.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\nfunction Card(props) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".v-a\", {\n            duration: 10,\n            y: \"-8px\",\n            scrollTrigger: {\n                trigger: \".card_Service\",\n                start: \"top center\",\n                end: \"bottom \",\n                scrub: 1\n            }\n        });\n        // Next\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".t-a\", {\n            duration: 10,\n            y: \"-4px\",\n            scrollTrigger: {\n                trigger: \".card_Service\",\n                start: \"top center\",\n                end: \"bottom \",\n                scrub: 1\n            }\n        });\n        // Next\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".d-a\", {\n            duration: 10,\n            y: \"2px\",\n            scrollTrigger: {\n                trigger: \".card_Service\",\n                start: \"top center\",\n                end: \"bottom \",\n                scrub: 1\n            }\n        });\n    }, []);\n    const myLoader = (param)=>{\n        let { src , width , quality  } = param;\n        return \"https://flowerave.app/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card_Service\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                className: \"v-a video-colba image\",\n                loop: \"true\",\n                muted: \"true\",\n                autoplay: \"true\",\n                playsinline: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: props.video\n                }, void 0, false, {\n                    fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"t-a title\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"body\",\n                children: props.body\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"d-a description\",\n                children: props.description\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"caption\",\n                children: props.caption\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(Card, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50bnMvU2VjdGlvblNlcnZpY2UvQ2FyZC9DYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNLO0FBRUg7QUFDNEI7QUFDdEI7QUFFbENFLHFEQUFtQixDQUFDQyxrRUFBYUE7QUFFakMsU0FBU0csS0FBS0MsS0FBSyxFQUFFOztJQUVqQkgsZ0RBQVNBLENBQUMsSUFBTTtRQUNaRix5Q0FBTyxDQUFDLFFBQVE7WUFDWk8sVUFBVTtZQUNWQyxHQUFHO1lBQ0hDLGVBQWU7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xDLE9BQU87WUFDZjtRQUNBO1FBQ0EsT0FBTztRQUNQYix5Q0FBTyxDQUFDLFFBQVE7WUFDWk8sVUFBVTtZQUNWQyxHQUFHO1lBQ0hDLGVBQWU7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xDLE9BQU87WUFDZjtRQUNBO1FBQ0EsT0FBTztRQUNQYix5Q0FBTyxDQUFDLFFBQVE7WUFDWk8sVUFBVTtZQUNWQyxHQUFHO1lBQ0hDLGVBQWU7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xDLE9BQU87WUFDZjtRQUNBO0lBQ0EsR0FBRyxFQUFFO0lBRVQsTUFBTUMsV0FBVyxTQUE2QjtZQUE1QixFQUFFQyxJQUFHLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFO1FBQ3JDLE9BQU8seUJBQWtDRCxPQUFURCxLQUFJLE9BQWdCRSxPQUFYRCxPQUFNLE9BQW1CLE9BQWRDLFdBQVc7SUFDbkU7SUFFRixxQkFDTSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFNRCxXQUFVO2dCQUF3QkUsTUFBTTtnQkFBUUMsT0FBTztnQkFBUUMsVUFBVTtnQkFBUUMsYUFBYTswQkFDakcsNEVBQUNDO29CQUFPVixLQUFNVixNQUFNZSxLQUFLOzs7Ozs7Ozs7OzswQkFFN0IsOERBQUNNO2dCQUFHUCxXQUFVOzBCQUFjZCxNQUFNc0IsS0FBSzs7Ozs7OzBCQUN2Qyw4REFBQ0M7Z0JBQUVULFdBQVU7MEJBQVNkLE1BQU13QixJQUFJOzs7Ozs7MEJBQ2hDLDhEQUFDRDtnQkFBRVQsV0FBVTswQkFBb0JkLE1BQU15QixXQUFXOzs7Ozs7MEJBQ2xELDhEQUFDRjtnQkFBRVQsV0FBVTswQkFBWWQsTUFBTTBCLE9BQU87Ozs7Ozs7Ozs7OztBQUdsRDtHQXBEUzNCO0tBQUFBO0FBc0RULCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRucy9TZWN0aW9uU2VydmljZS9DYXJkL0NhcmQuanM/ZDBjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnc2FwLnRvKFwiLnYtYVwiLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMTAsXG4gICAgICAgICAgICB5OiBcIi04cHhcIixcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5jYXJkX1NlcnZpY2VcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcImJvdHRvbSBcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogMSxcbiAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE5leHRcbiAgICAgICAgZ3NhcC50byhcIi50LWFcIiwge1xuICAgICAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICAgICAgeTogXCItNHB4XCIsXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuY2FyZF9TZXJ2aWNlXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJib3R0b20gXCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBOZXh0XG4gICAgICAgIGdzYXAudG8oXCIuZC1hXCIsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMCxcbiAgICAgICAgICAgIHk6IFwiMnB4XCIsXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuY2FyZF9TZXJ2aWNlXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJib3R0b20gXCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vZmxvd2VyYXZlLmFwcC8ke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9TZXJ2aWNlXCI+XG4gICAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPSd2LWEgdmlkZW8tY29sYmEgaW1hZ2UnIGxvb3A9eyd0cnVlJ30gbXV0ZWQ9eyd0cnVlJ30gYXV0b3BsYXk9eyd0cnVlJ30gcGxheXNpbmxpbmU9eyd0cnVlJ30+XG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9eyBwcm9wcy52aWRlbyB9IC8+XG4gICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndC1hIHRpdGxlJz57IHByb3BzLnRpdGxlIH08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdib2R5Jz57IHByb3BzLmJvZHkgfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZC1hIGRlc2NyaXB0aW9uJz57IHByb3BzLmRlc2NyaXB0aW9uIH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhcHRpb24nPnsgcHJvcHMuY2FwdGlvbiB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInVzZUVmZmVjdCIsInJlZ2lzdGVyUGx1Z2luIiwiQ2FyZCIsInByb3BzIiwidG8iLCJkdXJhdGlvbiIsInkiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsImRpdiIsImNsYXNzTmFtZSIsInZpZGVvIiwibG9vcCIsIm11dGVkIiwiYXV0b3BsYXkiLCJwbGF5c2lubGluZSIsInNvdXJjZSIsImgzIiwidGl0bGUiLCJwIiwiYm9keSIsImRlc2NyaXB0aW9uIiwiY2FwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/componentns/SectionService/Card/Card.js\n"));

/***/ })

});
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

/***/ "./src/componentns/Combo/ComboText.js":
/*!********************************************!*\
  !*** ./src/componentns/Combo/ComboText.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ \"./src/componentns/Button/Button.js\");\n\n\n\nfunction ComboText(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"comboText\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"headerline headerline5\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/Combo/ComboText.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"description\",\n                children: props.description\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/Combo/ComboText.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        body: props.primaryBtn\n                    }, void 0, false, {\n                        fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/Combo/ComboText.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        body: props.secondaryBtn\n                    }, void 0, false, {\n                        fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/Combo/ComboText.js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/Combo/ComboText.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/Combo/ComboText.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = ComboText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComboText);\nvar _c;\n$RefreshReg$(_c, \"ComboText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50bnMvQ29tYm8vQ29tYm9UZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDWTtBQUV0QyxTQUFTRSxVQUFVQyxLQUFLLEVBQUU7SUFDeEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEJGLE1BQU1JLEtBQUs7Ozs7OzswQkFDbkQsOERBQUNDO2dCQUFFSCxXQUFVOzBCQUFlRixNQUFNTSxXQUFXOzs7Ozs7MEJBQzdDLDhEQUFDTDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNKLHNEQUFNQTt3QkFBQ1MsTUFBTVAsTUFBTVEsVUFBVTs7Ozs7O2tDQUM5Qiw4REFBQ1Ysc0RBQU1BO3dCQUFDUyxNQUFNUCxNQUFNUyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUM7S0FYU1Y7QUFhVCwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50bnMvQ29tYm8vQ29tYm9UZXh0LmpzPzNlNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5cbmZ1bmN0aW9uIENvbWJvVGV4dChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb21ib1RleHQnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdoZWFkZXJsaW5lIGhlYWRlcmxpbmU1Jz57cHJvcHMudGl0bGV9PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8QnV0dG9uIGJvZHk9e3Byb3BzLnByaW1hcnlCdG59IC8+XG4gICAgICAgICAgICA8QnV0dG9uIGJvZHk9e3Byb3BzLnNlY29uZGFyeUJ0bn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tYm9UZXh0Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ29tYm9UZXh0IiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiYm9keSIsInByaW1hcnlCdG4iLCJzZWNvbmRhcnlCdG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/componentns/Combo/ComboText.js\n"));

/***/ })

});
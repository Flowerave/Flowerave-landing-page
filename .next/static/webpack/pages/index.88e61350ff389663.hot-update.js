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

/***/ "./src/componentns/SectionMain/SectionMain.js":
/*!****************************************************!*\
  !*** ./src/componentns/SectionMain/SectionMain.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button_ButtonPrimary_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/ButtonPrimary/ButtonPrimary */ \"./src/componentns/Button/ButtonPrimary/ButtonPrimary.js\");\n/* harmony import */ var _Button_ButtonSecondary_ButtonSecondary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/ButtonSecondary/ButtonSecondary */ \"./src/componentns/Button/ButtonSecondary/ButtonSecondary.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_5__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger);\nfunction SectionMain() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".video\", {\n            duration: 1,\n            filter: \"blur(3em)\",\n            opacity: 0,\n            y: \"-100vh\",\n            transformOrigin: \"top\",\n            scrollTrigger: {\n                trigger: \".sectionMain\",\n                start: \"top\",\n                end: \"bottom \",\n                scrub: 3\n            }\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".headerline-action\", {\n            duration: 10,\n            y: \"-3.5em\",\n            transformOrigin: \"top\",\n            scrollTrigger: {\n                trigger: \".sectionMain\",\n                start: \"top\",\n                end: \"bottom \",\n                scrub: 1\n            }\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".row-action\", {\n            duration: 10,\n            y: \"-2.5em\",\n            transformOrigin: \"top\",\n            scrollTrigger: {\n                trigger: \".sectionMain\",\n                start: \"top center\",\n                end: \"bottom \",\n                scrub: 3\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"sectionMain\",\n        className: \"sectionMain\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                className: \"video\",\n                loop: \"true\",\n                muted: \"true\",\n                autoPlay: \"true\",\n                playsInline: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/video.mp4\",\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionMain/SectionMain.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionMain/SectionMain.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"headerline-action headerline headerline2\",\n                        children: \"Unlock Your Possibilities with Flowerave: TON Blockchain Technology and NFTs!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionMain/SectionMain.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row-action row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"https://getgems.io\",\n                                target: \"_blank\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_ButtonPrimary_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    body: \"Buy NFT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionMain/SectionMain.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionMain/SectionMain.js\",\n                                lineNumber: 63,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"https://t.me/demo_flowerave_bot\",\n                                target: \"_blank\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_ButtonSecondary_ButtonSecondary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    body: \"Go βeta\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionMain/SectionMain.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionMain/SectionMain.js\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionMain/SectionMain.js\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionMain/SectionMain.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionMain/SectionMain.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(SectionMain, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = SectionMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionMain);\nvar _c;\n$RefreshReg$(_c, \"SectionMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50bnMvU2VjdGlvbk1haW4vU2VjdGlvbk1haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSDtBQUN3QztBQUNNO0FBRTVDO0FBQzRCO0FBQ3RCO0FBRWxDSSxxREFBbUIsQ0FBQ0Msa0VBQWFBO0FBRWpDLFNBQVNHLGNBQWM7O0lBQ2ZGLGdEQUFTQSxDQUFDLElBQU07UUFDaEJGLHlDQUFPLENBQUMsVUFBVTtZQUNkTSxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxHQUFHO1lBQ0hDLGlCQUFpQjtZQUNqQkMsZUFBZTtnQkFDWEMsU0FBUztnQkFDVEMsT0FBTztnQkFDUEMsS0FBSztnQkFDTEMsT0FBTztZQUNmO1FBQ0E7UUFFQWYseUNBQU8sQ0FBQyxzQkFBc0I7WUFDMUJNLFVBQVU7WUFDVkcsR0FBRztZQUNIQyxpQkFBaUI7WUFDakJDLGVBQWU7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xDLE9BQU87WUFDZjtRQUNBO1FBRUFmLHlDQUFPLENBQUMsZUFBZTtZQUNuQk0sVUFBVTtZQUNWRyxHQUFHO1lBQ0hDLGlCQUFpQjtZQUNqQkMsZUFBZTtnQkFDWEMsU0FBUztnQkFDVEMsT0FBTztnQkFDUEMsS0FBSztnQkFDTEMsT0FBTztZQUNmO1FBQ0E7SUFDQSxHQUFHLEVBQUU7SUFFWCxxQkFDRSw4REFBQ0M7UUFBSUMsSUFBRztRQUFjQyxXQUFVOzswQkFFNUIsOERBQUNDO2dCQUFNRCxXQUFVO2dCQUFRRSxNQUFNO2dCQUFRQyxPQUFPO2dCQUFRQyxVQUFVO2dCQUFRQyxhQUFhOzBCQUNqRiw0RUFBQ0M7b0JBQU9DLEtBQUk7b0JBQWFDLE1BQUs7Ozs7Ozs7Ozs7OzBCQUdsQyw4REFBQ1Y7Z0JBQUlFLFdBQVU7O2tDQUNYLDhEQUFDUzt3QkFBR1QsV0FBVTtrQ0FBMkM7Ozs7OztrQ0FDekQsOERBQUNGO3dCQUFJRSxXQUFVOzswQ0FDWCw4REFBQ3RCLGtEQUFJQTtnQ0FBQ2dDLE1BQUs7Z0NBQXFCQyxRQUFPOzBDQUNuQyw0RUFBQy9CLDJFQUFhQTtvQ0FBQ2dDLE1BQUs7Ozs7Ozs7Ozs7OzBDQUV4Qiw4REFBQ2xDLGtEQUFJQTtnQ0FBQ2dDLE1BQU07Z0NBQW1DQyxRQUFPOzBDQUNsRCw0RUFBQzlCLCtFQUFlQTtvQ0FBQytCLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDO0dBN0RTMUI7S0FBQUE7QUErRFQsK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudG5zL1NlY3Rpb25NYWluL1NlY3Rpb25NYWluLmpzPzM0YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uUHJpbWFyeSBmcm9tICcuLi9CdXR0b24vQnV0dG9uUHJpbWFyeS9CdXR0b25QcmltYXJ5JztcbmltcG9ydCBCdXR0b25TZWNvbmRhcnkgZnJvbSAnLi4vQnV0dG9uL0J1dHRvblNlY29uZGFyeS9CdXR0b25TZWNvbmRhcnknO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5mdW5jdGlvbiBTZWN0aW9uTWFpbigpIHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ3NhcC50byhcIi52aWRlb1wiLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDNlbSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB5OiBcIi0xMDB2aFwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcInRvcFwiLFxuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnNlY3Rpb25NYWluXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcImJvdHRvbSBcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogMyxcbiAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3NhcC50byhcIi5oZWFkZXJsaW5lLWFjdGlvblwiLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMTAsXG4gICAgICAgICAgICB5OiBcIi0zLjVlbVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcInRvcFwiLFxuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnNlY3Rpb25NYWluXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcImJvdHRvbSBcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogMSxcbiAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3NhcC50byhcIi5yb3ctYWN0aW9uXCIsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMCxcbiAgICAgICAgICAgIHk6IFwiLTIuNWVtXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwidG9wXCIsXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuc2VjdGlvbk1haW5cIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcImJvdHRvbSBcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogMyxcbiAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J3NlY3Rpb25NYWluJyBjbGFzc05hbWU9J3NlY3Rpb25NYWluJz5cbiAgICAgICAgey8qIE1haW4gVmlkZW8gKi99XG4gICAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJ2aWRlb1wiIGxvb3A9eyd0cnVlJ30gbXV0ZWQ9eyd0cnVlJ30gYXV0b1BsYXk9eyd0cnVlJ30gcGxheXNJbmxpbmU9eyd0cnVlJ30+XG4gICAgICAgICAgICA8c291cmNlIHNyYz1cIi92aWRlby5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgPC92aWRlbz5cbiAgICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2hlYWRlcmxpbmUtYWN0aW9uIGhlYWRlcmxpbmUgaGVhZGVybGluZTInPlVubG9jayBZb3VyIFBvc3NpYmlsaXRpZXMgd2l0aCBGbG93ZXJhdmU6IFRPTiBCbG9ja2NoYWluIFRlY2hub2xvZ3kgYW5kIE5GVHMhPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3ctYWN0aW9uIHJvdyc+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2V0Z2Vtcy5pb1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uUHJpbWFyeSBib2R5PVwiQnV5IE5GVFwiIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eydodHRwczovL3QubWUvZGVtb19mbG93ZXJhdmVfYm90J30gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25TZWNvbmRhcnkgYm9keT1cIkdvIM6yZXRhXCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbk1haW4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiQnV0dG9uUHJpbWFyeSIsIkJ1dHRvblNlY29uZGFyeSIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwidXNlRWZmZWN0IiwicmVnaXN0ZXJQbHVnaW4iLCJTZWN0aW9uTWFpbiIsInRvIiwiZHVyYXRpb24iLCJmaWx0ZXIiLCJvcGFjaXR5IiwieSIsInRyYW5zZm9ybU9yaWdpbiIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwidmlkZW8iLCJsb29wIiwibXV0ZWQiLCJhdXRvUGxheSIsInBsYXlzSW5saW5lIiwic291cmNlIiwic3JjIiwidHlwZSIsImgxIiwiaHJlZiIsInRhcmdldCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/componentns/SectionMain/SectionMain.js\n"));

/***/ })

});
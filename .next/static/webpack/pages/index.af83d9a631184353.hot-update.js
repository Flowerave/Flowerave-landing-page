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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\nfunction Card(props) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".v-a\", {\n            duration: 10,\n            y: \"-80px\",\n            transition: \"rotate(30deg)\",\n            scrollTrigger: {\n                trigger: \".card_Service\",\n                start: \"top center\",\n                end: \"bottom \",\n                scrub: 1\n            }\n        });\n        // Next\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".t-a\", {\n            duration: 10,\n            y: \"-8px\",\n            scrollTrigger: {\n                trigger: \".card_Service\",\n                start: \"top center\",\n                end: \"bottom \",\n                scrub: 1\n            }\n        });\n        // Next\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".d-a\", {\n            duration: 10,\n            y: \"4px\",\n            scrollTrigger: {\n                trigger: \".card_Service\",\n                start: \"top center\",\n                end: \"bottom \",\n                scrub: 1\n            }\n        });\n    }, []);\n    const myLoader = (param)=>{\n        let { src , width , quality  } = param;\n        return \"https://flowerave.app/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card_Service\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                className: \"v-a video-colba image\",\n                loop: \"true\",\n                muted: \"true\",\n                autoplay: \"true\",\n                playsinline: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/empty.mp4\"\n                }, void 0, false, {\n                    fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"t-a title\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"body\",\n                children: props.body\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"d-a description\",\n                children: props.description\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"caption\",\n                children: props.caption\n            }, void 0, false, {\n                fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snowflake/Documents/GitHub/Flowerave-landing-page/src/componentns/SectionService/Card/Card.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n_s(Card, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50bnMvU2VjdGlvblNlcnZpY2UvQ2FyZC9DYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNLO0FBRUg7QUFDNEI7QUFDdEI7QUFFbENFLHFEQUFtQixDQUFDQyxrRUFBYUE7QUFFakMsU0FBU0csS0FBS0MsS0FBSyxFQUFFOztJQUVqQkgsZ0RBQVNBLENBQUMsSUFBTTtRQUNaRix5Q0FBTyxDQUFDLFFBQVE7WUFDWk8sVUFBVTtZQUNWQyxHQUFHO1lBQ0hDLFlBQVk7WUFDWkMsZUFBZTtnQkFDWEMsU0FBUztnQkFDVEMsT0FBTztnQkFDUEMsS0FBSztnQkFDTEMsT0FBTztZQUNmO1FBQ0E7UUFDQSxPQUFPO1FBQ1BkLHlDQUFPLENBQUMsUUFBUTtZQUNaTyxVQUFVO1lBQ1ZDLEdBQUc7WUFDSEUsZUFBZTtnQkFDWEMsU0FBUztnQkFDVEMsT0FBTztnQkFDUEMsS0FBSztnQkFDTEMsT0FBTztZQUNmO1FBQ0E7UUFDQSxPQUFPO1FBQ1BkLHlDQUFPLENBQUMsUUFBUTtZQUNaTyxVQUFVO1lBQ1ZDLEdBQUc7WUFDSEUsZUFBZTtnQkFDWEMsU0FBUztnQkFDVEMsT0FBTztnQkFDUEMsS0FBSztnQkFDTEMsT0FBTztZQUNmO1FBQ0E7SUFDQSxHQUFHLEVBQUU7SUFFVCxNQUFNQyxXQUFXLFNBQTZCO1lBQTVCLEVBQUVDLElBQUcsRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUU7UUFDckMsT0FBTyx5QkFBa0NELE9BQVRELEtBQUksT0FBZ0JFLE9BQVhELE9BQU0sT0FBbUIsT0FBZEMsV0FBVztJQUNuRTtJQUVGLHFCQUNNLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU1ELFdBQVU7Z0JBQXdCRSxNQUFNO2dCQUFRQyxPQUFPO2dCQUFRQyxVQUFVO2dCQUFRQyxhQUFhOzBCQUNqRyw0RUFBQ0M7b0JBQU9WLEtBQUk7Ozs7Ozs7Ozs7OzBCQUVoQiw4REFBQ1c7Z0JBQUdQLFdBQVU7MEJBQWNmLE1BQU11QixLQUFLOzs7Ozs7MEJBQ3ZDLDhEQUFDQztnQkFBRVQsV0FBVTswQkFBU2YsTUFBTXlCLElBQUk7Ozs7OzswQkFDaEMsOERBQUNEO2dCQUFFVCxXQUFVOzBCQUFvQmYsTUFBTTBCLFdBQVc7Ozs7OzswQkFDbEQsOERBQUNGO2dCQUFFVCxXQUFVOzBCQUFZZixNQUFNMkIsT0FBTzs7Ozs7Ozs7Ozs7O0FBR2xEO0dBckRTNUI7S0FBQUE7QUF1RFQsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudG5zL1NlY3Rpb25TZXJ2aWNlL0NhcmQvQ2FyZC5qcz9kMGMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdzYXAudG8oXCIudi1hXCIsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMCxcbiAgICAgICAgICAgIHk6IFwiLTgwcHhcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwicm90YXRlKDMwZGVnKVwiLFxuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLmNhcmRfU2VydmljZVwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcInRvcCBjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwiYm90dG9tIFwiLFxuICAgICAgICAgICAgICAgIHNjcnViOiAxLFxuICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gTmV4dFxuICAgICAgICBnc2FwLnRvKFwiLnQtYVwiLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMTAsXG4gICAgICAgICAgICB5OiBcIi04cHhcIixcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5jYXJkX1NlcnZpY2VcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcImJvdHRvbSBcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogMSxcbiAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE5leHRcbiAgICAgICAgZ3NhcC50byhcIi5kLWFcIiwge1xuICAgICAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICAgICAgeTogXCI0cHhcIixcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5jYXJkX1NlcnZpY2VcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcImJvdHRvbSBcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogMSxcbiAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly9mbG93ZXJhdmUuYXBwLyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX1NlcnZpY2VcIj5cbiAgICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9J3YtYSB2aWRlby1jb2xiYSBpbWFnZScgbG9vcD17J3RydWUnfSBtdXRlZD17J3RydWUnfSBhdXRvcGxheT17J3RydWUnfSBwbGF5c2lubGluZT17J3RydWUnfT5cbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIi9lbXB0eS5tcDRcIiAvPlxuICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3QtYSB0aXRsZSc+eyBwcm9wcy50aXRsZSB9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYm9keSc+eyBwcm9wcy5ib2R5IH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2QtYSBkZXNjcmlwdGlvbic+eyBwcm9wcy5kZXNjcmlwdGlvbiB9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXB0aW9uJz57IHByb3BzLmNhcHRpb24gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZCJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJ1c2VFZmZlY3QiLCJyZWdpc3RlclBsdWdpbiIsIkNhcmQiLCJwcm9wcyIsInRvIiwiZHVyYXRpb24iLCJ5IiwidHJhbnNpdGlvbiIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsIm15TG9hZGVyIiwic3JjIiwid2lkdGgiLCJxdWFsaXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwidmlkZW8iLCJsb29wIiwibXV0ZWQiLCJhdXRvcGxheSIsInBsYXlzaW5saW5lIiwic291cmNlIiwiaDMiLCJ0aXRsZSIsInAiLCJib2R5IiwiZGVzY3JpcHRpb24iLCJjYXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/componentns/SectionService/Card/Card.js\n"));

/***/ })

});
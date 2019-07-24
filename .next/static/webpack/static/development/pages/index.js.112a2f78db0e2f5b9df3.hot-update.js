webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Headline.tsx":
/*!*********************************!*\
  !*** ./components/Headline.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme/main/media */ "./styles/theme/main/media.ts");

var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/components/Headline.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 42px;\n    line-height: 50px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Headline__Content",
  componentId: "sc-5837yb-0"
})(["padding:0 24px;margin:80px auto 40px;text-align:center;max-width:860px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "Headline__Title",
  componentId: "sc-5837yb-1"
})(["color:", ";font-size:28px;line-height:34px;font-weight:300;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject()));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Headline__Text",
  componentId: "sc-5837yb-2"
})(["font-weight:normal;font-size:15px;line-height:27px;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});

var Headline = function Headline(_ref3) {
  var title = _ref3.title,
      text = _ref3.text,
      anchor = _ref3.anchor;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    id: anchor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Text, {
    dangerouslySetInnerHTML: {
      __html: text
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Headline);

/***/ })

})
//# sourceMappingURL=index.js.112a2f78db0e2f5b9df3.hot-update.js.map
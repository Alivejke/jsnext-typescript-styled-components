webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ExploreBlock.tsx":
/*!*************************************!*\
  !*** ./components/ExploreBlock.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme/main/media */ "./styles/theme/main/media.ts");
/* harmony import */ var _styles_mixins_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/mixins/Button */ "./styles/mixins/Button.ts");

var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/components/ExploreBlock.tsx";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 32px;\n    line-height: 39px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: inherit;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-height: 550px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex-direction: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ExploreBlock__Wrapper",
  componentId: "sc-1rit4cg-0"
})(["padding:0 24px;margin:0 auto;max-width:", ";margin-top:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.maxWidth;
}, function (_ref2) {
  var hasNegativeOffset = _ref2.hasNegativeOffset;
  return hasNegativeOffset ? '-48px' : '0';
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ExploreBlock__Content",
  componentId: "sc-1rit4cg-1"
})(["box-shadow:0 0 20px 0 rgba(0,0,0,0.1);border-radius:8px;background:", ";padding:32px;display:flex;justify-content:space-between;flex-flow:row nowrap;flex-direction:column;", ""], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.contrast;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject(), function (_ref4) {
  var alignment = _ref4.alignment;
  return alignment === 'right' ? 'row' : 'row-reverse';
}));
var ImageBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ExploreBlock__ImageBlock",
  componentId: "sc-1rit4cg-2"
})(["flex:1;overflow:hidden;text-align:center;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "ExploreBlock__Image",
  componentId: "sc-1rit4cg-3"
})(["max-width:100%;max-height:225px;", ""], _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject2()));
var TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ExploreBlock__TextBlock",
  componentId: "sc-1rit4cg-4"
})(["padding:16px 0px;flex:1;text-align:center;", ""], _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject3()));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "ExploreBlock__Title",
  componentId: "sc-1rit4cg-5"
})(["color:", ";font-weight:300;margin-top:0;margin-bottom:16px;font-size:24px;line-height:34px;", ""], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject4()));

var ExploreBlock = function ExploreBlock(_ref6) {
  var title = _ref6.title,
      imageUrl = _ref6.imageUrl,
      imageAlt = _ref6.imageAlt,
      _ref6$hasNegativeOffs = _ref6.hasNegativeOffset,
      hasNegativeOffset = _ref6$hasNegativeOffs === void 0 ? false : _ref6$hasNegativeOffs,
      _ref6$alignment = _ref6.alignment,
      alignment = _ref6$alignment === void 0 ? 'left' : _ref6$alignment,
      anchor = _ref6.anchor;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Wrapper, {
    hasNegativeOffset: hasNegativeOffset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    alignment: alignment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TextBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_mixins_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "#".concat(anchor),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Shop now")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ImageBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Image, {
    src: imageUrl,
    alt: imageAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ExploreBlock);

/***/ })

})
//# sourceMappingURL=index.js.3169286e7e953ba143f7.hot-update.js.map
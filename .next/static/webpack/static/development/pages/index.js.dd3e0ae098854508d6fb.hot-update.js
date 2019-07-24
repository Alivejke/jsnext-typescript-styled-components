webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FlavorCollectionsBillboard.tsx":
/*!***************************************************!*\
  !*** ./components/FlavorCollectionsBillboard.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme/main/media */ "./styles/theme/main/media.ts");

var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/components/FlavorCollectionsBillboard.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 42px;\n    line-height: 50px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var WideImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FlavorCollectionsBillboard__WideImage",
  componentId: "h1ucyn-0"
})(["background-image:", ";background-repeat:no-repeat;background-size:cover;background-position:center;min-height:500px;"], function (props) {
  return props.imageUrl ? "url(".concat(props.imageUrl, ")") : 'none';
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FlavorCollectionsBillboard__Content",
  componentId: "h1ucyn-1"
})(["max-width:", ";margin:0 auto;padding:0 24px;width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.maxWidth;
});
var TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FlavorCollectionsBillboard__TextBlock",
  componentId: "h1ucyn-2"
})(["padding-top:80px;width:40%;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "FlavorCollectionsBillboard__Title",
  componentId: "h1ucyn-3"
})(["font-size:28px;line-height:34px;color:", ";font-weight:300;margin:0 0 30px 0;", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.contrast;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject()));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "FlavorCollectionsBillboard__Text",
  componentId: "h1ucyn-4"
})(["color:", ";font-weight:normal;font-size:15px;line-height:27px;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.contrast;
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "FlavorCollectionsBillboard__Link",
  componentId: "h1ucyn-5"
})(["font-weight:normal;font-size:15px;line-height:27px;text-decoration:none;color:", ";:hover{color:", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.contrast;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.brandFade;
});

var FlavorCollectionsBillboard = function FlavorCollectionsBillboard(_ref6) {
  var title = _ref6.title,
      text = _ref6.text,
      imageUrl = _ref6.imageUrl,
      anchor = _ref6.anchor;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WideImage, {
    imageUrl: imageUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TextBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Link, {
    href: "#".concat(anchor),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Learn more \u203A"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FlavorCollectionsBillboard);

/***/ })

})
//# sourceMappingURL=index.js.dd3e0ae098854508d6fb.hot-update.js.map
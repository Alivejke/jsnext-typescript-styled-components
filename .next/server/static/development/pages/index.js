module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/products.ts":
/*!*************************!*\
  !*** ./api/products.ts ***!
  \*************************/
/*! exports provided: getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function getProducts(request) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:3000".concat(request)).then(function (response) {
      resolve(response.data);
    })["catch"](function (error) {
      console.log('Error', error);
      reject(null);
    });
  });
}
;

/***/ }),

/***/ "./components/ExploreBlock.tsx":
/*!*************************************!*\
  !*** ./components/ExploreBlock.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
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





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ExploreBlock__Wrapper",
  componentId: "sc-1rit4cg-0"
})(["padding:0 24px;margin:0 auto;max-width:", ";margin-top:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.maxWidth;
}, function (_ref2) {
  var hasNegativeOffset = _ref2.hasNegativeOffset;
  return hasNegativeOffset ? '-48px' : '0';
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ExploreBlock__Content",
  componentId: "sc-1rit4cg-1"
})(["box-shadow:0 0 20px 0 rgba(0,0,0,0.1);border-radius:8px;background:", ";padding:32px;display:flex;justify-content:space-between;flex-flow:row nowrap;flex-direction:column;", ""], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.contrast;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject(), function (_ref4) {
  var alignment = _ref4.alignment;
  return alignment === 'right' ? 'row' : 'row-reverse';
}));
var ImageBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ExploreBlock__ImageBlock",
  componentId: "sc-1rit4cg-2"
})(["flex:1;overflow:hidden;text-align:center;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "ExploreBlock__Image",
  componentId: "sc-1rit4cg-3"
})(["max-width:100%;max-height:225px;", ""], _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject2()));
var TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ExploreBlock__TextBlock",
  componentId: "sc-1rit4cg-4"
})(["padding:16px 0px;flex:1;text-align:center;", ""], _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject3()));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
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

/***/ }),

/***/ "./components/FlavorCollectionsBillboard.tsx":
/*!***************************************************!*\
  !*** ./components/FlavorCollectionsBillboard.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme/main/media */ "./styles/theme/main/media.ts");

var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/components/FlavorCollectionsBillboard.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 42px;\n    line-height: 50px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var WideImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "FlavorCollectionsBillboard__WideImage",
  componentId: "h1ucyn-0"
})(["background-image:", ";background-repeat:no-repeat;background-size:cover;background-position:center;min-height:500px;"], function (props) {
  return props.imageUrl ? "url(".concat(props.imageUrl, ")") : 'none';
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "FlavorCollectionsBillboard__Content",
  componentId: "h1ucyn-1"
})(["max-width:", ";margin:0 auto;padding:0 24px;width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.maxWidth;
});
var TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "FlavorCollectionsBillboard__TextBlock",
  componentId: "h1ucyn-2"
})(["padding-top:80px;width:40%;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "FlavorCollectionsBillboard__Title",
  componentId: "h1ucyn-3"
})(["font-size:28px;line-height:34px;color:", ";font-weight:300;margin:0 0 30px 0;", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.contrast;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject()));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "FlavorCollectionsBillboard__Text",
  componentId: "h1ucyn-4"
})(["color:", ";font-weight:normal;font-size:15px;line-height:27px;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.contrast;
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
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

/***/ }),

/***/ "./components/Headline.tsx":
/*!*********************************!*\
  !*** ./components/Headline.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme/main/media */ "./styles/theme/main/media.ts");

var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/components/Headline.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 42px;\n    line-height: 50px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Headline__Content",
  componentId: "sc-5837yb-0"
})(["padding:0 24px;margin:80px auto 40px;text-align:center;max-width:860px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
  displayName: "Headline__Title",
  componentId: "sc-5837yb-1"
})(["color:", ";font-size:28px;line-height:34px;font-weight:300;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject()));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
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

/***/ }),

/***/ "./components/Product.tsx":
/*!********************************!*\
  !*** ./components/Product.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme/main/media */ "./styles/theme/main/media.ts");
/* harmony import */ var _Trademark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trademark */ "./components/Trademark.tsx");
/* harmony import */ var _helpers_money__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/money */ "./helpers/money.ts");
/* harmony import */ var _icons_ArrowIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/ArrowIcon */ "./icons/ArrowIcon.tsx");
/* harmony import */ var _styles_mixins_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/mixins/Button */ "./styles/mixins/Button.ts");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Rating */ "./components/Rating.tsx");

var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/components/Product.tsx";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 18px;\n    line-height: 24px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 24px;\n    line-height: 29px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 25%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 50%;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Product__Wrapper",
  componentId: "ucj18n-0"
})(["width:100%;padding:12px;box-sizing:border-box;", " ", ""], _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject()), _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].desktop(_templateObject2()));
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Product__Content",
  componentId: "ucj18n-1"
})(["box-shadow:0 0 20px 0 rgba(0,0,0,0.1);border-radius:8px;background:", ";padding:8px 24px 24px;overflow:hidden;height:100%;box-sizing:border-box;display:flex;flex-direction:column;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.contrast;
});
var TrademarkStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Trademark__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Product__TrademarkStyled",
  componentId: "ucj18n-2"
})(["margin-bottom:10px;"]);
var ImageLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "Product__ImageLink",
  componentId: "ucj18n-3"
})(["display:block;margin:0 auto;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Product__Image",
  componentId: "ucj18n-4"
})(["display:block;margin:0 auto;padding:8px 0;height:130px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h4.withConfig({
  displayName: "Product__Title",
  componentId: "ucj18n-5"
})(["font-size:18px;line-height:22px;margin-bottom:10px;color:", ";font-weight:300;flex-grow:2;", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject3()));
var Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "Product__Description",
  componentId: "ucj18n-6"
})(["font-size:15px;line-height:27px;margin-bottom:10px;color:", ";font-weight:300;flex-grow:2;margin:0;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
});
var Price = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Product__Price",
  componentId: "ucj18n-7"
})(["font-size:16px;line-height:24px;margin-bottom:10px;color:", ";font-weight:normal;margin:16px 0;", ""], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject4()));
var ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_styles_mixins_Button__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "Product__ButtonStyled",
  componentId: "ucj18n-8"
})(["width:140px;margin-bottom:10px;"]);
var Link = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "Product__Link",
  componentId: "ucj18n-9"
})(["font-weight:normal;font-size:15px;line-height:27px;text-decoration:none;color:", ";:hover{color:", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.gray;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.brandFade;
});

var Product = function Product(_ref7) {
  var product = _ref7.product;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TrademarkStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ImageLink, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Image, {
    src: product.image.url,
    alt: product.image.altText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, product.name), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, product.description), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Rating__WEBPACK_IMPORTED_MODULE_8__["default"], {
    rating: product.stars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Price, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, Object(_helpers_money__WEBPACK_IMPORTED_MODULE_5__["formatCents"])(product.price.centAmount, product.price.currencyCode)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ButtonStyled, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Buy now"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Learn more ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icons_ArrowIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./components/ProductsList.tsx":
/*!*************************************!*\
  !*** ./components/ProductsList.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./components/Product.tsx");
var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/components/ProductsList.tsx";



var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ProductsList__Content",
  componentId: "dczqij-0"
})(["padding:0 24px;margin:0 auto;max-width:1160px;margin-top:24px;margin-bottom:24px;display:flex;flex-wrap:wrap;"]);

var Headline = function Headline(_ref) {
  var products = _ref.products;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, products.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Product__WEBPACK_IMPORTED_MODULE_2__["default"], {
      product: product,
      key: product.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Headline);

/***/ }),

/***/ "./components/PromoCard.tsx":
/*!**********************************!*\
  !*** ./components/PromoCard.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme/main/media */ "./styles/theme/main/media.ts");
/* harmony import */ var _icons_OpenCloseIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/OpenCloseIcon */ "./icons/OpenCloseIcon.tsx");


var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/components/PromoCard.tsx";

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    max-height: 500px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: none;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    font-size: 24px;\n    line-height: 29px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    cursor: auto;\n    margin-top: 0;\n    padding: 72px 32px;\n    margin-", ": -80px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    margin: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    flex-direction: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Content = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "PromoCard__Content",
  componentId: "pf3laz-0"
})(["padding:0 24px;margin:0 auto 56px;max-width:", ";display:flex;align-items:center;flex-direction:column;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.maxWidth;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_4__["default"].tablet(_templateObject(), function (_ref2) {
  var alignment = _ref2.alignment;
  return alignment === 'right' ? 'row-reverse' : 'row';
}));
var ImageBlock = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "PromoCard__ImageBlock",
  componentId: "pf3laz-1"
})(["flex:3;margin-left:-24px;margin-right:-24px;", ""], _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_4__["default"].tablet(_templateObject2()));
var Image = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.withConfig({
  displayName: "PromoCard__Image",
  componentId: "pf3laz-2"
})(["width:100%;"]);
var TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "PromoCard__TextBlock",
  componentId: "pf3laz-3"
})(["flex:2;background:", ";;border-radius:4px;margin-top:-40px;width:100%;box-sizing:border-box;padding:32px 24px;cursor:pointer;", ""], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.fone;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_4__["default"].tablet(_templateObject3(), function (_ref4) {
  var alignment = _ref4.alignment;
  return alignment;
}));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h4.withConfig({
  displayName: "PromoCard__Title",
  componentId: "pf3laz-4"
})(["color:", ";font-weight:normal;margin:0;font-size:18px;line-height:22px;", ""], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary;
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_4__["default"].tablet(_templateObject4()));
var OpenCloseIconStyled = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_icons_OpenCloseIcon__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "PromoCard__OpenCloseIconStyled",
  componentId: "pf3laz-5"
})(["float:right;margin:4px 4px 0 4px;", ""], _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_4__["default"].tablet(_templateObject5()));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p.withConfig({
  displayName: "PromoCard__Text",
  componentId: "pf3laz-6"
})(["color:", ";font-weight:normal;font-size:15px;line-height:27px;margin:16px 0;"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary;
});
var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "PromoCard__TextWrapper",
  componentId: "pf3laz-7"
})(["overflow:hidden;", " ", ""], function (_ref7) {
  var showText = _ref7.showText;
  return showText ? Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["max-height:500px;transition:max-height 0.6s ease-in 0s;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["max-height:0;transition:max-height 0.3s ease-out;"]);
}, _styles_theme_main_media__WEBPACK_IMPORTED_MODULE_4__["default"].tablet(_templateObject6()));

var Headline = function Headline(_ref8) {
  var title = _ref8.title,
      text = _ref8.text,
      imageUrl = _ref8.imageUrl,
      imageAlt = _ref8.imageAlt,
      _ref8$alignment = _ref8.alignment,
      alignment = _ref8$alignment === void 0 ? 'left' : _ref8$alignment;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showText = _useState2[0],
      setShowText = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Content, {
    alignment: alignment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ImageBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Image, {
    src: imageUrl,
    alt: imageAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TextBlock, {
    alignment: alignment,
    onClick: function onClick() {
      setShowText(!showText);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, title, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](OpenCloseIconStyled, {
    isOpen: showText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TextWrapper, {
    showText: showText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, text))));
};

/* harmony default export */ __webpack_exports__["default"] = (Headline);

/***/ }),

/***/ "./components/Rating.tsx":
/*!*******************************!*\
  !*** ./components/Rating.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/components/Rating.tsx";


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Rating__Wrapper",
  componentId: "fqg5bc-0"
})(["display:block;width:100%;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Rating__Content",
  componentId: "fqg5bc-1"
})(["position:relative;display:inline-block;::before{content:'\u2606\u2606\u2606\u2606\u2606';letter-spacing:4px;color:", ";}::after{content:'\u2605\u2605\u2605\u2605\u2605';letter-spacing:4px;position:absolute;top:0;left:0;color:", ";width:", "%;overflow:hidden;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.rating;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.rating;
}, function (_ref3) {
  var rating = _ref3.rating;
  return rating * 100 / 5;
});

var Product = function Product(_ref4) {
  var rating = _ref4.rating;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Content, {
    rating: rating,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./components/Trademark.tsx":
/*!**********************************!*\
  !*** ./components/Trademark.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/components/Trademark.tsx";


var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Trademark__Content",
  componentId: "sc-1wrsgap-0"
})(["font-weight:normal;font-size:12px;line-height:25px;text-align:center;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.gray;
});
var Sign = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.sup.withConfig({
  displayName: "Trademark__Sign",
  componentId: "sc-1wrsgap-1"
})(["font-size:8px;"]);

var Trademark = function Trademark(_ref2) {
  var className = _ref2.className;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Content, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "my"), "blu", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Sign, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "TM"));
};

/* harmony default export */ __webpack_exports__["default"] = (Trademark);

/***/ }),

/***/ "./helpers/money.ts":
/*!**************************!*\
  !*** ./helpers/money.ts ***!
  \**************************/
/*! exports provided: formatCents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCents", function() { return formatCents; });
var formatCents = function formatCents(centAmount, currencyCode) {
  return Number(centAmount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: currencyCode
  });
};



/***/ }),

/***/ "./icons/ArrowIcon.tsx":
/*!*****************************!*\
  !*** ./icons/ArrowIcon.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/icons/ArrowIcon.tsx";


var ArrowIcon = function ArrowIcon(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
    className: className,
    width: "7",
    height: "11",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M1 0l5.4 5.4L1 10.8",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ArrowIcon);

/***/ }),

/***/ "./icons/OpenCloseIcon.tsx":
/*!*********************************!*\
  !*** ./icons/OpenCloseIcon.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/icons/OpenCloseIcon.tsx";


var Svg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "OpenCloseIcon__Svg",
  componentId: "nzb5y4-0"
})(["transition:all 0.3s ease;display:block;transform:", ";"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'rotate(45deg)' : 'none';
});

var OpenCloseIcon = function OpenCloseIcon(_ref2) {
  var _ref2$isOpen = _ref2.isOpen,
      isOpen = _ref2$isOpen === void 0 ? false : _ref2$isOpen,
      className = _ref2.className;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Svg, {
    className: className,
    isOpen: isOpen,
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7 1.667v10.666M1.667 7h10.666",
    stroke: "#00A3E9",
    strokeWidth: "1.8",
    strokeLinecap: "square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenCloseIcon);

/***/ }),

/***/ "./layouts/Main.tsx":
/*!**************************!*\
  !*** ./layouts/Main.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/layouts/Main.tsx";



;
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.footer.withConfig({
  displayName: "Main__Footer",
  componentId: "fz7h4-0"
})(["text-align:center;font-size:12px;margin:12px;"]);

var Main = function Main(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Created by Dmytro Baltak as a test case for blu.com"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.tsx");
/* harmony import */ var _api_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/products */ "./api/products.ts");
/* harmony import */ var _components_FlavorCollectionsBillboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FlavorCollectionsBillboard */ "./components/FlavorCollectionsBillboard.tsx");
/* harmony import */ var _components_ExploreBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ExploreBlock */ "./components/ExploreBlock.tsx");
/* harmony import */ var _components_Headline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Headline */ "./components/Headline.tsx");
/* harmony import */ var _components_PromoCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PromoCard */ "./components/PromoCard.tsx");
/* harmony import */ var _components_ProductsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ProductsList */ "./components/ProductsList.tsx");


var _jsxFileName = "/Users/d.baltak/Projects/nextjs-typescript-styled-components/pages/index.tsx";









var HomePage = function HomePage(_ref) {
  var products = _ref.products;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layouts_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Case Frontend Engineer blu.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_FlavorCollectionsBillboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "The Best Seller Collection",
    text: "Our most popular flavors made the list for good reason",
    imageUrl: "/static/images/flavor-collections-billboard.webp",
    anchor: "learn-more-best",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ExploreBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Explore our Best Seller Collection",
    imageUrl: "/static/images/best-seller-flavor-collection.webp",
    imageAlt: "Best Seller Flavor Collection",
    hasNegativeOffset: true,
    anchor: "shopNow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Headline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Vape our most popular flavors",
    text: "You can find our Best Seller Collection of <em>my</em>blu\u2122 and <em>my</em>blu\u2122 INTENSE flavors in multiple nicotine strengths, ranging from 0% to 4.5%. From fruity to fresh and everything in between, you\u2019re sure to find a flavor that satisfies.",
    anchor: "learn-more-best",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PromoCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Popular picks",
    text: "Our Best Seller Collection is made up of our seven top sellers that span from classics like Gold Leaf to fruity flavors like Citra Zing.",
    imageUrl: "/static/images/cards-image-01.webp",
    imageAlt: "a woman using her myblu vaping device",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PromoCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "A formula for success",
    text: "All of our flavors are formulated to provide optimal flavor delivery and smooth satisfaction.",
    imageUrl: "/static/images/cards-image-02.webp",
    imageAlt: "a man vaping his myblu device",
    alignment: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Headline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Taste it for yourself",
    text: "Ready to try our Best Seller Collection? Shop our selection of flavors available in a variety of nicotine strengths, from 0% to 4.5%.",
    anchor: "shopNow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), products && products.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ProductsList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    products: products,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }) : null);
};

HomePage.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var products;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          products = null;
          _context.prev = 1;
          _context.next = 4;
          return Object(_api_products__WEBPACK_IMPORTED_MODULE_4__["getProducts"])('/products');

        case 4:
          products = _context.sent;
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          console.log('Error', _context.t0);

        case 10:
          return _context.abrupt("return", {
            products: products
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[1, 7]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./styles/mixins/Button.ts":
/*!*********************************!*\
  !*** ./styles/mixins/Button.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Button",
  componentId: "sc-4zdxnz-0"
})(["border:0;display:inline-block;font-size:15px;text-decoration:none;padding:16px 24px 16px;border-radius:4px;box-sizing:border-box;text-align:center;min-width:156px;outline:none;background-color:", ";color:", ";:hover{background-color:", ";color:", ";transition:background 0.3s ease-out,transform 0.3s;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.brand;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.contrast;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.brandFade;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.contrast;
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./styles/theme/main/breakpoints.ts":
/*!******************************************!*\
  !*** ./styles/theme/main/breakpoints.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var breakpoints = {
  tablet: '785px',
  desktop: '1079px'
};
/* harmony default export */ __webpack_exports__["default"] = (breakpoints);

/***/ }),

/***/ "./styles/theme/main/media.ts":
/*!************************************!*\
  !*** ./styles/theme/main/media.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakpoints */ "./styles/theme/main/breakpoints.ts");




var media = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_breakpoints__WEBPACK_IMPORTED_MODULE_2__["default"]).reduce(function (acc, breakpoint) {
  acc[breakpoint] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "){", "}"], _breakpoints__WEBPACK_IMPORTED_MODULE_2__["default"][breakpoint], styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});

/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/d.baltak/Projects/nextjs-typescript-styled-components/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
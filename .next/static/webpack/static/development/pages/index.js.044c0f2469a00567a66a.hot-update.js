webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=index.js.044c0f2469a00567a66a.hot-update.js.map
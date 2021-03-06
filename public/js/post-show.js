(self["webpackChunk"] = self["webpackChunk"] || []).push([["post-show"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostShowComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostShowComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_routers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../laravel_routers.js */ "./resources/js/laravel_routers.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['id'],
  name: 'PostShowComponent',
  data: function data() {
    return {
      //Variables
      post: [],
      slug: this.id
    };
  },
  mounted: function mounted() {
    this.getPost();
  },
  methods: {
    //Post
    getPost: function getPost() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get((0,_laravel_routers_js__WEBPACK_IMPORTED_MODULE_1__.default)('v1.api.post.get.slug', this.slug)).then(function (response) {
        _this.post = response.data.data[0];

        _this.incrementView();
      });
    },
    //increment view
    incrementView: function incrementView() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post((0,_laravel_routers_js__WEBPACK_IMPORTED_MODULE_1__.default)('v1.api.post.increment', this.post.id), {
        id: this.post.id
      });
    },
    //Redirect to index
    indexLink: function indexLink() {
      window.location.href = (0,_laravel_routers_js__WEBPACK_IMPORTED_MODULE_1__.default)('post.index');
    }
  }
});

/***/ }),

/***/ "./resources/js/laravel_routers.js":
/*!*****************************************!*\
  !*** ./resources/js/laravel_routers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var routes = __webpack_require__(/*! ./laravel_routers.json */ "./resources/js/laravel_routers.json");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var args = Array.prototype.slice.call(arguments);
  var name = args.shift();

  if (routes[name] === undefined) {
    console.log('Error');
  } else {
    return '/' + routes[name].split('/').map(function (str) {
      return str[0] == "{" ? args.shift() : str;
    }).join('/');
  }
}

/***/ }),

/***/ "./resources/js/components/Posts/PostShowComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Posts/PostShowComponent.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostShowComponent_vue_vue_type_template_id_fb6b906e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostShowComponent.vue?vue&type=template&id=fb6b906e& */ "./resources/js/components/Posts/PostShowComponent.vue?vue&type=template&id=fb6b906e&");
/* harmony import */ var _PostShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostShowComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Posts/PostShowComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PostShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PostShowComponent_vue_vue_type_template_id_fb6b906e___WEBPACK_IMPORTED_MODULE_0__.render,
  _PostShowComponent_vue_vue_type_template_id_fb6b906e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Posts/PostShowComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Posts/PostShowComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Posts/PostShowComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostShowComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostShowComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Posts/PostShowComponent.vue?vue&type=template&id=fb6b906e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Posts/PostShowComponent.vue?vue&type=template&id=fb6b906e& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShowComponent_vue_vue_type_template_id_fb6b906e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShowComponent_vue_vue_type_template_id_fb6b906e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShowComponent_vue_vue_type_template_id_fb6b906e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostShowComponent.vue?vue&type=template&id=fb6b906e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostShowComponent.vue?vue&type=template&id=fb6b906e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostShowComponent.vue?vue&type=template&id=fb6b906e&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostShowComponent.vue?vue&type=template&id=fb6b906e& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "span",
      {
        staticClass: "btn badge-info",
        on: {
          click: function($event) {
            return _vm.indexLink()
          }
        }
      },
      [_c("i", { staticClass: "fas fa-arrow-left" }), _vm._v(" Back")]
    ),
    _vm._v(" "),
    _c("h1", { staticClass: "text-center" }, [_vm._v(_vm._s(_vm.post.title))]),
    _vm._v(" "),
    _c("p", [
      _c("i", { staticClass: "fas fa-eye" }),
      _vm._v(" " + _vm._s(_vm.post.counter) + " ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }, [
        _c("p", { domProps: { innerHTML: _vm._s(_vm.post.text) } })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/laravel_routers.json":
/*!*******************************************!*\
  !*** ./resources/js/laravel_routers.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"debugbar.openhandler":"_debugbar/open","debugbar.clockwork":"_debugbar/clockwork/{id}","debugbar.telescope":"_debugbar/telescope/{id}","debugbar.assets.css":"_debugbar/assets/stylesheets","debugbar.assets.js":"_debugbar/assets/javascript","debugbar.cache.delete":"_debugbar/cache/{key}/{tags?}","v1.api.post.get.slug":"api/post/get/by/slug/{id}","v1.api.post.increment":"api/post/view/increment/{id}","v1.api.post.index":"api/post","v1.api.post.store":"api/post","v1.api.post.show":"api/post/{post}","v1.api.post.update":"api/post/{post}","v1.api.post.destroy":"api/post/{post}","v1.api.hash.index":"api/hash","v1.api.hash.store":"api/hash","post.index":"post","post.create":"post/create","post.store":"post","post.show":"post/{post}","post.edit":"post/{post}/edit","post.update":"post/{post}","post.destroy":"post/{post}"}');

/***/ })

}]);
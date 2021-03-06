(self["webpackChunk"] = self["webpackChunk"] || []).push([["post-edit"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostEditComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostEditComponent.vue?vue&type=script&lang=js& ***!
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
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['id'],
  name: 'PostEditComponent',
  data: function data() {
    return {
      postSuccessCreate: 'Post was created',
      hashSuccessCreate: 'Hash was created',
      //Notifications
      alertSuccess: false,
      alertError: false,
      messageError: [],
      messageSuccess: '',
      //Variables
      hash: [],
      text: '',
      hashList: [],
      title: '',
      hashName: '',
      hashSlug: '',
      buttonAddHash: true,
      formAddHash: false,
      idPost: this.id,
      post: []
    };
  },
  mounted: function mounted() {
    this.hashes();
    this.getPost();
  },
  methods: {
    //Hash list
    hashes: function hashes() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get((0,_laravel_routers_js__WEBPACK_IMPORTED_MODULE_1__.default)('v1.api.hash.index')).then(function (response) {
        _this.hashList = response.data.data;
      });
    },
    //Post
    getPost: function getPost() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get((0,_laravel_routers_js__WEBPACK_IMPORTED_MODULE_1__.default)('v1.api.post.show', this.idPost)).then(function (response) {
        _this2.post = response.data.data[0];
        _this2.title = response.data.data[0].title;
        _this2.text = response.data.data[0].text;
      });
    },
    //update post
    updatePost: function updatePost() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().put((0,_laravel_routers_js__WEBPACK_IMPORTED_MODULE_1__.default)('v1.api.post.update', this.id), {
        title: this.title,
        text: this.text,
        hash: this.hash
      }).then(function (response) {
        console.log(response.data.data.message_error);

        if (response.data.data.message_error) {
          _this3.messageError = response.data.data;
          _this3.alertError = true;
          _this3.alertSuccess = false;
        } else {
          _this3.messageSuccess = _this3.postSuccessCreate;
          _this3.alertSuccess = true;
          _this3.alertError = false;
        }

        _this3.title = '';
        _this3.text = '';
        _this3.hash = '';
      })["catch"](function (error) {
        _this3.messageError = error.response.data.errors;
        _this3.alertSuccess = false;
        _this3.alertError = true;
        window.scrollTo(0, 0);
        _this3.loaderIsLoading = false;
      });
    },
    //create new hash
    storeHash: function storeHash() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post((0,_laravel_routers_js__WEBPACK_IMPORTED_MODULE_1__.default)('v1.api.hash.store'), {
        name: this.hashName,
        slug: this.hashSlug
      }).then(function (response) {
        console.log(response.data.data.message_error);

        if (response.data.data.message_error) {
          _this4.messageError = response.data.data;
          _this4.alertError = true;
          _this4.alertSuccess = false;
        } else {
          _this4.messageSuccess = _this4.hashSuccessCreate;
          _this4.alertSuccess = true;
          _this4.alertError = false;
        }

        _this4.hashes();

        _this4.buttonAddHash = false;
        _this4.formAddHash = true;
        _this4.hashName = '';
        _this4.hashSlug = '';
      })["catch"](function (error) {
        _this4.messageError = error.response.data.errors;
        _this4.alertSuccess = false;
        _this4.alertError = true;
        window.scrollTo(0, 0);
        _this4.loaderIsLoading = false;
      });
    },
    //Redirect to index
    indexLink: function indexLink() {
      window.location.href = (0,_laravel_routers_js__WEBPACK_IMPORTED_MODULE_1__.default)('post.index');
    },
    //click on the button add hash
    addHash: function addHash() {
      this.buttonAddHash = false;
      this.formAddHash = true;
    },
    //click on the button cancel hash
    cancelHash: function cancelHash() {
      this.buttonAddHash = true;
      this.formAddHash = false;
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

/***/ "./resources/js/components/Posts/PostEditComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Posts/PostEditComponent.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostEditComponent_vue_vue_type_template_id_5c0a7c48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostEditComponent.vue?vue&type=template&id=5c0a7c48& */ "./resources/js/components/Posts/PostEditComponent.vue?vue&type=template&id=5c0a7c48&");
/* harmony import */ var _PostEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostEditComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Posts/PostEditComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PostEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PostEditComponent_vue_vue_type_template_id_5c0a7c48___WEBPACK_IMPORTED_MODULE_0__.render,
  _PostEditComponent_vue_vue_type_template_id_5c0a7c48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Posts/PostEditComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Posts/PostEditComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Posts/PostEditComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostEditComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostEditComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Posts/PostEditComponent.vue?vue&type=template&id=5c0a7c48&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Posts/PostEditComponent.vue?vue&type=template&id=5c0a7c48& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEditComponent_vue_vue_type_template_id_5c0a7c48___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEditComponent_vue_vue_type_template_id_5c0a7c48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEditComponent_vue_vue_type_template_id_5c0a7c48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostEditComponent.vue?vue&type=template&id=5c0a7c48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostEditComponent.vue?vue&type=template&id=5c0a7c48&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostEditComponent.vue?vue&type=template&id=5c0a7c48&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/PostEditComponent.vue?vue&type=template&id=5c0a7c48& ***!
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
    _c("div", { staticClass: "row" }, [
      _vm.alertSuccess === true
        ? _c(
            "div",
            { staticClass: "col-12 alert alert-success alert-dismissible" },
            [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "alert",
                    "aria-hidden": "true"
                  }
                },
                [_vm._v("×")]
              ),
              _vm._v("\n      " + _vm._s(_vm.messageSuccess) + "\n    ")
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.alertError === true
        ? _c("div", { staticClass: "alert alert-danger alert-dismissible" }, [
            _c(
              "button",
              {
                staticClass: "close",
                attrs: {
                  type: "button",
                  "data-dismiss": "alert",
                  "aria-hidden": "true"
                }
              },
              [_vm._v("×")]
            ),
            _vm._v(" "),
            _c(
              "ul",
              _vm._l(_vm.messageError, function(error) {
                return _c("li", [
                  _vm._v("\n          " + _vm._s(error) + "\n        ")
                ])
              }),
              0
            )
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
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
    _c("h1", { staticClass: "text-center" }, [_vm._v("Edit post")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "title" } }, [_vm._v("Title")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.title,
                expression: "title"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "title", placeholder: "Enter title" },
            domProps: { value: _vm.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.title = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "hash" } }, [_vm._v("Hashes")]),
          _vm._v(" "),
          _vm.buttonAddHash
            ? _c(
                "span",
                {
                  staticClass: "text-success",
                  on: {
                    click: function($event) {
                      return _vm.addHash()
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-plus-circle" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.formAddHash
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 col-md-4" }, [
                  _c("div", { staticClass: "input-group mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.hashName,
                          expression: "hashName"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Enter name hash" },
                      domProps: { value: _vm.hashName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.hashName = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-8" }, [
                  _c("div", { staticClass: "input-group mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.hashSlug,
                          expression: "hashSlug"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter url hash",
                        "aria-label": "Recipient's username",
                        "aria-describedby": "button-addon2"
                      },
                      domProps: { value: _vm.hashSlug },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.hashSlug = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-append" }, [
                      _c(
                        "span",
                        {
                          staticClass: "btn btn-outline-danger",
                          attrs: { type: "button", id: "button-addon2" },
                          on: {
                            click: function($event) {
                              return _vm.cancelHash()
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-append" }, [
                      _c(
                        "span",
                        {
                          staticClass: "btn btn-outline-success",
                          attrs: { type: "button", id: "button-addon3" },
                          on: {
                            click: function($event) {
                              return _vm.storeHash()
                            }
                          }
                        },
                        [_vm._v("Save")]
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.hash,
                  expression: "hash"
                }
              ],
              staticClass: "form-control",
              attrs: { multiple: "", id: "hash" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.hash = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            _vm._l(_vm.hashList, function(item) {
              return _c("option", { domProps: { value: item.id } }, [
                _vm._v("\n            " + _vm._s(item.name) + "\n          ")
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c("span", [_vm._v("Text")]),
            _vm._v(" "),
            _c("vue-editor", {
              model: {
                value: _vm.text,
                callback: function($$v) {
                  _vm.text = $$v
                },
                expression: "text"
              }
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "btn btn-success btn-block",
        on: {
          click: function($event) {
            return _vm.storePost()
          }
        }
      },
      [_vm._v("Save")]
    )
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
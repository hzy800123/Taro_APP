(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/detailPage/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/detailPage/index.jsx?taro&type=script&parse=PAGE&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/detailPage/index.jsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/detailPage/index.scss");

var _Const = __webpack_require__(/*! ./Const */ "./src/pages/detailPage/Const.jsx");

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__37", "$compid__38", "$compid__39", "$compid__40", "$compid__41", "$compid__42", "$compid__43", "$compid__44", "editBookDataId", "editBookDataTitle", "editBookDataRating", "openInvalidModal"], _this.state = {
      editBookDataId: 0,
      editBookDataTitle: '',
      editBookDataRating: 0,
      openInvalidModal: false
    }, _this.toggleInvalidModal = function () {
      _this.setState({
        openInvalidModal: false
      });
    }, _this.onInputNewRatingChange = function (value) {
      _this.setState({
        editBookDataRating: value
      });

      return value;
    }, _this.cancelNewBookClick = function () {
      _taroWeapp2.default.reLaunch({
        url: '/pages/index/index'
      });
    }, _this.confirmNewBookClick = function () {
      var fullURLAdd = _Const2.default + "/book/AddNewBook";
      var fullURLEdit = _Const2.default + "/book/EditBook";
      var fullURL = '';
      if (_this.state.editBookDataId === 0) {
        fullURL = fullURLAdd;
      } else {
        fullURL = fullURLEdit;
      }

      console.log(_this.state.editBookDataId);
      console.log(fullURL);

      _taroWeapp2.default.request({
        url: fullURL,
        data: {
          id: _this.state.editBookDataId,
          title: _this.state.editBookDataTitle,
          rating: _this.state.editBookDataRating
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST'
      }).then(function (res) {
        // Taro.reLaunch({
        //   url: '/pages/index/index'
        // })
        if (res.statusCode === 200) {
          _taroWeapp2.default.reLaunch({
            url: '/pages/index/index'
          });
        } else {
          console.log('Failed to connect to AddNewBook. The statusCode is ', res.statusCode);
          _this.setState({
            openInvalidModal: true
          });
        }
      }).catch(function (err) {
        console.log('Failed to connect to AddNewBook. The err is ', err);
        _this.setState({
          openInvalidModal: true
        });
      });
    }, _this.config = {
      navigationBarTitleText: '书籍详情页'
    }, _this.customComponents = ["AtModal", "AtModalHeader", "AtModalAction", "AtIcon", "AtInput", "AtRate", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      this.onInputNewTitleChange = this.onInputNewTitleChange.bind(this);
      this.onInputNewRatingChange = this.onInputNewRatingChange.bind(this);
      this.cancelNewBookClick = this.cancelNewBookClick.bind(this);
      this.toggleInvalidModal = this.toggleInvalidModal.bind(this);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _$router$params = this.$router.params,
          id = _$router$params.id,
          title = _$router$params.title,
          rating = _$router$params.rating;


      this.setState({
        editBookDataId: parseInt(id) > 0 ? parseInt(id) : 0,
        editBookDataTitle: title !== '' ? title : '',
        editBookDataRating: parseInt(rating) > 0 ? parseInt(rating) : 0,
        openInvalidModal: false
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'onInputNewTitleChange',
    value: function onInputNewTitleChange(value) {
      this.setState({
        editBookDataTitle: value
      });

      return value;
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__37"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__37 = _genCompid2[0],
          $compid__37 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__38"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__38 = _genCompid4[0],
          $compid__38 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__39"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__39 = _genCompid6[0],
          $compid__39 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__40"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__40 = _genCompid8[0],
          $compid__40 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__41"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__41 = _genCompid10[0],
          $compid__41 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__42"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__42 = _genCompid12[0],
          $compid__42 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__43"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__43 = _genCompid14[0],
          $compid__43 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__44"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__44 = _genCompid16[0],
          $compid__44 = _genCompid16[1];

      this.anonymousFunc0 = function () {
        return _this2.toggleInvalidModal();
      };

      this.anonymousFunc1 = function (value) {
        return _this2.onInputNewTitleChange(value);
      };

      this.anonymousFunc2 = function (value) {
        return _this2.onInputNewRatingChange(value);
      };

      this.anonymousFunc3 = function () {
        return _this2.cancelNewBookClick();
      };

      this.anonymousFunc4 = function () {
        return _this2.confirmNewBookClick();
      };

      _taroWeapp.propsManager.set({
        "name": "Invalid Input",
        "isOpened": this.__state.openInvalidModal
      }, $compid__37, $prevCompid__37);
      _taroWeapp.propsManager.set({
        "className": "style-invalidModal"
      }, $compid__38, $prevCompid__38);
      _taroWeapp.propsManager.set({
        "className": "style-atIcon",
        "value": "edit",
        "size": "18",
        "color": "dodgerblue"
      }, $compid__39, $prevCompid__39);
      _taroWeapp.propsManager.set({
        "name": "title",
        "type": "text",
        "value": this.__state.editBookDataTitle,
        "placeholder": "Input title",
        "onChange": this.anonymousFunc1
      }, $compid__40, $prevCompid__40);
      _taroWeapp.propsManager.set({
        "className": "style-atIcon",
        "value": "heart",
        "size": "18",
        "color": "dodgerblue"
      }, $compid__41, $prevCompid__41);
      _taroWeapp.propsManager.set({
        "className": "style-atRating",
        "max": 5,
        "value": this.__state.editBookDataRating,
        "onChange": this.anonymousFunc2
      }, $compid__42, $prevCompid__42);
      _taroWeapp.propsManager.set({
        "className": "style-cancelButton",
        "type": "secondary",
        "size": "normal",
        "onClick": this.anonymousFunc3
      }, $compid__43, $prevCompid__43);
      _taroWeapp.propsManager.set({
        "className": "style-confirmButton",
        "type": "primary",
        "size": "normal",
        "onClick": this.anonymousFunc4
      }, $compid__44, $prevCompid__44);
      Object.assign(this.__state, {
        $compid__37: $compid__37,
        $compid__38: $compid__38,
        $compid__39: $compid__39,
        $compid__40: $compid__40,
        $compid__41: $compid__41,
        $compid__42: $compid__42,
        $compid__43: $compid__43,
        $compid__44: $compid__44
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/detailPage/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\Huang\\WeChatProjects\\Taro-App\\Book-APP\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/detailPage/index.jsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:/Users/Huang/WeChatProjects/Taro-App/Book-APP/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/detailPage/index.jsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/detailPage/index.wxml";

/***/ }),

/***/ "./src/pages/detailPage/Const.jsx":
/*!****************************************!*\
  !*** ./src/pages/detailPage/Const.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ServerURL = 'https://www.appvip2020.net';
// const ServerURL = 'https://47.107.105.61'
// const ServerURL = 'localhost'

exports.default = ServerURL;

/***/ }),

/***/ "./src/pages/detailPage/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/detailPage/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/detailPage/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/detailPage/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/detailPage/index.jsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/detailPage/index.jsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/detailPage/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/detailPage/index.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************!*\
  !*** ./src/pages/detailPage/index.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_Huang_WeChatProjects_Taro_App_Book_APP_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=C:/Users/Huang/WeChatProjects/Taro-App/Book-APP/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\Huang\\WeChatProjects\\Taro-App\\Book-APP\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/detailPage/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_Huang_WeChatProjects_Taro_App_Book_APP_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_C_Users_Huang_WeChatProjects_Taro_App_Book_APP_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_C_Users_Huang_WeChatProjects_Taro_App_Book_APP_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_C_Users_Huang_WeChatProjects_Taro_App_Book_APP_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/detailPage/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/detailPage/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/detailPage/index.jsx","runtime","vendors"]]]);
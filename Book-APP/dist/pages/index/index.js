(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

var _Const = __webpack_require__(/*! ./Const */ "./src/pages/index/Const.jsx");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray2", "$compid__26", "$compid__27", "$compid__28", "$compid__29", "$compid__30", "$compid__31", "$compid__32", "$compid__33", "$compid__34", "$compid__35", "books", "newBookDataTitle", "newBookDataRating", "editBookData", "newBookModal", "editBookModal", "openInvalidModal"], _this.state = {
      books: [],
      newBookDataTitle: '',
      newBookDataRating: 0,
      // newBookData: {
      //   title: '',
      //   rating: 0
      // },
      editBookData: {
        id: 0,
        title: '',
        rating: 0
      },
      newBookModal: false,
      editBookModal: false,
      openInvalidModal: false
    }, _this.getAllBooks = function () {
      console.log('Try to connect to GetAllBook');

      // axios.get('http://47.107.105.61:8080/springboot-package/getallbook').then((response) => {
      // const fullURL = `https://${ServerURL}/book/GetAllBook`
      var fullURL = _Const2.default + "/book/GetAllBook";

      console.log(fullURL);

      _taroWeapp2.default.request({
        url: fullURL,
        data: {},
        header: {
          'content-type': 'application/json'
        },
        // method: 'POST'
        method: 'GET'

      }).then(function (res) {
        console.log('Start to connect to GetAllBook');
        _this.setState({
          books: res.data
        });
      }).catch(function (err) {
        console.log('Failed to contact to getallbook again.');
        console.log('err status: ', err.response.status);
        console.log('err code: ', err.response.code);
        console.log('Failed to contact to getallbook again. The err is ', err);
      });
    }, _this.toogleNewBookModal = function () {
      _taroWeapp2.default.navigateTo({
        url: '/pages/detailPage/index'
      });
    }, _this.toogleEditBookModal = function () {
      var _this$state$title = _this.state.title,
          title = _this$state$title.title,
          rating = _this$state$title.rating;


      _taroWeapp2.default.navigateTo({
        url: "/pages/detailPage/index?title=" + title + "&rating=" + rating
      });
      // this.setState({
      //   editBookModal: !this.state.editBookModal
      // })
    }, _this.clickEditBook = function (book) {
      var id = book.id,
          title = book.title,
          rating = book.rating;

      _taroWeapp2.default.navigateTo({
        url: "/pages/detailPage/index?id=" + id + "&title=" + title + "&rating=" + rating
      });
    }, _this.onInputNewRatingChange = function (value) {

      _this.setState({
        newBookDataRating: value
      });

      return value;
    }, _this.onInputEditTitleChange = function (value) {
      var editBookData = _this.state.editBookData;

      var id = editBookData.id;
      var rating = editBookData.rating;
      var title = value;

      _this.setState({
        editBookData: {
          id: id,
          title: title,
          rating: rating
        }
      });

      return value;
    }, _this.onInputEditRatingChange = function (value) {
      var editBookData = _this.state.editBookData;

      var id = editBookData.id;
      var title = editBookData.title;
      var rating = value;

      _this.setState({
        editBookData: {
          id: id,
          title: title,
          rating: rating
        }
      });

      return value;
    }, _this.addNewBook = function () {
      // axios.post('http://47.107.105.61:9090/book/AddNewBook', this.state.newBookData).then((response) => {
      // const fullURL = `https://${ServerURL}/book/AddNewBook`
      var fullURL = _Const2.default + "/book/AddNewBook";

      _taroWeapp2.default.request({
        url: fullURL,
        data: {
          title: _this.state.newBookDataTitle,
          rating: _this.state.newBookDataRating
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST'
      }).then(function (res) {
        // console.log('Start to connect to AddNewBook')  
        // console.log(res.data)
        if (res.statusCode === 200) {
          _this.setState({
            books: res.data,
            newBookDataTitle: '',
            newBookDataRating: 0,
            newBookModal: false
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
    }, _this.editBook = function () {
      // axios.post('http://47.107.105.61:9090/book/EditBook', this.state.editBookData).then((response) => {
      // const fullURL = `https://${ServerURL}/book/EditBook`
      var fullURL = _Const2.default + "/book/EditBook";

      _this.setState({
        editBookModal: false
      });

      _taroWeapp2.default.request({
        url: fullURL,
        data: _this.state.editBookData,
        header: {
          'content-type': 'application/json'
        },
        method: 'POST'

      }).then(function (res) {
        // console.log('Start to connect to EditBook')  
        // console.log(res.data)
        if (res.statusCode === 200) {
          _this.setState({
            books: res.data,
            editBookData: {
              id: 0,
              title: '',
              rating: 0
            },
            editBookModal: false
          });
        } else {
          console.log('Failed to connect to EditBook. The statusCode is ', res.statusCode);
          _this.setState({
            openInvalidModal: true
          });
        }
      }).catch(function (err) {
        console.log('Failed to connect to EditBook. The err is ', err);
        _this.setState({
          openInvalidModal: true
        });
      });
    }, _this.deleteBook = function (book) {
      // axios.post('http://47.107.105.61:9090/book/DeleteBook', {id}).then((response) => {
      // const fullURL = `https://${ServerURL}/book/DeleteBook`
      var fullURL = _Const2.default + "/book/DeleteBook";

      console.log(fullURL);

      _taroWeapp2.default.request({
        url: fullURL,
        data: {
          id: book.id,
          title: book.title,
          rating: book.rating
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST'

      }).then(function (res) {
        console.log('Start to connect to DeleteBook');
        console.log(res.data);
        _this.setState({
          books: res.data
        });
      }).catch(function (err) {
        console.log('Failed to connect to DeleteBook. The err is ', err);
      });
    }, _this.toggleInvalidModal = function () {
      _this.setState({
        openInvalidModal: false
      });
    }, _this.config = {
      navigationBarTitleText: '首页'
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.customComponents = ["AtRate", "AtButton", "AtModal", "AtModalHeader", "AtModalContent", "AtIcon", "AtInput", "AtModalAction"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      this.editBook = this.editBook.bind(this);
      this.deleteBook = this.deleteBook.bind(this);
      this.getAllBooks = this.getAllBooks.bind(this);
      // this.onInputTitleChange = this.onInputTitleChange.bind(this)
      // this.onInputRatingChange = this.onInputRatingChange.bind(this)
      this.onInputNewTitleChange = this.onInputNewTitleChange.bind(this);

      this.toogleNewBookModal = this.toogleNewBookModal.bind(this);
      this.toogleEditBookModal = this.toogleEditBookModal.bind(this);
      this.clickEditBook = this.clickEditBook.bind(this);
      this.toggleInvalidModal = this.toggleInvalidModal.bind(this);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getAllBooks();
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


    // onInputNewTitleChange = (value) => {
    value: function onInputNewTitleChange(value) {
      this.setState({
        newBookDataTitle: value
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__26"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__26 = _genCompid2[0],
          $compid__26 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__27"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__27 = _genCompid4[0],
          $compid__27 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__28"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__28 = _genCompid6[0],
          $compid__28 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__29"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__29 = _genCompid8[0],
          $compid__29 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__30"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__30 = _genCompid10[0],
          $compid__30 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__31"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__31 = _genCompid12[0],
          $compid__31 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__32"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__32 = _genCompid14[0],
          $compid__32 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__33"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__33 = _genCompid16[0],
          $compid__33 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__34"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__34 = _genCompid18[0],
          $compid__34 = _genCompid18[1];

      var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "$compid__35"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__35 = _genCompid20[0],
          $compid__35 = _genCompid20[1];

      this.anonymousFunc2 = function () {
        return _this2.toogleNewBookModal();
      };

      this.anonymousFunc3 = function () {
        return _this2.toogleNewBookModal();
      };

      this.anonymousFunc4 = function () {
        return _this2.addNewBook();
      };

      this.anonymousFunc5 = function (value) {
        return _this2.onInputEditRatingChange(value);
      };

      this.anonymousFunc6 = function (value) {
        return _this2.onInputEditTitleChange(value);
      };

      this.anonymousFunc7 = function () {
        return _this2.toogleEditBookModal();
      };

      this.anonymousFunc8 = function () {
        return _this2.editBook();
      };

      this.anonymousFunc9 = function () {
        return _this2.toggleInvalidModal();
      };

      var loopArray2 = this.__state.books.map(function (book, __index0) {
        book = {
          $original: (0, _taroWeapp.internal_get_original)(book)
        };

        var _$indexKey = "fzzzz" + __index0;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return _this2.clickEditBook(book.$original);
        };

        var _$indexKey2 = "gzzzz" + __index0;

        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          return _this2.deleteBook(book.$original);
        };

        var _genCompid21 = (0, _taroWeapp.genCompid)(__prefix + 'hzzzzzzzzz' + __index0, true),
            _genCompid22 = _slicedToArray(_genCompid21, 2),
            $prevCompid__23 = _genCompid22[0],
            $compid__23 = _genCompid22[1];

        _taroWeapp.propsManager.set({
          "max": 5,
          "size": "15",
          "value": book.$original.rating
        }, $compid__23, $prevCompid__23);

        var _genCompid23 = (0, _taroWeapp.genCompid)(__prefix + 'izzzzzzzzz' + __index0, true),
            _genCompid24 = _slicedToArray(_genCompid23, 2),
            $prevCompid__24 = _genCompid24[0],
            $compid__24 = _genCompid24[1];

        _taroWeapp.propsManager.set({
          "type": "primary",
          "size": "small",
          "className": "style-green",
          "onClick": _this2.anonymousFunc0.bind(_this2, _$indexKey)
        }, $compid__24, $prevCompid__24);

        var _genCompid25 = (0, _taroWeapp.genCompid)(__prefix + 'jzzzzzzzzz' + __index0, true),
            _genCompid26 = _slicedToArray(_genCompid25, 2),
            $prevCompid__25 = _genCompid26[0],
            $compid__25 = _genCompid26[1];

        _taroWeapp.propsManager.set({
          "type": "primary",
          "size": "small",
          "className": "style-red",
          "onClick": _this2.anonymousFunc1.bind(_this2, _$indexKey2)
        }, $compid__25, $prevCompid__25);
        return {
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          $compid__23: $compid__23,
          $compid__24: $compid__24,
          $compid__25: $compid__25,
          $original: book.$original
        };
      });

      _taroWeapp.propsManager.set({
        "type": "primary",
        "className": "style-blue",
        "size": "normal",
        "onClick": this.anonymousFunc2
      }, $compid__26, $prevCompid__26);
      _taroWeapp.propsManager.set({
        "name": "New Book",
        "className": "style-modal",
        "cancelText": '\u53D6\u6D88',
        "confirmText": '\u786E\u8BA4',
        "isOpened": this.__state.newBookModal,
        "onCancel": this.anonymousFunc3,
        "onConfirm": this.anonymousFunc4
      }, $compid__27, $prevCompid__27);
      _taroWeapp.propsManager.set({
        "name": "Edit Book",
        "isOpened": this.__state.editBookModal
      }, $compid__28, $prevCompid__28);
      _taroWeapp.propsManager.set({
        "className": "style-modalHeader"
      }, $compid__29, $prevCompid__29);
      _taroWeapp.propsManager.set({
        "className": "style-atIcon",
        "value": "heart",
        "size": "18",
        "color": "dodgerblue"
      }, $compid__30, $prevCompid__30);
      _taroWeapp.propsManager.set({
        "className": "style-atRating",
        "max": 5,
        "value": this.__state.editBookData.rating,
        "onChange": this.anonymousFunc5
      }, $compid__31, $prevCompid__31);
      _taroWeapp.propsManager.set({
        "className": "style-atIcon",
        "value": "edit",
        "size": "18",
        "color": "dodgerblue"
      }, $compid__32, $prevCompid__32);
      _taroWeapp.propsManager.set({
        "name": "title",
        "type": "text",
        "value": this.__state.editBookData.title,
        "onChange": this.anonymousFunc6,
        "className": "style-inputTitle"
      }, $compid__33, $prevCompid__33);
      _taroWeapp.propsManager.set({
        "name": "Invalid Input",
        "isOpened": this.__state.openInvalidModal
      }, $compid__34, $prevCompid__34);
      _taroWeapp.propsManager.set({
        "className": "style-invalidModal"
      }, $compid__35, $prevCompid__35);
      Object.assign(this.__state, {
        loopArray2: loopArray2,
        $compid__26: $compid__26,
        $compid__27: $compid__27,
        $compid__28: $compid__28,
        $compid__29: $compid__29,
        $compid__30: $compid__30,
        $compid__31: $compid__31,
        $compid__32: $compid__32,
        $compid__33: $compid__33,
        $compid__34: $compid__34,
        $compid__35: $compid__35
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
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
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: 'anonymousFunc9',
    value: function anonymousFunc9(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc7", "anonymousFunc8", "anonymousFunc9"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\Huang\\WeChatProjects\\Taro-App\\Book-APP\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:/Users/Huang/WeChatProjects/Taro-App/Book-APP/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/pages/index/Const.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/Const.jsx ***!
  \***********************************/
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

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_Huang_WeChatProjects_Taro_App_Book_APP_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=C:/Users/Huang/WeChatProjects/Taro-App/Book-APP/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\Huang\\WeChatProjects\\Taro-App\\Book-APP\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_Huang_WeChatProjects_Taro_App_Book_APP_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_C_Users_Huang_WeChatProjects_Taro_App_Book_APP_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_C_Users_Huang_WeChatProjects_Taro_App_Book_APP_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_C_Users_Huang_WeChatProjects_Taro_App_Book_APP_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","vendors"]]]);
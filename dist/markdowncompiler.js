/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index.js */ \"./lib/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_index_js__WEBPACK_IMPORTED_MODULE_0__.default); // console.log(123)\n\n//# sourceURL=webpack://markdowncompiler/./index.js?");

/***/ }),

/***/ "./lib/common/constant.js":
/*!********************************!*\
  !*** ./lib/common/constant.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CHAR_TAB\": () => (/* binding */ CHAR_TAB),\n/* harmony export */   \"CHAR_NEW_LINE\": () => (/* binding */ CHAR_NEW_LINE),\n/* harmony export */   \"CHAR_SPACE\": () => (/* binding */ CHAR_SPACE)\n/* harmony export */ });\nvar CHAR_TAB = 0x09;\nvar CHAR_NEW_LINE = 0x0A;\nvar CHAR_SPACE = 0x20;\n\n//# sourceURL=webpack://markdowncompiler/./lib/common/constant.js?");

/***/ }),

/***/ "./lib/common/regs.js":
/*!****************************!*\
  !*** ./lib/common/regs.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FENCE_BEGIN_REG\": () => (/* binding */ FENCE_BEGIN_REG),\n/* harmony export */   \"FENCE_END_REG\": () => (/* binding */ FENCE_END_REG),\n/* harmony export */   \"HEADING_REG\": () => (/* binding */ HEADING_REG),\n/* harmony export */   \"HTML_ESCAPE_TEST_RE\": () => (/* binding */ HTML_ESCAPE_TEST_RE),\n/* harmony export */   \"HTML_ESCAPE_REPLACE_RE\": () => (/* binding */ HTML_ESCAPE_REPLACE_RE)\n/* harmony export */ });\n/**\r\n * 存储正则\r\n */\nvar FENCE_BEGIN_REG = /^```[\\s\\S]*$/;\nvar FENCE_END_REG = /^```$/;\nvar HEADING_REG = /^#{1,6} .*$/;\nvar HTML_ESCAPE_TEST_RE = /[&<>\"]/;\nvar HTML_ESCAPE_REPLACE_RE = /[&<>\"]/g;\n\n//# sourceURL=webpack://markdowncompiler/./lib/common/regs.js?");

/***/ }),

/***/ "./lib/common/utils.js":
/*!*****************************!*\
  !*** ./lib/common/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isSpace\": () => (/* binding */ isSpace),\n/* harmony export */   \"escapeHtml\": () => (/* binding */ escapeHtml)\n/* harmony export */ });\n/* harmony import */ var _regs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regs.js */ \"./lib/common/regs.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ \"./lib/common/constant.js\");\n\n // require(\"./constant\")\n\nfunction isSpace(code) {\n  switch (code) {\n    case _constant_js__WEBPACK_IMPORTED_MODULE_1__.CHAR_TAB:\n    case _constant_js__WEBPACK_IMPORTED_MODULE_1__.CHAR_SPACE:\n      return true;\n  }\n\n  return false;\n}\nvar HTML_REPLACEMENTS = {\n  '&': '&amp;',\n  '<': '&lt;',\n  '>': '&gt;',\n  '\"': '&quot;'\n};\n\nfunction replaceUnsafeChar(ch) {\n  return HTML_REPLACEMENTS[ch];\n}\n\nfunction escapeHtml(str) {\n  if (_regs_js__WEBPACK_IMPORTED_MODULE_0__.HTML_ESCAPE_TEST_RE.test(str)) {\n    return str.replace(_regs_js__WEBPACK_IMPORTED_MODULE_0__.HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);\n  }\n\n  return str;\n}\n\n//# sourceURL=webpack://markdowncompiler/./lib/common/utils.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MarkdownCompiler)\n/* harmony export */ });\n/* harmony import */ var _parsers_Parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/Parser.js */ \"./lib/parsers/Parser.js\");\n/* harmony import */ var _render_Render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/Render.js */ \"./lib/render/Render.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar MarkdownCompiler = /*#__PURE__*/function () {\n  function MarkdownCompiler() {\n    _classCallCheck(this, MarkdownCompiler);\n\n    // 实例化Parser&Render\n    this.parserInstance = new _parsers_Parser_js__WEBPACK_IMPORTED_MODULE_0__.default();\n    this.renderInstance = new _render_Render_js__WEBPACK_IMPORTED_MODULE_1__.default();\n    this.markdown2Tokens = this.parserInstance.markdown2Tokens;\n    this.tokens2Html = this.renderInstance.tokens2Html;\n    this.parser = this.parserInstance.markdown2Tokens;\n  } // 该函数应该同时支持处理字符串或者tokens\n\n\n  _createClass(MarkdownCompiler, [{\n    key: \"render\",\n    value: function render(data) {\n      if (typeof data === 'string') {\n        return this.tokens2Html(this.markdown2Tokens(data));\n      } else if (data instanceof Array) {\n        return this.tokens2Html(data);\n      } else {\n        return false;\n      }\n    }\n  }]);\n\n  return MarkdownCompiler;\n}();\n\n\nwindow.MarkdownCompiler = MarkdownCompiler;\n\n//# sourceURL=webpack://markdowncompiler/./lib/index.js?");

/***/ }),

/***/ "./lib/parsers/Parser.js":
/*!*******************************!*\
  !*** ./lib/parsers/Parser.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Parser)\n/* harmony export */ });\n/* harmony import */ var _rules_BlockRules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rules/BlockRules.js */ \"./lib/rules/BlockRules.js\");\n/* harmony import */ var _state_BlockState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/BlockState.js */ \"./lib/state/BlockState.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// const BlockRules = require(\"../rules/BlockRules\")\n// const BlockState = require(\"../state/BlockState\")\n\n\n/**\r\n * 分词处理（词法分析）\r\n * markdown字符串 -->  Tokens\r\n * 1.识别 markdown 文档的块结构;\r\n * 2.将段落，标题和其他块结构中的文本行，作为内联结构解析。\r\n */\n\nvar Parser = /*#__PURE__*/function () {\n  function Parser() {\n    _classCallCheck(this, Parser);\n  }\n\n  _createClass(Parser, [{\n    key: \"markdown2Tokens\",\n    value: function markdown2Tokens(str) {\n      var blockState = new _state_BlockState_js__WEBPACK_IMPORTED_MODULE_1__.default(str);\n      var blockRules = new _rules_BlockRules_js__WEBPACK_IMPORTED_MODULE_0__.default().getRules(); // 从每一行开始，遍历所有规则\n\n      for (var i = 0; i < blockState.lineMax;) {\n        for (var j = 0; j < blockRules.length; j++) {\n          var nextLine = blockRules[j](blockState, i, blockState.lineMax);\n\n          if (nextLine) {\n            i = nextLine;\n            break;\n          }\n        }\n      } // 在parser完成解析之后，给解析结果的state中的tokens添加proxy\n      // 每当tokens改变，同时对string修改\n\n\n      blockState.tokensProxy = new Proxy(blockState.tokens, {\n        set: function set(obj, prop, value) {\n          console.log(111);\n          return Reflect.set(obj, prop, value);\n        }\n      });\n      return blockState.tokens;\n    }\n  }]);\n\n  return Parser;\n}();\n\n\n\n//# sourceURL=webpack://markdowncompiler/./lib/parsers/Parser.js?");

/***/ }),

/***/ "./lib/render/Render.js":
/*!******************************!*\
  !*** ./lib/render/Render.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Render)\n/* harmony export */ });\n/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils.js */ \"./lib/common/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\r\n * 渲染器，负责将tokens转化成html标签\r\n */\n\n\nvar Render = /*#__PURE__*/function () {\n  function Render() {\n    var _this = this;\n\n    _classCallCheck(this, Render);\n\n    _defineProperty(this, \"defaultRules\", {\n      fence: this.fence,\n      heading_open: this.heading_open,\n      heading_close: this.heading_close,\n      paragraph_open: this.paragraph_open,\n      paragraph_close: this.paragraph_close,\n      inline: this.inline\n    });\n\n    _defineProperty(this, \"rules\", this.defaultRules);\n\n    _defineProperty(this, \"tokens2Html\", function (tokens) {\n      var result = '';\n      tokens.forEach(function (token) {\n        switch (token.type) {\n          case 'fence':\n            result += _this.rules.fence(token);\n            break;\n\n          case 'heading_open':\n            result += _this.rules.heading_open(token);\n            break;\n\n          case 'heading_close':\n            result += _this.rules.heading_close(token);\n            break;\n\n          case 'paragraph_open':\n            result += _this.rules.paragraph_open(token);\n            break;\n\n          case 'paragraph_close':\n            result += _this.rules.paragraph_close(token);\n            break;\n\n          case 'inline':\n            result += _this.rules.inline(token);\n\n          default:\n            break;\n        }\n      });\n      return result;\n    });\n  }\n\n  _createClass(Render, [{\n    key: \"fence\",\n    value: function fence(token) {\n      return '<pre><code>' + (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeHtml)(token.content) + '</code></pre>\\n';\n    }\n  }, {\n    key: \"heading_open\",\n    value: function heading_open(token) {\n      var headingType = token.tag;\n      return '<' + headingType + '>';\n    }\n  }, {\n    key: \"heading_close\",\n    value: function heading_close(token) {\n      var headingType = token.tag;\n      return '</' + headingType + '>';\n    }\n  }, {\n    key: \"paragraph_open\",\n    value: function paragraph_open(token) {\n      return '<p>';\n    }\n  }, {\n    key: \"paragraph_close\",\n    value: function paragraph_close(token) {\n      return '</p>';\n    }\n  }, {\n    key: \"inline\",\n    value: function inline(token) {\n      return token.content;\n    }\n  }]);\n\n  return Render;\n}();\n\n\n\n//# sourceURL=webpack://markdowncompiler/./lib/render/Render.js?");

/***/ }),

/***/ "./lib/rules/BlockRules.js":
/*!*********************************!*\
  !*** ./lib/rules/BlockRules.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlockRules)\n/* harmony export */ });\n/* harmony import */ var _common_regs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/regs.js */ \"./lib/common/regs.js\");\n/* harmony import */ var _common_constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constant.js */ \"./lib/common/constant.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * markdown块规则\r\n */\n\n\n\nvar BlockRules = /*#__PURE__*/function () {\n  function BlockRules() {\n    _classCallCheck(this, BlockRules);\n\n    this.rules = [fence, heading, paragraph];\n  }\n\n  _createClass(BlockRules, [{\n    key: \"getRules\",\n    value: function getRules() {\n      return this.rules;\n    }\n  }]);\n\n  return BlockRules;\n}();\n\n\n\nfunction fence(state, startLine, endLine) {\n  // 只需要判断当前第一行是否为 ```xxx 代码块类似的格式即可\n  // 如果第一行未通过正则检测，则直接返回false\n  // 如果判断通过，则后面的每一行内容都加入代码块，直到遇到```为止 \n  var currentLineStr = state.getLinesContent(startLine);\n\n  if (!_common_regs_js__WEBPACK_IMPORTED_MODULE_0__.FENCE_BEGIN_REG.test(currentLineStr)) {\n    return false;\n  } // 代码块内容起始\n\n\n  var currentLine = startLine + 1; // 代码类型\n\n  var info = currentLineStr.split('```')[1]; // 代码类型部分的起止点 在原字符串中的位置映射\n  // 通过改变某个token中的内容，映射到原字符串中的内容，将原markdown字符串同步修改，顺便把html的内容也修改了？\n  // string==(parser)==>tokens==(render)==>html\n  // html==(oninput)==>tokens==(proxy)==>string\n  // 实现关键：tokens渲染为html时需要带上index\n\n  var codeTypeMap = [state.beginMarks[currentLine] + 3, state.endMarks[currentLine]];\n\n  for (currentLine = startLine + 1; currentLine < endLine; currentLine++) {\n    // 匹配到结束符\n    if (_common_regs_js__WEBPACK_IMPORTED_MODULE_0__.FENCE_END_REG.test(state.getLinesContent(currentLine))) {\n      break;\n    }\n  } // for循环结束 currentLine指向代码块结束标记符 即'```'\n\n\n  content = state.getLinesContent(startLine + 1, currentLine - 1);\n  token = state.push('fence', 'code', 0);\n  token.content = content;\n  token.info = info; // 标志parser下一步应该从哪一行开始处理\n\n  var nextLine = currentLine + 1;\n  return nextLine;\n}\n\nfunction heading(state, startLine, endLine) {\n  var currentLineStr = state.getLinesContent(startLine);\n\n  if (!_common_regs_js__WEBPACK_IMPORTED_MODULE_0__.HEADING_REG.test(currentLineStr)) {\n    return false;\n  } // 判断heading类型  h1-h6\n\n\n  var headingType = 'h' + currentLineStr.split(' ')[0].length;\n  var token = state.push('heading_open', headingType, 1);\n  token = state.push('inline', 'text', 0);\n  token.content = currentLineStr.split(' ')[1];\n  token = state.push('heading_close', headingType, -1);\n  return startLine + 1;\n}\n\nfunction paragraph(state, startLine, endLine) {\n  // 所有规则都没有匹配成功时，默认匹配paragraph\n  token = state.push('paragraph_open', 'p', 1);\n  token = state.push('inline', 'text', 0);\n  token.content = state.getLinesContent(startLine);\n  token = state.push('paragraph_close', 'p', -1);\n  return startLine + 1;\n}\n\n//# sourceURL=webpack://markdowncompiler/./lib/rules/BlockRules.js?");

/***/ }),

/***/ "./lib/state/BlockState.js":
/*!*********************************!*\
  !*** ./lib/state/BlockState.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlockState)\n/* harmony export */ });\n/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils.js */ \"./lib/common/utils.js\");\n/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token.js */ \"./lib/token.js\");\n/* harmony import */ var _common_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/constant.js */ \"./lib/common/constant.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// const { isSpace } = require(\"../common/utils\")\n\n\n\n\nvar BlockState = /*#__PURE__*/function () {\n  function BlockState(src) {\n    var _this = this;\n\n    _classCallCheck(this, BlockState);\n\n    _defineProperty(this, \"push\", function (type, tag, nesting) {\n      var token = new _token_js__WEBPACK_IMPORTED_MODULE_1__.default(type, tag, nesting);\n      if (nesting < 0) _this.level--;\n      token.level = _this.level;\n      if (nesting > 0) _this.level++;\n\n      _this.tokens.push(token);\n\n      return token;\n    });\n\n    _defineProperty(this, \"addTokenByProxy\", function (index, type, tag, nesting) {});\n\n    _defineProperty(this, \"deleteTokenByProxy\", function (index) {});\n\n    _defineProperty(this, \"changeTokenByProxy\", function (index, content) {});\n\n    this.src = src;\n    this.beginMarks = [];\n    this.endMarks = [];\n    this.offset = [];\n    this.lineMax = 0;\n    this.tokens = []; // 没有嵌套时level为0,token的nesting为0, 嵌套时,level/nesting >0 表示是opening tag <0 表示close tag \n\n    this.level = 0; // 定义\n\n    this.tokensProxy = null;\n    this.initState();\n  }\n\n  _createClass(BlockState, [{\n    key: \"initState\",\n    value: function initState() {\n      var start; // 当前行字符串开始位置\n\n      var pos; // 当前字符串遍历到的位置\n\n      var offset; // 首个非space字符的偏移量\n\n      var len = this.src.length; // markdown字符串长度\n\n      var indentFound = false; // 标记是否找到段首非空白字符\n\n      var s = this.src;\n      var ch;\n\n      for (start = pos = offset = 0; pos <= len; pos++) {\n        ch = s.charCodeAt(pos);\n\n        if (!indentFound) {\n          if ((0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSpace)(ch)) {\n            if (ch == CHAR_SPACE) {\n              offset++;\n            } else if (ch === CHAR_TAB) {\n              offset += 4 - offset % 4;\n            }\n\n            continue;\n          } else {\n            indentFound = true;\n          }\n        } // 判断pos == len - 1 用于处理当前字符串最后一行没有换行的情况\n\n\n        if (ch === _common_constant_js__WEBPACK_IMPORTED_MODULE_2__.CHAR_NEW_LINE || pos === len - 1) {\n          if (ch !== _common_constant_js__WEBPACK_IMPORTED_MODULE_2__.CHAR_NEW_LINE) {\n            // 处于最后一个，让循环退出\n            pos++;\n          }\n\n          this.beginMarks.push(start);\n          this.endMarks.push(pos);\n          this.offset.push(offset);\n          indentFound = false;\n          offset = 0;\n          start = pos + 1;\n        }\n      } // this.beginMarks.push(s.length) ???\n      // this.endMarks.push(s.length) ???\n\n\n      this.lineMax = this.beginMarks.length;\n    } // 在state中添加token\n\n  }, {\n    key: \"getLinesContent\",\n    value: // 根据行号获取内容\n    function getLinesContent(begin) {\n      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : begin;\n      var contentBegin = this.beginMarks[begin];\n      var contentEnd = this.endMarks[end];\n      var content = this.src.substr(contentBegin, contentEnd - contentBegin);\n      return content;\n    }\n  }]);\n\n  return BlockState;\n}();\n\n\n\n//# sourceURL=webpack://markdowncompiler/./lib/state/BlockState.js?");

/***/ }),

/***/ "./lib/token.js":
/*!**********************!*\
  !*** ./lib/token.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Token)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Token = function Token(type, tag, nesting) {\n  _classCallCheck(this, Token);\n\n  this.type = type;\n  this.tag = tag;\n  this.nesting = nesting;\n};\n\n\n\n//# sourceURL=webpack://markdowncompiler/./lib/token.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
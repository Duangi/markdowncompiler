(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.markdowncompiler = global.markdowncompiler || {}, global.markdowncompiler.min = factory()));
})(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  /**
   * 存储正则
   */
  var FENCE_BEGIN_REG = /^```[\s\S]*$/;
  var FENCE_END_REG = /^```$/;
  var HEADING_REG = /^#{1,6} .*$/;
  var HTML_ESCAPE_TEST_RE = /[&<>"]/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;

  var CHAR_TAB$1 = 0x09;
  var CHAR_NEW_LINE = 0x0A;
  var CHAR_SPACE$1 = 0x20;

  function isSpace(code) {
    switch (code) {
      case CHAR_TAB$1:
      case CHAR_SPACE$1:
        return true;
    }

    return false;
  }
  var HTML_REPLACEMENTS = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  };

  function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
  }

  function escapeHtml(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }

    return str;
  }

  var Fence = /*#__PURE__*/function () {
    function Fence() {
      _classCallCheck(this, Fence);
    }

    _createClass(Fence, null, [{
      key: "token2Markdown",
      value: function token2Markdown(token) {
        return '```' + token.info + '\n' + token.content + '\n```';
      }
    }, {
      key: "token2Html",
      value: function token2Html(token) {
        return '<pre><code>' + escapeHtml(token.content) + '</code></pre>\n';
      }
    }, {
      key: "fence",
      value: function fence(state, startLine, endLine) {
        // 只需要判断当前第一行是否为 ```xxx 代码块类似的格式即可
        // 如果第一行未通过正则检测，则直接返回false
        // 如果判断通过，则后面的每一行内容都加入代码块，直到遇到```为止 
        var currentLineStr = state.getLinesContent(startLine);

        if (!FENCE_BEGIN_REG.test(currentLineStr)) {
          return false;
        } // 代码块内容起始


        var currentLine = startLine + 1; // 代码类型

        var info = currentLineStr.split('```')[1]; // 代码类型部分的起止点 在原字符串中的位置映射
        // 通过改变某个token中的内容，映射到原字符串中的内容，将原markdown字符串同步修改，顺便把html的内容也修改了？
        // string==(parser)==>tokens==(render)==>html
        // html==(oninput)==>tokens==(proxy)==>string
        // 实现关键：tokens渲染为html时需要带上index

        [state.beginMarks[currentLine] + 3, state.endMarks[currentLine]];

        for (currentLine = startLine + 1; currentLine < endLine; currentLine++) {
          // 匹配到结束符
          if (FENCE_END_REG.test(state.getLinesContent(currentLine))) {
            break;
          }
        } // for循环结束 currentLine指向代码块结束标记符 即'```'


        var content = state.getLinesContent(startLine + 1, currentLine - 1);
        var token = state.push('fence', 'code', 0);
        token.content = content;
        token.info = info; // 标志parser下一步应该从哪一行开始处理

        var nextLine = currentLine + 1;
        return nextLine;
      }
    }]);

    return Fence;
  }();

  var Heading = /*#__PURE__*/function () {
    function Heading() {
      _classCallCheck(this, Heading);
    }

    _createClass(Heading, null, [{
      key: "token2Markdown_open",
      value: function token2Markdown_open(token) {
        var head = '######';
        head = head.substr(0, Number(token.tag.split('h')[1])) + ' ';
        return head;
      }
    }, {
      key: "token2Markdown_close",
      value: function token2Markdown_close(token) {
        return '';
      }
    }, {
      key: "token2Html_open",
      value: function token2Html_open(token) {
        return "<".concat(token.tag, ">");
      }
    }, {
      key: "token2Html_close",
      value: function token2Html_close(token) {
        return "</".concat(token.tag, ">");
      }
    }, {
      key: "heading",
      value: function heading(state, startLine, endLine) {
        var currentLineStr = state.getLinesContent(startLine);

        if (!HEADING_REG.test(currentLineStr)) {
          return false;
        } // 判断heading类型  h1-h6


        var headingType = 'h' + currentLineStr.split(' ')[0].length;
        var token = state.push('heading_open', headingType, 1);
        token = state.push('inline', 'text', 0);
        token.content = currentLineStr.split(' ')[1];
        token = state.push('heading_close', headingType, -1);
        return startLine + 1;
      }
    }]);

    return Heading;
  }();

  // import { escapeHtml } from "../../common/utils"
  var Paragraph = /*#__PURE__*/function () {
    function Paragraph() {
      _classCallCheck(this, Paragraph);
    }

    _createClass(Paragraph, null, [{
      key: "token2Markdown_open",
      value: function token2Markdown_open(token) {
        return '';
      }
    }, {
      key: "token2Markdown_close",
      value: function token2Markdown_close(token) {
        return '';
      }
    }, {
      key: "token2Html_open",
      value: function token2Html_open(token) {
        return "<p>";
      }
    }, {
      key: "token2Html_close",
      value: function token2Html_close(token) {
        return "</p>";
      }
    }, {
      key: "paragraph",
      value: function paragraph(state, startLine, endLine) {
        // 所有规则都没有匹配成功时，默认匹配paragraph
        var token = state.push('paragraph_open', 'p', 1);
        token = state.push('inline', 'text', 0);
        token.content = state.getLinesContent(startLine);
        token = state.push('paragraph_close', 'p', -1);
        return startLine + 1;
      }
    }]);

    return Paragraph;
  }();

  /**
   * markdown块规则
   */

  var BlockRules = /*#__PURE__*/function () {
    function BlockRules() {
      _classCallCheck(this, BlockRules);

      this.rules = [Fence.fence, Heading.heading, Paragraph.paragraph];
    }

    _createClass(BlockRules, [{
      key: "getRules",
      value: function getRules() {
        return this.rules;
      }
    }]);

    return BlockRules;
  }();

  var Token = function Token(type, tag, nesting) {
    _classCallCheck(this, Token);

    this.type = type;
    this.tag = tag;
    this.nesting = nesting;
  };

  var BlockState = /*#__PURE__*/function () {
    function BlockState(src) {
      var _this = this;

      _classCallCheck(this, BlockState);

      _defineProperty(this, "push", function (type, tag, nesting) {
        var token = new Token(type, tag, nesting);
        if (nesting < 0) _this.level--;
        token.level = _this.level;
        if (nesting > 0) _this.level++;

        _this.tokens.push(token);

        return token;
      });

      _defineProperty(this, "addTokenByProxy", function (index, type, tag, nesting) {});

      _defineProperty(this, "deleteTokenByProxy", function (index) {});

      _defineProperty(this, "changeTokenByProxy", function (index, content) {});

      this.src = src;
      this.beginMarks = [];
      this.endMarks = [];
      this.offset = [];
      this.lineMax = 0;
      this.tokens = []; // 没有嵌套时level为0,token的nesting为0, 嵌套时,level/nesting >0 表示是opening tag <0 表示close tag 

      this.level = 0; // 定义

      this.tokensProxy = null;
      this.initState();
    }

    _createClass(BlockState, [{
      key: "initState",
      value: function initState() {
        var start; // 当前行字符串开始位置

        var pos; // 当前字符串遍历到的位置

        var offset; // 首个非space字符的偏移量

        var len = this.src.length; // markdown字符串长度

        var indentFound = false; // 标记是否找到段首非空白字符

        var s = this.src;
        var ch;

        for (start = pos = offset = 0; pos <= len; pos++) {
          ch = s.charCodeAt(pos);

          if (!indentFound) {
            if (isSpace(ch)) {
              if (ch == CHAR_SPACE) {
                offset++;
              } else if (ch === CHAR_TAB) {
                offset += 4 - offset % 4;
              }

              continue;
            } else {
              indentFound = true;
            }
          } // 判断pos == len - 1 用于处理当前字符串最后一行没有换行的情况


          if (ch === CHAR_NEW_LINE || pos === len - 1) {
            if (ch !== CHAR_NEW_LINE) {
              // 处于最后一个，让循环退出
              pos++;
            }

            this.beginMarks.push(start);
            this.endMarks.push(pos);
            this.offset.push(offset);
            indentFound = false;
            offset = 0;
            start = pos + 1;
          }
        } // this.beginMarks.push(s.length) ???
        // this.endMarks.push(s.length) ???


        this.lineMax = this.beginMarks.length;
      } // 在state中添加token

    }, {
      key: "getLinesContent",
      value: // 根据行号获取内容
      function getLinesContent(begin) {
        var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : begin;
        var contentBegin = this.beginMarks[begin];
        var contentEnd = this.endMarks[end];
        var content = this.src.substr(contentBegin, contentEnd - contentBegin);
        return content;
      }
    }]);

    return BlockState;
  }();

  /**
   * 分词处理（词法分析）
   * markdown字符串 -->  Tokens
   * 1.识别 markdown 文档的块结构;
   * 2.将段落，标题和其他块结构中的文本行，作为内联结构解析。
   */

  var Parser = /*#__PURE__*/function () {
    function Parser() {
      var _this = this;

      _classCallCheck(this, Parser);

      _defineProperty(this, "addProxy2Tokens", function () {
        _this.blockState.tokensProxy = new Proxy(_this.blockState.tokens, {
          set: function set(obj, prop, value) {
            console.log('tokens被修改');
            return Reflect.set(obj, prop, value);
          }
        });
      });
    }

    _createClass(Parser, [{
      key: "markdown2Tokens",
      value: function markdown2Tokens(str) {
        var blockState = new BlockState(str);
        var blockRules = new BlockRules().getRules(); // 从每一行开始，遍历所有规则

        for (var i = 0; i < blockState.lineMax;) {
          for (var j = 0; j < blockRules.length; j++) {
            var nextLine = blockRules[j](blockState, i, blockState.lineMax);

            if (nextLine) {
              i = nextLine;
              break;
            }
          }
        } // 在parser完成解析之后，给解析结果的state中的tokens添加proxy
        // 每当tokens改变，同时对string修改


        blockState.tokensProxy = new Proxy(blockState.tokens, {
          set: function set(obj, prop, value) {
            console.log(token被修改);
            return Reflect.set(obj, prop, value);
          }
        });
        return blockState.tokens;
      }
    }]);

    return Parser;
  }();

  var Inline = /*#__PURE__*/function () {
    function Inline() {
      _classCallCheck(this, Inline);
    }

    _createClass(Inline, null, [{
      key: "token2Markdown",
      value: function token2Markdown(token) {
        return token.content;
      }
    }, {
      key: "token2Html",
      value: function token2Html(token) {
        return token.content;
      }
    }]);

    return Inline;
  }();

  var Render = function Render() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      WYSIWYG: true,
      highlight: highlight
    };

    _classCallCheck(this, Render);

    _defineProperty(this, "tokens2Html", function (tokens) {
      var result = '';
      tokens.forEach(function (token) {
        switch (token.type) {
          case 'fence':
            result += _this.rules.fence(token);
            break;

          case 'heading_open':
            result += _this.rules.heading_open(token);
            break;

          case 'heading_close':
            result += _this.rules.heading_close(token);
            break;

          case 'paragraph_open':
            result += _this.rules.paragraph_open(token);
            break;

          case 'paragraph_close':
            result += _this.rules.paragraph_close(token);
            break;

          case 'inline':
            result += _this.rules.inline(token);
        }
      });
      return result;
    });

    this.WYSIWYG = options.WYSIWYG;
    this.defaultRules = {
      fence: Fence.token2Html,
      heading_open: Heading.token2Html_open,
      heading_close: Heading.token2Html_close,
      paragraph_open: Paragraph.token2Html_open,
      paragraph_close: Paragraph.token2Markdown_close,
      inline: Inline.token2Html
    }; // 用户将会在这里修改规则，该类应该提供一个更新规则的方法 或者直接通过renderInstance修改渲染规则

    this.rules = this.defaultRules;
  } // 利用箭头函数特性 将当前实例的this绑定给该函数
  ;

  var MarkdownCompiler = /*#__PURE__*/function () {
    function MarkdownCompiler() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        WYSIWYG: true,
        // 代码高亮函数
        highlight: function highlight(str, lang) {
          return str;
        }
      };

      _classCallCheck(this, MarkdownCompiler);

      // 实例化Parser&Render
      this.parserInstance = new Parser();
      this.renderInstance = new Render({
        WYSIWYG: options.WYSIWYG,
        highlight: options.highlight
      });
      this.markdown2Tokens = this.parserInstance.markdown2Tokens;
      this.tokens2Html = this.renderInstance.tokens2Html;
      this.parser = this.parserInstance.markdown2Tokens;
    } // 该函数应该同时支持处理字符串或者tokens


    _createClass(MarkdownCompiler, [{
      key: "render",
      value: function render(data) {
        if (typeof data === 'string') {
          return this.tokens2Html(this.markdown2Tokens(data));
        } else if (data instanceof Array) {
          return this.tokens2Html(data);
        } else {
          return false;
        }
      }
    }]);

    return MarkdownCompiler;
  }(); // window.MarkdownCompiler = MarkdownCompiler

  return MarkdownCompiler;

}));

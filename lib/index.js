'use strict';

const Parser = require("./parsers/Parser");
const Render = require("./render/Render");


class MarkdownCompiler {
    markdown2Tokens = Parser.markdown2Tokens
    tokens2Html = Render.tokens2Html
}
module.exports = MarkdownCompiler;

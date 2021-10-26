'use strict';

const Parser = require("./parsers/Parser");
const Render = require("./render/Render");


class MarkdownCompiler {
    constructor(){
        this.parser = new Parser()
        this.render = new Render()
        this.markdown2Tokens = this.parser.markdown2Tokens
        this.tokens2Html = this.render.tokens2Html
    }
}
module.exports = MarkdownCompiler;

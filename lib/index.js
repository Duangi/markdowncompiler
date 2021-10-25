'use strict';

const Parser = require("./parsers/Parser");


class MarkdownCompiler {
    constructor(){
        this.parser = this.getParser()
        this.markdown2Tokens = this.parser.markdown2Tokens
    }
    // 获取全局唯一的parser实例
    getParser(){
        let parser
        if(!this.parser){
            parser = new Parser()
        }
        return parser 
    }
    
}
module.exports = MarkdownCompiler;

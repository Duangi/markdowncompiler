'use strict';

const Parser = require("./parsers/Parser");
const Render = require("./render/Render");


class MarkdownCompiler {
    constructor(){
        // 实例化Parser&Render
        this.parserInstance = new Parser()
        this.renderInstance = new Render()

        this.markdown2Tokens = this.parserInstance.markdown2Tokens
        this.tokens2Html = this.renderInstance.tokens2Html
        this.parser = this.parserInstance.markdown2Tokens
        
    }
    // 该函数应该同时支持处理字符串或者tokens
    render(data){
        if(typeof(data) === 'string'){
            return this.tokens2Html(this.markdown2Tokens(data))
        }
        else if(data instanceof Array){
            return this.tokens2Html(data)
        }
        else{
            return false
        }
    }
}
module.exports = MarkdownCompiler;

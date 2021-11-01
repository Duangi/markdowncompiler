'use strict';

import Parser from './parsers/Parser.js'
import Render from './render/Render.js'

export default class MarkdownCompiler {
    constructor(
        options={
            WYSIWYG:true,
            // 代码高亮函数
            highlight:(str,lang)=>{
                return str
            }
        }
    ){
        // 实例化Parser&Render
        this.parserInstance = new Parser()
        this.renderInstance = new Render({WYSIWYG:options.WYSIWYG,highlight:options.highlight})

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
// window.MarkdownCompiler = MarkdownCompiler
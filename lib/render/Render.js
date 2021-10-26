
/**
 * 渲染器，负责将tokens转化成html标签
 */
 const { escapeHtml } = require("../common/utils")


module.exports =  class Render {
    constructor(){
        this.defaultRules = {
            fence:this.fence,
            heading_open:this.heading_open,
            heading_close:this.heading_close,
            paragraph_open:this.paragraph_open,
            paragraph_close:this.paragraph_close,
            inline:this.inline
        }
        this.rules = {
            fence:this.fence,
            heading_open:this.heading_open,
            heading_close:this.heading_close,
            paragraph_open:this.paragraph_open,
            paragraph_close:this.paragraph_close,
            inline:this.inline
        }
    }

    // 利用箭头函数特性 将当前实例的this绑定给该函数
    tokens2Html = (tokens)=> {
        let result = ''
        tokens.forEach((token) => {
            switch (token.type) {
                case 'fence':
                    result += this.rules.fence(token)
                    break;
                case 'heading_open':
                    result += this.rules.heading_open(token)
                    break;
                case 'heading_close':
                    result += this.rules.heading_close(token)
                    break;
                case 'paragraph_open':
                    result += this.rules.paragraph_open(token)
                    break;
                case 'paragraph_close':
                    result += this.rules.paragraph_close(token)
                    break;
                case 'inline':
                    result += this.rules.inline(token)
                default:
                    break;
            }
        });
        return result
    }

    fence(token){
        return '<pre><code>' +
        escapeHtml(token.content) +
        '</code></pre>\n'
    }
    heading_open(token){
        const headingType = token.tag
        return '<'+ headingType +'>'
    }
    heading_close(token){
        const headingType = token.tag
        return '</'+ headingType +'>'
    }
    paragraph_open(token){
        return '<p>'
    }
    paragraph_close(token){
        return '</p>'
    }
    inline(token){
        return token.content
    }
}
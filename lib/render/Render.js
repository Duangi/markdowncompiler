
/**
 * 渲染器，负责将tokens转化成html标签
 */
 import { escapeHtml } from "../common/utils.js"
import Fence from "../rules/rules_block/Fence.js"
import Heading from "../rules/rules_block/Heading.js"
import Paragraph from "../rules/rules_block/Paragraph.js"
import Inline from "../rules/rules_inline/Inline.js"


export default class Render {
    constructor(
        options={
            WYSIWYG:true,
            highlight
        }
    ){
        this.WYSIWYG = options.WYSIWYG
        this.defaultRules = {
            fence:Fence.token2Html,
            heading_open:Heading.token2Html_open,
            heading_close:Heading.token2Html_close,
            paragraph_open:Paragraph.token2Html_open,
            paragraph_close:Paragraph.token2Markdown_close,
            inline:Inline.token2Html
        }
        // 用户将会在这里修改规则，该类应该提供一个更新规则的方法 或者直接通过renderInstance修改渲染规则
        this.rules = this.defaultRules
    }
    
    // 利用箭头函数特性 将当前实例的this绑定给该函数
    tokens2Html = (tokens)=>{
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
}
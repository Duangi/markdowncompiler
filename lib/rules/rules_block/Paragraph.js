// import { escapeHtml } from "../../common/utils"

export default class Paragraph{
    static token2Markdown_open(token){
        return ''
    }
    static token2Markdown_close(token){
        return ''
    }
    static token2Html_open(token){
        return `<p>`
    }
    static token2Html_close(token){
        return `</p>`
    }
    static paragraph (state, startLine, endLine){
        // 所有规则都没有匹配成功时，默认匹配paragraph
        let token = state.push('paragraph_open','p',1)
    
        token = state.push('inline','text',0)
        token.content = state.getLinesContent(startLine)
    
        token = state.push('paragraph_close','p',-1)
        return startLine+1
    }
}
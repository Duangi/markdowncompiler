import { HEADING_REG } from "../../common/regs.js"

export default class Heading{
    static token2Markdown_open(token){
        let head = '######'
        head = head.substr(0,Number(token.tag.split('h')[1])) + ' '
        return head
    }
    static token2Markdown_close(token){
        return ''
    }
    static token2Html_open(token){
        return `<${token.tag}>`
    }
    static token2Html_close(token){
        return `</${token.tag}>`
    }
    static heading (state, startLine, endLine){
        let currentLineStr = state.getLinesContent(startLine)
        if(! HEADING_REG.test(currentLineStr)){
            return false
        }
        
        // 判断heading类型  h1-h6
        const headingType = 'h' + currentLineStr.split(' ')[0].length
        let token = state.push('heading_open',headingType, 1)
        token = state.push('inline','text',0)
        token.content = currentLineStr.split(' ')[1]
    
        token = state.push('heading_close',headingType,-1)
    
        return startLine + 1
    }
}
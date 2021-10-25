/**
 * markdown块规则
 */

const { FENCE_BEGIN_REG, FENCE_END_REG, HEADING_REG } = require("../common/regs")



// const isSpace = require ("../common/utils")
require ("../common/constant")

module.exports = class BlockRules {
    constructor(){
        this.rules = [fence,heading,paragraph]
    }
    getRules(){
        return this.rules
    }

}

function fence (state, startLine, endLine){
    // 只需要判断当前第一行是否为 ```xxx 代码块类似的格式即可
    // 如果第一行未通过正则检测，则直接返回false
    // 如果判断通过，则后面的每一行内容都加入代码块，直到遇到```为止 
    let currentLineStr = state.getLinesContent(startLine)
    if(! FENCE_BEGIN_REG.test(currentLineStr)){
        return false
    }

    let currentLine = startLine + 1
    // 代码块内容起始/结束
    
    for(currentLine = startLine + 1; currentLine<endLine; currentLine++){
        // 匹配到结束符
        if(FENCE_END_REG.test(state.getLinesContent(currentLine))){
            break
        }
    }
    // for循环结束 currentLine指向代码块结束标记符 即'```'
    content = state.getLinesContent(startLine+1,currentLine-1)
    token = state.push('fence','code',0)
    token.content = content

    // 标志parser下一步应该从哪一行开始处理
    let nextLine = currentLine+1
    return nextLine
}

function heading (state, startLine, endLine){
    let currentLineStr = state.getLinesContent(startLine)
    if(! HEADING_REG.test(currentLineStr)){
        return false
    }
    
    // 判断heading类型  h1-h6
    const headingType = 'h' + currentLineStr.split(' ')[0].length
    token = state.push('heading_open',headingType, 1)
    token = state.push('inline','text',0)
    token.content = currentLineStr.split(' ')[1]

    token = state.push('heading_close',headingType,-1)

    return startLine + 1
}

function paragraph (state, startLine, endLine){
    // 所有规则都没有匹配成功时，默认匹配paragraph
    token = state.push('paragraph_open','p',1)

    token = state.push('inline','text',0)
    token.content = state.getLinesContent(startLine)

    token = state.push('paragraph_close','p',-1)
    return startLine+1
}
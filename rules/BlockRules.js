/**
 * markdown块规则
 */

const { FENCE_BEGIN_REG, FENCE_END_REG } = require("../common/regs")



// const isSpace = require ("../common/utils")
require ("../common/constant")

module.exports = class BlockRules {
    constructor(){
        this.rules = [fence,paragraph]
    }
    getRules(){
        return this.rules
    }

}

function fence (state, startLine, endLine){
    // console.log('fence')
    // 只需要判断当前第一行是否为 ```xxx 代码块类似的格式即可
    // 如果第一行未通过正则检测，则直接返回false
    // 如果判断通过，则后面的每一行内容都加入代码块，直到遇到```为止 
    // let currentLineBegin = state.beginMarks[startLine]
    // let currentLineEnd = state.endMarks[startLine]
    let currentLineStr = state.getLinesContent(startLine)
    if(! FENCE_BEGIN_REG.test(currentLineStr)){
        console.log('not fence')
        return false
    }

    let currentLine = startLine + 1
    // 代码块内容起始/结束
    
    for(let i = currentLine; i<endLine; i++){
        // 匹配到结束符
        if(FENCE_END_REG.test(currentLineStr)){
            break
        }
    }
    content = state.getLinesContent(startLine+1,currentLine)
    token = state.push('fence','code',0)
    token.content = content

    console.log(state)
    // 标志parser下一步应该从哪一行开始处理
    let nextLine = currentLine+1
    return nextLine
}

function heading (state, startLine, endLine){
    console.log('heading')

}

function paragraph (state, startLine, endLine){
    console.log('paragraph')
    // 所有规则都没有匹配成功时，默认匹配paragraph
    token = state.push('paragraph_open','p',1)

    token = state.push('inline','',0)

    token = state.push('paragraph_close','p',-1)
    console.log('下一行',startLine+1)
    return startLine+1
}
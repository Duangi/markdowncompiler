import { FENCE_BEGIN_REG, FENCE_END_REG } from "../../common/regs.js"
import { escapeHtml } from "../../common/utils.js"

export default class Fence{
    static token2Markdown(token){
        return '```' + token.info + '\n' + token.content + '\n```'
    }
    static token2Html(token){
        return '<pre><code>' +
        escapeHtml(token.content) +
        '</code></pre>\n'
    }
    static fence (state, startLine, endLine){
        // 只需要判断当前第一行是否为 ```xxx 代码块类似的格式即可
        // 如果第一行未通过正则检测，则直接返回false
        // 如果判断通过，则后面的每一行内容都加入代码块，直到遇到```为止 
        let currentLineStr = state.getLinesContent(startLine)
        if(! FENCE_BEGIN_REG.test(currentLineStr)){
            return false
        }
    
        // 代码块内容起始
        let currentLine = startLine + 1
        // 代码类型
        let info = currentLineStr.split('```')[1]
        // 代码类型部分的起止点 在原字符串中的位置映射
        // 通过改变某个token中的内容，映射到原字符串中的内容，将原markdown字符串同步修改，顺便把html的内容也修改了？
        // string==(parser)==>tokens==(render)==>html
        // html==(oninput)==>tokens==(proxy)==>string
        // 实现关键：tokens渲染为html时需要带上index
        let codeTypeMap = [state.beginMarks[currentLine]+3, state.endMarks[currentLine]]
        
        for(currentLine = startLine + 1; currentLine<endLine; currentLine++){
            // 匹配到结束符
            if(FENCE_END_REG.test(state.getLinesContent(currentLine))){
                break
            }
        }
        // for循环结束 currentLine指向代码块结束标记符 即'```'
        const content = state.getLinesContent(startLine+1,currentLine-1)
        let token = state.push('fence','code',0)
        
        token.content = content
        token.info = info
    
        // 标志parser下一步应该从哪一行开始处理
        let nextLine = currentLine+1
        return nextLine
    }
}
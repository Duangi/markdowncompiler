const { isSpace } = require("../common/utils")
const Token = require("../token")


module.exports = class BlockState{
    constructor(src){
        this.src = src
        this.beginMarks = []
        this.endMarks = []
        this.offset = []
        this.lineMax = 0

        this.tokens = []
        // 没有嵌套时level为0,token的nesting为0, 嵌套时,level/nesting >0 表示是opening tag <0 表示close tag 
        this.level = 0
        // 定义
        this.tokensProxy = null
        this.initState()
    }
    initState(){
        let start // 当前行字符串开始位置
        let pos // 当前字符串遍历到的位置
        let offset // 首个非space字符的偏移量
        let len = this.src.length // markdown字符串长度
        let indentFound = false // 标记是否找到段首非空白字符
        
        
        let s = this.src
        let ch

        for(start = pos = offset = 0; pos<=len; pos++){
            ch = s.charCodeAt(pos)
            
            if(!indentFound){
                
                if( isSpace(ch)){
                    if (ch == CHAR_SPACE){
                        offset ++
                    }
                    else if(ch === CHAR_TAB){
                        offset += 4 - offset % 4
                    }
                    continue
                }else{
                    indentFound = true
                }
            }

            // 判断pos == len - 1 用于处理当前字符串最后一行没有换行的情况
            if (ch === CHAR_NEW_LINE || pos === len - 1){
                if(ch !== CHAR_NEW_LINE){
                    // 处于最后一个，让循环退出
                    pos ++
                }
                this.beginMarks.push(start)
                this.endMarks.push(pos)
                this.offset.push(offset)

                indentFound = false
                offset = 0
                start = pos + 1
            }

        }

        // this.beginMarks.push(s.length) ???
        // this.endMarks.push(s.length) ???
        this.lineMax = this.beginMarks.length
    }
    // 在state中添加token
    push = (type, tag, nesting)=>{
        let token = new Token(type,tag,nesting)
        
        if(nesting < 0) this.level--
        token.level = this.level
        if(nesting > 0) this.level++
        
        this.tokens.push(token)
        return token
    }
    // 通过代理增加token
    addTokenByProxy = (index,type,tag,nesting)=>{
        
    }
    // 通过代理删除token
    deleteTokenByProxy = (index)=>{

    }
    // 通过代理修改token
    changeTokenByProxy = (index,content)=>{

    }
    // 根据行号获取内容
    getLinesContent(begin,end=begin){
        const contentBegin = this.beginMarks[begin]
        const contentEnd = this.endMarks[end]

        const content = this.src.substr(contentBegin,contentEnd-contentBegin)
        return content
    }

}
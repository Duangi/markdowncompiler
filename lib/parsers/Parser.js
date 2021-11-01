// const BlockRules = require("../rules/BlockRules")
// const BlockState = require("../state/BlockState")
import BlockRules from "../rules/BlockRules.js"
import BlockState from "../state/BlockState.js"
/**
 * 分词处理（词法分析）
 * markdown字符串 -->  Tokens
 * 1.识别 markdown 文档的块结构;
 * 2.将段落，标题和其他块结构中的文本行，作为内联结构解析。
 */
export default class Parser {
    markdown2Tokens(str) {
        let blockState = new BlockState(str)
        let blockRules = new BlockRules().getRules()
        // 从每一行开始，遍历所有规则
        for(let i = 0;i<blockState.lineMax;){
            for(let j = 0;j<blockRules.length;j++){
                const nextLine = blockRules[j](blockState, i, blockState.lineMax)
                if(nextLine){
                    i=nextLine
                    break
                }
            }
        }
        // 在parser完成解析之后，给解析结果的state中的tokens添加proxy
        // 每当tokens改变，同时对string修改
        blockState.tokensProxy = new Proxy(blockState.tokens,{
            set: function (obj,prop,value) {
                console.log(token被修改)
                return Reflect.set(obj,prop,value)
            }
        })
        return blockState.tokens
    }
    addProxy2Tokens = ()=>{
        this.blockState.tokensProxy = new Proxy(this.blockState.tokens,{
            set: function (obj,prop,value) {
                console.log('tokens被修改')
                return Reflect.set(obj,prop,value)
            }
        })
    }
}
import Fence from "./rules_block/Fence.js"
import Heading from "./rules_block/Heading.js"
import Paragraph from "./rules_block/Paragraph.js"

/**
 * markdown块规则
 */

export default class BlockRules {
    constructor(){
        this.rules = [Fence.fence,Heading.heading,Paragraph.paragraph]
    }
    getRules(){
        return this.rules
    }
}
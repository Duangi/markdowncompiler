import { HTML_ESCAPE_TEST_RE, HTML_ESCAPE_REPLACE_RE } from "./regs.js";
import {CHAR_TAB,CHAR_SPACE} from './constant.js'
// require("./constant")
export function isSpace(code){
    switch (code) {
        case CHAR_TAB:  
        case CHAR_SPACE:
            return true
    }
    return false
}
var HTML_REPLACEMENTS = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
};
  
function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
}
export function escapeHtml(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }
    return str;
}
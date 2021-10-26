const { HTML_ESCAPE_TEST_RE, HTML_ESCAPE_REPLACE_RE } = require("./regs");

require("./constant")
function isSpace(code){
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
function escapeHtml(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }
    return str;
}
exports.isSpace = isSpace
exports.escapeHtml = escapeHtml
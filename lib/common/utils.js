require("./constant")
function isSpace(code){
    switch (code) {
        case CHAR_TAB:  
        case CHAR_SPACE:
            return true
    }
    return false
}
exports.isSpace = isSpace
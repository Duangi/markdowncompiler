/**
 * 存储正则
 */
exports.FENCE_BEGIN_REG = /^```[\s\S]*$/
exports.FENCE_END_REG = /^```$/
exports.HEADING_REG = /^#{1,6} .*$/
exports.HTML_ESCAPE_TEST_RE = /[&<>"]/;
exports.HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
/**
 * 存储正则
 */
export const FENCE_BEGIN_REG = /^```[\s\S]*$/
export const FENCE_END_REG = /^```$/
export const HEADING_REG = /^#{1,6} .*$/
export const HTML_ESCAPE_TEST_RE = /[&<>"]/;
export const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
const MarkdownCompiler = require("./lib");

const md = new MarkdownCompiler()
const tokens = md.markdown2Tokens('# 123\n')
// console.log(tokens)
const html = md.tokens2Html(tokens)
console.log(html)
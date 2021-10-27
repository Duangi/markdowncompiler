const MarkdownCompiler = require("./lib");

const md = new MarkdownCompiler()
// const tokens = md.parser('# 123\n')
// console.log(tokens)
const html = md.render('# 123\n')
console.log(html)
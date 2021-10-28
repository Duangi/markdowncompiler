// const MarkdownCompiler = require("./lib");
import MarkdownCompiler from './lib/index.js'

const md = new MarkdownCompiler()
const html = md.render('# 123\n')
console.log(html)
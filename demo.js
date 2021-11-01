import MarkdownCompiler from "./lib/index.js";

const mc = new MarkdownCompiler()
console.log(mc.render('# 123\n```python\nprint(123777)\n```\n'))
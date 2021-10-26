const MarkdownCompiler = require(".");

const md = new MarkdownCompiler()

let tokens = md.markdown2Tokens('# 123\n## 223\n```python\nprint(123)\n```')
console.log(tokens)
// console.log(md)

let html = md.tokens2Html(tokens)
// console.log(html)


// class A {
//     f(){
//         console.log(this)
//     }
// }
// const a = new A()
// const x = a.f
// x()
# markdowncompiler

> 将markdown解析成tokens,方便构建WYSIWYG的markdown编辑器

- [Install](#install)
- [Usage examples](#usage-examples)


## Install

**node.js**:

```bash
npm install markdowncompiler --save
```


## Usage examples

```javascript
import MarkdownCompiler from ('markdowncompiler')
const md = new MarkdownCompiler()
md.markdown2Tokens('# 123\n## 456\n```python\nprint(123)\n```')
```

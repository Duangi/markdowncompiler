const Parser = require('./parsers/BlockParser')

const parser = new Parser()
parser.markdown2Tokens('# 123\n## 456\n```python\nprint(123)\n```') 
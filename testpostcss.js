const postcss = require('postcss')

const css = `
ul ol{
  font-size : 20px;
}
p {
  color: #fff;
}
div {
  color: #f44;
  a{
    line-height: 1.5;
  }
}
`

let i = 0
const plugin = () => {
  return {
    postcssPlugin: 'abc',
    Rule(rule) {
      console.log(i++, rule.parent.type)
      const clone = rule.clone()
      if (clone.flag || rule.parent.type === 'rule') return
      clone.selector = 'body ' + clone.selector

      rule.replaceWith(clone)
      clone.flag = true
    },
    Declaration(decl) {
      // console.log(i++, decl.parent.parent.type)
      // const clone = decl.parent.clone()
      // if (clone.flag || decl.parent.parent.type === 'rule') return
      // clone.selector = 'body ' + clone.selector

      // decl.parent.replaceWith(clone)
      // clone.flag = true

    }
  }
}
plugin.postcss = true

postcss([plugin]).process(css).then(res => {
  console.log(res.toString())
})
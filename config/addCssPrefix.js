const postcss = require('postcss')

module.exports = postcss.plugin('postcss-add-global-container', function(opts = {}) {
  const {
    prefix = ''
  } = opts

  function plugin(css, result) {
    // if (a) return
    // console.log(result)
    // a = true
    if (!prefix) return;
    css.walkRules(rule => {
      const {
        selector
      } = rule
      if (rule.parent.type === 'root' && !(selector.startsWith(':root') || selector.startsWith('body') || selector.startsWith('html') || selector.includes(prefix)) && !rule.flag) {
        rule.flag = true
        const clone = rule.clone()
        clone.selector = `${prefix} ${selector}`
        rule.replaceWith(clone)
      }
    })
  }

  return plugin
})

// module.exports.postcss = true
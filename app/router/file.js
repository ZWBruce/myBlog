const Router = require('koa-router')
const fs = require('fs')
const path = require('path')

const fileBase = path.resolve(__dirname, '../upload')

const router = new Router({
  prefix: '/files'
});

router.get('/ls', (ctx) => {
  console.log(ctx.query, ctx.params)
  const list = fs.readdirSync(fileBase)
  const ls = list.map(t => {
    let filePath = path.join(fileBase, t)
    let type = 'file'
    if (fs.statSync(filePath).isDirectory()) {
      type = 'dir'
    }
    return {
      type,
      name: `/files/download?name=${t}`
    }
  })
  ctx.body = {
    list: ls
  }
})

router.get('/download', ctx => {
  const list = fs.readdirSync(fileBase)
  if (ctx.query.name) {
    console.log(list)
    for (let f of list) {
      if (f === ctx.query.name) {
        let filePath = path.join(fileBase, f)
        // ctx.body = fs.readFileSync(filePath)

        ctx.set('content-Type', 'application/octet-stream');
        ctx.set('content-Disposition', `attachment;filename=${f}`)
        // fs.createReadStream(filePath).pipe(ctx.body);
        ctx.body = fs.readFileSync(filePath)
        return
      }
    }
    ctx.body = '<h1>file not found</h1>'
  } else {
    ctx.body = '<h1>file not found</h1>'
  }

})

module.exports = router
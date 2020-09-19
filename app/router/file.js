const Router = require('koa-router')
const fs = require('fs')
const path = require('path')

const fileBase = path.resolve(__dirname, '../upload')

const router = new Router({
  prefix: '/files'
});

router.get('/ls', (ctx) => {
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

    for (let f of list) {
      if (f === ctx.query.name) {
        let filePath = path.join(fileBase, f)
        // ctx.body = fs.readFileSync(filePath)

        ctx.set('content-Type', 'application/octet-stream'); // 内容格式: 八进制文件流
        ctx.set('content-Disposition', `attachment;filename=${f}`) // 内容排列: 附件
        ctx.set("Cache-Control", "max-age=100000")
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
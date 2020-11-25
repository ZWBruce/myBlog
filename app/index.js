const Koa = require('koa')
const Router = require('koa-router');
const stat = require('koa-static');
const path = require('path')
const fs = require('fs')
const cors = require('koa2-cors');
const body = require('koa-body')
const process = require('shelljs')
const send = require('koa-send')
const got = require('got')

const {
  fileRouter,
  articleRouter,
  tagsRouter,
  articleTagRouter,
  categoryRouter
} = require('./router/index')

try {
  process.exec('mysql.server start')
} catch (e) {
  console.log(e)
}
const app = new Koa()

app.use(cors())

app.use(body({
  multipart: true, // 支持文件上传
  // encoding: 'gzip', // 会报跨域
  formidable: {
    uploadDir: path.join(__dirname, 'upload/'), // 设置文件上传目录
    keepExtensions: true, // 保持文件的后缀
    maxFieldsSize: 200 * 1024 * 1024, // 文件上传大小
    onFileBegin: (name, file) => { // 文件上传前的设置

      const fileName = file.name

      file.path = path.resolve(__dirname, 'upload/') + '/' + fileName
    },
  }
}));

const router = new Router();

router.get('/user', (ctx) => {
  ctx.body = 'user的首页' + __dirname;
});

// router.redirect('/', './index.html')
router.get('/', (ctx) => {
  ctx.set('Content-type', 'text/html')
  try {
    let p = path.resolve(__dirname, './static/index.html')
    let file = fs.readFileSync(p)
    ctx.body = file
  } catch {
    ctx.body = '<h1>404 Not Found</h1>'
  }

});

router.post('/upload', (ctx) => {
  // ctx.set('Access-Control-Allow-Origin', '*');
  const name = ctx.request.files.image.name
  ctx.body = {
    status: 200,
    data: '/files/download?name=' + name,
  }

})

router.get('/getimg', async (ctx) => {
  const {
    img
  } = ctx.query

  let data = await got(img, {
    responseType: 'buffer',
    // resolveBodyOnly: true
  })
  // let data = 'data:image/jpeg;base64,' + Buffer.from(body).toString('base64')
  let imgData = data.body.toString('base64')

  const type = data.headers['content-type']
  ctx.body = `<img src="data:${type};base64,${imgData}" />`
})

router.get('/update', (ctx) => {
  try {
    process.exec('sudo cd /usr/local/myBlog && git fetch --all && git reset --hard origin/master && npm run go')
    ctx.body = 'update success'
  } catch (e) {
    ctx.body = e
  }
})

router.post('/webhooks', (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  const basePath = '/usr/local/logs/webhooks.txt'
  if (!fs.existsSync(basePath)) {
    fs.writeFileSync(basePath, '')
  }
  let content = fs.readFileSync(basePath)
  let params = ctx.params,
    origin = ctx.origin

  fs.writeFileSync(basePath, content + '\r\n' + new Date().toString() + JSON.stringify(params) + JSON.stringify(origin))
})

// router.post('/articles')

// console.log(fileRouter)

router.redirect('/files', '/files/ls')
app.use(fileRouter.routes())

router.redirect('/tags', '/tags/list')
router.redirect('/tags/', '/tags/list')
app.use(tagsRouter.routes())

router.redirect('/articles', '/articles/list')
router.redirect('/articles/', '/articles/list')
app.use(articleRouter.routes())

app.use(articleTagRouter.routes())

app.use(categoryRouter.routes())

app.use(router.routes());

app.use(stat(path.resolve(__dirname, 'static')), {
  maxage: 100000
});

// console.log('this is index js')

app.listen(8090)

// console.log('env: ', process.env.NODE_ENV)
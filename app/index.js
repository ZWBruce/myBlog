const Koa = require('koa')
const Router = require('koa-router');
const stat = require('koa-static');
const path = require('path')
const fs = require('fs')
const cors = require('koa2-cors');
const body = require('koa-body')
const process = require('shelljs')
const {
  articles,
  tags
} = require('./sql')

const {
  fileRouter,
  articleRouter
} = require('./router/index')

process.exec('mysql.server start')

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
  console.log('body', ctx.request.body)
  // ctx.set('Access-Control-Allow-Origin', '*');
  const name = ctx.request.files.image.name
  ctx.body = {
    status: 200,
    data: '/files/download?name=' + name,
  }

})

router.get('/update', (ctx) => {
  try {
    process.exec('sudo cd /usr/local/myBlog && git fetch --all && git reset --hard origin/master && npm run go && pm2 restart all')
    ctx.body = 'update success'
  } catch (e) {
    ctx.body = e
  }
})

// router.post('/articles')

// console.log(fileRouter)

router.redirect('/files', '/files/ls')
app.use(fileRouter.routes())

router.redirect('/articles', '/articles/list')
app.use(articleRouter.routes())

app.use(router.routes());

app.use(stat(path.resolve(__dirname, 'static')));


// console.log('this is index js')

app.listen(8090)

// console.log('env: ', process.env.NODE_ENV)
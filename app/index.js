const Koa = require('koa')
const Router = require('koa-router');
const stat = require('koa-static');
const path = require('path')
const fs = require('fs')
const cors = require('koa2-cors');
const body = require('koa-body')

const app = new Koa()

app.use(cors())

app.use(body({
  multipart: true, // 支持文件上传
  // encoding: 'gzip', // 会报跨域
  formidable: {
    uploadDir: path.join(__dirname, 'upload/'), // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
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

router.redirect('/', './index.html')
// router.get('/', (ctx) => {
//   ctx.body = '<h1>Hello World!</h1>'
// });

router.post('/upload', (ctx) => {
  console.log('body', ctx.request.body)
  // ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = {
    status: 200,
    data: ctx.request.body,
    file: ctx.request.files,
  }

})

router.get('/files', (ctx) => {
  const pth = path.resolve(__dirname, './upload')
  const list = fs.readdirSync(pth)
  const ls = list.map(t => {
    let filePath = path.join(pth, t)
    let type = 'file'
    if (fs.statSync(filePath).isDirectory()) {
      type = 'dir'
    }
    return {
      type,
      name: t
    }
  })
  ctx.body = {
    list: ls
  }
})

app.use(router.routes());

app.use(stat(path.resolve(__dirname, 'static')));

// console.log('this is index js')

app.listen(8090)

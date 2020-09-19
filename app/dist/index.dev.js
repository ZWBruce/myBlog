var Koa = require('koa');

var Router = require('koa-router');

var stat = require('koa-static');

var path = require('path');

var fs = require('fs');

var cors = require('koa2-cors');

var body = require('koa-body');

var process = require('shelljs');

var _require = require('./sql'),
  articles = _require.articles,
  tags = _require.tags;

var _require2 = require('./router/index'),
  fileRouter = _require2.fileRouter,
  articleRouter = _require2.articleRouter; // process.exec('mysql.server start')


var app = new Koa();
app.use(cors());
app.use(body({
  multipart: true,
  // 支持文件上传
  // encoding: 'gzip', // 会报跨域
  formidable: {
    uploadDir: path.join(__dirname, 'upload/'),
    // 设置文件上传目录
    keepExtensions: true,
    // 保持文件的后缀
    maxFieldsSize: 200 * 1024 * 1024,
    // 文件上传大小
    onFileBegin: function onFileBegin(name, file) {
      // 文件上传前的设置
      var fileName = file.name;
      file.path = path.resolve(__dirname, 'upload/') + '/' + fileName;
    }
  }
}));
var router = new Router();
router.get('/user', function(ctx) {
  ctx.body = 'user的首页' + __dirname;
}); // router.redirect('/', './index.html')

router.get('/', function(ctx) {
  ctx.set('Content-type', 'text/html');

  try {
    var p = path.resolve(__dirname, './static/index.html');
    var file = fs.readFileSync(p);
    ctx.body = file;
  } catch (_unused) {
    ctx.body = '<h1>404 Not Found</h1>';
  }
});
router.post('/upload', function(ctx) {
  // ctx.set('Access-Control-Allow-Origin', '*');

  var name = ctx.request.files.image.name;
  ctx.body = {
    status: 200,
    data: '/files/download?name=' + name
  };
});
router.get('/update', function(ctx) {
  try {
    process.exec('sudo cd /usr/local/myBlog && git fetch --all && git reset --hard origin/master && npm run go && pm2 restart all');
    ctx.body = 'update success';
  } catch (e) {
    ctx.body = e;
  }
}); // router.post('/articles')
// console.log(fileRouter)

router.redirect('/files', '/files/ls');
app.use(fileRouter.routes());
router.redirect('/articles', '/articles/list');
app.use(articleRouter.routes());
app.use(router.routes());
app.use(stat(path.resolve(__dirname, 'static'))); // console.log('this is index js')

app.listen(8090); // console.log('env: ', process.env.NODE_ENV)
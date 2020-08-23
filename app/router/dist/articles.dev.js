"use strict";

var Router = require('koa-router');

var _require = require('../sql'),
    articles = _require.articles;

var cors = require('koa2-cors');

var router = new Router({
  prefix: '/articles'
});
router.use(cors());
router.post('/send', function _callee(ctx) {
  var _ctx$request$body, title, content, time, res;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx.set('Access-Control-Allow-Origin', '*');
          console.log(ctx.request.body);
          _ctx$request$body = ctx.request.body, title = _ctx$request$body.title, content = _ctx$request$body.content;
          _context.prev = 3;
          time = +new Date();
          _context.next = 7;
          return regeneratorRuntime.awrap(articles.create({
            title: title,
            content: content,
            time: time
          }));

        case 7:
          res = _context.sent;
          ctx.body = res;
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](3);
          ctx.body = _context.t0;

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 11]]);
});
router.get('/list', function _callee2(ctx) {
  var list;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(articles.findAll({
            limit: 20
          }));

        case 2:
          list = _context2.sent;
          ctx.body = {
            list: list
          };

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;
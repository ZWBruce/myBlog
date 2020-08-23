"use strict";

var Router = require('koa-router');

var fs = require('fs');

var path = require('path');

var fileBase = path.resolve(__dirname, '../upload');
var list = fs.readdirSync(fileBase);
var router = new Router({
  prefix: '/files'
});
router.get('/ls', function (ctx) {
  console.log(ctx.query, ctx.params);
  var ls = list.map(function (t) {
    var filePath = path.join(fileBase, t);
    var type = 'file';

    if (fs.statSync(filePath).isDirectory()) {
      type = 'dir';
    }

    return {
      type: type,
      name: t
    };
  });
  ctx.body = {
    list: ls
  };
});
router.get('/download', function (ctx) {
  if (ctx.query.name) {
    console.log(list);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var f = _step.value;

        if (f === ctx.query.name) {
          var filePath = path.join(fileBase, f); // ctx.body = fs.readFileSync(filePath)

          ctx.set('content-Type', 'application/octet-stream');
          ctx.set('content-Disposition', "attachment;filename=".concat(f)); // fs.createReadStream(filePath).pipe(ctx.body);

          ctx.body = fs.readFileSync(filePath);
          return;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    ctx.body = '<h1>file not found</h1>';
  } else {
    ctx.body = '<h1>file not found</h1>';
  }
});
module.exports = router;
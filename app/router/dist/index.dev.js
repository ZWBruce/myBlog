"use strict";

var fileRouter = require('./file');

var articleRouter = require('./articles');

module.exports = {
  fileRouter: fileRouter,
  articleRouter: articleRouter
};
"use strict";

var tags = require('./tag.js');

var articles = require('./articles.js');

console.log('articles1: ', articles, articles.create); // articles.hasMany({
//   foreignKey: 'tag_id',
//   sourceKey: 'id',
//   constraints: false,
// })

module.exports = {
  tags: tags,
  articles: articles
};
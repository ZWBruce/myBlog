const tags = require('./tag.js')
const articles = require('./articles.js')

articles.hasOne(tags, {
  foreignKey: 'id',
  sourceKey: 'tag_id',
  constraints: false,
})

// tags.belongsTo(articles, {
//   foreignKey: 'tag_id',
//   targetKey: 'id',
//   constraints: false,
// })

articles.sync()
tags.sync()

module.exports = {
  tags,
  articles
}
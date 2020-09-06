const tags = require('./tag.js')
const articles = require('./articles.js')
const articles2tag = require('./articles2tag')
const category = require('./category')

articles.hasOne(category, {
  foreignKey: 'id',
  sourceKey: 'tag_id',
  constraints: false,
})

// self.sourceKey = out.foreignKey
articles.belongsToMany(tags, {
  through: {
    model: articles2tag,
    unique: false
  },
  foreignKey: 'article_id',
  constraints: false,
})

tags.belongsToMany(articles, {
  through: {
    model: articles2tag,
    unique: false
  },
  foreignKey: 'tag_id',
  constraints: false,
})


module.exports = {
  tags,
  articles,
  articles2tag,
  category
}
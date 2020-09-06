const fileRouter = require('./file')
const articleRouter = require('./articles')
const tagsRouter = require('./tags')
const articleTagRouter = require('./article2tag')
const categoryRouter = require('./category')

module.exports = {
  fileRouter,
  articleRouter,
  tagsRouter,
  articleTagRouter,
  categoryRouter
}
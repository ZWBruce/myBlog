const Router = require('koa-router')
const {
  tags,
  articles,
  category
} = require('../sql')
const cors = require('koa2-cors');

const router = new Router({
  prefix: '/tags'
})

router.use(cors())

router.get('/list', async (ctx) => {
  const list = await tags.findAll({
    include: [{
      model: articles,
      attributes: ['id']
    }],

  })
  let count = await tags.count()

  ctx.body = {
    list,
    count
  }
})

router.post('/add', async (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  console.log(ctx.request.body)
  const {
    name
  } = ctx.request.body
  try {
    let res = await tags.create({
      tag_name: name
    })
    ctx.body = res
  } catch (e) {
    ctx.body = e
  }

})

/**
 * 获取某tag对应的所有文章
 */
router.get('/articles/:id', async (ctx) => {
  let {
    page
  } = ctx.request.query
  page = page || 1
  page = page <= 1 ? 1 : page
  let id = ctx.request.params.id
  const list = await tags.findAll({
    include: [{
      model: articles,
      attributes: ['id']
    }],
    where: {
      id
    }
  })

  let list1 = [],
    ids = []
  if (list[0]) {
    ids = list[0].dataValues.articles.map(t => t.id)
    list1 = await articles.findAll({
      limit: 10,
      offset: 10 * (page - 1),
      where: {
        id: ids
      },
      include: [{
        model: tags,
        attributes: ['tag_name', 'id'],
      }, {
        model: category,
        attributes: ['category_name', 'id']
      }]
    })
  }
  ctx.body = {
    list: list1,
    ids,
    count: ids.length
  }
})

module.exports = router
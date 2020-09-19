const Router = require('koa-router')
const {
  category,
  articles,
  tags
} = require('../sql')
const cors = require('koa2-cors');

const router = new Router({
  prefix: '/category'
})

router.use(cors())

router.get('/list', async (ctx) => {
  let count = await category.count()
  let list = await category.findAll({})
  ctx.body = {
    list,
    count
  }
})

router.get('/count', async (ctx) => {
  let count = await category.count()
  let list = await category.findAll()
  for (let e of list) {
    e.dataValues.count = await articles.count({
      where: {
        tag_id: e.id
      }
    })
  }
  ctx.body = {
    list,
    count
  }
})

router.post('/add', async (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*')

  const {
    name
  } = ctx.request.body
  try {
    let res = await category.create({
      category_name: name
    })
    ctx.body = res
  } catch (e) {
    ctx.body = e
  }

})

router.get('/articles/:id', async (ctx) => {
  let {
    page
  } = ctx.request.query
  page = page || 1
  page = page <= 1 ? 1 : page
  let id = ctx.request.params.id
  id = id < 1 ? 1 : id
  let count = await articles.count({
    where: {
      tag_id: id
    },
  })
  const list = await articles.findAll({
    limit: 10,
    offset: 10 * (page - 1),
    where: {
      tag_id: id
    },
    include: [{
      model: tags,
      attributes: ['tag_name', 'id'],
    }, {
      model: category,
      attributes: ['category_name', 'id']
    }]
  })
  ctx.body = {
    list,
    count
  }

})
module.exports = router
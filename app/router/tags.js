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

router.get('/articles/:id', async (ctx) => {
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

  let ids = list[0].dataValues.articles.map(t => t.id)
  const list1 = await articles.findAll({
    where: {
      id: ids
    },
    include: [{
      model: tags,
      attributes: ['tag_name'],
    }, {
      model: category,
      attributes: ['category_name']
    }]
  })

  ctx.body = {
    list: list1,
    ids
  }
})

module.exports = router
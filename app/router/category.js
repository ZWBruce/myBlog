const Router = require('koa-router')
const {
  category,
  articles
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
  console.log(ctx.request.body)
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

module.exports = router
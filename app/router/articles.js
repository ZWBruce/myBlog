const Router = require('koa-router')
const {
  articles,
  tags
} = require('../sql')
const cors = require('koa2-cors');

const router = new Router({
  prefix: '/articles'
})

router.use(cors())

router.post('/send', async (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  console.log(ctx.request.body)
  const {
    title,
    content
  } = ctx.request.body
  try {
    const time = +new Date()
    let res = await articles.create({
      title,
      content,
      time
    })
    ctx.body = res
  } catch (e) {
    ctx.body = e
  }

})

router.get('/list', async (ctx) => {
  let {
    page
  } = ctx.request.query
  page = page || 1
  page = page <= 1 ? 1 : page
  let count = await articles.count()
  let list = await articles.findAll({
    limit: 20,
    offset: 20 * (page - 1),
    include: [{
      model: tags,
      attributes: ['tag_name'],
    }]
  })
  ctx.body = {
    list,
    count
  }
})

module.exports = router
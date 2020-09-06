const Router = require('koa-router')
const {
  articles2tag
} = require('../sql')
const cors = require('koa2-cors');

const router = new Router({
  prefix: '/article_tag'
})

router.use(cors())

router.post('/send', async (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  console.log(ctx.request.body)
  const {
    article_id,
    tag_id
  } = ctx.request.body
  try {
    let res = await articles2tag.create({
      article_id,
      tag_id
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
  let count = await articles2tag.count()
  let list = await articles2tag.findAll({
    limit: 20,
    offset: 20 * (page - 1)
  })
  ctx.body = {
    list,
    count
  }
})

module.exports = router
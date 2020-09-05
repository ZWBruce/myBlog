const Router = require('koa-router')
const {
  tags
} = require('../sql')
const cors = require('koa2-cors');

const router = new Router({
  prefix: '/tags'
})

router.use(cors())

router.get('/list', async (ctx) => {
  const list = await tags.findAll()
  let count = await tags.count()

  ctx.body = {
    list,
    count
  }
})

module.exports = router
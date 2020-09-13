const Router = require('koa-router')
const {
  articles,
  tags,
  articles2tag,
  category
} = require('../sql')
const cors = require('koa2-cors');

const router = new Router({
  prefix: '/articles'
})

router.use(cors())

router.post('/send', async (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  const {
    title,
    content,
    img,
    tag_id,
    category
  } = ctx.request.body
  try {
    const time = +new Date()
    let res = await articles.create({
      title,
      content,
      img,
      time,
      tag_id: category // 此处应该为category_id 懒得改了
    })
    if (tag_id) {
      let ids = tag_id.split(',')
      for (let e of ids) {
        await articles2tag.create({
          article_id: res.id,
          tag_id: e
        })
      }
    }
    ctx.body = res
  } catch (e) {
    ctx.body = e
  }

})

router.post('/update/:id', async (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  let {
    id
  } = ctx.request.params
  const {
    title,
    content,
    img,
    tag_id,
    category
  } = ctx.request.body
  try {
    const time = +new Date()
    let res = await articles.update({
      title,
      content,
      img,
      time,
      tag_id: category // 此处应该为category_id 懒得改了
    }, {
      where: {
        id
      }
    })
    if (tag_id) {
      await articles2tag.destroy({
        where: {
          article_id: id
        }
      })
      let ids = tag_id.split(',')
      for (let e of ids) {
        await articles2tag.create({
          article_id: id,
          tag_id: e
        })
      }
    }
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
    limit: 10,
    offset: 10 * (page - 1),
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

router.get('/:id', async (ctx) => {
  let {
    id
  } = ctx.request.params

  let res = await articles.findOne({
    where: {
      id
    },
    include: [{
      model: tags,
      attributes: ['tag_name', 'id'],
    }, {
      model: category,
      attributes: ['category_name', 'id']
    }]
  })

  ctx.body = res
})

router.get('/delete/:id', async (ctx) => {
  let {
    id
  } = ctx.request.params
  let res = await articles.destroy({
    where: {
      id
    },
  })
  let res1 = await articles2tag.destroy({
    where: {
      article_id: id
    }
  })

  ctx.body = {
    code: res,
    msg: 'ok'
  }
})

module.exports = router
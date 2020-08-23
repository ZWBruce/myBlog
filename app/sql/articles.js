const seq = require('./db')
const { INTEGER, STRING, TEXT } = require('sequelize')
const { stringify } = require('querystring')

const articles = seq.define('articles', {
  id: {
    type: INTEGER,
    primaryKey: true,       //主键
    autoIncrement: true,    //自增
  },
  title: {
    type: STRING,
    allowNull: false
  },
  content: {
    type: TEXT,
    allowNull: false
  },
  img: {
    type: STRING,
    allowNull: true
  },
  time: {
    type: STRING,
    allowNull: false
  },
  tag_id: {
    type: INTEGER,
    // allowNull: false
    defaultValue: 0
  }

}, {
  freezeTableName: true,
  timestamps: false
})

articles.sync()
console.log('articles0: ', articles.create)
// sequelize.
module.exports = articles
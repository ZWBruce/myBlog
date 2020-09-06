const seq = require('./db')
const {
  INTEGER,
  STRING,
  TEXT
} = require('sequelize')

const articles = seq.define('articles', {
  id: {
    type: INTEGER,
    primaryKey: true, //主键
    autoIncrement: true, //自增
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
  // 此处应该为category_id 懒得改了
  tag_id: {
    type: INTEGER,
    allowNull: true
    // defaultValue: 1
  }

}, {
  freezeTableName: true,
  timestamps: false
})

articles.sync()
// sequelize.
module.exports = articles
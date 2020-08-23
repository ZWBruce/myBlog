const seq = require('./db')
const { INTEGER, STRING } = require('sequelize')

const tags = seq.define('tags', {
  id: {
    type: INTEGER,
    primaryKey: true,       //主键
    autoIncrement: true,    //自增
  },
  tag_name: {
    type: STRING,
    allowNull: false
  }

}, {
  freezeTableName: true,
  timestamps: false
})

tags.sync()
// sequelize.
module.exports = tags
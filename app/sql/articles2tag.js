const seq = require('./db')
const {
  INTEGER
} = require('sequelize')

const artciles2tag = seq.define('articletag', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  article_id: {
    type: INTEGER,
    allowNull: false
  },
  tag_id: {
    type: INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
})

artciles2tag.sync()

module.exports = artciles2tag
const seq = require('./db')
const {
  INTEGER,
  STRING,
} = require('sequelize')

const category = seq.define('category', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category_name: {
    type: STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
})

category.sync()

module.exports = category
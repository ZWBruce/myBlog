const Sequelize = require('sequelize');
const process = require('shelljs')

// process.exec('create database if not exists myblog')

const host = process.env && process.env.NODE_ENV === 'development' ? 'localhost' : 'http://39.96.31.138'

const seq = new Sequelize('myblog', 'root', 'root', {
  host,
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  }
})

module.exports = seq;
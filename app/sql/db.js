const Sequelize = require('sequelize');
const process = require('shelljs')

// process.exec('create database if not exists myblog')

let host = '39.96.31.138'
let pwd = 'wzx123'

if (false && process.env.NODE_ENV === 'development') {
  host = 'localhost'
  pwd = 'root'
}

const seq = new Sequelize('myblog', 'root', pwd, {
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
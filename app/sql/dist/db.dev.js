"use strict";

var Sequelize = require('sequelize');

var process = require('shelljs'); // process.exec('create database if not exists myblog')


var host = '39.96.31.138';
var pwd = 'wzx123';

if (process.env.NODE_ENV === 'development') {
  host = 'localhost';
  pwd = 'root';
}

var seq = new Sequelize('myblog', 'root', pwd, {
  host: host,
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  }
});
module.exports = seq;
"use strict";

var Sequelize = require('sequelize');

var process = require('shelljs'); // process.exec('create database if not exists myblog')


var host = process.env && process.env.NODE_ENV === 'development' ? 'localhost' : 'http://39.96.31.138';
var seq = new Sequelize('myblog', 'root', 'root', {
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
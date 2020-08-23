"use strict";

var seq = require('./db');

var _require = require('sequelize'),
    INTEGER = _require.INTEGER,
    STRING = _require.STRING;

var tags = seq.define('tags', {
  id: {
    type: INTEGER,
    primaryKey: true,
    //主键
    autoIncrement: true //自增

  },
  tag_name: {
    type: STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});
tags.sync(); // sequelize.

module.exports = tags;
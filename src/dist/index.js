"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var serviceWorker = require("./serviceWorker");
var context_1 = require("./context");
var host = process.env.NODE_ENV === 'development' ? 'http://localhost:8090' : 'http://39.96.31.138';
var globalData = {
    host: host
};
react_dom_1["default"].render(react_1["default"].createElement(context_1.context.Provider, { value: globalData },
    react_1["default"].createElement(App_1["default"], null)), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Main_1 = require("./components/main/Main");
var Head_1 = require("./components/Head/Head");
var index_1 = require("./components/category/index");
var index_2 = require("./components/tags/index");
var Write_1 = require("./components/write/Write");
var react_router_dom_1 = require("react-router-dom");
require("./App.less");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.HashRouter, null,
        react_1["default"].createElement(Head_1["default"], null, "zw"),
        react_1["default"].createElement("div", { className: 'app' },
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/index', component: Main_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/catagory', component: index_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/tags', component: index_2["default"] }),
            react_1["default"].createElement(react_router_dom_1.Redirect, { exact: true, from: '/', to: '/index' }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/write', component: Write_1["default"] }))));
}
exports["default"] = App;

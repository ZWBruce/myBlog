"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Head.less");
function default_1(props) {
    var links = [{
            text: '主页',
            url: '/index'
        },
        {
            text: '淘宝',
            url: '/catagory'
        },
        {
            text: '字节跳动',
            url: '/tags'
        }
    ];
    if (process.env.NODE_ENV === 'development') {
        links.push({
            text: '写文章',
            url: '/write'
        });
    }
    return react_1["default"].createElement("nav", { className: "app-header" },
        react_1["default"].createElement("div", { className: "app app-inner-header" },
            react_1["default"].Children.map(props.children, function (child) {
                return react_1["default"].createElement("div", null, child);
            }),
            react_1["default"].createElement("div", { className: "links" }, links.map(function (_a, ind) {
                var url = _a.url, text = _a.text;
                return react_1["default"].createElement(react_router_dom_1.NavLink, { to: url, key: ind, activeClassName: "active" }, text);
            }))));
}
exports["default"] = default_1;

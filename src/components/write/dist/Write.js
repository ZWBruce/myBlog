"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var axios_1 = require("axios");
require("./Write.less");
var react_markdown_1 = require("react-markdown");
var TextArea = antd_1.Input.TextArea;
var initalSate = { title: '', content: '' };
function reducer(state, action) {
    switch (action.type) {
        case 'changeTitle':
            return __assign(__assign({}, state), { title: action.val });
        case 'changeContent':
            return __assign(__assign({}, state), { content: action.val });
        default:
            return state;
    }
}
function default_1() {
    var _a = react_1.useReducer(reducer, initalSate), state = _a[0], dispatch = _a[1];
    // const data = useContext(context)
    function change(e, type) {
        if (type === void 0) { type = 'changeTitle'; }
        console.log(e.target.value);
        dispatch({
            type: type,
            val: e.target.value
        });
    }
    function upload() {
        if (!state.title || !state.title) {
            return;
        }
        var url = 'http://localhost:8090/articles/send';
        var fd = new FormData();
        fd.append('title', state.title);
        fd.append('content', state.content);
        axios_1["default"]({
            url: url,
            method: 'post',
            data: fd
        }).then(function (res) {
            console.log(res);
        });
    }
    return react_1["default"].createElement("div", { className: "write-wrap" },
        react_1["default"].createElement("div", { className: "flex" },
            react_1["default"].createElement(antd_1.Input, { value: state.title, onChange: function (e) { return change(e); }, placeholder: '\u6587\u7AE0\u6807\u9898' }),
            react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: upload }, "\u4E0A\u4F20\u6587\u7AE0")),
        react_1["default"].createElement("div", { className: "flex content" },
            react_1["default"].createElement("div", { className: "inner-content" },
                react_1["default"].createElement(TextArea, { value: state.content, onChange: function (e) { return change(e, 'changeContent'); }, placeholder: '\u6587\u7AE0\u5185\u5BB9' })),
            react_1["default"].createElement("div", { className: "inner-content" },
                react_1["default"].createElement(react_markdown_1["default"], { source: state.content }))));
}
exports["default"] = default_1;

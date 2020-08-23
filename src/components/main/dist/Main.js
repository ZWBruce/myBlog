"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var axios_1 = require("axios");
var context_1 = require("../../context");
require("./Main.less");
var initalSate = { count: 0 };
function reducer(state, action) {
    var count = state.count;
    switch (action.type) {
        case 'add':
            return { count: count + 1 };
        case 'desc':
            return { count: count - 1 };
        default:
            return state;
    }
}
function default_1() {
    var cb = react_1.useCallback(function () {
        console.log('use callback');
    }, []);
    var val = react_1.useMemo(function () {
        console.log('in use memo');
        return '三只松鼠';
    }, []);
    console.log({ val: val, cb: cb });
    var data = react_1.useContext(context_1.context);
    var imgRef = react_1.useRef(null);
    var _a = react_1.useReducer(reducer, initalSate), state = _a[0], dispatch1 = _a[1];
    react_1.useEffect(function () {
        axios_1["default"]({
            url: data.host + "/articles/list",
            method: 'get'
        }).then(function (res) {
            console.log(res);
        });
    }, [data.host]);
    function upload() {
        var imgDom = imgRef.current;
        var images = imgDom.files;
        var fd = new FormData();
        fd.append('image', images[0]);
        fd.append('msg', 'abcd');
        axios_1["default"]({
            url: data.host + "/upload",
            method: 'post',
            data: fd
        }).then(function (res) {
            console.log(res);
        });
    }
    // function upload() {
    // }
    return react_1["default"].createElement("div", { onClick: cb, className: "main-wrapp" },
        val,
        "main comp ",
        state.count,
        react_1["default"].createElement("input", { type: "file", ref: imgRef }),
        react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: upload }, "add"));
}
exports["default"] = default_1;

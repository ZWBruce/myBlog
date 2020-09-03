"use strict";
exports.__esModule = true;
var react_1 = require("react");
// @ts-ignore
var context_1 = require("@/context");
require("./index.less");
function default_1() {
    var data = react_1.useContext(context_1.context);
    return react_1["default"].createElement("div", { className: "card-content" },
        react_1["default"].createElement("img", { src: data.host + "/files/download?name=1.jpg", alt: "" }));
}
exports["default"] = default_1;

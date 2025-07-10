"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Books_1 = require("./Books");
var page = function () {
    return (react_1["default"].createElement("div", { className: "flex" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement(Books_1["default"], null))));
};
exports["default"] = page;

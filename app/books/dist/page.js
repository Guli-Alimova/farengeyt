"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Books_1 = require("./Books");
var SearchBook_1 = require("./SearchBook");
var page = function () {
    return (react_1["default"].createElement("div", { className: "flex" },
        react_1["default"].createElement("div", { className: "w-1/4" },
            react_1["default"].createElement(SearchBook_1["default"], null)),
        react_1["default"].createElement("div", { className: "w-3/4" },
            react_1["default"].createElement(Books_1["default"], null))));
};
exports["default"] = page;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BlogIntro_1 = require("@/app/blog/BlogIntro");
var BlogContent_1 = require("@/app/blog/BlogContent");
var page = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(BlogIntro_1["default"], null),
        react_1["default"].createElement(BlogContent_1["default"], null)));
};
exports["default"] = page;

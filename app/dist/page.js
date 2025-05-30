"use strict";
exports.__esModule = true;
var ExploreBooks_1 = require("@/components/ExploreBook/ExploreBooks");
var FeaturedBooks_1 = require("@/components/FeaturedBook/FeaturedBooks");
var Intro_1 = require("@/components/Intro/Intro");
var Blog_1 = require("../components/Blog/Blog");
var PodCast_1 = require("@/components/PodCast/PodCast");
var react_1 = require("react");
var page = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Intro_1["default"], null),
        react_1["default"].createElement(FeaturedBooks_1["default"], null),
        react_1["default"].createElement(ExploreBooks_1["default"], null),
        react_1["default"].createElement(Blog_1["default"], null),
        react_1["default"].createElement(PodCast_1["default"], null)));
};
exports["default"] = page;

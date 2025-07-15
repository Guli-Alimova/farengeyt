"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Created_1 = require("@/components/Created/Created");
var AboutUS_1 = require("@/app/about/AboutUS");
var AboutIntro_1 = require("@/app/about/AboutIntro");
var AboutUs = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(AboutIntro_1["default"], null),
        react_1["default"].createElement(AboutUS_1["default"], null),
        react_1["default"].createElement(Created_1["default"], null)));
};
exports["default"] = AboutUs;

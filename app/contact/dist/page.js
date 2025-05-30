"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ContactIntro_1 = require("./ContactIntro");
var ContactMain_1 = require("./ContactMain");
var page = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(ContactIntro_1["default"], null),
        react_1["default"].createElement(ContactMain_1["default"], null)));
};
exports["default"] = page;

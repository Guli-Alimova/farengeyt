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
var BlogCard_1 = require("./BlogCard");
var blogs = [
    {
        title: 'Montes Suspendisse Massa Curae Malesuada',
        date: 'Feb 10, 2024',
        author: 'Admin',
        image: '/images/09.jpg'
    },
    {
        title: 'Playful Picks Paradise: Kids’ Essentials With Dash.',
        date: 'Mar 20, 2024',
        author: 'Admin',
        image: '/images/10.jpg'
    },
    {
        title: 'Tiny Emporium: Playful Picks For Kids’ Delightful Days.',
        date: 'Jun 14, 2024',
        author: 'Admin',
        image: '/images/11.jpg'
    },
];
function LatestBlog() {
    return (react_1["default"].createElement("section", { className: "bg-blue-100 py-14 px-4 text-center" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("h2", { className: "text-3xl font-bold text-primary" }, "Our Latest Blog"),
            react_1["default"].createElement("p", { className: "text-gray-600 mt-2" }, "Interdum et malesuada fames ac ante ipsum primis in faucibus."),
            react_1["default"].createElement("p", { className: "text-silver mb-10" }, "Donec at nulla nulla. Duis posuere ex lacus"),
            react_1["default"].createElement("div", { className: "flex  justify-between gap-3" }, blogs.map(function (blog, index) { return (react_1["default"].createElement(BlogCard_1["default"], __assign({ key: index }, blog))); })))));
}
exports["default"] = LatestBlog;

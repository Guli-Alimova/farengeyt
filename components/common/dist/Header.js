"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var navLinks = [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/about', label: 'Biz haqimizda' },
    { href: '/books', label: 'Kitoblar' },
    { href: '/podcast', label: 'Podkastlar' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Aloqa' },
];
var Header = function () {
    return (react_1["default"].createElement("header", { className: "sticky top-0 z-50 bg-white shadow-md" },
        react_1["default"].createElement("div", { className: "container mx-auto px-4" },
            react_1["default"].createElement("div", { className: "flex  items-center justify-between py-4" },
                react_1["default"].createElement("div", { className: "w-[86px] max-w-full" },
                    react_1["default"].createElement(link_1["default"], { href: "/" },
                        react_1["default"].createElement("img", { src: "/images/Farengeyt_Press_LOGO_small.png", alt: "farengeyt", className: "h-auto w-full" }))),
                react_1["default"].createElement("nav", { className: "w-full lg:w-auto mt-4 lg:mt-0" },
                    react_1["default"].createElement("ul", { className: "flex  justify-between items-center lg:justify-end gap-6 text-lg font-medium text-primary font-inter" }, navLinks.map(function (link) { return (react_1["default"].createElement("li", { key: link.href },
                        react_1["default"].createElement(link_1["default"], { href: link.href, className: "transition-colors duration-300 hover:text-blue-600" }, link.label))); })))))));
};
exports["default"] = Header;

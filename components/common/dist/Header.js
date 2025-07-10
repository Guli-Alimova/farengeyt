'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var Burger_1 = require("../../components/Burger");
var svg_1 = require("../../public/svg");
var navLinks = [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/about', label: 'Biz haqimizda' },
    { href: '/books', label: 'Kitoblar' },
    { href: '/podcast', label: 'Podkastlar' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Aloqa' },
];
var Header = function () {
    var _a = react_1.useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    return (react_1["default"].createElement("header", { className: "sticky top-0 z-50 bg-white shadow-md" },
        react_1["default"].createElement("div", { className: "container mx-auto px-4 flex items-center justify-between py-4" },
            react_1["default"].createElement(link_1["default"], { href: "/", className: "w-[86px] max-w-full" },
                react_1["default"].createElement("img", { src: "/images/Farengeyt_Press_LOGO_small.png", alt: "farengeyt", className: "h-auto w-full" })),
            react_1["default"].createElement("nav", { className: "hidden md:block" },
                react_1["default"].createElement("ul", { className: "flex gap-6 text-lg font-medium text-primary font-inter" }, navLinks.map(function (link) { return (react_1["default"].createElement("li", { key: link.href },
                    react_1["default"].createElement(link_1["default"], { href: link.href, className: "transition-colors duration-300 hover:text-secondary" }, link.label))); }))),
            react_1["default"].createElement("button", { className: "md:hidden text-2xl font-bold", onClick: function () { return setIsMenuOpen(!isMenuOpen); }, "aria-label": "Open Menu" }, isMenuOpen ? react_1["default"].createElement(svg_1.Close, null) : "☰")),
        isMenuOpen && (react_1["default"].createElement("div", { className: "md:hidden bg-white border-t border-primary" },
            react_1["default"].createElement(Burger_1["default"], { onClose: function () { return setIsMenuOpen(false); } })))));
};
exports["default"] = Header;

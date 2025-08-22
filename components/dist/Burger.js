"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var svg_1 = require("@/public/svg");
var navLinks = [
    { href: "/", label: "Bosh sahifa" },
    { href: "/about", label: "Biz haqimizda" },
    { href: "/books", label: "Kitoblar" },
    { href: "#podcast", label: "Podkastlar" },
    { href: "#blog", label: "Blog" },
    { href: "/contact", label: "Bog'lanish" },
];
function Burger(_a) {
    var onClose = _a.onClose;
    return (React.createElement("div", { className: "bg-[#cde3e8] h-screen w-full max-w-xs ml-auto shadow-lg p-6 transition-transform duration-300 flex flex-col" },
        React.createElement("div", { className: "flex items-center justify-between mb-8" },
            React.createElement(link_1["default"], { href: "/", onClick: onClose, className: "w-[80px]" },
                React.createElement(image_1["default"], { src: "/images/Farengeyt_Press_LOGO_small.png", alt: "farengeyt", width: 200, height: 200, className: "w-full h-auto" })),
            React.createElement("button", { onClick: onClose, "aria-label": "Close Menu" },
                React.createElement(svg_1.Close, null))),
        React.createElement("nav", { className: "flex-1" },
            React.createElement("ul", { className: "flex flex-col gap-3 text-center space-y-5 text-lg font-medium text-blue-900 font-inter" }, navLinks.map(function (link) { return (React.createElement("li", { key: link.href },
                React.createElement(link_1["default"], { href: link.href, className: "transition-colors duration-300 hover:text-secondary", onClick: onClose }, link.label))); })))));
}
exports["default"] = Burger;

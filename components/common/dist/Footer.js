"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var svg_1 = require("@/public/svg");
var navLinks = [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/about', label: 'Biz haqimizda' },
    { href: '/books', label: 'Kitoblar' },
    { href: '/podcast', label: 'Podkastlar' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Aloqa' },
];
function Footer() {
    return (react_1["default"].createElement("footer", { className: "bg-[#012e4a] text-primary py-[28px] px-6" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "w-[86px] max-w-full" },
                        react_1["default"].createElement(link_1["default"], { href: "/" },
                            react_1["default"].createElement("img", { src: "/images/Farengeyt_Press_LOGO_small.png", alt: "farengeyt", className: "h-auto w-full" }))),
                    react_1["default"].createElement("div", { className: "flex gap-3 mt-4" },
                        react_1["default"].createElement(link_1["default"], { href: "/", className: 'px-[8px] py-[5px] border-1 border-primary items-center hover:bg-secondary transition-all duration-300 max-w-[36px]' },
                            react_1["default"].createElement(svg_1.FacebookBlue, null)),
                        react_1["default"].createElement(link_1["default"], { href: "/", className: 'px-[8px] py-[5px] border-1 border-primary items-center hover:bg-secondary transition-all duration-300 max-w-[36px] text-center' },
                            react_1["default"].createElement(svg_1.InstagramBlue, null)),
                        react_1["default"].createElement(link_1["default"], { href: "/", className: 'px-[8px] py-[5px] border-1 border-primary items-center hover:bg-secondary transition-all duration-300 max-w-[36px]' },
                            react_1["default"].createElement(svg_1.TwitterBlue, null)))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", { className: "text-lg font-semibold mb-4" }, "Customers Support"),
                    react_1["default"].createElement("div", { className: "h-[2px] w-8 bg-orange-500 mb-2" }),
                    react_1["default"].createElement("ul", { className: "space-y-2 text-sm  " }, navLinks.map(function (link) { return (react_1["default"].createElement("li", { key: link.href, className: 'hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5' },
                        react_1["default"].createElement(link_1["default"], { href: link.href },
                            "\u00BB ",
                            link.label))); }))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", { className: "text-lg font-semibold mb-4" }, "Categories"),
                    react_1["default"].createElement("div", { className: "h-[2px] w-8 bg-orange-500 mb-2" }),
                    react_1["default"].createElement("ul", { className: "space-y-2 text-sm" },
                        react_1["default"].createElement("li", { className: 'hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5' }, "\u00BB Bolalar adabiyoti"),
                        react_1["default"].createElement("li", { className: 'hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5' }, "\u00BB O`quv kitoblar"),
                        react_1["default"].createElement("li", { className: 'hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5' }, "\u00BB Ilmiy-ommabop kitoblar"),
                        react_1["default"].createElement("li", { className: 'hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5' }, "\u00BB Badiiy adabiyot "))),
                react_1["default"].createElement("div", { className: 'relative' },
                    react_1["default"].createElement("h3", { className: "text-lg font-semibold mb-4" }, "Newsletter"),
                    react_1["default"].createElement("div", { className: "h-[2px] w-8 bg-orange-500 mb-2" }),
                    react_1["default"].createElement("form", { className: "flex" },
                        react_1["default"].createElement("input", { type: "email", placeholder: "Enter Email Address", className: "px-4 py-2 rounded-l-md w-full text-silver active:border-primary border-1 border-primary" }),
                        react_1["default"].createElement("button", { type: "submit", className: "bg-[#29479E] text-white px-4 py-2 rounded-r-md" }, "Send")),
                    react_1["default"].createElement("img", { src: "/images/frame-shape.png", alt: "", className: 'absolute  bottom-9 left-14 animate-float-x' }))))));
}
exports["default"] = Footer;

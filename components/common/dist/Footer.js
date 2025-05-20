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
    return (react_1["default"].createElement("footer", { className: "bg-white text-primary py-12 px-6" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "w-[86px] max-w-full" },
                        react_1["default"].createElement(link_1["default"], { href: "/" },
                            react_1["default"].createElement("img", { src: "/images/Farengeyt_Press_LOGO_small.png", alt: "farengeyt", className: "h-auto w-full" }))),
                    react_1["default"].createElement("div", { className: "flex gap-3 mt-4" },
                        react_1["default"].createElement(link_1["default"], { href: "/" },
                            react_1["default"].createElement(svg_1.Facebook, null)),
                        react_1["default"].createElement(link_1["default"], { href: "/" },
                            react_1["default"].createElement(svg_1.Instagram, null)),
                        react_1["default"].createElement(link_1["default"], { href: "/" },
                            react_1["default"].createElement(svg_1.Twitter, null)))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", { className: "text-lg font-semibold mb-4" }, "Customers Support"),
                    react_1["default"].createElement("div", { className: "h-[2px] w-8 bg-orange-500 mb-2" }),
                    react_1["default"].createElement("ul", { className: "space-y-2 text-sm  " }, navLinks.map(function (link) { return (react_1["default"].createElement("li", { key: link.href },
                        react_1["default"].createElement(link_1["default"], { href: link.href, className: "transition-colors duration-300 hover:text-blue-600" },
                            "\u00BB",
                            link.label))); }))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", { className: "text-lg font-semibold mb-4" }, "Categories"),
                    react_1["default"].createElement("div", { className: "h-[2px] w-8 bg-orange-500 mb-2" }),
                    react_1["default"].createElement("ul", { className: "space-y-2 text-sm" },
                        react_1["default"].createElement("li", null, "\u00BB Novel Books"),
                        react_1["default"].createElement("li", null, "\u00BB Poetry Books"),
                        react_1["default"].createElement("li", null, "\u00BB Political Books"),
                        react_1["default"].createElement("li", null, "\u00BB History Books"))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", { className: "text-lg font-semibold mb-4" }, "Newsletter"),
                    react_1["default"].createElement("div", { className: "h-[2px] w-8 bg-orange-500 mb-2" }),
                    react_1["default"].createElement("p", { className: "text-sm mb-4" }, "Sign up to searing weekly newsletter to get the latest updates."),
                    react_1["default"].createElement("form", { className: "flex" },
                        react_1["default"].createElement("input", { type: "email", placeholder: "Enter Email Address", className: "px-4 py-2 rounded-l-md w-full text-black" }),
                        react_1["default"].createElement("button", { type: "submit", className: "bg-teal-600 px-4 py-2 rounded-r-md" },
                            react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                                react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 10l9 4 9-4-9-4-9 4z" })))))))));
}
exports["default"] = Footer;

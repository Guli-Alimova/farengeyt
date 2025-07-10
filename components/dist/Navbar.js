"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var svg_1 = require("@/public/svg");
var Navbar = function () {
    return (react_1["default"].createElement("div", { className: "bg-[#29479E] text-white text-sm py-3 font-inter hidden md:flex" },
        react_1["default"].createElement("div", { className: "container mx-auto px-4" },
            react_1["default"].createElement("div", { className: "flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0" },
                react_1["default"].createElement("ul", { className: "flex flex-wrap items-center gap-6" },
                    react_1["default"].createElement("li", { className: "flex items-center gap-2" },
                        react_1["default"].createElement("i", { className: "fa-regular fa-phone" }),
                        react_1["default"].createElement("a", { href: "tel: +99890 999 18 19", className: "hover:underline" }, "+99890 999 18 19")),
                    react_1["default"].createElement("li", { className: "flex items-center gap-2" },
                        react_1["default"].createElement("i", { className: "far fa-envelope" }),
                        react_1["default"].createElement("a", { href: "mailto: info@farengeyt.press", className: "hover:underline" }, "info@farengeyt.press")),
                    react_1["default"].createElement("li", { className: "flex items-center gap-2" },
                        react_1["default"].createElement("i", { className: "far fa-clock" }),
                        react_1["default"].createElement("span", null, "Sunday - Fri: 9 AM - 6 PM"))),
                react_1["default"].createElement("div", { className: "flex items-center gap-6" },
                    react_1["default"].createElement(link_1["default"], { href: "/" },
                        react_1["default"].createElement(svg_1.Facebook, null)),
                    react_1["default"].createElement(link_1["default"], { href: "/" },
                        react_1["default"].createElement(svg_1.Instagram, null)),
                    react_1["default"].createElement(link_1["default"], { href: "/" },
                        react_1["default"].createElement(svg_1.Twitter, null)))))));
};
exports["default"] = Navbar;

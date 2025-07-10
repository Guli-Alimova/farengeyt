"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var BlogIntro = function () {
    return (react_1["default"].createElement("div", { className: "bg-blue-100" },
        react_1["default"].createElement("div", { className: "flex flex-col md:flex-row items-center justify-between" },
            react_1["default"].createElement("div", { className: "relative w-[246px] h-60 md:w-80 md:h-80" },
                react_1["default"].createElement(image_1["default"], { src: "/images/book.png", alt: "Colorful books", fill: true, className: "object-contain w-[246px]" })),
            react_1["default"].createElement("div", { className: "text-center md:text-left mt-8 md:mt-0" },
                react_1["default"].createElement("h1", { className: "text-4xl font-bold text-[#002f4b] mb-4" }, "Blog"),
                react_1["default"].createElement("div", { className: "text-[#002f4b]" },
                    react_1["default"].createElement(link_1["default"], { href: "/", className: "hover:underline" }, "Home"),
                    " ",
                    react_1["default"].createElement("span", null, " > "),
                    " ",
                    react_1["default"].createElement("span", { className: "font-semibold" }, "Blog"))),
            react_1["default"].createElement("div", { className: "relative w-[246px] h-60 md:w-80 md:h-80" },
                react_1["default"].createElement(image_1["default"], { src: "/images/book2.png", alt: "Stacked books", fill: true, className: "object-contain w-[246px]" })))));
};
exports["default"] = BlogIntro;

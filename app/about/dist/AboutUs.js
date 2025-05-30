"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AboutUS = function () {
    return (react_1["default"].createElement("div", { className: "container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center" },
        react_1["default"].createElement("div", { className: "relative" },
            react_1["default"].createElement("img", { src: "/images/09.jpg", alt: "Reading book", className: "w-full rounded-lg" }),
            react_1["default"].createElement("button", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg" },
                react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-primary", fill: "currentColor", viewBox: "0 0 24 24" },
                    react_1["default"].createElement("path", { d: "M8 5v14l11-7z" })))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h2", { className: "text-3xl font-bold text-gray-900 mb-4" },
                "About The Bookle ",
                react_1["default"].createElement("br", null),
                " Books Store"),
            react_1["default"].createElement("p", { className: "text-gray-600 mb-4" }, "Nullam convallis ullamcorper nulla. Nam accumsan ac leo quis posuere. Nunc rutrum lorem justo, at blandit mauris ullamcorper tristique. Suspendisse vel ante venenatis, porttitor ligula sed, iaculis metus..."),
            react_1["default"].createElement("p", { className: "text-gray-600 mb-6" }, "Morbi cursus enim in consequat suscipit. Quisque id dui ante. Praesent auctor sed augue eget aliquet..."),
            react_1["default"].createElement("a", { href: "#", className: "inline-flex items-center text-secondary font-semibold hover:underline" },
                "Overview",
                react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 ml-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                    react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }))))));
};
exports["default"] = AboutUS;

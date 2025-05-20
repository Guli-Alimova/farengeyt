"use strict";
exports.__esModule = true;
var react_1 = require("react");
function BlogCard(_a) {
    var title = _a.title, date = _a.date, author = _a.author, image = _a.image, _b = _a.category, category = _b === void 0 ? "Activities" : _b;
    return (react_1["default"].createElement("div", { className: "bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm" },
        react_1["default"].createElement("div", { className: "pt-5 px-5 relative" },
            react_1["default"].createElement("img", { src: image, alt: title, className: "w-full h-52 object-cover" }),
            react_1["default"].createElement("span", { className: "absolute top-8 left-8 bg-secondary text-white text-xs font-medium px-2 py-1 rounded" }, category)),
        react_1["default"].createElement("div", { className: "p-4" },
            react_1["default"].createElement("div", { className: "flex items-center text-sm text-silver gap-4 mb-2" },
                react_1["default"].createElement("span", { className: "flex items-center gap-1" },
                    react_1["default"].createElement("i", { className: "ri-calendar-line" }),
                    " ",
                    date),
                react_1["default"].createElement("span", { className: "flex items-center gap-1" },
                    react_1["default"].createElement("i", { className: "ri-user-line" }),
                    " By ",
                    author)),
            react_1["default"].createElement("h3", { className: "font-semibold text-md text-primary" }, title),
            react_1["default"].createElement("a", { href: "#", className: "text-cyan-800 text-sm font-medium mt-3 inline-flex items-center gap-1" },
                "Read More ",
                react_1["default"].createElement("span", null, "\u2192")))));
}
exports["default"] = BlogCard;

"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var image_1 = require("next/image");
var FeaturedBookCard = function (_a) {
    var id = _a.id, image = _a.image, title = _a.title, category = _a.category, subtitle = _a.subtitle;
    return (react_1["default"].createElement("div", { className: "w-full max-w-[200px] flex flex-col gap-2" },
        react_1["default"].createElement("div", { className: "relative" },
            react_1["default"].createElement(image_1["default"], { src: image, alt: title, className: "rounded-lg", width: 148, height: 213 })),
        react_1["default"].createElement("p", { className: "text-xs text-secondary" }, category),
        react_1["default"].createElement("h3", { className: "font-semibold text-primary leading-tight" }, title),
        react_1["default"].createElement("div", { className: "flex items-center gap-1 text-sm text-silver" },
            react_1["default"].createElement("span", null, subtitle)),
        react_1["default"].createElement(link_1["default"], { href: "/books/" + id, key: id, className: "bg-sky-100 hover:bg-sky-200 text-primary font-semibold py-2 mt-1 rounded flex items-center justify-center gap-2" }, "Read More")));
};
exports["default"] = FeaturedBookCard;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var ExploreBooksCard = function (_a) {
    var index = _a.index, image = _a.image, title = _a.title, category = _a.category;
    return (react_1["default"].createElement("div", { className: "relative flex flex-col items-center text-center" },
        react_1["default"].createElement("div", { className: "relative w-[230px] h-[230px] flex items-center justify-center bg-white rounded-full" },
            react_1["default"].createElement("div", { className: "absolute w-[200px] h-[200px] border-2 border-dashed border-secondary rounded-full animate-spin-slow" }),
            category ? (react_1["default"].createElement(link_1["default"], { href: "/books?category=" + encodeURIComponent(category.title) },
                react_1["default"].createElement("div", { className: "relative z-10 flex flex-col items-center" },
                    react_1["default"].createElement(image_1["default"], { src: image, alt: title, className: "w-[90px] h-[120px] object-cover rounded", width: 90, height: 120 }),
                    react_1["default"].createElement("div", { className: "absolute -top-8 right-[-36px] bg-[#29479E] text-secondary text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center" }, index < 10 ? "0" + index : index)))) : (react_1["default"].createElement("div", { className: "relative z-10 flex flex-col items-center" },
                react_1["default"].createElement(image_1["default"], { src: image, alt: title, className: "w-[90px] h-[120px] object-cover rounded", width: 90, height: 120 }),
                react_1["default"].createElement("div", { className: "absolute -top-8 right-[-36px] bg-[#29479E] text-secondary text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center" }, index < 10 ? "0" + index : index)))),
        react_1["default"].createElement("h3", { className: "text-primary font-semibold mt-4 text-[16px]" }, title)));
};
exports["default"] = ExploreBooksCard;

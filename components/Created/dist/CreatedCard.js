"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CreatedCard = function (_a) {
    var name = _a.name, image = _a.image, description = _a.description, work = _a.work;
    return (react_1["default"].createElement("div", { className: "bg-white rounded-xl shadow p-4 text-center w-60 flex flex-col items-center gap-4" },
        react_1["default"].createElement("div", { className: "relative" },
            react_1["default"].createElement("img", { src: "/images/shape-img.png", alt: "shape" }),
            react_1["default"].createElement("img", { src: image, alt: name, className: "w-24 h-24 rounded-full object-cover mx-auto border-1 border-white shadow absolute top-3 left-6" })),
        react_1["default"].createElement("div", { className: "border border-dashed rounded-lg p-2 w-full" },
            react_1["default"].createElement("h3", { className: "font-semibold text-lg text-primary" }, name),
            react_1["default"].createElement("p", { className: "text-sm text-silver" }, description),
            react_1["default"].createElement("p", { className: "text-sm text-secondary" }, work))));
};
exports["default"] = CreatedCard;

"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
function BookCard(_a) {
    var id = _a.id, image = _a.image, title = _a.title;
    return (React.createElement(link_1["default"], { href: "/books/" + id, key: id, className: "bg-white" },
        React.createElement("div", { className: "relative rounded-lg shadow hover:shadow-lg transition p-[30px] h-[292px] overflow-hidden bg-[#f5f5f5] mx-auto my-0" },
            React.createElement(image_1["default"], { src: image, alt: title, width: 158, height: 212, className: "rounded" }),
            React.createElement("h3", { className: "mt-2 font-semibold text-sm" }, title))));
}
exports["default"] = BookCard;

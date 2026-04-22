"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var youtube_1 = require("@/app/utils/youtube");
function PodCastCard(_a) {
    var subtitle = _a.subtitle, link = _a.link;
    var thumbnail = youtube_1.getYouTubeThumbnail(link);
    return (React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300" },
        React.createElement("div", { className: "relative w-full h-52 sm:h-60" },
            React.createElement(image_1["default"], { src: thumbnail, alt: subtitle, fill: true, className: "object-cover group-hover:scale-105 transition-transform duration-300" }),
            React.createElement("div", { className: "absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" }),
            React.createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
                React.createElement("div", { className: "bg-red-600 rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" },
                    React.createElement("span", { className: "text-white text-2xl ml-1" }, "\u25B6")))),
        React.createElement("div", { className: "bg-primary px-4 py-3" },
            React.createElement("p", { className: "text-sm font-semibold text-white uppercase tracking-wide line-clamp-2" }, subtitle))));
}
exports["default"] = PodCastCard;

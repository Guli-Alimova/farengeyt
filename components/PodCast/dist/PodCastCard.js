"use strict";
exports.__esModule = true;
function PodCastCard(_a) {
    var title = _a.title, subtitle = _a.subtitle, image = _a.image, link = _a.link;
    return (React.createElement("div", { className: "relative rounded-2xl overflow-hidden w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center text-primary flex items-start justify-start p-4 sm:p-6 md:p-8", style: { backgroundImage: "url(" + image + ")" } },
        React.createElement("div", { className: "absolute inset-0 bg-blue-500/15 rounded-2xl z-0" }),
        React.createElement("div", { className: "z-10 max-w-xs sm:max-w-sm md:max-w-md" },
            React.createElement("h3", { className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2" }, title),
            React.createElement("p", { className: "text-xs sm:text-sm md:text-base mb-4" }, subtitle),
            React.createElement("a", { href: link, className: "bg-white text-primary text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-5 py-2 rounded-full inline-flex items-center gap-2 hover:bg-secondary transition" },
                "Show Now ",
                React.createElement("span", null, "\u2192")))));
}
exports["default"] = PodCastCard;

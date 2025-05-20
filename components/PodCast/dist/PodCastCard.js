"use strict";
exports.__esModule = true;
function PodCastCard(_a) {
    var title = _a.title, subtitle = _a.subtitle, image = _a.image, link = _a.link;
    return (React.createElement("div", { className: "relative rounded-2xl overflow-hidden w-full max-w-sm h-64 bg-cover bg-center text-primary flex items-start justify-start p-6", style: { backgroundImage: "url(" + image + ")" } },
        React.createElement("div", { className: "z-10" },
            React.createElement("h3", { className: "text-2xl font-bold leading-tight mb-1" }, title),
            React.createElement("p", { className: "text-sm mb-4" }, subtitle),
            React.createElement("a", { href: link, className: "bg-white text-primary text-sm font-semibold px-5 py-2 rounded-full inline-flex items-center gap-2 hover:bg-secondary transition mt-20 mr-20" },
                "Show Now ",
                React.createElement("span", null, "\u2192"))),
        React.createElement("div", { className: "absolute inset-0  bg-blue-500/20 rounded-2xl z-0" })));
}
exports["default"] = PodCastCard;

"use client";
"use strict";
exports.__esModule = true;
function MobileMenu(_a) {
    var onClose = _a.onClose;
    return (React.createElement("div", { className: "md:hidden top-0 left-0 w-full h-screen bg-[#cde3e8] p-4 shadow-xl transition translate-x-0" },
        React.createElement("nav", { className: "flex flex-col space-y-3 mb-8 " }, ["Home", "Shop", "Pages", "Blog", "Contact"].map(function (item) { return (React.createElement("div", { key: item, className: "flex justify-between items-center border-b border-blue-100 pb-2" },
            React.createElement("span", { className: "text-blue-900 font-medium" }, item))); })),
        React.createElement("div", { className: "mt-8" },
            React.createElement("h2", { className: "text-blue-900 font-bold mb-4" }, "Contact Info"),
            React.createElement("div", { className: "flex items-center space-x-2 text-sm text-gray-700 mb-2" },
                "\uD83D\uDCCD ",
                React.createElement("span", null, "Main Street, Melbourne, Australia")),
            React.createElement("div", { className: "flex items-center space-x-2 text-sm text-gray-700 mb-2" },
                "\u2709\uFE0F ",
                React.createElement("span", null, "info@example.com")),
            React.createElement("div", { className: "flex items-center space-x-2 text-sm text-gray-700 mb-2" },
                "\uD83D\uDD70\uFE0F ",
                React.createElement("span", null, "Mod-Friday, 09am - 05pm")),
            React.createElement("div", { className: "flex items-center space-x-2 text-sm text-gray-700 mb-2" },
                "\uD83D\uDCDE ",
                React.createElement("span", null, "+11002245099")))));
}
exports["default"] = MobileMenu;

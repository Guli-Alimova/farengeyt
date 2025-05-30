'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var categories = [
    'Bolalar adabiyoti',
    'O`quv kitoblar',
    'Ilmiy-ommabop kitoblar',
    'Baddiy adabiyot',
];
function SearchBook() {
    var _a = react_1.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = react_1.useState('Arts & Photography'), activeCategory = _b[0], setActiveCategory = _b[1];
    return (React.createElement("div", { className: "p-4" },
        React.createElement("div", { className: "mb-6" },
            React.createElement("h2", { className: "text-lg font-semibold mb-2 border-b pb-1 text-primary" }, "Search"),
            React.createElement("div", { className: "relative" },
                React.createElement("input", { type: "text", placeholder: "Search here", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, className: "w-full border rounded px-3 py-2 pr-10" }),
                React.createElement(fa_1.FaSearch, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-silver" }))),
        React.createElement("div", null,
            React.createElement("h2", { className: "text-lg font-semibold mb-2 border-b pb-1 text-primary" }, "Categories"),
            React.createElement("div", { className: "flex flex-col gap-2" }, categories.map(function (category) { return (React.createElement("button", { key: category, onClick: function () { return setActiveCategory(category); }, className: "text-left px-3 py-2 rounded " + (activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-white border text-primary') }, category)); })))));
}
exports["default"] = SearchBook;

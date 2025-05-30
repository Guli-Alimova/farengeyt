'use client';
"use strict";
exports.__esModule = true;
var fa_1 = require("react-icons/fa");
var react_1 = require("react");
function ResultsHeader(_a) {
    var showingStart = _a.showingStart, showingEnd = _a.showingEnd, totalResults = _a.totalResults, sorting = _a.sorting, setSorting = _a.setSorting;
    var _b = react_1.useState('grid'), view = _b[0], setView = _b[1];
    return (React.createElement("div", { className: "flex justify-between items-center border rounded px-4 py-2 mb-4" },
        React.createElement("div", null,
            React.createElement("span", { className: "text-gray-700" },
                "Showing ",
                showingStart,
                "\u2013",
                showingEnd,
                " of ",
                totalResults,
                " Results")),
        React.createElement("div", { className: "flex items-center gap-4" },
            React.createElement("div", { className: "flex gap-2" },
                React.createElement("button", { onClick: function () { return setView('list'); }, className: "p-1 " + (view === 'list' ? 'text-orange-500' : 'text-gray-700') },
                    React.createElement(fa_1.FaThList, { size: 20 })),
                React.createElement("button", { onClick: function () { return setView('grid'); }, className: "p-1 " + (view === 'grid' ? 'text-orange-500' : 'text-gray-700') },
                    React.createElement(fa_1.FaThLarge, { size: 20 }))))));
}
exports["default"] = ResultsHeader;

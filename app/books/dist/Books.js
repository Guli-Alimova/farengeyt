'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var BookCard_1 = require("./BookCard");
var navigation_1 = require("next/navigation");
var book_json_1 = require("../data/book.json");
var categories = [
    'Barchasi',
    'Bolalar adabiyoti',
    "O'quv kitoblar",
    'Ilmiy-ommabop kitoblar',
    'Badiiy adabiyot',
];
function Books() {
    var _a = react_1.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = react_1.useState(categories[0]), activeCategory = _b[0], setActiveCategory = _b[1];
    var _c = react_1.useState('default'), sorting = _c[0], setSorting = _c[1];
    var searchParams = navigation_1.useSearchParams();
    var categoryParam = searchParams.get('category'); // URL'dan o'qish
    react_1.useEffect(function () {
        if (categoryParam && categories.includes(categoryParam)) {
            setActiveCategory(categoryParam); // Active holatga qo'yish
        }
    }, [categoryParam]);
    // Filterlash logikasi
    var filteredBooks = book_json_1["default"].filter(function (book) {
        var matchesCategory = activeCategory === 'Barchasi' || book.category === activeCategory;
        var matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return (React.createElement("div", { className: "p-8" },
        React.createElement("div", { className: "mb-6" },
            React.createElement("h2", { className: "text-lg font-semibold mb-2 border-b pb-1 text-primary" }, "Search"),
            React.createElement("div", { className: "relative" },
                React.createElement("input", { type: "text", placeholder: "Kitob qidiring...", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, className: "w-full border rounded px-3 py-2 pr-10" }),
                React.createElement(fa_1.FaSearch, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-silver" }))),
        React.createElement("div", { className: "mb-6" },
            React.createElement("h2", { className: "text-lg font-semibold mb-2 border-b pb-1 text-primary" }, "Categories"),
            React.createElement("div", { className: "flex flex-wrap gap-2" }, categories.map(function (category) { return (React.createElement("button", { key: category, onClick: function () { return setActiveCategory(category); }, className: "px-3 py-2 rounded " + (activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-white border text-primary') }, category)); }))),
        filteredBooks.length === 0 ? (React.createElement("p", { className: "text-gray-500 mt-4" }, "Kitob topilmadi.")) : (React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6" }, filteredBooks.map(function (book) { return (React.createElement(BookCard_1["default"], { key: book.id, id: book.id, image: book.image, title: book.title })); })))));
}
exports["default"] = Books;

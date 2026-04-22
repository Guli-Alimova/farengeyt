'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var book_json_1 = require("@/app/data/book.json");
var BookCard_1 = require("@/app/books/BookCard"); // ✅ tashqi komponent
var categories = [
    'Barchasi',
    'Bolalar kitoblari',
    'Badiiy adabiyot',
    "O'quv va amaliy qo'llanmalar",
    'Ilmiy-ommabop kitoblar'
];
var LoadingSkeleton = function () { return (React.createElement("div", { className: "p-8 animate-pulse" },
    React.createElement("div", { className: "h-8 bg-gray-200 rounded w-48 mb-6" }),
    React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" }, Array.from({ length: 8 }, function (_, i) { return (React.createElement("div", { key: i, className: "bg-white rounded-lg shadow-md" },
        React.createElement("div", { className: "aspect-[3/4] bg-gray-200 rounded-t-lg" }),
        React.createElement("div", { className: "p-4 space-y-2" },
            React.createElement("div", { className: "h-6 bg-gray-200 rounded" }),
            React.createElement("div", { className: "h-4 bg-gray-200 rounded w-20" })))); })))); };
function BooksPage() {
    var _a = react_1.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = react_1.useState(categories[0]), activeCategory = _b[0], setActiveCategory = _b[1];
    var _c = react_1.useState(false), mounted = _c[0], setMounted = _c[1];
    react_1.useEffect(function () {
        setMounted(true);
        var params = new URLSearchParams(window.location.search);
        var categoryParam = params.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
            setActiveCategory(categoryParam);
        }
    }, []);
    var filteredBooks = react_1.useMemo(function () {
        return book_json_1["default"].filter(function (book) {
            var matchesCategory = activeCategory === 'Barchasi' || book.category === activeCategory;
            var matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);
    if (!mounted)
        return React.createElement(LoadingSkeleton, null);
    return (React.createElement("div", { className: "p-8" },
        React.createElement("div", { className: "mb-6" },
            React.createElement("h2", { className: "text-lg font-semibold mb-2 border-b pb-1" }, "Qidiruv"),
            React.createElement("div", { className: "relative" },
                React.createElement("input", { type: "text", placeholder: "Kitob qidiring...", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, className: "w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500" }),
                React.createElement(fa_1.FaSearch, { className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" }))),
        React.createElement("div", { className: "mb-6" },
            React.createElement("h2", { className: "text-lg font-semibold mb-2 border-b pb-1" }, "Janrlar"),
            React.createElement("div", { className: "flex flex-wrap gap-2" }, categories.map(function (category) { return (React.createElement("button", { key: category, onClick: function () { return setActiveCategory(category); }, className: "px-3 py-2 rounded cursor-pointer transition-colors " + (activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-white border hover:bg-gray-50') }, category)); }))),
        filteredBooks.length === 0 ? (React.createElement("p", { className: "text-gray-500 mt-4 text-center" }, "Kitob topilmadi.")) : (React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" }, filteredBooks.map(function (book) { return (React.createElement(BookCard_1["default"], __assign({ key: book.id }, book))); })))));
}
exports["default"] = BooksPage;

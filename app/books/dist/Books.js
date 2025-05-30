'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BookCard_1 = require("./BookCard");
var react_2 = require("react");
var ResultHeaders_1 = require("../books/ResultHeaders");
var Books = function () {
    var _a = react_2.useState('default'), sorting = _a[0], setSorting = _a[1];
    var books = [
        {
            image: '/images/01.png',
            title: 'Simple Things You Save BOOK',
            badge: 'Hot',
            discount: '-30%'
        },
        {
            image: '/images/02.png',
            title: 'How Deal With Very Bad BOOK'
        },
        {
            image: '/images/03.png',
            title: 'The Hidden Mystery Behind'
        },
        {
            image: '/images/04.png',
            title: 'Qple GPad With Retina Display',
            badge: '-12%'
        },
    ];
    return (react_1["default"].createElement("div", { className: "p-8" },
        react_1["default"].createElement(ResultHeaders_1["default"], { showingStart: 1, showingEnd: books.length, totalResults: 34, sorting: sorting, setSorting: setSorting }),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" }, books.map(function (book, index) { return (react_1["default"].createElement(BookCard_1["default"], { key: index, image: book.image, title: book.title })); }))));
};
exports["default"] = Books;

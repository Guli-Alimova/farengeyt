'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ExploreBooksCard_1 = require("./ExploreBooksCard");
var react_2 = require("swiper/react");
var modules_1 = require("swiper/modules");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
var modules_2 = require("swiper/modules");
var categories = [
    {
        id: 1,
        image: '/images/01.png',
        title: 'Bolalar adabiyot'
    },
    {
        id: 2,
        image: '/images/02.png',
        title: 'O`quv kitoblar'
    },
    {
        id: 3,
        image: '/images/04.png',
        title: 'Ilmiy-ommabop kitoblar'
    },
    {
        id: 4,
        image: '/images/05.png',
        title: ' Badiiy adabiyot'
    },
];
var ExploreBooks = function () {
    return (react_1["default"].createElement("section", { className: "relative bg-blue-100 py-16  md:px-12 overflow-hidden" },
        react_1["default"].createElement("div", { className: "text-center" },
            react_1["default"].createElement("h2", { className: "text-primary text-3xl md:text-4xl font-bold mb-10" }, "Top Categories Book")),
        react_1["default"].createElement("div", { className: "flex gap-10 justify-center flex-wrap md:flex-nowrap mt-10" },
            react_1["default"].createElement(react_2.Swiper, { modules: [modules_1.Navigation, modules_2.Autoplay], autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                }, loop: true, spaceBetween: 3, slidesPerView: 1, navigation: true, breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                } }, categories.map(function (item, index) { return (react_1["default"].createElement(react_2.SwiperSlide, { key: index },
                react_1["default"].createElement(ExploreBooksCard_1["default"], { index: index + 1, image: item.image, title: item.title }))); })))));
};
exports["default"] = ExploreBooks;

'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("swiper/react");
var modules_1 = require("swiper/modules");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
var modules_2 = require("swiper/modules");
var FeaturedBookCard_1 = require("./FeaturedBookCard");
var books = [
    {
        id: 1,
        image: '/images/Pul.jpg',
        title: 'Pul',
        category: "O'quv kitoblar",
        subtitle: "Boshlang'ich saboqlar"
    },
    {
        id: 2,
        image: '/images/BIOLOGIYA.jpg',
        title: 'Biologiya',
        category: "O'quv kitoblar",
        subtitle: "Boshlang'ich saboqlar"
    },
    {
        id: 3,
        image: '/images/FIZIKA.jpg',
        title: 'Fizika',
        category: "O'quv kitoblar",
        subtitle: "Boshlang'ich saboqlar"
    },
    {
        id: 4,
        image: '/images/IQTISODIYOT.jpg',
        title: 'Iqtisodiyot',
        category: "O'quv kitoblar",
        subtitle: "Boshlang'ich saboqlar"
    },
    {
        id: 5,
        image: '/images/KIMYO.jpg',
        title: 'Kimyo',
        category: "O'quv kitoblar",
        subtitle: "Boshlang'ich saboqlar"
    },
    {
        id: 6,
        image: '/images/MATEMATIKA.jpg',
        title: 'Matematika',
        category: "O'quv kitoblar",
        subtitle: "Boshlang'ich saboqlar"
    },
];
function FeaturedBooks() {
    return (React.createElement("section", { className: "py-20" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "flex justify-between items-center mb-6" },
                React.createElement("h2", { className: "text-3xl font-bold" }, "Featured Books"),
                React.createElement("button", { className: "border border-gray-300 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100" }, "Explore More \u2192")),
            React.createElement("div", { className: "flex flex-wrap gap-6" },
                React.createElement(react_1.Swiper, { modules: [modules_1.Pagination, modules_2.Autoplay], autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    }, loop: true, spaceBetween: 3, slidesPerView: 1, pagination: { clickable: true }, breakpoints: {
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 }
                    } }, books.map(function (item, index) { return (React.createElement(react_1.SwiperSlide, { key: index },
                    React.createElement(FeaturedBookCard_1["default"], { image: item.image, title: item.title, category: item.category, subtitle: item.subtitle }))); }))))));
}
exports["default"] = FeaturedBooks;

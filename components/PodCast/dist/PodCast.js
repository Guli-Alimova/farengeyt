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
var PodCastCard_1 = require("./PodCastCard");
var podcasts = [
    {
        title: 'Crime Fiction Talks',
        subtitle: '15% Off On Kids’ Toys And Gifts!',
        image: '/images/09.jpg',
        link: '/podcasts/1'
    },
    {
        title: 'One Year On A Bike',
        subtitle: '15% Off On Kids’ Toys And Gifts!',
        image: '/images/10.jpg',
        link: '/podcasts/2'
    },
    {
        title: 'Grow With Flower',
        subtitle: '15% Off On Kids’ Toys And Gifts!',
        image: '/images/11.jpg',
        link: '/podcasts/3'
    },
];
function PodCast() {
    return (React.createElement("section", { className: "py-14 px-4 text-center" },
        React.createElement("div", { className: "container" },
            React.createElement("h2", { className: "text-3xl font-bold text-primary mb-6" }, "Explore Podcasts"),
            React.createElement("div", { className: "flex justify-between gap-4" }, podcasts.map(function (podcast, index) { return (React.createElement(PodCastCard_1["default"], __assign({ key: index }, podcast))); })))));
}
exports["default"] = PodCast;

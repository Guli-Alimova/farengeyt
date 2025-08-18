"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var image_1 = require("next/image");
require("../../styles/globals.css");
var Intro = function () {
    return (react_1["default"].createElement("div", { className: "relative bg-blue-100 overflow-hidden pb-20" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "flex flex-col lg:flex-row items-center justify-between pt-[25px] relative z-10" },
                react_1["default"].createElement("div", { className: "text-center lg:text-left max-w-xl" },
                    react_1["default"].createElement("p", { className: "text-secondary text-[20px] italic mb-4" }, "Up To 30% Off"),
                    react_1["default"].createElement("h1", { className: "text-[32px] sm:text-[56px] lg:text-[74px] leading-[1.2] font-bold md:text-center text-primary mb-8 font-inter lg:w-[735px] w-[450px]" }, "Get Your New Book With The Best Price"),
                    react_1["default"].createElement(link_1["default"], { href: "/about", className: "bg-[#ED553B] hover:bg-[#14548a] text-white text-[16px] px-6 py-3 rounded-full shadow-md font-semibold transition duration-300" }, "Learn More \u2192")),
                react_1["default"].createElement("div", { className: "pt-10 lg:pt-70 top-[80px] left-[60px] relative " },
                    react_1["default"].createElement(image_1["default"], { src: "/images/hero-book.png", alt: "hero girl", className: "w-[300px] hidden lg:inline md:w-[400px] lg:w-[500px] xl:w-[589px] z-50 animate-float-x", width: 300, height: 300 })))),
        react_1["default"].createElement(image_1["default"], { src: "/images/bg-shape.png", alt: "shape", className: "hidden lg:inline absolute top-0 left-[488px] lg:w-[750px] w-[200px] z-10", width: 200, height: 200 }),
        react_1["default"].createElement(image_1["default"], { src: "/images/frame-2.png", alt: "frame", className: "hidden lg:inline absolute top-0 left-[36%] w-[254px] animate-float-x", width: 254, height: 254 }),
        react_1["default"].createElement("div", { className: "absolute bottom-[28%] right-[24%] w-[185px] z-50 hidden lg:inline-block" },
            react_1["default"].createElement("div", { className: "relative h-[250px] w-[400px] overflow-visible" },
                react_1["default"].createElement("svg", { className: "absolute w-[400px] h-[200px]", viewBox: "0 0 400 200", fill: "none" },
                    react_1["default"].createElement("path", { d: "M0 150 Q150 50, 300 100 T400 50", stroke: "blue", strokeWidth: "2", className: "trail-path" })),
                react_1["default"].createElement(image_1["default"], { src: "/images/imagesplane.png", alt: "plane", className: "plane-anim w-[60px] h-[60px]", width: 60, height: 60 })))));
};
exports["default"] = Intro;

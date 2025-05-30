"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var Intro = function () {
    return (react_1["default"].createElement("div", { className: " relative bg-blue-100 overflow-hidden    pb-7" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "flex flex-col lg:flex-row items-center justify-between pt-[25px]  relative z-10" },
                react_1["default"].createElement("div", { className: "text-center lg:text-left max-w-xl" },
                    react_1["default"].createElement("p", { className: "text-secondary text-[20px] italic mb-4" }, "Up To 30% Off"),
                    react_1["default"].createElement("h1", { className: "text-[42px] sm:text-[56px] lg:text-[74px] leading-[1.2] font-bold text-primary mb-8 font-inter w-[735px]" },
                        "Get Your New Book ",
                        react_1["default"].createElement("br", { className: "hidden md:block" }),
                        "With The Best Price"),
                    react_1["default"].createElement(link_1["default"], { href: "/about", className: "bg-[#ED553B] hover:bg-[#14548a] text-white text-[16px] px-6 py-3 rounded-full shadow-md font-semibold transition duration-300" }, "Learn More \u2192")),
                react_1["default"].createElement("div", { className: "pt-10 lg:pt-70 top-[27px] relative " },
                    react_1["default"].createElement("img", { src: "/images/hero-book.png", alt: "hero girl", className: "w-[300px] md:w-[400px] lg:w-[500px] xl:w-[589px] z-50 animate-float-x" })))),
        react_1["default"].createElement("img", { src: "/images/bg-shape.png", alt: "shape", className: "absolute top-0 left-[488px] w-[750px] z-10" }),
        react_1["default"].createElement("img", { src: "/images/frame-2.png", alt: "frame", className: "absolute top-0 left-[36%] w-[254px]  animate-float-x" }),
        react_1["default"].createElement("img", { src: "/images/frame-shape.png", alt: "shape", className: "absolute bottom-[28%] right-[24%] w-[185px] animate-float-x" }),
        react_1["default"].createElement("img", { src: "/images/xstar.png", alt: "star", className: "absolute top-[31%] right-[38%] w-[55px] animate-rotate-half " }),
        react_1["default"].createElement("img", { src: "/images/book.png", alt: "", className: "absolute bottom-[1%] left-[-1%] w-[216px] rotate-[-10deg]" }),
        react_1["default"].createElement("img", { src: "/images/frame-2.png", alt: "", className: "absolute bottom-[0%] right-[42%] w-[254px] opacity-70 animate-float-y" })));
};
exports["default"] = Intro;

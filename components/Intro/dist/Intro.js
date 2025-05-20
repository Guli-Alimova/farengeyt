"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var Intro = function () {
    return (react_1["default"].createElement("div", { className: " relative bg-[#d0e1e7] overflow-hidden" },
        react_1["default"].createElement("div", { className: "container mx-auto px-4" },
            react_1["default"].createElement("div", { className: "flex flex-col lg:flex-row items-center justify-between pt-[100px]  relative z-10" },
                react_1["default"].createElement("div", { className: "text-center lg:text-left max-w-xl" },
                    react_1["default"].createElement("p", { className: "text-secondary text-[20px] italic mb-4" }, "Up To 30% Off"),
                    react_1["default"].createElement("h1", { className: "text-[42px] sm:text-[56px] lg:text-[74px] leading-[1.2] font-bold text-primary mb-8 font-inter w-[735px]" },
                        "Get Your New Book ",
                        react_1["default"].createElement("br", { className: "hidden md:block" }),
                        "With The Best Price"),
                    react_1["default"].createElement(link_1["default"], { href: "/about", className: "bg-[#ED553B] hover:bg-[#14548a] text-white text-[16px] px-6 py-3 rounded-full shadow-md font-semibold transition duration-300" }, "Learn More \u2192")),
                react_1["default"].createElement("div", { className: "pt-10 lg:pt-50 relative" },
                    react_1["default"].createElement("img", { src: "/images/hero-book.png", alt: "hero girl", className: "w-[300px] md:w-[400px] lg:w-[500px] xl:w-[589px] z-50" })))),
        react_1["default"].createElement("img", { src: "/images/bg-shape.png", alt: "", className: "absolute top-0 left-[488px] w-[750px] z-10" }),
        react_1["default"].createElement("img", { src: "/images/frame-2.png", alt: "", className: "absolute top-0 left-[36%] w-[254px] animate-float-y" }),
        react_1["default"].createElement("img", { src: "/images/frame-shape.png", alt: "", className: "absolute bottom-[34%] right-[30%] w-[185px] animate-float-x" }),
        react_1["default"].createElement("img", { src: "/images/xstar.png", alt: "", className: "absolute top-[41%] right-[46%] w-[55px]" }),
        react_1["default"].createElement("img", { src: "/images/book.png", alt: "", className: "absolute bottom-[1%] left-[-1%] w-[216px] rotate-[-10deg]" }),
        react_1["default"].createElement("img", { src: "/images/frame-2.png", alt: "", className: "absolute bottom-[0%] right-[42%] w-[254px] opacity-70" })));
};
exports["default"] = Intro;

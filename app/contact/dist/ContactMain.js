"use strict";
exports.__esModule = true;
function ContactMain() {
    return (React.createElement("main", { className: "min-h-screen p-6" },
        React.createElement("div", { className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8" },
            React.createElement("div", { className: "bg-primary text-white rounded-lg p-6 space-y-6" },
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-sm" }, "Call Us 7/24"),
                    React.createElement("p", { className: "text-lg font-semibold" }, "+208-555-0112")),
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-sm" }, "Make a Quote"),
                    React.createElement("p", { className: "text-lg font-semibold" }, "example@gmail.com")),
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-sm" }, "Location"),
                    React.createElement("p", { className: "text-lg font-semibold" }, "4517 Washington ave.")),
                React.createElement("div", { className: "mt-4" },
                    React.createElement("img", { src: "/images/10.jpg" // public papkaga rasm joylashtiring
                        , alt: "Contact", className: "rounded-lg" }))),
            React.createElement("div", { className: "md:col-span-2 bg-white" },
                React.createElement("h2", { className: "text-2xl font-bold text-primary" }, "Ready To Get Started?"),
                React.createElement("p", { className: "text-silver font-semibold" }, "Nunc tincidunt cursus lectus ac semper. Aenean ullamcorper quis arcu molestie consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec lobortis elit, eu ultrices justo. Fusce auctor erat est, non fringilla nibh tempus quis. Aenean dignissim."),
                React.createElement("form", { className: "space-y-4" },
                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                        React.createElement("div", null,
                            React.createElement("label", { className: "block mb-1  text-silver font-medium" }, "Your Name*"),
                            React.createElement("input", { type: "text", placeholder: "Your Name", className: "w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" })),
                        React.createElement("div", null,
                            React.createElement("label", { className: "block mb-1 font-medium text-silver" }, "Your Email*"),
                            React.createElement("input", { type: "email", placeholder: "Your Email", className: "w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" }))),
                    React.createElement("div", null,
                        React.createElement("label", { className: "block mb-1 font-medium text-silver" }, "Write Message*"),
                        React.createElement("textarea", { placeholder: "Write Message", className: "w-full border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary" })),
                    React.createElement("button", { type: "submit", className: "bg-primary text-white px-6 py-3 rounded-full hover:bg-primary flex items-center" },
                        "Send Message ",
                        React.createElement("span", { className: "ml-2" }, "\u2192")))))));
}
exports["default"] = ContactMain;

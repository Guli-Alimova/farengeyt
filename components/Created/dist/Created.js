"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CreatedCard_1 = require("./CreatedCard");
var creater = [
    {
        name: 'Sardor SALIM ',
        image: '/authors/1.jpg',
        description: "tarjimon  “ Yoshlar uchun 1000 kitob” tashabbusida qator kitoblarni tarjima qilgan. ",
        work: "MPA (Manchester University)"
    },
    {
        name: ' Xurshid YULDOSHEV ',
        image: '/authors/2.jpg',
        description: " muharrir “  Yoshlar uchun 1000 kitob”, “Asaxiy Books” loyihalar doirasida 100ga yaqin kitob nashr etilishiga rahbarlik qilgan. ",
        work: "Falsafa bo‘yicha magistr (MU) "
    },
    {
        name: 'Behzod ALIMOV ',
        image: '/authors/3.jpg',
        description: " Vestminster Universiteti (WIUT) katta o‘qituvchisi.“Yoshlar uchun 1000 kitob” doirasida iqtisodiyotga doir kitoblarni tayyorlashda ishtirok etgan.  ",
        work: "PhD (Turin University)"
    },
    {
        name: ' Komil JALILOV',
        image: '/authors/4.jpg',
        description: "20 yillik pedagog, ta’lim sohasi mutaxassisi ",
        work: "MA (UCL, London), O‘zbek tili va adabiyoti universiteti doktoranti"
    },
    {
        name: 'Madina MUSAYEVA ',
        image: '/authors/4.jpg',
        description: "O‘zbek tilidagi audiokitoblar suxandoni, tarjimon va kitobxonlik targ‘ibotchisi ",
        work: "MA (Georgetown University)"
    },
];
var Created = function () {
    return (react_1["default"].createElement("section", { className: "py-12  text-center bg-blue-100" },
        react_1["default"].createElement("h2", { className: "text-3xl font-bold text-primary" }, "Asoschilar"),
        react_1["default"].createElement("p", { className: "text-gray-500 mt-2" }),
        react_1["default"].createElement("p", { className: "text-gray-400 mb-8" }),
        react_1["default"].createElement("div", { className: "flex flex-wrap justify-center gap-6" }, creater.map(function (item, index) { return (react_1["default"].createElement(CreatedCard_1["default"], { key: index, name: item.name, image: item.image, description: item.description, work: item.work })); }))));
};
exports["default"] = Created;

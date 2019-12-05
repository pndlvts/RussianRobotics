//гамбергер
document.querySelector("#icon-menu").addEventListener("click", (e) => {
    var mobileMenu = document.querySelector("ul.header__menu");
    var menu = document.querySelector("div.header__menu");
    if (document.body.clientWidth <= 767) {
        mobileMenu.classList.toggle("header__menu_show");
    } else {
        menu.classList.toggle("header__menu_show");
    }
});
//для частных лиц (на планшеты)
document.querySelector("#for-person-tablet").addEventListener("click", (e) => {
    var forPersonBlock = document.querySelector(".header__for-person-block");
    forPersonBlock.classList.toggle("header__for-person-block_show");
    document.querySelector("#for-person-tablet-link").classList.toggle("header__for-person_active");

})
//для частных лиц (на телефоны)
document.querySelector("#for-person").addEventListener("click", (e) => {
    var box = document.querySelectorAll(".header__for-person-list-item");
    box.forEach(box => {
        box.classList.toggle("header__for-person-list-item_show");
    })
    document.querySelector("#for-person-dropdown").classList.toggle("header__for-person_active");
})
//для юр лиц (на телефоны)
document.querySelector("#for-corp").addEventListener("click", (e) => {
    var box = document.querySelectorAll(".header__for-corp-list-item");
    box.forEach(box => {
        box.classList.toggle("header__for-corp-list-item_show");
    })
    document.querySelector("#for-corp-dropdown").classList.toggle("header__for-corp_active");
})
//о банке (на планшеты)
document.querySelector("#header__about-bank_tablet").addEventListener("click", (e) => {
    var box = document.querySelector("ul.header__about-bank-list");
    box.classList.toggle("header__about-bank-list_show");
    document.querySelector(".header__about-bank-drop").classList.toggle("header__about-bank-drop_active");
})
//верхний блок о банке для десктопов
document.querySelector("#header__about-bank-button_desktop").addEventListener("click", (e) => {
    var aboutBankHeaderBlock = document.querySelector(".header__about-bank-block_desktop");
    aboutBankHeaderBlock.classList.toggle("header__about-bank-block_display");
});
//закрыть верхний блок о банке для десктопов
document.querySelector("#header__about-bank-button-close_desktop").addEventListener("click", (e) => {
    var aboutBankHeaderBlock = document.querySelector(".header__about-bank-block_desktop");
    aboutBankHeaderBlock.classList.remove("header__about-bank-block_display");
});

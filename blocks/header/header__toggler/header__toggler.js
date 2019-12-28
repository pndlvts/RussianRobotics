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
    var forCorpBlock = document.querySelector(".header__for-corp-block");
    forCorpBlock.classList.remove("header__for-corp-block_show");
    document.querySelector("#for-corp-tablet-link").classList.remove("header__for-corp_active");
    var forPersonBlock = document.querySelector(".header__for-services-block");
    forPersonBlock.classList.remove("header__for-services-block_show");
    document.querySelector("#for-services-tablet-link").classList.remove("header__for-services_active");
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
//для услуг на рынке ценных бумаг (на телефоны)
document.querySelector("#for-services").addEventListener("click", (e) => {
    var box = document.querySelectorAll(".header__for-services-list-item");
    box.forEach(box => {
        box.classList.toggle("header__for-services-list-item_show");
    })
    document.querySelector("#for-services-dropdown").classList.toggle("header__for-services_active");
})
//о банке (на телефоны)
document.querySelector("#for-about-bank-mobile").addEventListener("click", (e) => {
    var box = document.querySelectorAll(".header__for-about-bank-mobile-list-item");
    box.forEach(box => {
        box.classList.toggle("header__for-about-bank-mobile-list-item_show");
    })
    document.querySelector("#for-about-bank-mobile-dropdown").classList.toggle("header__for-about-bank-mobile_active");
})
//о банке (на планшеты)
document.querySelector("#header__about-bank_tablet").addEventListener("click", (e) => {
    if (document.body.clientWidth < 1024){
    var box = document.querySelector("ul.header__about-bank-list");
    box.classList.toggle("header__about-bank-list_show");
    document.querySelector(".header__about-bank-drop").classList.toggle("header__about-bank-drop_active");
    }
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
//
//для юр лиц (на планшеты)
document.querySelector("#for-corp-tablet").addEventListener("click", (e) => {
    var forCorpBlock = document.querySelector(".header__for-corp-block");
    forCorpBlock.classList.toggle("header__for-corp-block_show");
    document.querySelector("#for-corp-tablet-link").classList.toggle("header__for-corp_active");
    var forPersonBlock = document.querySelector(".header__for-person-block");
    forPersonBlock.classList.remove("header__for-person-block_show");
    document.querySelector("#for-person-tablet-link").classList.remove("header__for-person_active");
    var forPersonBlock = document.querySelector(".header__for-services-block");
    forPersonBlock.classList.remove("header__for-services-block_show");
    document.querySelector("#for-services-tablet-link").classList.remove("header__for-services_active");
})
//для услуг (на планшеты)
document.querySelector("#for-services-tablet").addEventListener("click", (e) => {
    var forCorpBlock = document.querySelector(".header__for-services-block");
    forCorpBlock.classList.toggle("header__for-services-block_show");
    document.querySelector("#for-services-tablet-link").classList.toggle("header__for-services_active");
    var forPersonBlock = document.querySelector(".header__for-person-block");
    forPersonBlock.classList.remove("header__for-person-block_show");
    document.querySelector("#for-person-tablet-link").classList.remove("header__for-person_active");
    var forCorpBlock = document.querySelector(".header__for-corp-block");
    forCorpBlock.classList.remove("header__for-corp-block_show");
    document.querySelector("#for-corp-tablet-link").classList.remove("header__for-corp_active");
})


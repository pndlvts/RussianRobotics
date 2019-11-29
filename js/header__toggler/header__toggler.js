//гамбергер
document.querySelector("#icon-menu").addEventListener("click", (e) => {
    if (document.body.clientWidth <= 767) {
        var box = document.querySelector("ul.header__menu");
        box.classList.toggle("header__menu_show");
    } else {
        var box = document.querySelector("div.header__menu");
        box.classList.toggle("header__menu_show");
    }
});
//для частных лиц (на планшеты)
document.querySelector("#for-person-tablet").addEventListener("click", (e) => {
    var box1 = document.querySelector(".header__for-person-block");
    box1.classList.toggle("header__for-person-block_show");
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

document.querySelector("#icon-menu").addEventListener("click", (e) => {
var box = document.querySelector(".header__menu");
box.classList.toggle("header__menu_show");
});

document.querySelector("#for-person").addEventListener("click", (e) => {
var box = document.querySelectorAll(".header__for-person-list-item");
box.forEach(box => { box.classList.toggle("header__for-person-list-item_show"); })
})



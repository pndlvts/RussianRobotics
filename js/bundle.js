"use strict";document.querySelector(".footer__list-item-dropdown-1").addEventListener("click",function(){document.querySelector(".footer__list-item-dropdown-1").classList.toggle("after_active"),document.querySelector(".footer__dropdown-list-1").classList.toggle("footer__dropdown-list_show")}),document.querySelector(".footer__list-item-dropdown-2").addEventListener("click",function(){document.querySelector(".footer__list-item-dropdown-2").classList.toggle("after_active"),document.querySelector(".footer__dropdown-list-2").classList.toggle("footer__dropdown-list_show")}),document.querySelector(".footer__list-item-dropdown-3").addEventListener("click",function(){document.querySelector(".footer__list-item-dropdown-3").classList.toggle("after_active"),document.querySelector(".footer__dropdown-list-3").classList.toggle("footer__dropdown-list_show")}),document.querySelector(".footer__list-item-dropdown-4").addEventListener("click",function(){document.querySelector(".footer__list-item-dropdown-4").classList.toggle("after_active"),document.querySelector(".footer__dropdown-list-4").classList.toggle("footer__dropdown-list_show")}),document.body.clientWidth<=767&&document.querySelector(".grid").classList.add("owl-carousel","owl-theme","owl-carousel-3"),$(".owl-carousel-1").owlCarousel({loop:!0,margin:10,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,responsive:{0:{items:1}}}),$(".owl-carousel-2").owlCarousel({loop:!1,margin:30,nav:!1,dots:!1,dotsContainer:".customDots",autoplay:!1,responsive:{1024:{items:2,dots:!1},320:{dots:!0,dotsContainer:".customDots",dotClass:"customDot",items:1,autoWidth:!0}}}),$(".owl-carousel-3").owlCarousel({loop:!0,margin:15,nav:!1,dots:!1,autoplay:!1,items:1,autoWidth:!0}),$(window).resize(function(){document.body.clientWidth<=767?$(".grid").addClass("owl-carousel owl-theme owl-carousel-3").owlCarousel({loop:!0,margin:15,nav:!1,dots:!1,autoplay:!1,items:1,autoWidth:!0}):$(".grid").trigger("destroy.owl.carousel").removeClass("owl-carousel owl-theme owl-carousel-3")}),window.addEventListener("resize",function(){document.body.clientWidth<1024?(document.querySelector(".info-block_rate").style.display="block",document.querySelector(".info-block_coins").style.display="none",document.querySelector(".finance__coins-toggler").classList.remove("finance__coins-toggler_active"),document.querySelector(".finance__rate-toggler").classList.remove("finance__rate-toggler_disabled"),document.querySelector(".finance__rate-toggler a").addEventListener("click",function(e){document.querySelector(".finance__coins-toggler").classList.remove("finance__coins-toggler_active"),document.querySelector(".finance__rate-toggler").classList.remove("finance__rate-toggler_disabled"),document.querySelector(".info-block_coins").style.display="none",document.querySelector(".info-block_rate").style.display="block"}),document.querySelector(".finance__coins-toggler a").addEventListener("click",function(e){document.querySelector(".finance__coins-toggler").classList.add("finance__coins-toggler_active"),document.querySelector(".finance__rate-toggler").classList.add("finance__rate-toggler_disabled"),document.querySelector(".info-block_rate").style.display="none",document.querySelector(".info-block_coins").style.display="block"})):(document.querySelector(".info-block_rate").style.display="block",document.querySelector(".info-block_coins").style.display="block",document.querySelector(".finance__coins-toggler").classList.remove("finance__coins-toggler_active"),document.querySelector(".finance__rate-toggler").classList.remove("finance__rate-toggler_disabled"),document.querySelector(".finance__rate-toggler a").addEventListener("click",function(e){document.querySelector(".finance__coins-toggler").classList.add("finance__coins-toggler_active"),document.querySelector(".finance__rate-toggler").classList.remove("finance__rate-toggler_disabled"),document.querySelector(".info-block_coins").style.display="block",document.querySelector(".info-block_rate").style.display="block"}),document.querySelector(".finance__coins-toggler a").addEventListener("click",function(e){document.querySelector(".finance__coins-toggler").classList.add("finance__coins-toggler_active"),document.querySelector(".finance__rate-toggler").classList.remove("finance__rate-toggler_disabled"),document.querySelector(".info-block_rate").style.display="block",document.querySelector(".info-block_coins").style.display="block"}))});var date=new Date,month=date.getMonth()+1,todayDate=date.getDate()+"."+month+"."+date.getFullYear();document.querySelector(".finance__date").innerHTML=todayDate,document.querySelector("#icon-menu").addEventListener("click",function(e){var o=document.querySelector("ul.header__menu"),t=document.querySelector("div.header__menu");document.body.clientWidth<=767?o.classList.toggle("header__menu_show"):t.classList.toggle("header__menu_show")}),document.querySelector("#for-person-tablet").addEventListener("click",function(e){document.querySelector(".header__for-person-block").classList.toggle("header__for-person-block_show"),document.querySelector("#for-person-tablet-link").classList.toggle("header__for-person_active"),document.querySelector(".header__for-corp-block").classList.remove("header__for-corp-block_show"),document.querySelector("#for-corp-tablet-link").classList.remove("header__for-corp_active"),document.querySelector(".header__for-services-block").classList.remove("header__for-services-block_show"),document.querySelector("#for-services-tablet-link").classList.remove("header__for-services_active")}),document.querySelector("#for-person").addEventListener("click",function(e){document.querySelectorAll(".header__for-person-list-item").forEach(function(e){e.classList.toggle("header__for-person-list-item_show")}),document.querySelector("#for-person-dropdown").classList.toggle("header__for-person_active")}),document.querySelector("#for-corp").addEventListener("click",function(e){document.querySelectorAll(".header__for-corp-list-item").forEach(function(e){e.classList.toggle("header__for-corp-list-item_show")}),document.querySelector("#for-corp-dropdown").classList.toggle("header__for-corp_active")}),document.querySelector("#for-services").addEventListener("click",function(e){document.querySelectorAll(".header__for-services-list-item").forEach(function(e){e.classList.toggle("header__for-services-list-item_show")}),document.querySelector("#for-services-dropdown").classList.toggle("header__for-services_active")}),document.querySelector("#for-about-bank-mobile").addEventListener("click",function(e){document.querySelectorAll(".header__for-about-bank-mobile-list-item").forEach(function(e){e.classList.toggle("header__for-about-bank-mobile-list-item_show")}),document.querySelector("#for-about-bank-mobile-dropdown").classList.toggle("header__for-about-bank-mobile_active")}),document.querySelector("#header__about-bank_tablet").addEventListener("click",function(e){document.body.clientWidth<1024&&(document.querySelector("ul.header__about-bank-list").classList.toggle("header__about-bank-list_show"),document.querySelector(".header__about-bank-drop").classList.toggle("header__about-bank-drop_active"))}),document.querySelector("#header__about-bank-button_desktop").addEventListener("click",function(e){document.querySelector(".header__about-bank-block_desktop").classList.toggle("header__about-bank-block_display")}),document.querySelector("#header__about-bank-button-close_desktop").addEventListener("click",function(e){document.querySelector(".header__about-bank-block_desktop").classList.remove("header__about-bank-block_display")}),document.querySelector("#for-corp-tablet").addEventListener("click",function(e){document.querySelector(".header__for-corp-block").classList.toggle("header__for-corp-block_show"),document.querySelector("#for-corp-tablet-link").classList.toggle("header__for-corp_active"),document.querySelector(".header__for-person-block").classList.remove("header__for-person-block_show"),document.querySelector("#for-person-tablet-link").classList.remove("header__for-person_active"),document.querySelector(".header__for-services-block").classList.remove("header__for-services-block_show"),document.querySelector("#for-services-tablet-link").classList.remove("header__for-services_active")}),document.querySelector("#for-services-tablet").addEventListener("click",function(e){document.querySelector(".header__for-services-block").classList.toggle("header__for-services-block_show"),document.querySelector("#for-services-tablet-link").classList.toggle("header__for-services_active"),document.querySelector(".header__for-person-block").classList.remove("header__for-person-block_show"),document.querySelector("#for-person-tablet-link").classList.remove("header__for-person_active"),document.querySelector(".header__for-corp-block").classList.remove("header__for-corp-block_show"),document.querySelector("#for-corp-tablet-link").classList.remove("header__for-corp_active")});
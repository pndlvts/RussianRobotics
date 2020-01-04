//Первый слайдер
$('.owl-carousel-1').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
    }
})
//Второй слайдер
$('.owl-carousel-2').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    dots: false,
    dotsContainer: '.customDots',
    autoplay: false,
    responsive: {
        1024: {
            items: 2,
            dots: false,
        },
        320: {
            dots: true,
            dotsContainer: '.customDots',
            dotClass: 'customDot',
            items: 1,
            autoWidth: true,
        },
    }
})
//Третий слайдер
$('.owl-carousel-3').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: false,
    items: 1,
    autoWidth: true,
})
$(window).resize(function () {
    if (document.body.clientWidth <= 767) {
        $(".grid").addClass("owl-carousel owl-theme owl-carousel-3").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: false,
    items: 1,
    autoWidth: true,
});
    } else {
        $(".grid").trigger("destroy.owl.carousel").removeClass("owl-carousel owl-theme owl-carousel-3");
    }
})
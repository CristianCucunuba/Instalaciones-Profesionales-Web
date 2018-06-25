$(document).ready( function () {
    let owl = $('.owl-carousel')
    owl.owlCarousel({
        items: 7,
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout: 2000,
        autoHeight: true,
        center: true,
        autoplayHoverPause: true
    });
});
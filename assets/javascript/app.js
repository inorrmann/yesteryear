"use strict";
var nav = $("nav");
var navHeight = nav.outerHeight();

$(".navbar-toggler").on("click", function() {
    if (! $('#mainNav').hasClass('navbar-reduce')) {
        $("#mainNav").addClass('navbar-reduce');
    }
});

// Preloader
$(window).on("load", function() {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        })
    }
})

// Back to Top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 90) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});


// Active scrollspy
$('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
});

// Navbar Reduce
$(window).trigger('scroll');
$(window).on('scroll', function() {
    let pixels = 50;
    let top = 1200;
    if($(window).scrollTop() > pixels) {
        $('.navbar-expand-md').addClass('navbar-reduce');
        $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
        $('.navbar-expand-md').addClass('navbar-trans');
        $('.navbar-expand-md').removeClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
        $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
        $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
});

// Event Details Carousel
var myCarousel = document.querySelector('#event-carousel')
var carousel = new bootstrap.Carousel(myCarousel)

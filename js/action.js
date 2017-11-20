require('../css/style.scss');
require('../js/slick/slick-theme.css');
require('../js/metismenu/metisMenu.min.css');
/*<link rel="stylesheet" href="js/metismenu/metisMenu.min.css">
<link rel="stylesheet" href="css/animate.css">
<link rel="stylesheet" href="css/mm-horizontal.css">
<link rel="stylesheet" href="js/slick/slick.css">
<link rel="stylesheet" href="js/slick/slick-theme.css">*/

import $ from "jquery";
import "slick-carousel";
import ScrollReveal from "scrollreveal";

window.sr = ScrollReveal({
	duration: 2000,
	reset: true,
	mobile: true
});
sr.reveal('.banner');
sr.reveal('.content-1');
sr.reveal('.content-2');
sr.reveal('.content-3');
sr.reveal('.logos');
sr.reveal('.footer');


//slider

$(document).ready(function() {
    $('.single-item').slick({
        autoplay:true,
        autoplaySpeed: 200,
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });
});

$(document).ready(function() {
    $('.center').slick({
        centerMode: true,
        infinite: true,
        arrows:false,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 500,
        infinite: true,
        /*responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]*/
    });
});

/*
//JS
$("#menu").metisMenu();
//scroll reveal
*/

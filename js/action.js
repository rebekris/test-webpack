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
        autoplaySpeed: 2000,
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

$('.info1').scotchPanel({
       // clickSelector: '.toggle-panels',
       hoverSelector:'.banner-tiny1',
       containerSelector: '.banner-tiny', // Selects the nearest matching container
       direction: 'right',
       duration: 300,
       transition: 'ease-in-out',
       enableEscapeKey: true
});
$('.info2').scotchPanel({
       // clickSelector: '.toggle-panels',
       hoverSelector:'.banner-tiny2',
       containerSelector: '.banner-tiny', // Selects the nearest matching container
       direction: 'right',
       duration: 300,
       transition: 'ease-in-out',
       enableEscapeKey: true
});
$('.info3').scotchPanel({
       // clickSelector: '.toggle-panels',
       hoverSelector:'.banner-tiny3',
       containerSelector: '.banner-tiny', // Selects the nearest matching container
       direction: 'right',
       duration: 300,
       transition: 'ease-in-out',
       enableEscapeKey: true
});
$('.info4').scotchPanel({
       // clickSelector: '.toggle-panels',
       hoverSelector:'.banner-tiny4',
       containerSelector: '.banner-tiny', // Selects the nearest matching container
       direction: 'right',
       duration: 300,
       transition: 'ease-in-out',
       enableEscapeKey: true
});
$('.info5').scotchPanel({
       // clickSelector: '.toggle-panels',
       hoverSelector:'.banner-tiny5',
       containerSelector: '.banner-tiny', // Selects the nearest matching container
       direction: 'right',
       duration: 300,
       transition: 'ease-in-out',
       enableEscapeKey: true
}); 
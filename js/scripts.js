$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        dots: true,
        navText: [ '', ' ' ],
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
});
$( function() {
    $( "#accordion" ).accordion();
});
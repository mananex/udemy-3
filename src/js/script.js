$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left.png"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right.png"/></button>'
    });
});
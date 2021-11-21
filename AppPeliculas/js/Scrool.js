$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.ScrollDos').fadeIn();
        } else {
            $('.ScrollDos').fadeOut();
        }
    });
    $('.ScrollDos').click(function () {
        $('html, body').animate({
            screenTop: 0
        }, 800)
    })

});
$(document).ready(function () {
    $('.prev').click(function () {
        $('.slide li:last').prependTo('.slide');
        $('.slide').css('margin-left', '-100%');
        $('.slide').stop().animate({ marginLeft: 0 }, 800);
    });
    $('.next').click(function () {
        $('.slide').stop().animate({ marginLeft: '-100%' }, 800, function () {
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({ marginLeft: 0 });
        });
    });
});

$(function () {
    if (window.matchMedia("(min-width:1200px)").matches) {
        $('.before').click(function () {
            $('.brand li:last').prependTo('.brand');
            $('.brand').css('margin-left', '-20%');
            $('.brand').stop().animate({ marginLeft: 0 }, 800);

        });
        $('.after').click(function () {
            $('.brand').stop().animate({ marginLeft: '-20%' }, 800, function () {
                $('.brand li:first').appendTo('.brand');
                $('.brand').css({ marginLeft: 0 });
            });
        });

    } else if (window.matchMedia("(min-width:768px) and (max-width:1199px)").matches){
        $('.before').click(function () {
            $('.brand li:last').prependTo('.brand');
            $('.brand').css('margin-left', '-33.33%');
            $('.brand').stop().animate({ marginLeft: 0 }, 800);

        });
        $('.after').click(function () {
            $('.brand').stop().animate({ marginLeft: '-33.33%' }, 800, function () {
                $('.brand li:first').appendTo('.brand');
                $('.brand').css({ marginLeft: 0 });
            });
        });

    } else{
        $('.before').click(function () {
            $('.brand li:last').prependTo('.brand');
            $('.brand').css('margin-left', '-100%');
            $('.brand').stop().animate({ marginLeft: 0 }, 800);

        });
        $('.after').click(function () {
            $('.brand').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.brand li:first').appendTo('.brand');
                $('.brand').css({ marginLeft: 0 });
            });
        });
    }



});
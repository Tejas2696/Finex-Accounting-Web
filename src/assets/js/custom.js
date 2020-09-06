$(document).ready(function() {




    $('#return-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.hamburger-menu').click(function() {
        $('body').toggleClass('fixed-body');
    });

    $('.core-menu ul li').click(function() {
        $(this).parent('ul').hide();
    });

    //the trigger on hover when cursor directed to this class
    $(".core-menu li").hover(
        function() {
            $(this).toggleClass('hover');
            //i used the parent ul to show submenu
            $(this).children('ul').slideDown('fast');
        },
        //when the cursor away 
        function() {
            $('ul', this).slideUp('fast');
            $(this).removeClass('hover');
        });
    //this feature only show on 600px device width
    $(".hamburger-menu").click(function() {
        $(".burger-1, .burger-2, .burger-3").toggleClass("open");
        $(".core-menu").slideToggle("fast");
    });






    $(".close-popup").click(function() {
        console.log('close clicked......');
        $(".Subscription-popup").removeClass("open-popup").addClass('remove-popup');
    });

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        nav: true,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 3
            },

            1024: {
                items: 4
            },

            1366: {
                items: 5
            }
        }
    })
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        $('.owl-carousel').owlCarousel({
            autoplay: true,
            lazyLoad: true,
            loop: true,
            margin: 20,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 3000,
            smartSpeed: 800,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },

                600: {
                    items: 3
                },

                1024: {
                    items: 4
                },

                1366: {
                    items: 5
                }
            }
        })
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            var scroll = $(window).scrollTop();
            if (scroll >= 300) {
                //clearHeader, not clearheader - caps H
                $("header").addClass("darkHeader");
            } else {
                $("header").removeClass("darkHeader");

            }
        } else {
            $(".main-menu").addClass("box-shadow");
            $("header").removeClass("darkHeader");
        }
        lastScrollTop = st;


        var scroll = $(window).scrollTop();
        if (scroll >= 1200) {
            $(".Subscription-popup").addClass("open-popup");
        }

        if ($(this).scrollTop() >= 100) {
            $('#return-to-top').fadeIn(200);
            $('#return-to-top').addClass("bottom");
        } else {
            $('#return-to-top').fadeOut(200);
            $('#return-to-top').removeClass("bottom");
        }


        $(".close-popup").click(function() {
            console.log('close clicked......');
            $(".Subscription-popup").removeClass("open-popup").addClass('remove-popup');
        });
    });


    $('.core-menu ul li,.core-menu li.single').click(function() {
        console.log("clicked...................");
        menuClose();
    });



    function menuClose() {
        if ($(window).width() < 768) {
            $(".burger-1, .burger-2, .burger-3").removeClass("open");
            $(".core-menu").hide();
            $('body').removeClass('fixed-body');
        }
    }
});


// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 500) {
//         //clearHeader, not clearheader - caps H
//         $("header").addClass("darkHeader");
//     } else {
//         $("header").removeClass("darkHeader");

//     }
// });



$(window).resize(function() {
    if ($(window).width() > 768) {
        $(".core-menu").show();
    } else {
        $(".core-menu").hide();
    }
});

$(document).ready(function() {
    // $fn.scrollSpeed(step, speed, easing);
    jQuery.scrollSpeed(200, 800);
});

// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {

    jQuery.scrollSpeed = function(step, speed, easing) {

        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;

        if (window.navigator.msPointerEnabled)

            return false;

        $window.on('mousewheel DOMMouseScroll', function(e) {

            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
            scrollY = $document.height() > $window.height();
            scrollX = $document.width() > $window.width();
            scroll = true;

            if (scrollY) {

                view = $window.height();

                if (deltaY < 0 || detail > 0)

                    root = (root + view) >= $document.height() ? root : root += step;

                if (deltaY > 0 || detail < 0)

                    root = root <= 0 ? 0 : root -= step;

                $body.stop().animate({

                    scrollTop: root

                }, speed, option, function() {

                    scroll = false;

                });
            }

            if (scrollX) {

                view = $window.width();

                if (deltaY < 0 || detail > 0)

                    root = (root + view) >= $document.width() ? root : root += step;

                if (deltaY > 0 || detail < 0)

                    root = root <= 0 ? 0 : root -= step;

                $body.stop().animate({

                    scrollLeft: root

                }, speed, option, function() {

                    scroll = false;

                });
            }

            return false;

        }).on('scroll', function() {

            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();

        }).on('resize', function() {

            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();

        });
    };

    jQuery.easing.default = function(x, t, b, c, d) {

        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };

})(jQuery);
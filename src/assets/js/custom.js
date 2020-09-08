$(document).ready(function() {

    $('#return-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.hamburger-menu').click(function() {
        $('body').toggleClass('fixed-body');
    });

    // on click hide menu
    $('.core-menu ul li').click(function() {
        $(this).parent('ul').hide();
    });

    // $("html").niceScroll({
    //     cursorcolor: "lightgray",
    //     cursorwidth: "5px",
    //     cursorborder: "none",
    //     cursorborderradius: "5px",
    //     autohidemode: false,
    //     zindex: 999,
    //     scrollspeed: 51,
    //     mousescrollstep: 45,
    //     bouncescroll: true,
    //     smoothscroll: true,
    //     sensitiverail: true
    // });

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
        }
    );
    //this feature only show on 600px device width
    $(".hamburger-menu").click(function() {
        $(".burger-1, .burger-2, .burger-3").toggleClass("open");
        $(".core-menu").slideToggle("fast");
    });

    // Close Subscription-popup
    $(".close-popup").click(function() {
        $(".Subscription-popup").removeClass("open-popup").addClass('remove-popup');
    });

    // owl-carousel
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
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event) {

        // Owl slider
        if ($(".owl-carousel").length) {
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
        }

        // header hide and show on scroll
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

        // subscription pop up open
        if ($(".Subscription-popup").length) {
            var scroll = $(window).scrollTop();
            if (scroll >= 1200) {
                $(".Subscription-popup").addClass("open-popup");
            }
        }

        // return to top
        if ($(this).scrollTop() >= 100) {
            $('#return-to-top').fadeIn(200);
            $('#return-to-top').addClass("bottom");
        } else {
            $('#return-to-top').fadeOut(200);
            $('#return-to-top').removeClass("bottom");
        }

        // close pop up
        if ($(".close-popup").length) {
            $(".close-popup").click(function() {
                $(".Subscription-popup").removeClass("open-popup").addClass('remove-popup');
            });
        }
    });

    // ON CLICK MENU CLOSE IN RESPONSIVE
    $('.core-menu ul li,.core-menu li.single').click(function() {
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


$(window).resize(function() {
    if ($(window).width() > 768) {
        $(".core-menu").show();
    } else {
        $(".core-menu").hide();
    }
});

// SMOOTH SCROLLING
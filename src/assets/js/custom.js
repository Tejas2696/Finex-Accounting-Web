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
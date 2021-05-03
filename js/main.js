var windw = $(window);


/*
|--------------------------------------------------------------------------
	 NAVBAR SCROLL
|--------------------------------------------------------------------------
*/


$(function() {
    var navbar = $('.header-inner');
    $(window).scroll(function() {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });

    //toggle menu/navbar script
    $('.navbar-toggler').click(function() {
        $('.navbar-nav').toggleClass("active");
        $('.navbar-toggler i').toggleClass("active");

    });
});



/*
|--------------------------------------------------------------------------
	SMOOTH SCROLL
|--------------------------------------------------------------------------
*/


$(document).on('click', 'a[href*="#"]:not([href="#"])', function(event) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        var topBar_height = $('.TopBar').outerHeight() - 3;
        if (!topBar_height)
            topBar_height = 0;

        var header_height = 50 + topBar_height;

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - header_height
            }, 1000);
            return false;
        }
    }
});





/*
|--------------------------------------------------------------------------
	Counter
|--------------------------------------------------------------------------
*/

$(".counter").counterUp({
    delay: 10,
    time: 1000,

});

/*
|--------------------------------------------------------------------------
	owl carousel/ #screenshort-carousel
|--------------------------------------------------------------------------
*/
var owl = $('#screenshort-carousel');
owl.owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 4
        },

        1200: {
            items: 4
        }
    }
});

/*
|--------------------------------------------------------------------------
	owl carousel/ #testimonial-carousel
|--------------------------------------------------------------------------
*/

var owl2 = $('#testimonial-carousel');
owl2.owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 1
        },
        991: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
});

/*
|--------------------------------------------------------------------------
	owl carousel/ #blog-carousel
|--------------------------------------------------------------------------
*/
var owl3 = $('#blog-carousel');
owl3.owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 4
        },

        1200: {
            items: 4
        }
    }
});




/*
|--------------------------------------------------------------------------
	Window scroll button
|--------------------------------------------------------------------------
*/
// <!-- get the btn -->

mybutton = document.getElementById("myBtn");
window.scroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
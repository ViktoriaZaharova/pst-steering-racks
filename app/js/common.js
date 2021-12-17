$('[name="phone"]').mask('+7(999) 999-99-99');

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.manufacture-slider').slick({
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: '.manufacture-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt=""></button>',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                fade: true,
            }
        }
    ]
});

$('.catalog-slider').slick({
    slidesToShow: 4,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt=""></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        $('.mobile-menu').fadeOut();

        return false;

    });
});
//плавный скролл end

$('.popular .row').each(function () {
    if ($(this).find('.popular-col').length > 6) {
        $(this).find('.popular-col').slice(6).hide();
    }
});


$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.popular-col:hidden').slice(0, 6).slideDown();
});


new WOW().init();
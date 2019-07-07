$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /*********************** Ping ************************/

    $(function () {
        console.log("-> Ping!")

        $.get('https://lolijopaapi.herokuapp.com/api/v1/debug/ping')
        .done(function (data) {
            console.log("->", data);
        })
        .fail(function (data) {
            console.log("Ops, algo deu errado!");
            console.log(data);
        });
    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });


    /********************** RSVP **********************/
    $('#rsvp-yes').click(function (e) {
        e.preventDefault();
        let data = $('#rsvp-form').serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Aguarde um pouco!</strong> Sua resposta esta sendo enviada.'));

        console.log(data);

        $.post('https://lolijopaapi.herokuapp.com/api/v1/rsvp/yes', data)
        .done(function (data) {
            $('#alert-wrapper').html('');
            $('#rsvp-modal').modal('show');
            console.log(data);
        })
        .fail(function (data) {
            console.log(data);
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Ops!</strong> Houve um problema, tente mais tarde.'));
        });
    });

    $('#rsvp-no').click(function (e) {
        e.preventDefault();
        let data = $('#rsvp-form').serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Aguarde um pouco!</strong> Sua resposta esta sendo enviada.'));

        $.post('https://lolijopaapi.herokuapp.com/api/v1/rsvp/no', data)
        .done(function (data) {
            $('#alert-wrapper').html('');
            $('#rsvp-modal').modal('show');
            console.log(data);
        })
        .fail(function (data) {
            console.log(data);
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Ops!</strong> Houve um problema, tente mais tarde.'));
        });
    });

    /********************** Change Background **********************/
    $(function () {
        let header = $(".hero");

        const backgrounds = new Array(
          'url(img/cover/IMG-01.jpg)',
          'url(img/cover/IMG-02.jpg)',
          'url(img/cover/IMG-03.jpg)',
          'url(img/cover/IMG-04.jpg)',
          'url(img/cover/IMG-05.jpg)',
          'url(img/cover/IMG-06.jpg)',
          'url(img/cover/IMG-07.jpg)'
        );

        let current = 0;

        function set_bg(position) {
            header.css('background', ''.concat(backgrounds[position], " center center"));
            header.css('min-height', "750px");
            header.css('-webkit-background-size', "cover");
            header.css('-moz-background-size', "cover");
            header.css('-o-background-size', "cover");
            header.css('background-size', "cover");
            header.css('position', "relative");
            header.css('-webkit-transition', "700ms ease-in-out;");
            header.css('-moz-transition', "700ms ease-in-out;");
            header.css('-o-transition', "700ms ease-in-out;");
            header.css('transition', "700ms ease-in-out;");
            header.css('-webkit-backface-visibility', "hidden");
        }

        function next_bg() {
            current += 1;
            current = current % backgrounds.length;
            set_bg(current);
        }

        setInterval(next_bg, 5000);

        set_bg(0);
    });

});

/********************** Extras **********************/

// Google map
function initMap() {
    let itc_kol = {lat: -12.9839709, lng: -38.5117668};
    let map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: itc_kol,
        scrollwheel: false
    });

    let marker = new google.maps.Marker({
        position: itc_kol,
        map: map
    });
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

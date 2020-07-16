$(function() {

    //strict mode enabled
    "use strict";

    $(window).on("load", function() {

        var $grid = $('.grid').isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            percentPosition: true
        });

        // filter items on button click
        $('.filter-button-group').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        $('.button-group').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

        //script for number counter
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
});

    //hide dropdown when a menu item is clicked
    var _ddls = $(".collapse");
    _ddls.click(function() {
        $(this).removeClass("in");
    });

    $('.carousel').carousel({
        interval: 5000
    });

    //Clients section owl-carousel
    $(".clients .owl-carousel").owlCarousel({
        loop: true,
        margin: 13,
        navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
        dots: false,
        autoplay: true,
        smartSpeed: 600,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true
            },
            1600: {
                items: 5,
                nav: true
            }
        }
    });


    //script for video modal 
    $('.video-popup').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    });
    //end script for video modal 


    //script for full view port slider 
    $(window).on('resize', fullViewPort);
    fullViewPort();

    function fullViewPort() {
        if ($(window).width() < 992) {
            var height = $(window).height() - 100;
            $(".top-carousel .item, .top-carousel").height(height);
        } else {
            var height = $(window).height() - 154;
            $(".top-carousel .item, .top-carousel").height(height);
        }

    }
    //end script for full view port slider

    //script for portfolio details modal tigger
    //portfolio modal
    $(".proDetModal1").on('click', function() {
        $("#portfolioDetModal1").modal('show');
    });
    $(".proDetModal2").on('click', function() {
        $("#portfolioDetModal2").modal('show');
    });
    $(".proDetModal3").on('click', function() {
        $("#portfolioDetModal3").modal('show');
    });
    $(".proDetModal4").on('click', function() {
        $("#portfolioDetModal4").modal('show');
    });
    $(".proDetModal5").on('click', function() {
        $("#portfolioDetModal5").modal('show');
    });
    $(".proDetModal6").on('click', function() {
        $("#portfolioDetModal6").modal('show');
    });

    //team modal

    $(".tmDetModal1").on('click', function() {
        $("#teamDetModal1").modal('show');
    });

    $(".tmDetModal2").on('click', function() {
        $("#teamDetModal2").modal('show');
    });
    $(".tmDetModal3").on('click', function() {
        $("#teamDetModal3").modal('show');
    });
    $(".tmDetModal4").on('click', function() {
        $("#teamDetModal4").modal('show');
    });
    $(".tmDetModal5").on('click', function() {
        $("#teamDetModal5").modal('show');
    });
    $(".tmDetModal6").on('click', function() {
        $("#teamDetModal6").modal('show');
    });
    $(".getQuoteModal").on('click', function() {
        $("#getAQuoteModal").modal('show');
    });

    //Blog modal
    $(".blogDetModal1").on('click', function() {
        $("#blogDetModal1").modal('show');
    });
    $(".blogDetModal2").on('click', function() {
        $("#blogDetModal2").modal('show');
    });
    $(".blogDetModal3").on('click', function() {
        $("#blogDetModal3").modal('show');
    });


    // protfolio modal's slider script
    $('.myCarousel').carousel({
        interval: 4000
    });

    var selectorIdx = 1;
    var numItems = 12;
    // handles the carousel thumbnails
    $('.carousel-selector').on('click', function() {
        selectorIdx = $(this).closest('li').index();
        $('.myCarousel').carousel(selectorIdx);
    });

    $('.myCarousel').on('slide.bs.carousel', function(e) {
        selectorIdx = $(e.relatedTarget).index();
        $(this)
        .find('.carousel-selector').removeClass('selected')
        .eq(selectorIdx).addClass('selected')
        .end()
        .find('.item').removeClass('selected')
        .eq(selectorIdx).addClass('active');
    });
    // end protfolio modal's slider script   


    /*Js for sending email and validation*/
    $('.email_form').on('submit', function(e) {
        e.preventDefault();
        var _self = $(this);
        var __selector = _self.closest('input,textarea');
        _self.closest('div').find('input,textarea').removeAttr('style');
        _self.find('.msg').remove();
        _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
        var data = $(this).serialize();
        $.ajax({
            url: 'scripts/email.php',
            type: "post",
            dataType: 'json',
            data: data,
            success: function(data) {
                _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                if (data.code == false) {
                    _self.closest('div').find('[name="' + data.field + '"]').css('border-bottom', 'solid 2px red');
                    _self.find('.customised-formgroup').last().after('<div class="msg"><p style="color:red;padding:0;font-size:13px;font-weight:bold;position:absolute">*' + data.err + '</p></div>');
                } else {
                    $('.msg').html('<p style="color:green;padding:0;font-size:13px;font-weight:bold;position:absolute">' + data.success + '</p>');
                    _self.find('.customised-formgroup').last().after('<div class="msg"><p style="color:green;padding:0;font-size:13px;font-weight:bold;position:absolute">' + data.success + '</p></div>');
                    _self.closest('div').find('input,textarea').val('');
                }
            }
        });
    });


    //script for box equal height
    var equalheight;
    equalheight = function(t) {
        var i, n = 0,
        e = 0,
        topPostion,
        currentDiv,
        o = new Array;
        $(t).each(function() {
            if (i = $(this), $(i).outerHeight("auto"), topPostion = i.position().top, e != topPostion) {
                for (currentDiv = 0; currentDiv < o.length; currentDiv++)
                    o[currentDiv].outerHeight(n);
                o.length = 0, e = topPostion, n = i.outerHeight(), o.push(i);
            } else
            o.push(i), n = n < i.outerHeight() ? i.outerHeight() : n;
            for (currentDiv = 0; currentDiv < o.length; currentDiv++)
                o[currentDiv].outerHeight(n);
        });
    }, $(window).on('load resize', function() {
        equalheight(".equalheight");
    });
    //end script for box equal height  


    //Revolution slider script

    var tpj = jQuery;
    var revapi1078;
    revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
        delay: 9000,
        sliderType: "standard",
        sliderLayout: "fullscreen",
        responsiveLevels: [1600, 1240, 1024, 778],
        gridwidth: 1140,
        navigation: {
            arrows: {
                style: "uranus",
                enable: true

            }
        }

    });


    //script for page scroll to top and bottom
    $(document).on('click', '.page-scroll a, a.page-scroll', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 120
                }, 1000, 'easeInOutExpo');

                return false;
            }
        }
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 200
    });

    // Offset for Main Navigation
    $('.index #navbar-main').affix({
        offset: {
            top: 100
        }
    });
});


//Custom Google Maps
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -37.8274851, lng: 144.9527565 },
        zoom: 13,
        scrollwheel: false,
        styles: [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        },
        {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#bdbdbd"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dadada"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c9c9c9"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }
        ]
    });

    var marker = new google.maps.Marker({
        position: { lat: -37.8274851, lng: 144.9527565 },
        map: map,
        icon: "images/marker.png"
    });
}
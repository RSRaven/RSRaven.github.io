/*
 * Third party
 */

//  = ../libs/jquery/dist/jquery.js
//  = ../libs/lodash/lodash.js
//  = ../libs/FlexSlider-Scss/jquery.flexslider.js

/*
 * Custom
 */

//= partials/data.js
//= partials/app.js


$( function($) {

    $('.jcarousel')
        .jcarousel({
            animation: 'slow',
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: false
    });

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
    });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
    });





})(jQuery);


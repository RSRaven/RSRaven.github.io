//= partials/tmpl.js
//= partials/data.js

$( function ( $ ) {
    $.support.cors = true;

    $( '.jcarousel' )
        .jcarousel( {
            animation: 'slow',
            wrap: 'circular'
        } )
        .jcarouselAutoscroll( {
            interval: 5000,
            target: '+=1',
            autostart: false
        } );

    $( '.jcarousel-control-prev' )
        .on( 'jcarouselcontrol:active', function () {
            $( this ).removeClass( 'inactive' );
        } )
        .on( 'jcarouselcontrol:inactive', function () {
            $( this ).addClass( 'inactive' );
        } )
        .jcarouselControl( {
            target: '-=1'
        } );

    $( '.jcarousel-control-next' )
        .on( 'jcarouselcontrol:active', function () {
            $( this ).removeClass( 'inactive' );
        } )
        .on( 'jcarouselcontrol:inactive', function () {
            $( this ).addClass( 'inactive' );
        } )
        .jcarouselControl( {
            target: '+=1'
        } );

    var search = '';

    function renderIdeas( search ) {

        $.ajax( {
            type: 'GET',
            dataType: 'json',
            cache: false,
            url: 'http://api.pixplorer.co.uk/image?word=' + search + '&amount=7&size=tb',
            success: function ( data ) {
                if ( data.status === 'failed' ) {
                    data = mockData;
                }

                var html = $( '#ideas-template' ).html();
                var content = tmpl( html, {
                    data: data.images
                } );

                $( '.grid' ).remove();
                $( '.discover-ideas .wrapper' ).append( content );

                $( '.grid' ).isotope( {
                    itemSelector: '.tile--ideas',
                    layoutMode: 'masonry',
                    masonry: {
                        gutter: 20
                    }
                } );

            },
            error: function () {
                console.log( 'Sorry, images API isn\'t working!' );
            }
        } );
    }

    $( '.button--searcher' ).on( 'click', function ( e ) {
        e.preventDefault();
        var query = $( '.searcher__input' );
        renderIdeas( encodeURIComponent( query.val() ) );
        query.val( '' );
    } );

    renderIdeas();

}( jQuery ) );


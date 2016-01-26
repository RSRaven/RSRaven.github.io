(function($) {
    
    $.fn.geoSelector = function(options) {
        var defaults = {
            region: undefined
        };

        var settings = $.extend(defaults, options);

        var $html = $('<p id="cities"></p><div class="geo-inner"><input type="text" name="" id="regionSearch"><div id="regions"></div></div>');
        var $geoSelector =$('#geo-selector');
        $geoSelector.append($html);

        var $regionSearch = $('#regionSearch');

        $regionSearch.on('input', function() {
            var regionText = this.value;
            console.log(regionText);
/*
        var settings = {
            async: true,
            crossDomain: true,
            url: 'http://evildevel.com/Test/Region?name=',
            method: 'GET',
            dataType : "json",
            headers: {
                'cache-control': 'no-cache'
            }
        };

        var encRegion = encodeURIComponent('%' + regionText + '%');
        settings.url += encRegion;
        
        var ajaxSettings = JSON.stringify(settings);

        console.log('ajaxSettings= ', ajaxSettings);
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
*/

        
var settings = {
    url: "http://evildevel.com/Test/Region?name=",
    success: function(data){
    alert( "Прибыли данные: " + data );
  }
};

var encRegion = encodeURIComponent('%' + regionText + '%');
settings.url += encRegion;

$.ajax({
  url: "http://evildevel.com/Test/Region",
  success: function(data){
    alert( "Прибыли данные: " + data );
  }
});





        });


















        return this;
    };

})(jQuery);
$(function () {

var $wrapper = $( "<div class = \"wrapper\"></div>" );

$wrapper.css({
  margin: '50px auto',
  width: '600px',
  height: '350px',
  border: '1px solid grey'
});

var $innerWrapper = $( "<div class = \"innerWrapper\"></div>" );

$innerWrapper.css({
  margin: '5px',
  height: '180px',
  border: '1px solid grey',
  borderRadius: '5px'
});

var $tabHolder = $( "<ul class = \"tabHolder\"><li></li><li></li><li></li></ul>" );

$tabHolder.css({
  margin: '3px',
  height: '32px',
  background: 'lightgrey',
  border: '1px solid grey',
  borderRadius: '5px'
});

var $tabAnchor1 = $( "<a class = \"tabAnchor1\">Nunc tincidunt</a>" ),
    $tabAnchor2 = $( "<a class = \"tabAnchor2\">Proin dolor</a>" ),
    $tabAnchor3 = $( "<a class = \"tabAnchor3\">Aenean lacinia</a>" );



$tabAnchor1
  .css({
    display: 'block',
    background: 'lightgrey',
    border: '1px solid #282828',
  })
  .attr('href', '#');




$('body').append($wrapper);
$wrapper.append($innerWrapper);
$innerWrapper.append($tabHolder);

var $tabHolderEl = $('.tabHolder li');

$tabHolderEl.css({
  display: 'inline-block',
  lineHeight: '25px',
});

$tabHolderEl.append($tabAnchor1);

console.log($tabHolderEl);


});
$(function () {

$('body').css({
   fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  fontSize: '12px'
});

// creating tabbar

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

var $tabAnchor1 = $( "<a class = \"tabAnchor tabAnchor1\">Nunc tincidunt</a>" ),
    $tabAnchor2 = $( "<a class = \"tabAnchor tabAnchor2\">Proin dolor</a>" ),
    $tabAnchor3 = $( "<a class = \"tabAnchor tabAnchor3\">Aenean lacinia</a>" );

$('body').append($wrapper);
$wrapper.append($innerWrapper);
$innerWrapper.append($tabHolder);

var $tabHolderEl = $('.tabHolder li');

$tabHolderEl.css({
  marginLeft: '6px',
  paddingTop: '6px',
  display: 'inline-block',
  lineHeight: '25px',
});

$tabHolderEl.eq(0).append($tabAnchor1);
$tabHolderEl.eq(1).append($tabAnchor2);
$tabHolderEl.eq(2).append($tabAnchor3);

$('.tabAnchor')
  .css({
    padding: '0 5px',
    display: 'block',
    backgroundColor: '#eee',
    border: '1px solid #aaa',
    borderBottom: 'none',
    borderRadius: '5px 5px 0 0',
    textDecoration: 'none',
    color: 'grey',
    cursor: 'pointer'
  });
  // .attr('href', '#');

$tabHolder.after('<div class = \"tabText tabArticle3\"></div>');
$tabHolder.after('<div class = \"tabText tabArticle2\"></div>');
$tabHolder.after('<div class = \"tabText tabArticle1\"></div>');

$('.tabText').css({
  display: 'none',
  padding: '20px'
});

$('.tabArticle1').html('<p>Proin elit arcu, rutrum commodo, vehicula tempus,'+
  ' commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi '+
  'sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa'+
  ' et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper'+
  ' leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. '+
  'Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie'+
  ' erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci '+
  'tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>');
$('.tabArticle2').html('<p>Morbi tincidunt, dui sit amet facilisis feugiat,'+
  ' odio metus gravida ante, ut pharetra massa metus id nunc. Duis '+
  'scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada,'+
  ' metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet'+
  ' fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam.'+
  ' Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis.'+
  ' Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra'+
  ' nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat,'+
  ' tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare'+
  ' leo nisi vel felis. Mauris consectetur tortor et purus.</p>');
$('.tabArticle3').html('<p>Mauris eleifend est et turpis. Duis id erat. '+
  'Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi'+
  ' neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante.'+
  ' Class aptent taciti sociosqu ad litora torquent per conubia nostra, per'+
  ' inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo '+
  'pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur'+
  ' lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p><p>Duis cursus.'+
  ' Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam'+
  ' ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent'+
  ' blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel'+
  ' pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget'+
  ' odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut'+
  ' sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae,'+
  ' pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo.'+
  ' Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus '+
  'hendrerit hendrerit.</p>');


$('.tabText p').css({
  paddingBottom: '1em'
});

$('.tabAnchor').on({
  mouseover: tabMouseOver,
  mouseout: tabMouseOut
});

function tabMouseOver() {
  $(this).css({
    backgroundColor: '#e8e8e8',
    color: 'black',
    border: '1px solid grey',
  });
}

function tabMouseOut() {
  $(this).css({
    backgroundColor: '#eee',
    color: 'grey',
    border: '1px solid aaa',
  });
}

$tabAnchor1.on( 'click', function() {

  $('.tabAnchor').css({
    backgroundColor: '#eee',
    color: 'grey',
    border: '1px solid #aaa',
    borderBottom: 'none',
  });

  $(this).css({
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid grey',
    borderBottom: '1px solid white',
  });

  $('.tabArticle1').show();
  $('.tabArticle2').hide();
  $('.tabArticle3').hide();

  $('.tabAnchor').on({
    mouseover: tabMouseOver,
    mouseout: tabMouseOut
  });

  $(this).off("mouseover");
  $(this).off("mouseout");
});

$tabAnchor2.on( 'click', function() {

  $('.tabAnchor').css({
    backgroundColor: '#eee',
    color: 'grey',
    border: '1px solid #aaa',
    borderBottom: 'none',
  });
  
  $(this).css({
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid grey',
    borderBottom: '1px solid white',
  });

  $('.tabArticle1').hide();
  $('.tabArticle2').show();
  $('.tabArticle3').hide();

  $('.tabAnchor').on({
    mouseover: tabMouseOver,
    mouseout: tabMouseOut
  });

  $(this).off("mouseover");
  $(this).off("mouseout");
});

$tabAnchor3.on( 'click', function() {
  
  $('.tabAnchor').css({
    backgroundColor: '#eee',
    color: 'grey',
    border: '1px solid #aaa',
    borderBottom: 'none',
  });
  
  $(this).css({
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid grey',
    borderBottom: '1px solid white',
  });

  $('.tabArticle1').hide();
  $('.tabArticle2').hide();
  $('.tabArticle3').show();

  $('.tabAnchor').on({
    mouseover: tabMouseOver,
    mouseout: tabMouseOut
  });

  $(this).off("mouseover");
  $(this).off("mouseout");
});

// creating form




});


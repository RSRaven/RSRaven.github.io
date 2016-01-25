$(function(){

'use strict';

// test is our object

var test = [
  {
    title: 'What is HTML?',
    answers: [
      'Hypertext Markup Language',
      'Objective Programming Language',
      'How To Make Landingpage'
    ],
    right: 0,
    points: 1
  },
  {
    title: 'What is CSS?',
    answers: [
      'Censor Sold Solar System',
      'Central Sugar Station',
      'Cascading Style Sheets'
    ],
    right: 2,
    points: 1
  },
  {
    title: 'What is JavaScript?',
    answers: [
      'Analog of Java with more functions',
      'High-level interpreted programming language',
      'Language of Javas in Star Wars'
    ],
    right: 1,
    points: 1
  },
];

// sending object to local storage

var preparedTest = JSON.stringify( test );
var localTest = localStorage.setItem( "test", preparedTest );

// and retrieving it

var recievedTest = localStorage.getItem( "test" );
var actualTest = JSON.parse( recievedTest );

// preparing template

var $html = $( '#template' ).html();

var tmpl = _.template( $html );

var content = tmpl({
  data: actualTest
});

// inserting template into DOM

var $form = $( '#test' );
$form.prepend( content );

// test check section

var $checkResults = $( '#check-results' );


var check = function() {

/*  var $correctAnswers = $('#q1a1, #q2a3, #q3a2');
  var $answers = $('input:checkbox:checked');
  var modal;
  var $body = $( 'body' );

  if ( $answers.length == $correctAnswers.length &&
       $answers.get(0) == $correctAnswers.get(0) &&
       $answers.get(1) == $correctAnswers.get(1) &&
       $answers.get(2) == $correctAnswers.get(2) ){

    modal = ('<div class="mymodal"><div class="mymodal-inner"><h1 class="text-center">All correct!</h1><a class="center-block btn btn-primary" id="exit">Exit</a></div></div>');

  } else {

    modal = ('<div class="mymodal" id="mm"><div class="mymodal-inner"><h1 class="text-center">You were wrong!</h1><a class="center-block btn btn-primary" id="exit">Exit</a></div></div>');

  }*/
var answers = {};


var answer1 = $('.form-group').eq(0).find('input');
console.log('answer1= ', answer1);

var answered1 = answer1.each(function(i){
this[i] = i;
console.log('this[i]=' ,this[i]);
});
console.log('answered1= ', answered1);

for ( var i = actualTest.length - 1; i >= 0; i-- ) {
  answers[i] = actualTest[i].right;
}
console.log('answers= ', answers);
for ( i = actualTest.length - 1; i >= 0; i-- ) {
  
}



  var modal;
  var $body = $( 'body' );

  $body.append(modal);

  var $exit = $( '#exit' );

  var reset = function() {

    $( 'input:checkbox' ).prop( 'checked', false );
    var $modal = $( '.mymodal' );
    $modal.remove();

    return false;
  };

  $exit.on( 'click', reset );

  return false;
};

$checkResults.on( 'click', check );


});


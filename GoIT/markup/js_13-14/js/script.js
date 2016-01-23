$(function(){

'use strict';

// test is our object

var test = [{
  question: 'What is HTML?',
  answer1: 'Hypertext Markup Language',
  answer2: 'Objective Programming Language',
  answer3: 'How To Make Landingpage'
},

{
  question: 'What is CSS?',
  answer1: 'Censor Sold Solar System',
  answer2: 'Central Sugar Station',
  answer3: 'Cascading Style Sheets'
},

{
  question: 'What is JavaScript?',
  answer1: 'Analog of Java with more functions',
  answer2: 'High-level interpreted programming language',
  answer3: 'Language of Javas in Star Wars'
}];

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
$checkResults.on( 'click', function(e) {

  e.preventDefault();

  var $correctAnswers = $('#q1a1, #q2a3, #q3a2');
  var $answers = $('input:checkbox:checked');
  var modal;
  var $body = $( 'body' );

  if ( $answers.length == $correctAnswers.length &&
       $answers.get(0) == $correctAnswers.get(0) &&
       $answers.get(1) == $correctAnswers.get(1) &&
       $answers.get(2) == $correctAnswers.get(2) ){

    modal = ('<div class="mymodal"><div class="mymodal-inner"><h1 class="text-center">All correct!</h1><a class="center-block btn btn-primary" id="exit">Exit</a></div></div>');

  } else {

    modal = ('<div class="mymodal"><div class="mymodal-inner"><h1 class="text-center">You were wrong!</h1><a class="center-block btn btn-primary" id="exit">Exit</a></div></div>');

  }

  $body.append(modal);

  var $exit = $( '#exit' );

  $exit.on( 'click', function(e) {

    e.preventDefault();
// first variant is to submit the form
//  $form.submit();

// second variant is to uncheck checboxes
    $( 'input:checkbox' ).prop( 'checked', false );
    $modal = $( '.mymodal' );
    $modal.remove();


  });

});

});


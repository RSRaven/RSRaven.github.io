$(function(){
'use strict';

var questions = {
  question1: 'What is HTML?',
  question2: 'What is CSS?',
  question3: 'What is JavaScript?'
};

var answers = [
{
  answer1: 'Hypertext Markup Language',
  answer2: 'Objective Programming Language',
  answer3: 'How To Make Landingpage'
},
{
  answer1: 'Censor Sold Solar System',
  answer2: 'Central Sugar Station',
  answer3: 'Cascading Style Sheets'
},
{
  answer1: 'Analog of Java with more functions',
  answer2: 'High-level interpreted programming language',
  answer3: 'Language of Javas in Star Wars'
}];


var q = JSON.stringify(answers);

console.log(q);

var a = JSON.parse(q);

console.log(a);











});


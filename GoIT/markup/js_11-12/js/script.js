$(function(){

    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 225;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    console.log('elCount' + elementsCount);
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    console.log('minOS=' + minimumOffset);
    var maximumOffset = 0;

    leftUIEl.click(function(e) {
        e.preventDefault();
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function(e) {
        e.preventDefault();
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });



});
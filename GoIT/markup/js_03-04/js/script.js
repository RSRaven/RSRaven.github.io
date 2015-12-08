// var element = document.createElement('div');
// element.classList.add('box');
// element.innerHTML = 'dynamically created element';
// var body = document.querySelector('body');
// body.appendChild(element);


var test = {
    createHeading () {
        var element = document.createElement('h1');
        element.innerHTML = 'Тест по программированию';
        document.body.appendChild(element);
    },

    createForm () {
        var element = document.createElement('form');
        element.style.width = '300px';
        document.body.appendChild(element);
    },

    createFormGroup () {
        var element = document.createElement('ol');
        for (var i = 0; i < 3; i++) {
            var li = document.createElement('li');
            element.appendChild(li);
            var li = element.querySelectorAll('li');
            var text = document.createTextNode('Вопрос № ' + (i+1));
            li[i].appendChild(text);
        }

        var form = document.querySelector('form');
        form.appendChild(element);
    }
}


test.createHeading();
test.createForm();
test.createFormGroup();


// var ul = document.createElement('ul');
// for(...) ul.appendChild(li);   // сначала вставить узлы
// document.body.appendChild(ul); // затем в документ

/*
вставить h1
вставиь форму и в неё
    маркированный список 1,2,3
        в него через for i=3 для li - for i=3 checkbox, label

        for li 0<i<2
            for 0<i<2
                checkbox, label
вставить кнопку
*/
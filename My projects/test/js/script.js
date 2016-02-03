function GoogleCallback(func, data) {
window[func](data);
}

var $searcher = $('.searcher');

$(function() {

    var $wrapper = $('.wrapper');
    var $button = $('#search');
    $result = $('.result');
    $result.remove();

    $button.on('click', function(e) {

        var $text = $('#entering').val();
        e.preventDefault(); 

        $.ajax({
            
            url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q='+ $text +'&callback=GoogleCallback&context=?',
            dataType: "jsonp",
            success: function (data) {
                
                var ul = document.createElement('ul');
                $.each(data.results, function(i, val) {

                    var li = document.createElement('li');
                    li.innerHTML = ('<h3><a href="' + val.url + '">' + val.title + '</a></h3><p class="visibleURL">' + val.visibleUrl + '</p><p class="content">' + val.content + '</p>');
                    ul.appendChild(li);
                });

                console.log(data.results);
                console.log(ul);

                var $result = document.createElement('div');
                $result.classList.add('result');
                $result.appendChild(ul);
                $wrapper.append($result);
            }
        });
    });
});



// alert('it\'s working!');
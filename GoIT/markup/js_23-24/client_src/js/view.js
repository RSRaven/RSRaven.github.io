define (
    'View',
    [
        'jquery',
        'tmpl'
    ],
    function($, tmpl){
        function View(model) {
            var self = this;

            self.elements = {
                input: $('.list__input'),
                addBtn: $('.list__add-button'),
                listContainer: $('#list')
            };

            self.renderList = function (data) {
                var list = tmpl.tmpl( $("#list-template"), {data: data} );
                self.elements.listContainer.html(list);
            };

            self.renderList(model.data);
        }
    }
);


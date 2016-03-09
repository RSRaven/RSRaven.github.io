function View(model) {
    var self = this;

    self.elements = {
        input: $('.list__input'),
        addBtn: $('.list__add-button'),
        listContainer: $('#list')
    };

    function init() {
        var source = $("#list-template").html();
        var template = Handlebars.compile(source);
        var context = {text: "This is my first post!"};
        var html = template(context);
    }

    self.renderList = function(data) {
        // body...
    };




    init();



}

define(
    'Controller',
    ['jquery'],
    function($){
        function Controller(view, model) {
            var self = this;

            view.elemets.addBtn.on('click', addItem);

            function addItem() {
                var newItem = view.elemets.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elemets.input.val('');
            }

            function removeItem() {
                // body...
            }
        }
    }
);


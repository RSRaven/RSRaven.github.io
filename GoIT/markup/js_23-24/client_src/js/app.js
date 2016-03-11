requirejs.config({
    paths: {
        'jquery': 'http//code.jquery.com/jquery-1.12.0.min.js',
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    }
});

require(
    [
        'tmpl',
        'jquery',
        'Model',
        'View',
        'Controller'
    ],
    function (tmpl, $, Model, View, Controller) {
        $(function() {

            var data = ['test 1', 'test 2', 'test 3'];

            var model = new Model(data);
            var view = new View(model);
            var controller = new Controller();

        });
    }
);


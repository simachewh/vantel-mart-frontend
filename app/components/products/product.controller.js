/**
 * Created by Simachew on 25-Jun-16.
 */

(function () {

    angular
        .module("app.controllers")
        .controller("ProductsController",
            ["productFactory", ProductsController])
        .controller("ProductCreateController",
            ["productFactory", ProductCreateController]);

    /**
     * 
     * @param productFactory
     * @constructor
     */
    function ProductsController(productFactory) {

        var vm = this;
        vm.processing = true;
        vm.products = {};

        productFactory.getAll()
            .success(function (data) {
                vm.processing = false;
                vm.products = data;
            });
    };

    /**
     * 
     * @param productFactory
     * @constructor
     */
    function ProductCreateController(productFactory) {

    };

})();
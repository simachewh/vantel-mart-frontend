/**
 * Created by Simachew on 25-Jun-16.
 */

(function () {

    angular
        .module("vantelMart")
        .config(routeConfig);

    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "../index.html",
                controller: "ProductsController",
                controllerAs: "vm"
            })
    };

})();
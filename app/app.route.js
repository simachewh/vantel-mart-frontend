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
                templateUrl: "../views/pages/home.html",
                controller: "ProductsController",
                controllerAs: "vm"
            });
        $locationProvider.html5Mode(true);
    };

})();
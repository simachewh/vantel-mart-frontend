/**
 * Created by Simachew on 25-Jun-16.
 */

(function () {
    angular
        .module("app.services")
        .factory("productFactory", ["$http", productFactory]);
    
    function productFactory($http) {
      
        var factory = {};
        var apiRoot = "https://vantel-mart.herokuapp.com/api";
        var productsPath = "https://vantel-mart.herokuapp.com/api/products";
        factory.getOne = getOne;
        factory.getAll = getAll;
        factory.create = create;
        factory.update = update;
        factory.deleteOne = deleteOne;

        /**
         *
         * @param id
         * @returns {*}
         */
        function getOne(id) {
            return $http.get(productsPath, id);
        };

        /**
         *
         * @returns {*}
         */
        function getAll() {
            return $http.get(productsPath);
        };

        /**
         *
         * @param productData
         * @returns {*}
         */
        function create(productData) {
            return $http.post(productsPath, productData);
        };

        /**
         *
         * @param id
         * @param product
         * @returns {*}
         */
        function update(id, product) {
            return $http.put(productsPath, id, product);
        };

        /**
         *
         * @param id
         * @returns {HttpPromise|*|{method}}
         */
        function deleteOne(id) {
            return $http.delete(productsPath, id);
        };

    };
})();
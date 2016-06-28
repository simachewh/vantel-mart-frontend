/**
 * Created by Simachew on 25-Jun-16.
 * Service to access the products catalog. Searching and pagination on products.
 */

(function () {

    angular
        .module("app.services")
        .factory("catalogFactory", ["$http", catalogFactory]);

    function catalogFactory($http) {
        var factory = {};
        var apiRoot = "https://vantel-mart.herokuapp.com/api";
        var catalogPath = "https://vantel-mart.herokuapp.com/api/catalog";
        factory.paginate = paginate;
        factory.getByPriceRange = getByPriceRange;
        factory.startsWithMinMaxSort = startsWithMinMaxSort;

        /**
         *
         * @param pageNo
         * @param size
         * @param sortBy
         * @returns {*}
         */
        function paginate(pageNo, size, sortBy) {
            return $http({
                method: "GET",
                url: catalogPath + "/" + pageNo + "/" + size + "/" + sortBy
            });
        };

        /**
         *
         * @param minPrice
         * @param maxPrice
         * @returns {*}
         */
        function getByPriceRange(minPrice, maxPrice) {
            return $http.get(catalogPath, minPrice, maxPrice);
        };

        /**
         *
         * @param startLetter
         * @param min
         * @param max
         * @param sortBy
         */
        function startsWithMinMaxSort(startLetter, min, max, sortBy) {
            $http.get(apiRoot + "/search", startLetter, min, max, sortBy);
        };
        return factory;
    };
})();
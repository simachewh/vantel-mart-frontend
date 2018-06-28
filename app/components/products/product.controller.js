/**
 * Created by Simachew on 25-Jun-16.
 */

(function () {

    angular
        .module("app.controllers")
        .controller("ProductsController",
            ["productFactory", "catalogFactory", "$scope", ProductsController])
        .controller("ProductCreateController",
            ["productFactory", ProductCreateController]);

    /**
     *
     * @param productFactory
     * @constructor
     */
    function ProductsController(productFactory, catalogFactory, $scope) {

        var vm = this;
        vm.processing = true;
        vm.products = {};
        vm.alphabetSelector = "";
        vm.selectedAlphabet = "A";
        vm.pager = {};
        vm.pager.page = 1;
        vm.pager.itemsPerPage = 5;
        vm.pager.pagesInPager = 5;
        vm.pager.currentPage = 1;
        vm.pager.totalPages = 1;
        /**
         * Total number of items in all pages
         * @type {number}
         */
        vm.pager.totalItems = 21;
        vm.sort = "name";
        vm.pager.incrementPage = incrementPage;
        vm.pager.decrementPage = decrementPage;
        vm.pager.nextPage = nextPage;
        vm.pager.previousPage = previousPage;
        vm.pager.setPage = setPage;
        vm.setTotalPages = setTotalPages;

        $scope.pageChanged = pageChanged;
        
        getPaginated();
        setTotalPages();

        function setTotalPages() {
            vm.pager.totalPages = Math.ceil(vm.pager.totalItems / vm.pager.itemsPerPage);
        };
    
        function pageChanged() {
            getPaginated();
        };

        function setPage(page) {
            vm.pager.currentPage = page;
        };


        function incrementPage() {
            vm.pager.totalPages = Math.ceil(vm.pager.totalItems / vm.pager.itemsPerPage);
            console.log("totalPages", vm.pager.totalPages,
                "itemsInPage", vm.pager.itemsInPage, "vm.pager.page");
            if(vm.pager.currentPage >= vm.pager.totalPages){
                return;
            }
            vm.pager.currentPage++;
        };

        function decrementPage() {
            if(vm.pager.currentPage > 1){
                vm.pager.currentPage--;
            }
        };

        function nextPage() {
            incrementPage();
            getPaginated();
        };

        function previousPage() {
            decrementPage();
            getPaginated();
        };

        function getPaginated() {
            catalogFactory.paginate(vm.pager.currentPage, vm.pager.itemsPerPage, vm.sort)
                .success(function (data) {
                    vm.processing = false;
                    vm.products = data;
                });
        };

    };

    /**
     *
     * @param productFactory
     * @constructor
     */
    function ProductCreateController(productFactory) {

    };

})();

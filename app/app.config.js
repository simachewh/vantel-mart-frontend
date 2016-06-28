/**
 * Created by Simachew on 27-Jun-16.
 */

angular
    .module("vantelMart")
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
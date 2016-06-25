/**
 * Created by Simachew on 25-Jun-16.
 */

angular
    .module("app.services", []);
angular
    .module("app.controllers", []);
angular
    .module("vantelMart", [
        "ngRoute",
        "app.services",
        "app.controllers"
    ]);
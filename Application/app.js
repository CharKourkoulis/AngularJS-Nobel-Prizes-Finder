
(function () {


    var myAPP = angular.module("myAPP", ["ngRoute"]);

    myAPP.config(function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'pages/home.html',
                controller: 'HomeController'
            }).
            when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'HomeController'
            }).
            when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'AboutController'
            }).
            when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'ContactController'
            }).
            when('/nobel', {
                templateUrl: 'pages/nobel.html',
                controller: 'NobelController'
            }).
            otherwise({
                redirectTo: '/home'
            });
    });

}());
(function () {
    var app = angular.module("myAPP");


    var ContactController = function ($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    };

    app.controller("ContactController", ContactController);

}());



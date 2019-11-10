(function () {
    var app = angular.module("myAPP");


    var HomeController = function ($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    };

    app.controller("HomeController", HomeController);

}());








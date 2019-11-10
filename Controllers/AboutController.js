(function () {
    var app = angular.module("myAPP");


    var AboutController = function ($scope) {
        $scope.message = 'Look! I am an about page.';
    };

    app.controller("AboutController", AboutController);

}());
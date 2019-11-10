(function () {
    var app = angular.module("myAPP");


    var NobelController = function ($scope, nobelfactory, $routeParams) {
     

        var onPrizes = function (data) {
           
            $scope.prizes = data.prizes;
        };


        var onLeaurate = function (data) {
           
            $scope.bornCountry = data.laureates[0].bornCountry;
        };

        var onError = function (reason) {
           
            $scope.error = "Could not fetch the data.";
        };

        $scope.onSubmit = function () {
            nobelfactory.getPrizes($scope.year, $scope.yearTo, $scope.category, $scope.numberOfLaureates).then(onPrizes, onError);
        }


        $scope.onLeaurate = function (id) {
            
            nobelfactory.getLaureate(id).then(onLeaurate , onError);
        }




         //Prosoxi panta ta get meta apo dilomenes sinartiseis
        //$scope.username = $routeParams.username;

    };


        app.controller("NobelController", NobelController);

}());
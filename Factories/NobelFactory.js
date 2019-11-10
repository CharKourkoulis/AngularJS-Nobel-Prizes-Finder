(function () {

    var nobelfactory = function ($http) {

        const uri = "http://api.nobelprize.org/v1/prize.json?";
        


        var getPrizes = function (yearValue, yearToValue, categoryValue, numberOfLaureatesValue) {

            var year = "year=" + yearValue;
            var yearto = "yearTo=" + yearToValue;
            var category = "category=" + categoryValue;
            var numberOfLaureates = "numberOfLaureates=" + numberOfLaureatesValue;
            var k = "&";

            return $http.get(uri + year + k + yearto + k + category + k + numberOfLaureates)
                .then(function (response) {
                    return response.data;
                });
        };


        var getLaureate = function (id) {

            return $http.get("http://api.nobelprize.org/v1/laureate.json?id=" + id).then(function (response) {

                
                return response.data;
            });
        }





        return {
            getPrizes: getPrizes,
            getLaureate: getLaureate 
           
        };

    };

    var module = angular.module("myAPP");
    module.factory("nobelfactory", nobelfactory);

}());
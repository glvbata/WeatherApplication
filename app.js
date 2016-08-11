var weatherApp = angular.module("weatherApp", ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider){
   $routeProvider.when("/", {
       templateUrl: "./Pages/Home.html",
       controller: "homeController"
   })
   .when("/forecast", {
       templateUrl: "./Pages/Forecast.html",
       controller: "forecastController"
   });
});

weatherApp.service('cityService', function() {
   this.city = "New York, NY";
    
});

weatherApp.controller("homeController", ["$scope" ,"cityService", function($scope, cityService) {
    $scope.city = cityService.city;
    
    $scope.$watch("city", function() {
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller("forecastController", ["$scope",  "cityService", function($scope, cityService) {
    $scope.city = cityService.city;
    $scope.test = "test";
}]);
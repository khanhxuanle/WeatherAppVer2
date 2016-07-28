// Controllers

weatherApp.controller('homeController', ['$scope', '$location', 'cityService',  function($scope, $location, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        
        cityService.city = $scope.city;
        console.log(cityService.city);
    });
    
    $scope.submit = function() {
        $location.path("/forecast")
    }
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', function($scope, $resource, $routeParams, cityService, weatherService) {
    
    $scope.city = cityService.city;
    
    $scope.day = $routeParams.days || 2;
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.day);
    
    console.log($scope.weatherResult);
    
    $scope.covertToDate = function(dt) {
      
        return new Date(dt * 1000);
    };
    
}]);
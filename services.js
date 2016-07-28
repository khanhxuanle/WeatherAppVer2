// Services

weatherApp.service('cityService', function() {
    
   this.city = 'Ha Noi';
    
});


weatherApp.service('weatherService', ['$resource', function($resource) {

    this.GetWeather = function (city, day) {

        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        var weatherResult = weatherAPI.get({
            q: city,
            cnt: day,
            lang: 'vi',
            units: 'metric',
            APPID: '308c9644209581b934953762770eb74b'
        });
        
        return weatherResult;

    }



}]);
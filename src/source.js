let weather = {
    "apiKey": "81adc3a8296f11faef000f4848eede91",
    fetchWeather : function(city, state, country){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "," + country + "&appid={API key}"
        ).then((response) => response.json()).then((data) => console.log(data));
    }
}
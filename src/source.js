let weather = {
    apiKey: "81adc3a8296f11faef000f4848eede91",
    
}

function fetchWeather(){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Hillsdale&appid=81adc3a8296f11faef000f4848eede91"
    )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
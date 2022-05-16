var search = $("#search");
var searchBar = $("#search-bar");
var searchBtn = $("#search-btn");
var cords
var city = $("#city")
var results = $("#results")

function getCords() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d83fb296c29f5fbb001985a71c347dac")
        .then(response => response.json())
        .then(data => {
            cords = data.coord
            getWeatherData(cords)
        })
        console.log("test")
}

function getWeatherData(coordinates) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+coordinates.lat+"&lon="+coordinates.lon+"&appid=d83fb296c29f5fbb001985a71c347dac")
    .then(response => response.json())
    .then(data => {console.log(data)
        console.log(data.daily[0].weather[0].main)
        console.log(data.current.temp)
    })
}

function search () {
    getCords();
    getCords.append;
    getWeatherData.append;
}

searchBtn.addEventListener("click", search);










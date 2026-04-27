async function getWeather(){
    let city = document.getElementById("cityInput").value;

    let apiKey = "9c1256a2271afd2745e86a00733c94be";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    if (data.cod == 200){
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = `${data.main.temp}C`;
        document.getElementById("condition").innerText = data.weather[0].main;
    } else {
        document.getElementById("cityName").innerText = "";
        document.getElementById("temp").innerText = "";
        document.getElementById("condition").innerText = "City not found";
    }
}
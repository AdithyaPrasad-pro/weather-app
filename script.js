async function getWeather(){

    let city = document.getElementById("cityInput").value;

    if (city === "") {
        document.getElementById("condition").innerText = "Enter a city name";
        return;
    }

    let apiKey = "9c1256a2271afd2745e86a00733c94be";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    document.getElementById("condition").innerText = "Loading...";

    let response = await fetch(url);
    let data = await response.json();

    console.log(data);
   

    if (data.cod == 200 || data.cod == "200"){

        let weather = data.weather?.[0]?.description?.toLowerCase() || "";

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = `${data.main.temp} C`;
        document.getElementById("condition").innerText =
          data.weather?.[0]?.main || "N/A";
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} m/s`;

         let icon = data.weather[0].icon;
        document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        if (weather.includes("clear")){
            document.body.style.background = "linear-gradient(to right, #fbc2eb, #a6c1ee)";
        }
        else if (weather.includes("rain")){
            document.body.style.background = "linear-gradient(to right, #4e54c8, #8f94fb)";
        }
        else if (weather.includes("cloud")){
            document.body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
        }
        else {
            document.body.style.background = "#4facfe";
        }

    } else {
        document.getElementById("cityName").innerText = "";
        document.getElementById("temp").innerText = "";
        document.getElementById("condition").innerText = "City not found";
        document.getElementById("humidity").innerText = "";
        document.getElementById("wind").innerText = "";
    }
}
document.getElementById("cityInput").addEventListener("keypress",function(event) {
    if(event.key == "Enter") {
        getWeather();
    }}
    );

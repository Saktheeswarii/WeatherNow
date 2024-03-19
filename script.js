const apikey = '9eb5a16d41ab5afec5f90bf1a0f8e6ff';
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        const data = await response.json();

       if(response.status==404)
       {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
       }
       else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    
        let weatherIconPath = ""; 
        const weatherMain = data.weather[0].main.toLowerCase();
        if (weatherMain.includes("clear")) {
            weatherIconPath = "images/clear.png";
        }
        else if (weatherMain.includes("cloud")) {
            weatherIconPath = "images/clouds.png";
        }
        else if (weatherMain.includes("drizzle")) {
            weatherIconPath = "images/drizzle.png";
        }else if (weatherMain.includes("humidity")) {
            weatherIconPath = "images/humidity.png";
        }else if (weatherMain.includes("mist")) {
            weatherIconPath = "images/mist.png";
        }else if (weatherMain.includes("rain")) {
            weatherIconPath = "images/rain.png";
        }else if (weatherMain.includes("snow")) {
            weatherIconPath = "images/snow.png";
        }else if (weatherMain.includes("wind")) {
            weatherIconPath = "images/wind.png";
        }

        weathericon.src = weatherIconPath;

        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    btn.addEventListener("click", () => {
        checkWeather(search.value.trim()); // Trim whitespace from the input value
    });
});

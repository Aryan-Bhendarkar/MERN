

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate()-1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.getElementById('app')
const getWeather = async () => {
    try{
        const cityName = document.getElementById('searchBarInput').value || 'Bangalore';
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cea3657ac5f484634fbd3b4ec3e4d874`,{ 
            headers:{
                Accept: 'application/json'
            }
        });
        const weatherData = await weatherDataFetch.json();
        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].description}`
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" />`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp - 273.15, 2)} C</h2>`
        tempMax.innerHTML = `${Math.round(weatherData.main.temp_max - 273.15, 2)}`
        tempMin.innerHTML = `${Math.round(weatherData.main.temp_min- 273.15, 2)}`
        console.log(weatherData);
    }
    catch(error){
        console.log(error)
    }
}

getWeather();
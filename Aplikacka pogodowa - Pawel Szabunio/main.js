const input = document.querySelector('input');
const button = document.querySelector('button');
const errorMessage = document.querySelector('.error');
const date = document.querySelector('.date');
const cityName = document.querySelector('.cityName');
const img = document.querySelector('img');
const temperatureDescription = document.querySelector('.temperatureDescription');
const temperature = document.querySelector('.temperature');
const feelsTemperature = document.querySelector('.feelsTemparature');
const pressure = document.querySelector('.pressure');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=c24647ff254dafacd5d3f31ce1b0081d';
const apiUnits = '&units=metric';
const apiLang = '&lang=pl';

const checkWeather = () => {
    const apiCity = input.value || 'Gdańsk';
    const URL = apiLink + apiCity + apiKey + apiUnits + apiLang
    console.log(URL);

    axios.get(URL).then(response => {
        console.log(response.data);
        date.textContent = `${new Date().toString().slice(4, 21)}`
        cityName.textContent = `${response.data.name} ${response.data.sys.country}`
        img.src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
        temperatureDescription.textContent = `${response.data.weather[0].description}`
        temperature.textContent = `${Math.floor(response.data.main.temp)} °C`
        feelsTemperature.textContent = `${Math.floor(response.data.main.feels_like)} °C`;
        pressure.textContent = `${response.data.main.pressure} hPa`
        humidity.textContent = `${response.data.main.humidity} %`
        windSpeed.textContent = `${response.data.wind.speed} m/s`;
        errorMessage.textContent = '';

    }).catch(error => {
        if (error.response.data.cod == '404') {
            errorMessage.textContent = "Nie ma takiego miasta"
        }
        [cityName, temperature, feelsTemperature, temperatureDescription, pressure, humidity, windSpeed, date].forEach(el => {
            el.textContent = '';
        })
        img.src = '';
    }).finally(() => {
        input.value = '';
    })
}

button.addEventListener('click', checkWeather);

function background1() {
    document.querySelector('body').style.background = "url('images/spring.jpg') center center / cover";
    document.querySelector('header').style.backgroundColor = "#5fa277";
    document.querySelector('header').style.boxShadow = "18px 17px 39px -6px #17252c";
    document.querySelector('.error').style.backgroundColor = "#c6e391e1";
    document.querySelector('#show-weather').style.backgroundColor = "#009933";
    document.querySelector('.container-result').style.backgroundColor = "#c6e391e1";
    document.querySelector('.app-bottom').style.backgroundColor = "#c6e391e1";
    document.querySelector('.seasonWindow').style.backgroundColor = "#c6e391e1";
    document.querySelector('.seasonWindow').style.boxShadow = "18px 17px 39px -6px #5fa277";
    document.querySelector('footer').style.backgroundColor = "#c6e391";
    document.querySelector('footer').style.boxShadow = "18px 17px 39px -6px #5fa277";
}
function background2() {
    document.querySelector('body').style.background = "url('images/summer.jpg') center center / cover";
    document.querySelector('header').style.backgroundColor = "#cef382";
    document.querySelector('header').style.boxShadow = "18px 17px 39px -6px #f59a59";
    document.querySelector('.error').style.backgroundColor = "#4490aae1";
    document.querySelector('#show-weather').style.backgroundColor = "#f09a56";
    document.querySelector('.container-result').style.backgroundColor = "#4490aae1";
    document.querySelector('.app-bottom').style.backgroundColor = "#4490aae1";
    document.querySelector('.seasonWindow').style.backgroundColor = "#4490aae1";
    document.querySelector('.seasonWindow').style.boxShadow = "18px 17px 39px -6px #014670";
    document.querySelector('footer').style.backgroundColor = "#4490aa";
    document.querySelector('footer').style.boxShadow = "18px 17px 39px -6px #014670";
}
function background3() {
    document.querySelector('body').style.background = "url('images/autumn.jpg') center center / cover";
    document.querySelector('header').style.backgroundColor = "#d56b47";
    document.querySelector('header').style.boxShadow = "18px 17px 39px -6px #27203d";
    document.querySelector('.error').style.backgroundColor = "#714e6fe1";
    document.querySelector('#show-weather').style.backgroundColor = "#f09a56";
    document.querySelector('.container-result').style.backgroundColor = "#714e6fe1";
    document.querySelector('.app-bottom').style.backgroundColor = "#714e6fe1";
    document.querySelector('.seasonWindow').style.backgroundColor = "#714e6fe1";
    document.querySelector('.seasonWindow').style.boxShadow = "18px 17px 39px -6px #704d88";
    document.querySelector('footer').style.backgroundColor = "#714e6f";
    document.querySelector('footer').style.boxShadow = "18px 17px 39px -6px #704d88";
}
function background4() {
    document.querySelector('body').style.background = "url('images/winter.jpg') center center / cover";
    document.querySelector('header').style.backgroundColor = "#8fceef";
    document.querySelector('header').style.boxShadow = "18px 17px 39px -6px #115d84";
    document.querySelector('.error').style.backgroundColor = "#d8f2ffe1";
    document.querySelector('#show-weather').style.backgroundColor = "#708ce7";
    document.querySelector('.container-result').style.backgroundColor = "#d8f2ffe1";
    document.querySelector('.app-bottom').style.backgroundColor = "#d8f2ffe1";
    document.querySelector('.seasonWindow').style.backgroundColor = "#d8f2ffc7";
    document.querySelector('.seasonWindow').style.boxShadow = "18px 17px 39px -6px #57c7ff";
    document.querySelector('footer').style.backgroundColor = "#d8f2ff";
    document.querySelector('footer').style.boxShadow = "18px 17px 39px -6px #57c7ff";
}
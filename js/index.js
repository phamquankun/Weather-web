const APP_ID = 'efd189cd84ff7480076d1ebd3ef2dd2b';
const searchInput = document.querySelector('#search-input');
const cityname = document.querySelector('.city-name');
const weatherstate = document.querySelector('.weather-state');
const weathericon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.wind-speed');
searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async (res) => {
            const data = await res.json();
            console.log('[Search Input]', data);
            cityname.innerHTML = data.name || DEFAULT_VALUE;
            weatherstate.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weathericon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
            windspeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;

        })
});
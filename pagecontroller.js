import { Weather } from "./weather.js";
export { PageController };


function PageController() {
    let weatherContainer = document.querySelector('.weather-container');
    let primaryWeather = document.querySelector('.primary-weather');
    let secondaryWeather = document.querySelector('.secondary-weather');
    

    const button = document.querySelector('#search-button');
    button.addEventListener('click' , getCurrentWeather);

    let currentWeather = undefined;
    
    const getWeather = () => currentWeather;

    const setWeather = (value) => {
        currentWeather = value;
    }

    function round(number) {
        let value = number - Math.floor(number);
    
        if (value < 0.5) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    };

    async function getCurrentWeather() {
        let search = document.querySelector('#search-bar');
        let url = BASE_URL + search;
        const response = await fetch(url , {mode: 'cors'});
        const data = await response.json();

        let weather = Weather();
        weather.setCity(data.location.name);
        weather.setRegion(data.location.region);
        weather.setTemperature(round(data.location.current.temp_f));
        weather.setHumidity(data.current.humidity);
        weather.setWind(round(data.current.wind_mph));
        setWeather(weather);
        
    }
    

}

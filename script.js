const BASE_URL = "https://api.weatherapi.com/v1/current.json?key=1078f2b1500d4c6ab4d95627240303&q=";
function Weather() {
    let city = undefined;
    let region = undefined;
    let temperature = undefined;
    let humidity = undefined;
    let wind = undefined;

    const getCity = () => city;

    const setCity = (value) => {
        city = value;
    };

    const getRegion = () => region;

    const setRegion = (value) => {
        region = value;
    };

    const getTemperature = () => temperature;

    const setTemperature = (value) => {
        temperature = value;
    };

    const getHumidity = () => humidity;

    const setHumidity = (value) => {
        humidity = value;
    };

    const getWind = () => wind;

    const setWind = (value) => {
        wind = value;
    };

    return {
        getCity,
        setCity,
        getRegion,
        setRegion,
        getTemperature,
        setTemperature,
        getHumidity,
        setHumidity,
        getWind,
        setWind
    };
}

function PageController() {
    
    let currentWeather = undefined;
    
    const getWeather = () => currentWeather;

    const setWeather = (value) => {
        currentWeather = value;
    }

    const getCurrentWeather = async function () {
        let search = document.querySelector('#search-bar').value;
        let url = BASE_URL + search;
        const response = await fetch(url , {mode: 'cors'});
        const data = await response.json();
        let weather = Weather();
        weather.setCity(data.location.name);
        weather.setRegion(data.location.region);
        weather.setTemperature(round(data.current.temp_f));
        weather.setHumidity(data.current.humidity);
        weather.setWind(round(data.current.wind_mph));
        setWeather(weather);
        
        
    }

    function round(number) {
        let value = number - Math.floor(number);
    
        if (value < 0.5) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    };

    return {
        getWeather,
        setWeather,
        getCurrentWeather

    }
}

function ScreenController() {
    
    const page = PageController();

    

    const updateScreen = () => {
        let place = document.querySelector('.place');
        let temp = document.querySelector('.temperature');
        let feels = document.querySelector('.feels');
        let humidity = document.querySelector('.humidity');
        let wind = document.querySelector('.wind-speed');

        place.textContent = `${page.getWeather().getCity()}, ${page.getWeather().getRegion()}`;
        temp.textContent = `${page.getWeather().getTemperature()} °F`;
        humidity.textContent = `Humidity: ${page.getWeather().getHumidity()}%`;
        wind.textContent = `Wind: ${page.getWeather().getWind()}MPH`;

    }

    function placeholderSetup() {
        const bar = document.querySelector('#search-bar');
        bar.addEventListener('focus' , () => {
            bar.placeholder = "";
        });
        bar.addEventListener('blur' , () => {
            bar.placeholder = "Enter city name";
        });
    }

    function searchButtonSetup(page) {
        const button = document.querySelector('#search-button');
        button.addEventListener('click' , async function () {
            await page.getCurrentWeather();
            updateScreen();
            

        })
    }

    placeholderSetup();
    searchButtonSetup(page);

    return {
        updateScreen
    }
}




let test = ScreenController();


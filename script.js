
const BASE_URL = "https://api.weatherapi.com/v1/current.json?key=1078f2b1500d4c6ab4d95627240303&q=";

const API_KEY = "1078f2b1500d4c6ab4d95627240303&"

function placeholderSetup() {
    const bar = document.querySelector('#search-bar');
    bar.addEventListener('focus' , () => {
        bar.placeholder = "";
    });
    bar.addEventListener('blur' , () => {
        bar.placeholder = "Enter city name";
    });
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
    let search = prompt("Please enter the location of the weather you want to see!");
    let url = BASE_URL + search;
    const response = await fetch(url , {mode: 'cors'});
    const data = await response.json();
    const location = `${data.location.name}, ${data.location.region}`;
    const temperature = `${round(data.current.temp_f)}°F is the current temperature in ${location}`;
    console.log(temperature);
}

placeholderSetup();
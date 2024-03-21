



function Weather() {
    let city = undefined;
    let region = undefined;
    let temperature = undefined;
    let humidity = undefined;
    let wind = undefined;

    const getCity = () => city;

    const setCity = (value) => {
        cityName = value;
    };

    const getRegion = () => region;

    const setRegion = (value) => {
        regionName = value;
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
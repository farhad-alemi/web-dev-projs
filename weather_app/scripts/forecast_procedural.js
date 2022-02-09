const key = '70d06c588b5d4867b2962319220802';
const HTTP_RESPONSE_CODE = 200;

async function getCityWeather(city) {
    const base = 'http://api.weatherapi.com/v1/current.json';
    const query = `?key=${key}&q=${city}&aqi=yes`;
    const response = await fetch(base + query);

    if (response.status !== HTTP_RESPONSE_CODE) {
        throw new Error();
    }
    return await response.json();
}

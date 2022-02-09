class Forecast {
    constructor() {
        this.key = '70d06c588b5d4867b2962319220802';
        this.HTTP_RESPONSE_CODE = 200;
        this.base = 'http://api.weatherapi.com/v1/current.json';
    }

    async getCityWeather(city) {
        const query = `?key=${this.key}&q=${city}&aqi=yes`;
        const response = await fetch(this.base + query);
    
        if (response.status !== this.HTTP_RESPONSE_CODE) {
            throw new Error();
        }
        return await response.json();
    }

    async updateCity(city) {
        return await this.getCityWeather(city);
    }
}
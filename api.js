class WeatherApi{
    constructor(){
        this.baseUrl="https://api.openweathermap.org/data/2.5/weather";
        this.apiKey="ec60a332f6e0aea59fc8222fc973fcb9";
    }

   async getWeatherInfo(cityName){
     const response= await  fetch(`${this.baseUrl}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`);
      const data=await response.json();
      return data;
    }
}
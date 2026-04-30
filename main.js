const searchInput=document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");
const cityNameEl =document.querySelector(".cityName");
const degreeEl =document.querySelector(".degree");
const descEl =document.querySelector(".desc");


const weatherApi=new WeatherApi();
runEventListener();

function runEventListener(){
 searchForm.addEventListener("submit", findWeatherInfo);
}

function findWeatherInfo(e){
    e.preventDefault();
    const cityName =searchInput.value.trim();
    if(cityName!==""){
        weatherApi.getWeatherInfo(cityName)
        .then(data=>{
            console.log(data);
            display(data);
        })
        
    }
}

function display(data){
    cityNameEl.textContent=data.name;
    degreeEl.textContent=Math.round(data.main.temp)+"°";
    descEl.textContent=data.weather[0].description;
    searchInput.value="";
}
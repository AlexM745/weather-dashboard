

// weather api key
let apiKey = "fc260512ce40c86fc05bd85accb60887";

// DOM elements
let searchForm = document.querySelector("#search-form");
let searchInputVal = document.querySelector("#search-input");
let currentForecast = document.querySelector("#current-forecast");
let cityName = document.querySelector("#city-name");
let cityTemp = document.querySelector("#temp");
let cityWind = document.querySelector("#wind");
let cityHumidity = document.querySelector("#humid");



// searches for the city name through the weather API
function searchForecast (event){

    event.preventDefault();

    console.log("input", searchInputVal.value);
    console.log("api key", apiKey);

    if (searchInputVal.value.trim() == null) {
        alert("Please Enter a City Name!");// alert for when the search button is pressed with no city name.
        return;
    }

// current weather api call
    let weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+searchInputVal.value.trim()+"&appid="+ apiKey;
    

    fetch (weatherApiUrl)
        .then (response =>{
            if(!response.ok){
                throw new ERROR("Network reponse was not okay");
            }
            return response.json();


        })

        .then(data => {
            cityName.textContent = data.name;
            cityHumidity.textContent = data.main.humidity+"%";

            let  fahrenheit = (data.main.temp - 273.15) * 1.80 + 32;
            cityTemp.textContent = fahrenheit.toFixed(2);

            let mph = (data.wind.speed)* 2.237;
            cityWind.textContent = mph.toFixed(1)+" MPH";
    
            console.log(data);
        })

        .catch(error =>{
            console.error("Error: ", error)
        })

        
 // forcast api call
    let forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+searchInputVal.value.trim()+"&appid="+ apiKey;
}

// Search input and button function

searchForm.addEventListener('submit', searchForecast);//event listener for the search form button
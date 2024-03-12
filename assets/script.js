

// weather api key
let apiKey = "fc260512ce40c86fc05bd85accb60887";

// DOM elements
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
// current weather DOM elements
let currentForecast = document.querySelector("#current-forecast");
let cityName = document.querySelector("#city-name");
let cityTemp = document.querySelector("#curtemp");
let cityWind = document.querySelector("#curwind");
let cityHumidity = document.querySelector("#curhumid");
// 5 day fore cast DOM elements
// day1
let fordate0 = document.querySelector("#date0");
let fortemp0 = document.querySelector("#temp0");
let forwind0 = document.querySelector("#win0");
let forhum0 = document.querySelector("#humid0");
// day2
let fordate1 = document.querySelector("#date1");
let fortemp1 = document.querySelector("#temp1");
let forwind1 = document.querySelector("#win1");
let forhum1 = document.querySelector("#humid1");
//day 3
let fordate2 = document.querySelector("#date2");
let fortemp2 = document.querySelector("#temp2");
let forwind2 = document.querySelector("#win2");
let forhum2 = document.querySelector("#humid2");
//day4
let fordate3 = document.querySelector("#date3");
let fortemp3 = document.querySelector("#temp3");
let forwind3 = document.querySelector("#win3");
let forhum3 = document.querySelector("#humid3");
//day 5
let fordate4 = document.querySelector("#date4");
let fortemp4 = document.querySelector("#temp4");
let forwind4 = document.querySelector("#win4");
let forhum4 = document.querySelector("#humid4");

let cities = [];

// searches for the city name through the weather API
function searchForecast(event) {

    event.preventDefault();
    let citiesInput = searchInput.value.trim();

    console.log("input", searchInput.value);


    if (citiesInput == "") {
        alert("Please Enter a City Name!");// alert for when the search button is pressed with no city name.
        return;
    }

    cities.push(citiesInput);
    searchInput.value = "";

    // current weather api call
    let weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citiesInput + "&appid=" + apiKey;


    fetch(weatherApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new ERROR("Network reponse was not okay");
            }
            return response.json();


        })

        .then(data => {
            let curricon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

            //  adds the data in the api to the html 
            let date = new Date((data.dt) * 1000);
            cityName.innerHTML = data.name + " " + date.toLocaleDateString('en-US') + "<img src =" + curricon + ">"; // adds the name of the city, current day, and weather icon
            cityHumidity.innerHTML = data.main.humidity + "%";// current humidity

            let fahrenheit = (data.main.temp - 273.15) * 1.80 + 32// converts kelvin to fahrenheit
            cityTemp.innerHTML = fahrenheit.toFixed(2) + "&#8457;";// adds the fahreheit to the html with its symbol.


            let mph = (data.wind.speed) * 2.237; // gets meters per sec and mutiplies its to convert it to MPH
            cityWind.innerHTML = mph.toFixed(1) + " MPH";// adds the mph to the html with MPH


            console.log("current weather", data);
        })

        .catch(error => {
            console.error("Error: ", error)
        })


    // forcast api call
    let forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + citiesInput + "&appid=" + apiKey;

    fetch(forecastApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new ERROR("Network reponse was not okay");
            }
            return response.json();
        })
        .then(data => {

            //day 1
            let foredate0 = new Date((data.list[((0 + 1) * 8) - 1].dt) * 1000);
            let foreicons0 = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
            let foreFahrenheit0 = ((data.list[((0 + 1) * 8) - 1].main.temp - 273.15) * 1.80 + 32).toFixed(2);
            let forehumid0 = data.list[((0 + 1) * 8) - 1].main.humidity + "%";
            let foreMph0 = ((data.list[((0 + 1) * 8) - 1].wind.speed) * 2.237).toFixed(1);

            fordate0.innerHTML = foredate0.toLocaleDateString('en-US') + "<img src =" + foreicons0 + ">";
            fortemp0.innerHTML = foreFahrenheit0 + " &#8457;";
            forwind0.innerHTML = foreMph0 + " MPH";
            forhum0.innerHTML = forehumid0;
            // day 2
            let foredate1 = new Date((data.list[((1 + 1) * 8) - 1].dt) * 1000);
            let foreicons1 = "https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png";
            let foreFahrenheit1 = ((data.list[((0 + 1) * 8) - 1].main.temp - 273.15) * 1.80 + 32).toFixed(2);
            let forehumid1 = data.list[((1 + 1) * 8) - 1].main.humidity + "%";
            let foreMph1 = ((data.list[((1 + 1) * 8) - 1].wind.speed) * 2.237).toFixed(1)

            fordate1.innerHTML = foredate1.toLocaleDateString('en-US') + "<img src =" + foreicons1 + ">";
            fortemp1.innerHTML = foreFahrenheit1 + " &#8457;";
            forwind1.innerHTML = foreMph1 + " MPH";
            forhum1.innerHTML = forehumid1;
            // day 3
            let foredate2 = new Date((data.list[((2 + 1) * 8) - 1].dt) * 1000);
            let foreicons2 = "https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png";
            let foreFahrenheit2 = ((data.list[((2 + 1) * 8) - 1].main.temp - 273.15) * 1.80 + 32).toFixed(2);
            let forehumid2 = data.list[((2 + 1) * 8) - 1].main.humidity + "%";
            let foreMph2 = ((data.list[((2 + 1) * 8) - 1].wind.speed) * 2.237).toFixed(1)

            fordate2.innerHTML = foredate2.toLocaleDateString('en-US') + "<img src =" + foreicons2 + ">";
            fortemp2.innerHTML = foreFahrenheit2 + " &#8457;";
            forwind2.innerHTML = foreMph2 + " MPH";
            forhum2.innerHTML = forehumid2;
            // // day 4
            let foredate3 = new Date((data.list[((3 + 1) * 8) - 1].dt) * 1000);
            let foreicons3 = "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png";
            let foreFahrenheit3 = ((data.list[((3 + 1) * 8) - 1].main.temp - 273.15) * 1.80 + 32).toFixed(2);
            let forehumid3 = data.list[((3 + 1) * 8) - 1].main.humidity + "%";
            let foreMph3 = ((data.list[((3 + 1) * 8) - 1].wind.speed) * 2.237).toFixed(1)

            fordate3.innerHTML = foredate3.toLocaleDateString('en-US') + "<img src =" + foreicons3 + ">";
            fortemp3.innerHTML = foreFahrenheit3 + " &#8457;";
            forwind3.innerHTML = foreMph3 + " MPH";
            forhum3.innerHTML = forehumid3;
            // // day 5
            let foredate4 = new Date((data.list[((4 + 1) * 8) - 1].dt) * 1000);
            let foreicons4 = "https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png";
            let foreFahrenheit4 = ((data.list[((4 + 1) * 8) - 1].main.temp - 273.15) * 1.80 + 32).toFixed(2);
            let forehumid4 = data.list[((4 + 1) * 8) - 1].main.humidity + "%";
            let foreMph4 = ((data.list[((4 + 1) * 8) - 1].wind.speed) * 2.237).toFixed(1)

            fordate4.innerHTML = foredate4.toLocaleDateString('en-US') + "<img src =" + foreicons4 + ">";
            fortemp4.innerHTML = foreFahrenheit4 + " &#8457;";
            forwind4.innerHTML = foreMph4 + " MPH";
            forhum4.innerHTML = forehumid4;


            console.log("forecast", data);
        })



        .catch(error => {
            console.error("Error: ", error)
        })

    storeCitites();
    renderSearchHistory();
}

// Search input and button function

searchForm.addEventListener('submit', searchForecast);//event listener for the search form button

// function to add cities to search history
function renderSearchHistory() {
    let history = document.querySelector("#search-history");
    history.innerHTML = "";
    
    for (i = 0; i < cities.length; i++) {
        let city = cities[i];

        let list = document.createElement("ol");
        list.clas
        list.textContent = city;
        list.dataset.index = i;

        history.appendChild(list);

    }

}


function storedCitites() {
    //get the stored cities from local storage
    let savedCitites = JSON.parse(localStorage.getItem("cities"));

    if (savedCitites !== null) {
        cities = savedCitites;
    }

    // helper function to load the citites on the HTML
    renderSearchHistory();
 
}
// sets citites into local storage
function storeCitites() {
    localStorage.setItem("cities", JSON.stringify(cities));

}

console.log(localStorage.getItem("cities"));
// load the storedCities function on window load
storedCitites();
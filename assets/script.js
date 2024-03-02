

// weather api key
let apiKey = "fc260512ce40c86fc05bd85accb60887";

// DOM elements
let searchForm = document.querySelector("#search-form");
let searchInputVal = document.querySelector("#search-input").value;

// Search input and button function
function searchFormSubmit(event) {
    event.preventDefault();// prevents page from loading after clicking.

    searchInputVal.value;// the text inputed in the search bar 
    console.log(searchInputVal); // checks that the input value works
    if (!searchInputVal) {
        alert("Please Enter a City Name!");// alert for when the search button is pressed with no city name.
        return;
    }

}

searchForm.addEventListener('submit', searchFormSubmit);//event listener for the search form button
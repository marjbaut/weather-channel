var APIKey = "31cd83642966fb102e9e053f0aff908c";
var city =  document.getElementById('inputCity');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var searchButton = document.getElementById('search-btn');

// click in search buttoneventListener
searchButton.addEventListener('click', function(event){
    event.preventDefault();


    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    console.log('you click the search button')

    }

)

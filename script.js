var APIKey = "31cd83642966fb102e9e053f0aff908c";

var userFormEl = document.querySelector('.form-label');

var searchButton = document.getElementById('search-btn');



// function cityInput(cityEl){
//     var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&appid=" + APIKey; 
//     fetch(queryURL)
//     .then(function(response){
//         response.json()})
//     .then(function(response){
//         var cityName = userInput;
//     })
// }

let a= "";
searchButton.addEventListener('click', function (event){
    event.preventDefault();
    // var userInput= textAreaEl.value;
    var cityInput =  document.getElementById('inputCity');
    var textEntered = cityInput.value;
    console.log(textEntered);
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + textEntered +'&APPID=' + APIKey )
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data.name);
        console.log(data.sys.country);
        let tempF= ((data.main.temp - 273.15) * 9/5 + 32).toFixed(2)
        a=`<h1> </h1>
        <h1> ${data.name}, ${data.sys.country} </h1>
        <h3>${data.weather[0].description}</h3>
        <h4>${tempF} °F</h4>
        <h3>line</h3>`;
        document.getElementById('cityTempMain').innerHTML= a;

    })
})

//----THIS CODE WORKS, have to find a way to enter the country code-----
// searchButton.addEventListener('click', function (event){
//     event.preventDefault();
//     // var userInput= textAreaEl.value;
//     // cityInput(userInput);
//     fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=31cd83642966fb102e9e053f0aff908c' )
//     .then( function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// })


// // ---------- first 
// searchButton.addEventListener('click', function(event){
//     event.preventDefault();
//    cityEl.textContent = cityEl;
//    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&appid=" + APIKey; 
   
//    //  console.log(city.value);
//     fetch(queryURL)
//        .then(function(response){
//            if(response.ok){
//            response.json()};
//        })
//        .then(function(data){
//            console.log(data);})
// })
// -------------------------




// var getCity = function (city) {
//     var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey; 
  
//     fetch(queryURL)
//       .then(function (response) {
//         if (response.ok) {
//           console.log(response);
//           response.json().then(function (data) {
//             console.log(data);
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to weather');
//       });
//   };
  






// var testToSubmit = function(event){
//     event.preventDefault();
//     var city = cityEl.value;
//     if(city){
//         getCity(city);
//         cityEl.value = '';
//     }else{
//         alert('test')
//     }
// };

// fetch(queryURL)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
// })
// console.log('you click the search button')



// click in search buttoneventListener
// var cityEl =  document.getElementById('inputCity');

// var testToSubmit = document.getElementById('search-btn');
// testToSubmit.addEventListener('click', function(event) {
//         event.preventDefault();
//         var city = cityEl.value;
//         if(city){
//             cityEl.value = '';

//         }else{
//             alert('test')
//         }});


// var formSubmitHandler = function (event) {
//     event.preventDefault();
//   console.log('test');
//     var city = cityEl.value;
  
//     if (city) {
//       getUserRepos(username);

//       cityEl.value = '';
//     } else {
//       alert('Please enter a city');
//     }
//   };

//   var getCity = function (city) {
//     var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey; 
  
//     fetch(queryURL)
//       .then(function (response) {
//         if (response.ok) {
//           console.log(response);
//           response.json()
//         .then(function (data) {
//             console.log(data);
       
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to GitHub');
//       });
//   };
// userFormEl.addEventListener('click', formSubmitHandler);
var APIKey = "ca6c874e976871790d30e8630c5f2a86";
var textAreaEl =  document.getElementById('inputCity');
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


searchButton.addEventListener('click', function (event){
    event.preventDefault();
    // var userInput= textAreaEl.value;
    // cityInput(userInput);
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=31cd83642966fb102e9e053f0aff908c' )
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
})

//----THIS CODE WORKS, have to find a way to enter the country code-----
searchButton.addEventListener('click', function (event){
    event.preventDefault();
    // var userInput= textAreaEl.value;
    // cityInput(userInput);
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=31cd83642966fb102e9e053f0aff908c' )
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
})


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
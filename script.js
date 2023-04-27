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
// here I an trying to pull the 5 day forecast
let currDayInfo= "";
let fore5daysInfo='';
searchButton.addEventListener('click', function (event){
    event.preventDefault();
    // var userInput= textAreaEl.value;
    var cityInput =  document.getElementById('inputCity');
    var textEntered = cityInput.value;
    console.log(textEntered);
    // fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + textEntered +'&callback=test&appid=' + APIKey )
    // .then( function(test){
    //     return test.json();
    // })
    // .then(function(data){
    //     console.log(data);
// this work for the first part of the challenge
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + textEntered +'&appid=' + APIKey )
    .then( function(res){
        return res.json();
    })
    .then(function(data){
        console.log(textEntered);
        console.log(data);
    
        let date = data.list[0].dt_txt;
       let  dateF = dayjs(date).format("MMM DD YYYY");
        console.log(dateF);
        let tempF= ((data.list[0].main.temp - 273.15) * 9/5 + 32).toFixed(1)
        let tempC= ((data.list[0].main.temp - 273.15)).toFixed(1)

        currDayInfo= `
      
        <h1> ${data.city.name}, ${data.city.country} </h1>
        <h3>${data.list[0].weather[0].description}</h3>
        <h4> Temperature: ${tempF} °F  ||   ${tempC} °C  </h4>
        <h4> Humidity: ${data.list[0].main.humidity} %</h4>
        <h4> Wind: ${data.list[0].wind.speed} MPH</h4>`

        
        for (let i=7; i<40; i+=8 ){
            console.log(i);
        let dateFut = data.list[i].dt_txt;  
        let  dateFutF = dayjs(dateFut).format("MMM DD YYYY");
        fore5daysInfo+= `<div class="col-12 col-sm-4 col-lg-2  bg-info  bg-opacity-25">
        <h6> ${dateFutF}  </h6>
        <h5>${data.list[i].weather[0].description}</h5>
        <p> Temperature: ${tempF} °F  ||   ${tempC} °C  </p>
        <p> Humidity: ${data.list[i].main.humidity} %</p>
        <p> Wind: ${data.list[i].wind.speed} MPH</p>
        </div>`
        }
        
        ;
        document.getElementById('cityTempMain').innerHTML= currDayInfo;
        document.getElementById('forecastCont').innerHTML= fore5daysInfo;
    })
})
// console.log(latCity);
// console.log(lonCity);












// copy
// fetch('http://api.openweathermap.org/data/2.5/weather?q=' + textEntered +'&appid=' + APIKey )
// .then( function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//     console.log(data.name);
//     console.log(data.sys.country);
//     currentDate = dayjs().format("MMM DD YYYY")
//     let tempF= ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
//     let tempC= ((data.main.temp - 273.15)).toFixed(1)
//     a=`<h4> ${currentDate}</h4>
//     <h1> ${data.name}, ${data.sys.country} </h1>
//     <h3>${data.weather[0].description}</h3>
//     <h4> Temperature: ${tempF} °F  ||   ${tempC} °C  </h4>
//     <h4> Humidity: ${data.main.humidity} %</h4>
//     <h4> Wind: ${data.wind.speed} MPH</h4>`
//     ;
//     document.getElementById('cityTempMain').innerHTML= a;

// })



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
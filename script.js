var APIKey = "31cd83642966fb102e9e053f0aff908c";

var userFormEl = document.querySelector('.form-label');

var searchButton = document.getElementById('search-btn');

let currDayInfo= "";
let fore5daysInfo='';

searchButton.addEventListener('click', function (event){
    event.preventDefault();

    let cityInput =  document.getElementById('inputCity');
    let textEntered = cityInput.value;
    console.log(textEntered);
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
        <h2>Today!</h2>
        <h1> ${data.city.name}, ${data.city.country} </h1>
        <h3>${data.list[0].weather[0].description}</h3>
        <h4> Temperature: ${tempF} °F  ||   ${tempC} °C  </h4>
        <h4> Humidity: ${data.list[0].main.humidity} %</h4>
        <h4> Wind: ${data.list[0].wind.speed} MPH</h4>`

        
        for (let i=7; i<40; i+=8 ){
            console.log(i);
        let dateFut = data.list[i].dt_txt;  
        let  dateFutF = dayjs(dateFut).format("MMM DD YYYY");
        fore5daysInfo+= `<div class="col-12 justify-content-around col-sm-4 col-lg-2  bg-opacity-25">
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

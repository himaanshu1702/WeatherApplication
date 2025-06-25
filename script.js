//const { default: axios } = require("axios");

const mainParent = document.querySelector('#mainParent');

const lightbtn = document.getElementById('lightbtn');

lightbtn.addEventListener("click", () => {
    document.body.classList.remove("dark-theme");
});

const darkbtn = document.getElementById('darkbtn');

darkbtn.addEventListener("click", () => {
    document.body.classList.add("dark-theme");
});




function getWeather() {
    const city = document.getElementById('cityInput').value.trim();


//postman Api
axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b8468a91cdb837227bd4dadd87a74937&units=metric`)

/* promising , resolved and rejecting'*/
  .then((response)=>{
     const data = response.data;
    const forecast = data.list[0]; 

            mainParent.innerHTML = `
                <div class="weather-info">
                    <h2>${data.city.name}</h2>
                    <p>Forecast Time: ${forecast.dt_txt}</p>
                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="icon" />
                    <p>${forecast.weather[0].main}</p>
                    <p>Temperature: ${forecast.main.temp} °C</p>
                    <p>Feels Like: ${forecast.main.feels_like} °C</p>
                    <p>Humidity: ${forecast.main.humidity}%</p>
                    <p>Wind Speed: ${forecast.wind.speed} m/s</p>
                </div>
      `;
      
     /*console.log(response.data.list[2].dt_txt);

     const newData = document.createElement('h3');
     newData.innerText = response.data.list[2].dt_txt;

     mainParent.appendChild(newData); */
    
})
   .catch((error)=>{
      console.log(error)
    });

}
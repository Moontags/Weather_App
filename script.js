let result = document.getElementById('result');
let searchBtn = document.getElementById('search-btn');
let cityRef = document.getElementById('city');

// Function to get the weather data
let getWeather = () => {
  let city = cityRef.value;
  city === '' ? alert('Please enter a city name') : (() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.main.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML = `
          <h2>${data.name}</h2>
       
          <h4 class="weather">${data.weather[0].main}</h4>
          <h4 class="desc">${data.weather[0].description}</h4>
          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon">
         <h1>${data.main.temp} &#176;</h1>
         <div class ="temp-container">
          <div>
          <h4 class="title">min</h4>
          <h4 class="temp">${data.main.temp_min} &#176;</h4>
          </div>
          <div>
          <h4 class="title">max</h4>
          <h4 class="temp">${data.main.temp_max} &#176;</h4>
          </div>
         </div>  
        `;
      })
      .catch(() => {
        alert('City not found, please try again');
      });
  })();
};
searchBtn.addEventListener('click', getWeather);
window.addEventListener('load', getWeather);


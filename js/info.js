
let elBtnClick = document.querySelector(".js-button");
let exitBtn = document.querySelector(".js-exit-btn");

let weatherImg = document.querySelector('.js-img')
let rainImg = document.querySelector('.js-rain-img')
let winterImg = document.querySelector('.js-winter-img')

let wealthValue = document.querySelector(".js-weath");
let tempValue = document.querySelector(".js-temp");
let feelsValue = document.querySelector(".js-feels");
let speedValue = document.querySelector(".js-speed");
let degValue = document.querySelector(".js-deg");

let weatheImages = document.querySelector('.js-weather-img')

let localstrogeLat = localStorage.getItem('lat')
let localstrogeLon = localStorage.getItem('lon')

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${localstrogeLat}&lon=${localstrogeLon}&appid=20f9bba5f85da5ce36767f2e2ee73f95`
)
  .then((res) => res.json())
  .then(
    (data) => (
      wealthValue.textContent = data.weather[0].main,
      tempValue.textContent = data.main.temp + " temp",
      feelsValue.textContent = data.main.feels_like + " feels",
      speedValue.textContent = data.wind.speed + " km",
      degValue.textContent = data.wind.deg + " deg"
    )
  );

function backBtn() {
  window.location = "/index.html";
}

exitBtn.addEventListener("click", backBtn);


  function weatherImages() {
    setTimeout(() => {
      weatherImg.style.display = 'none'
      rainImg.style.display = 'block'

    }, 2000)

    setTimeout(() => {
      weatherImg.style.display = 'none'
      rainImg.style.display = 'none'
      winterImg.style.display = 'block'
    }, 4000)

    setTimeout(() => {
      rainImg.style.display = 'none'
      winterImg.style.display = 'none'
      weatherImg.style.display = 'block'
    }, 6000)

    setTimeout(() => {
      weatherImg.style.display = 'none'
      winterImg.style.display = 'none'
      rainImg.style.display = 'block'
    }, 8000)

    setTimeout(() => {
      weatherImg.style.display = 'none'
      winterImg.style.display = 'block'
      rainImg.style.display = 'none'
    }, 10000)

    setTimeout(() => {
      weatherImg.style.display = 'block'
      winterImg.style.display = 'none'
      rainImg.style.display = 'none'
    }, 12000)
    setTimeout(() => {
      weatherImg.style.display = 'none'
      winterImg.style.display = 'none'
      rainImg.style.display = 'block'
    }, 14000)

    setTimeout(() => {
      weatherImg.style.display = 'none'
      winterImg.style.display = 'block'
      rainImg.style.display = 'none'
    }, 10000)

    setTimeout(() => {
      weatherImg.style.display = 'block'
      winterImg.style.display = 'none'
      rainImg.style.display = 'none'
    }, 12000)
  }

  weatherImages()
let elWrapper = document.querySelector(".js-wrapper");

let elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".js-input");
const elBtn = document.querySelector(".js-submit-btn");

let wealthValue = document.querySelector(".js-weath");
let tempValue = document.querySelector(".js-temp");
let feelsValue = document.querySelector(".js-feels");
let speedValue = document.querySelector(".js-speed");
let degValue = document.querySelector(".js-deg");

let countyBtn = document.querySelector(".js-btn");

function submitBtn(evt) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${evt.target.textContent}&limit=1&appid=20f9bba5f85da5ce36767f2e2ee73f95`
  )
    .then((res) => res.json())
    .then((data) =>
      data.forEach((value) => {
        let elLat = (evt.target.dataset.lat = value.lat);
        let elLon = (evt.target.dataset.lon = value.lon);
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${elLat}&lon=${elLon}&appid=20f9bba5f85da5ce36767f2e2ee73f95`
        )
          .then((res) => res.json())
          .then(
            (data) => (
              (wealthValue.textContent = data.weather[0].description),
              (tempValue.textContent = data.main.temp + " temp"),
              (feelsValue.textContent = data.main.feels_like + " feels"),
              (speedValue.textContent = data.wind.speed + " km"),
              (degValue.textContent = data.wind.deg + " deg")
            )
          );
      })
    );

  window.location = "https://weather-about.netlify.app/info.html";
}
elWrapper.addEventListener("click", submitBtn);

function handleClick(evt) {
  evt.preventDefault();

  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${elInput.value}&limit=1&appid=20f9bba5f85da5ce36767f2e2ee73f95`
  )
    .then((res) => res.json())
    .then((data) =>
      data.forEach((value) => {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&appid=20f9bba5f85da5ce36767f2e2ee73f95`
        )
          .then((res) => res.json())
          .then(
            (data) => (
              (wealthValue.textContent = data.weather[0].description),
              (tempValue.textContent = data.main.temp + " temp"),
              (feelsValue.textContent = data.main.feels_like + " feels"),
              (speedValue.textContent = data.wind.speed + " km"),
              (degValue.textContent = data.wind.deg + " deg")
            )
          );
      })
    );
}

elForm.addEventListener("submit", handleClick);

// function handleClickBtn() {
//   fetch(
//     `http://api.openweathermap.org/geo/1.0/direct?q=toshkent&limit=1&appid=20f9bba5f85da5ce36767f2e2ee73f95`
//   )
//     .then((res) => res.json())
//     .then(
//       (data) =>
//         data.forEach((value) => {
//           countyBtn.dataset.lat = value.lat;
//           countyBtn.dataset.lon = value.lon;

//           fetch(
//             `http://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&appid=20f9bba5f85da5ce36767f2e2ee73f95`
//           )
//             .then((res) => res.json())
//             .then((data) => console.log(data));
//         }),
//       (window.location = "/info.html")
//     );
// }

// countyBtn.addEventListener("click", handleClickBtn);

// function backBtn() {
//   console.log("qala");
// }

// exitBtn.addEventListener("click", backBtn);

// fetch(
//   `http://api.openweathermap.org/geo/1.0/direct?q=toshkent&limit=1&appid=20f9bba5f85da5ce36767f2e2ee73f95`
// )
//   .then((res) => res.json())
//   .then((data) =>
//     data.forEach((value) => {
//       fetch(
//         `http://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&appid=20f9bba5f85da5ce36767f2e2ee73f95`
//       )
//         .then((res) => res.json())
//         .then(
//           (data) => (
//             console.log(data),
//             (weather.textContent = data.weather[0].description),
//             (temp.textContent = data.main.temp + " temp"),
//             (feels.textContent = data.main.feels_like + " feels"),
//             (speed.textContent = data.wind.speed + " km"),
//             (deg.textContent = data.wind.deg + " deg")
//           )
//         );
//     })
//   );

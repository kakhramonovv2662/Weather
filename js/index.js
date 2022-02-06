let elWrapper = document.querySelector(".js-wrapper");

let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");

function handleClick(evt) {
  console.log(elInput.value);
}

elForm.addEventListener("click", handleClick);

function handleBtn() {
  window.location = "/info.html";
}

elWrapper.addEventListener("click", handleBtn);

// fetch(
//   "http://api.openweathermap.org/geo/1.0/direct?q=${elInput.value}&limit=5&appid=37743b1fb4df7762698a0b896f6d8fce"
// )
//   .then((res) => res.json())
//   .then((data) => console.log(data));

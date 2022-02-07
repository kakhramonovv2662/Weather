// let elWrappers = document.querySelector(".info-wrapper");

// elWrapper.addEventListener("click", submitBtn);
let exitBtn = document.querySelector(".js-exit-btn");

function backBtn() {
  window.location = "https://weather-about.netlify.app/index.html";
}

exitBtn.addEventListener("click", backBtn);

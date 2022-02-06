let exitBtn = document.querySelector(".js-exit-btn");

function handleExitBtn() {
  window.location = "https://weather-about.netlify.app/index.html";
}

exitBtn.addEventListener("click", handleExitBtn);

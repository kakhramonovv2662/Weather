let exitBtn = document.querySelector(".js-exit-btn");

function handleExitBtn() {
  window.location = "http://127.0.0.1:5501/index.html";
}

exitBtn.addEventListener("click", handleExitBtn);

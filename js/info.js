let exitBtn = document.querySelector(".js-exit-btn");

function handleExitBtn() {
  window.location = "/index.html";
}

exitBtn.addEventListener("click", handleExitBtn);

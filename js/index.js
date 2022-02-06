let elWrapper = document.querySelector(".js-wrapper");

function handleBtn() {
  window.location = "http://127.0.0.1:5501/info.html";
}

elWrapper.addEventListener("click", handleBtn);

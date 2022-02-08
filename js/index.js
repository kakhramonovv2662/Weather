let elWrapper = document.querySelector(".js-wrapper");
let elList = document.querySelector('.hero__list')



const elInput = document.querySelector(".js-input");

function submitBtn(evt) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${evt.target.textContent}&limit=1&appid=20f9bba5f85da5ce36767f2e2ee73f95`
  )
    .then((res) => res.json())
    .then((data) =>
      data.forEach((value) => {
      })
    );

    let elLat = evt.target.dataset.lat
    let elLon = evt.target.dataset.lon

    localStorage.setItem('lat', elLat)
    localStorage.setItem('lon', elLon)

    window.location = 'https://weather-about.netlify.app/info.html'
}
elWrapper.addEventListener("click", submitBtn);

function clickBtn(evt) {

  localStorage.setItem('lat', evt.target.dataset.lat)
  localStorage.setItem('lon', evt.target.dataset.lon)

  window.location = 'https://weather-about.netlify.app/info.html'
}

function handleClick(evt) {
  elList.textContent = null

  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${evt.target.value}&limit=5&appid=20f9bba5f85da5ce36767f2e2ee73f95`
  )
    .then((res) => res.json())
    .then((data) =>
      data.forEach((value) => {
        let elItems = document.createElement('li')
        let elButton = document.createElement('button')

        elButton.textContent = value.name

        elButton.dataset.lat = value.lat
        elButton.dataset.lon = value.lon

        elButton.style.width = '222px'
        elButton.style.padding = '10px'
        elButton.style.border = 'none'
        elButton.style.backgroundColor = '#fff'
        elButton.style.boxShadow = '0 0 5px 0px rgb(204, 199, 199)'

        elButton.addEventListener('click', clickBtn)

        elItems.append(elButton)
        elList.append(elItems)
      })
    );
}

elInput.addEventListener("input", handleClick);

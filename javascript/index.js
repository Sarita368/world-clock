function updateClocks() {
  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTimeZone = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTimeZone.format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = `${londonTimeZone.format(
      "h:mm:ss"
    )} <small>${londonTimeZone.format("A")}</small>`;
  }

  // New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTimeZone = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTimeZone.format("MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = `${newYorkTimeZone.format(
      "h:mm:ss"
    )} <small>${newYorkTimeZone.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "Select a city") return;

  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${moment()
          .tz(cityTimeZone)
          .format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time" id="selected-city-time">${moment()
        .tz(cityTimeZone)
        .format("h:mm:ss")} <small>${moment()
    .tz(cityTimeZone)
    .format("A")}</small></div>
    </div>
  `;
}

updateClocks();
setInterval(updateClocks, 1000);

let citiesSelect = document.getElementById("city");

citiesSelect.addEventListener("change", updateCity);

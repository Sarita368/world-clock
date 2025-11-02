function updateClocks() {
  // London
  let londonElement = document.getElementById("london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTimeZone = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTimeZone.format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = `${londonTimeZone.format("h:mm:ss")} <small>${londonTimeZone.format("A")}</small>`;

  // New York
  let newYorkElement = document.getElementById("new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTimeZone = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTimeZone.format("MMMM Do, YYYY");
  newYorkTimeElement.innerHTML = `${newYorkTimeZone.format("h:mm:ss")} <small>${newYorkTimeZone.format("A")}</small>`;
}

updateClocks();
setInterval(updateClocks, 1000);


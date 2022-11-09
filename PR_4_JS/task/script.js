document.addEventListener("DOMContentLoaded", getMyLocation);
let map = null;
let watchId = null;

const form = document.querySelector("form");
const currentPositionOutput = document.getElementById("watched");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

form.setCoordiantsOnMap.addEventListener("click", showPlaceOnMap);

document.getElementById("watch").addEventListener("click", (e) => {
  if (watchId == null) {
    map.remove();
    map = null;
  }
  watchId = navigator.geolocation.watchPosition(displayLocation);
});

document.getElementById("clearWatch").addEventListener("click", () => {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
});

function getMyLocation() {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(displayLocation);
  else alert("Геолокація не підтримується, або ви відхилили її");
}
function displayLocation(position) {
  let latitude = position.coords.latitude;

  let longitude = position.coords.longitude;

  currentPositionOutput.innerHTML = `Ви знаходитесь на широті: ${latitude} і довготі: ${longitude}`;

  if (map == null) {
    map = L.map("map").setView([latitude, longitude], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    L.marker([latitude, longitude]).addTo(map);
  } else {
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `${new Date(
          position.timestamp
        ).toString()} <br /> Широта: ${latitude} <br />Довгота ${longitude}`
      );
  }

  map.on("click", setTextToMarker);
}

function setTextToMarker(e) {
  let popup = L.popup();
  popup
    .setLatLng(e.latlng)
    .setContent(
      "Ви щойно натиснули, <br />Широта: " +
      e.latlng.lat +
      "<br />Довгота: " +
      e.latlng.lng
    )
    .openOn(map);
}

function showPlaceOnMap(e) {
  let latitude = +form.elements["lat"].value;
  let longitude = +form.elements["longtud"].value;

  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }

  map.remove();
  map = null;

  const coords = {
    latitude,
    longitude,
  };

  displayLocation({ coords });
}
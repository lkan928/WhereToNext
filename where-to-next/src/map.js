"use strict";

function initMap() {
  const myLatLng = {
    lat: 39.981971740722656,
    lng: -75.1530532836914
  };
  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
  });
}
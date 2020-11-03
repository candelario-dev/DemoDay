// let longi
// let lati
//
// function getLoc(){
//     fetch(`https://ipapi.co/json/`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         document.getElementById('location').innerText = data.city
//         document.getElementById('state').innerText = data.region
//         document.getElementById('country').innerText = data.country
//         lati = parseInt( data.latitude)
//         longi= parseInt(data.longitude)
//
//     })
//         .catch(error => {
//           console.log(error);
//         });
// }
//
// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 8,
//     center: { lat: `${lati}`, lng: `${longi}` },
//   });
//   // const geocoder = new google.maps.Geocoder();
//   const infowindow = new google.maps.InfoWindow();
//   document.getElementById("submit").addEventListener("click", () => {
//     geocodeLatLng(geocoder, map, infowindow);
//   });
// }
//
// function geocodeLatLng(geocoder, map, infowindow) {
//   // const input = document.getElementById("latlng").value;
//   // const latlngStr = input.split(",", 2);
//   const latlng = lati+longi
//     // lat: lati,
//     // lng: longi,
//   };
//   geocoder.geocode({ location: latlng }, (results, status) => {
//     if (status === "OK") {
//       if (results[0]) {
//         map.setZoom(11);
//         const marker = new google.maps.Marker({
//           position: latlng,
//           map: map,
//         });
//         infowindow.setContent(results[0].formatted_address);
//         infowindow.open(map, marker);
//       } else {
//         window.alert("No results found");
//       }
//     } else {
//       window.alert("Geocoder failed due to: " + status);
//     }
//   });
// }

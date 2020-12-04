mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtYW53YXkiLCJhIjoiY2tpOXlxbXpoMGtpMDJ5bzlzYWlhMnY2dyJ9.ZoX3MJsneR61QNifnBQsbA';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position){
  console.log(position)
  setupmap([position.coords.longitude, position.coords.latitude])
} 

function errorLocation() {
  setupmap([-2.24, 53.48])
}


function setupmap(center){


const map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: center, // starting position [lng, lat]
zoom: 10 // starting zoom


})
map.addControl(new mapboxgl.NavigationControl());

var directions  =   new MapboxDirections({
  accessToken: mapboxgl.accessToken
  })
map.addControl(
directions,
  'top-left'
  );
}
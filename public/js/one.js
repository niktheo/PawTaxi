var myLatLng = { lat: 38.346, lng: -0.4907 }
var mapOptions = {
  center: myLatLng,
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

//create map
var map = new google.maps.Map(
  document.getElementById('googleMapRoute'),
  mapOptions
)

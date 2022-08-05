function initialize() {
  const directionsService = new google.maps.DirectionsService()
  const directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: true
  })
  var infowindow = new google.maps.InfoWindow()
  // const mapOptions = {
  //   zoom: 7,
  //   center: new google.maps.LatLng(37.4419, -122.1419) // some coordinates
  // }
  const map = new google.maps.Map(document.getElementById('googleMapRoute'))
  directionsDisplay.setMap(map)

  const request = {
    origin: document.getElementById('start').textContent,
    destination: document.getElementById('end').textContent,
    travelMode: 'DRIVING'
  }

  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result)
      createMarker(
        result.routes[0].legs[0].start_location,
        'A',
        'start marker',
        map,
        infowindow
      )
      var lastLeg = result.routes[0].legs.length - 1
      createMarker(
        result.routes[0].legs[lastLeg].end_location,
        'B',
        'end marker',
        map,
        infowindow
      )
    }
  })
}
google.maps.event.addDomListener(window, 'load', initialize)
// Adds a marker to the map.
function createMarker(location, label, content, map, infowindow) {
  var marker = new google.maps.Marker({
    position: location,
    label: label,
    title: label,
    map: map
  })
  marker.addListener('click', function(e) {
    infowindow.setContent(content)
    infowindow.open(map, this)
  })
}

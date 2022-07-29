var myLatLng = { lat: 38.346, lng: -0.4907 }
var mapOptions = {
  center: myLatLng,
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions)

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService()

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer()

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map)

//define calcRoute function
function calcRoute() {
  //create request
  var request = {
    origin: document.getElementById('from').value,
    destination: document.getElementById('to').value,
    travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
    unitSystem: google.maps.UnitSystem.METRIC
  }

  //pass the request to the route method
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      //Get distance and time
      const output = document.querySelector('#output')
      output.innerHTML =
        '<div class=\'alert-info\'>From: ' +
        document.getElementById('from').value +
        '.<br />To: ' +
        document.getElementById('to').value +
        '.<br /> Driving distance <i class=\'fas fa-road\'></i> : ' +
        result.routes[0].legs[0].distance.text +
        '.<br />Duration <i class=\'fas fa-hourglass-start\'></i> : ' +
        result.routes[0].legs[0].duration.text +
        '.</div>'
      // const price = document.querySelector('#price')
      // price.innerHTML =
      //   '<div class=\'alert-info\'>Price: ' +
      //   result.routes[0].legs[0].distance.text +
      //   '.</div>'

      //display route
      directionsDisplay.setDirections(result)
    } else {
    }
  })
}

}


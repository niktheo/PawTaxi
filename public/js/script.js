}

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
        '<div class="container text-center"> ' +
        '<div class=\'row\'>' +
        '<div class=\'col\'>' +
        '<i class=\'fa-solid fa-sack-dollar\'></i>  ' +
        Math.round(result.routes[0].legs[0].distance.value * 0.0015 * 100) /
          100 +
        ' $' +
        '</div>' +
        '<div class=\'col\'>' +
        '<i class=\'fa-solid fa-clock\'></i>  ' +
        result.routes[0].legs[0].duration.text +
        '</div>' +
        '<div class=\'col\'>' +
        '<i class=\'fas fa-road\'></i>  ' +
        result.routes[0].legs[0].distance.text
      ;('</div>')
      ;('.</div>')
      ;('</div>')

      const duration = document.querySelector('#duration')
      duration.value = result.routes[0].legs[0].duration.text

      const price = document.querySelector('#price')
      price.value =
        Math.round(result.routes[0].legs[0].distance.value * 0.0015 * 100) / 100

      //   '<div>Price: ' +
      //   Math.round(result.routes[0].legs[0].distance.value * 0.0015 * 10) / 10 +
      //   '$'
      // ;('.</div>')

      //display route
      directionsDisplay.setDirections(result)
    } else {
      //delete route from map
      directionsDisplay.setDirections({ routes: [] })
      //center map in London
      map.setCenter(myLatLng)

      //show error message
      output.innerHTML =
        '<div class=\'alert-danger\'><i class=\'fas fa-exclamation-triangle\'></i> Could not retrieve driving distance.</div>'
    }
  })
}

//define calcRoute function
function calcRouteLarge() {
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
        '<div class="container text-center"> ' +
        '<div class=\'row\'>' +
        '<div class=\'col\'>' +
        '<i class=\'fa-solid fa-sack-dollar\'></i>  ' +
        Math.round(result.routes[0].legs[0].distance.value * 0.0017 * 100) /
          100 +
        ' $' +
        '</div>' +
        '<div class=\'col\'>' +
        '<i class=\'fa-solid fa-clock\'></i>  ' +
        result.routes[0].legs[0].duration.text +
        '</div>' +
        '<div class=\'col\'>' +
        '<i class=\'fas fa-road\'></i>  ' +
        result.routes[0].legs[0].distance.text
      ;('</div>')
      ;('.</div>')
      ;('</div>')

      const duration = document.querySelector('#duration')
      duration.value = result.routes[0].legs[0].duration.text

      const price = document.querySelector('#price')
      price.value =
        Math.round(result.routes[0].legs[0].distance.value * 0.0017 * 100) / 100

      //   '<div>Price: ' +
      //   Math.round(result.routes[0].legs[0].distance.value * 0.0015 * 10) / 10 +
      //   '$'
      // ;('.</div>')

      //display route
      directionsDisplay.setDirections(result)
    } else {
      //delete route from map
      directionsDisplay.setDirections({ routes: [] })
      //center map in London
      map.setCenter(myLatLng)

      //show error message
      output.innerHTML =
        '<div class=\'alert-danger\'><i class=\'fas fa-exclamation-triangle\'></i> Could not retrieve driving distance.</div>'
    }
  })
}

//create autocomplete objects for all inputs
var options = {
  types: ['(cities)']
}

var input1 = document.getElementById('from')
var autocomplete1 = new google.maps.places.Autocomplete(input1, options)

var input2 = document.getElementById('to')
var autocomplete2 = new google.maps.places.Autocomplete(input2, options)

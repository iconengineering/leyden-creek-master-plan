$( document ).ready(function() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiaWNvbmVuZyIsImEiOiJjaXBwc2V1ZnMwNGY3ZmptMzQ3ZmJ0ZXE1In0.mo_STWygoqFqRI-od05qFg';
  var map = new mapboxgl.Map({
      container: 'map-1', // container id
      style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
      center: [-105.134, 39.82], // starting position
      zoom: 11 // starting zoom
  });

  map.on('load', function () {

  	var url = 'https://cdn.rawgit.com/ebendennis/3a11fc00145d91a5e253c1d1eec1713a/raw/27bc26773d6a3dd4445aad1972a746ca090ed74b/leydenBounds.geojson';

  	map.addSource('bounds', {
        type: 'geojson',
        "data": url
    });
    map.addLayer({
        'id': 'bounds',
        'type': 'line',
        'source': 'bounds',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 10], [17, 1.75], [19, 2.5]]
          },
            'line-color': '#03A9F4'
        }
    });
  });
});

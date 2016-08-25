$( document ).ready(function() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiaWNvbmVuZyIsImEiOiJjaXBwc2V1ZnMwNGY3ZmptMzQ3ZmJ0ZXE1In0.mo_STWygoqFqRI-od05qFg';
  var map = new mapboxgl.Map({
      container: 'figureES-3', // container id
      style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
      center: [-105.194, 39.845], // starting position
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
              "stops": [[15, 3], [17, 5], [19, 8]]
          },
            'line-color': '#3F51B5'
        }
    });
  	map.addSource('schematic', {
        type: 'geojson',
        "data": 'assets/js/geojson/leydenSchematic.geojson'
    });
    map.addLayer({
        'id': 'schematic-hover',
        'type': 'circle',
        'source': 'schematic',
        'filter': ['==','title',''],
        "paint": {
            "circle-color": "#f44336",
            "circle-radius": 7.5,
            "circle-blur": .5
        }
    });
    map.addLayer({
        'id': 'schematic',
        'type': 'circle',
        'source': 'schematic',
        "paint": {
            "circle-color": "#b71c1c"
        }
    });
  }); //map load

  // When a click event occurs near a place, open a popup at the location of
// the feature, with description HTML from its properties.
  map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['schematic'] });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    var popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<h6>' + feature.properties.title + '</h6>' + feature.properties.description)
        .addTo(map);
  });

  // Use the same approach as above to indicate that the symbols are clickable
  // by changing the cursor style to 'pointer'.
  map.on('mousemove', function (e) {
      var features = map.queryRenderedFeatures(e.point, { layers: ['schematic'] });
      if (features.length) {
            map.setFilter("schematic-hover", ["==", "title", features[0].properties.title]);
          } else {
            map.setFilter("schematic-hover", ["==", "title", ""]);
          }
      map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
  });

  map.on("mouseout", function() {
        map.setFilter("schematic-hover", ["==", "title", ""]);
    });

});
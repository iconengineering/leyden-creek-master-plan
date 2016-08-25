$( document ).ready(function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiaWNvbmVuZyIsImEiOiJjaXBwc2V1ZnMwNGY3ZmptMzQ3ZmJ0ZXE1In0.mo_STWygoqFqRI-od05qFg';
  var map = new mapboxgl.Map({
      container: 'figure2-2', // container id
      style: 'mapbox://styles/mapbox/satellite-streets-v9', //stylesheet location
      center: [-105.2, 39.845], // starting position
      zoom: 11.75, // starting zoom
  });

  map.on('load', function () {

    map.addSource('bounds2', {
        type: 'geojson',
        "data": '../assets/js/geojson/leydenBounds.geojson'
    });
    map.addSource('arvada', {
        type: 'geojson',
        "data": '../assets/js/geojson/arvadaLimits.geojson'
    });
    map.addSource('blueMtRd', {
        type: 'geojson',
        "data": '../assets/js/geojson/blueMountainRoad.geojson'
    });
    map.addSource('lcmDevs', {
        type: 'geojson',
        "data": '../assets/js/geojson/lcmDevelopments.geojson'
    });
    map.addSource('reaches', {
        type: 'geojson',
        "data": '../assets/js/geojson/leydenCreekReaches.geojson'
    });
    map.addSource('storage', {
        type: 'geojson',
        "data": '../assets/js/geojson/storageFacilities.geojson'
    });
    map.addSource('streams', {
        type: 'geojson',
        "data": '../assets/js/geojson/streams.geojson'
    });
    map.addSource('gages', {
        type: 'geojson',
        "data": '../assets/js/geojson/udfcdStreamGages.geojson'
    });
    map.addLayer({
        'id': 'arvadaFill',
        'type': 'fill',
        'source': 'arvada',
        'paint': {
            'fill-color': '#B3E5FC',
            'fill-opacity': 0.2
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'developments',
        'type': 'fill',
        'source': 'lcmDevs',
        'paint': {
            'fill-opacity': 0.4,
            'fill-color': {
                property: 'OBJECTID',
                type: 'categorical',
                stops: [
                    [1, '#795548'],
                    [2, '#CDDC39'],
                    [3, '#009688']
                    ]
                }
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'arvada',
        'type': 'line',
        'source': 'arvada',
        'layout': {
            'line-join': 'miter',
            'line-cap': 'butt'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 1], [17, 2], [19, 4]]
          },
            'line-color': '#333',
            'line-dasharray': [3,2]
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'streams',
        'type': 'line',
        'source': 'streams',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[13, .75], [15, 1.25],[17, 2]]
          },
          'line-opacity': .75,
          'line-color': '#03A9F4'
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'streamsLabels',
        'type': 'symbol',
        'source': 'streams',
        'layout': {
            'visibility': 'visible',
          'symbol-placement': 'line',
          'text-field': '{GNIS_Name}',
          'text-font': ['Roboto Light Italic','Open Sans Light Italic','Arial Unicode MS Regular'],
          'text-size': {
            "stops": [[13,9],[15,12],[17,14]]
          }
        },
        'paint': {
          'text-color': '#03A9F4',
          'text-halo-color': 'rgba(250,250,250 ,0.9)',
          'text-halo-width': 1,
          'text-halo-blur': 0.1
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'reach1',
        'type': 'line',
        'source': 'reaches',
        'filter': ['==', 'Id', 1],
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 4], [19, 8]]
          },
          'line-color': '#bf5b17'
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'reach2',
        'type': 'line',
        'source': 'reaches',
        'filter': ['==', 'Id', 2],
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 4], [19, 8]]
          },
          'line-color': '#fdc086'
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'reach3',
        'type': 'line',
        'source': 'reaches',
        'filter': ['==', 'Id', 3],
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 4], [19, 8]]
          },
          'line-color': '#ffff99'
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'reach4',
        'type': 'line',
        'source': 'reaches',
        'filter': ['==', 'Id', 4],
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 4], [19, 8]]
          },
          'line-color': '#beaed4'
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'reachLabels',
        'type': 'symbol',
        'source': 'reaches',
        'layout': {
            'visibility': 'visible',
          'symbol-placement': 'line',
          'text-field': 'Reach {Id}',
          'text-font': ['Roboto Light','Open Sans Light','Arial Unicode MS Regular'],
          'text-size': {
            "stops": [[13,12],[15,14],[17,16]]
          }
        },
        'paint': {
          'text-color': '#fff',
          'text-halo-color': 'rgba(50,50,50 ,0.9)',
          'text-halo-width': 1,
          'text-halo-blur': 0.1
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'bounds2',
        'type': 'line',
        'source': 'bounds2',
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
    }, 'road-label-small');
    map.addLayer({
        'id': 'blueMtRd',
        'type': 'line',
        'source': 'blueMtRd',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 4], [19, 8]]
          },
            'line-color': '#FF5722'
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'gages',
        'type': 'circle',
        'source': 'gages',
        "paint": {
            "circle-color": "#673AB7"
        }
    }, 'road-label-small');
    map.addLayer({
        'id': 'storage',
        'type': 'circle',
        'source': 'storage',
        "paint": {
            "circle-color": "#00BCD4"
        }
    }, 'road-label-small');
  }); //map load

});
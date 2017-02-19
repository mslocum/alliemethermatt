var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: new google.maps.LatLng(38.8941658,-77.02740219999998),
          mapTypeId: 'roadmap'
        });

        var iconBase = 'https://maps.google.com/mapfiles/kml/pal2/';
        var icons = {
          church: {
          	icon: {
          		labelOrigin: new google.maps.Point(10,35),
          		url: iconBase + 'icon3.png'
          	}
          },
          lodging: {
          	icon: {
          		labelOrigin: new google.maps.Point(10,35),
          		url: iconBase + 'icon20.png'
          	}
          },
          opop: {
          	icon: {
          		labelOrigin: new google.maps.Point(10,35),
          		url: iconBase + 'icon2.png'
          	}
          },
          food: {
          	icon: {
          		labelOrigin: new google.maps.Point(10,35),
          		url: iconBase + 'icon32.png'
          	}
          },
          coffee: {
          	icon: {
          		labelOrigin: new google.maps.Point(10,35),
          		url: iconBase + 'icon54.png'
          	}
          },
          airport: {
          	icon: {
          		labelOrigin: new google.maps.Point(10,35),
          		url: iconBase + 'icon48.png'
          	}
          }
        };

        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            label: {
            	text: feature.title,
            	color: 'blue',
            	fontSize: '12px',
            	fontWeight: '5px',
            	fontFamily: 'Lucida Grande'
            },
            map: map
          });
        }

        var features = [
          {
            position: new google.maps.LatLng(38.8941658,-77.02740219999998),
            type: 'opop',
            title: 'Old Post Office Pavilion - Reception and Brunch'
          }, {
            position: new google.maps.LatLng(38.896306,-77.03159099999999),
            type: 'lodging',
            title: 'J.W. Marriott'
          }, {
            position: new google.maps.LatLng(38.8995447,-77.0264077),
            type: 'lodging',
            title: 'Grand Hyatt - Welcome Party'
          }, {
            position: new google.maps.LatLng(38.8979337,-77.0256493),
            type: 'church',
            title: 'St. Patrick\' Catholic Church'
          }, {
            position: new google.maps.LatLng(38.9058011,-77.04322689999998),
            type: 'food',
            title: 'Boqueria'
          }, {
            position: new google.maps.LatLng(38.900071,-77.02241989999999),
            type: 'food',
            title: 'Matchbox'
          }, {
            position: new google.maps.LatLng(38.89796129999999,-77.03333550000002),
            type: 'food',
            title: 'Old Ebbitt Grill'
          }, {
            position: new google.maps.LatLng(38.8976398,-77.03248529999996),
            type: 'food',
            title: 'Hamilton Restaurant'
          }, {
            position: new google.maps.LatLng(38.9167735,-77.0308397),
            type: 'food',
            title: 'The Fainting Goat'
          }, {
            position: new google.maps.LatLng(38.90028540000001,-77.0445269),
            type: 'food',
            title: 'Founding Farmers'
          }, {
            position: new google.maps.LatLng(38.9138425,-77.04545969999998),
            type: 'food',
            title: 'Flippin\' Pizza'
          }
        ];

        for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
        }
      }

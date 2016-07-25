class GoogleMaps {
    constructor() {
        let contactMap = document.getElementById("contactMap");
        let homepageMap = document.getElementById("homepage-map");
        let articleMap = document.getElementById("articleMap");
        let top10Map = document.getElementById("top10Map");
        let exploreMap = document.getElementById("exploreMap");
        let homepageMapElement = $('.js-slick-homepage-map');
        let top10MapElement = $('.js-slider-top10');
        let customMarker = 'images/maps/marker.png';
        let customMarkerExplore = 'images/maps/markerExplore.png';
        let customMarkerExploreTransparent = 'images/maps/markerExploreTransparent.png';
        let customMarker_hover = 'images/maps/marker_hover.png';
        var markers = [];
        //Article Map
        if (articleMap != null) {
            function init() {
                this.articleLatLng = {lat: -32.9104725, lng: 23.5204332};
                let mapOptions = {
                    center: this.articleLatLng,
                    zoom: 7,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                let map = new google.maps.Map(articleMap, mapOptions);

                var getArticleMap = $.ajax({
                  type: 'GET',
                  url: '../api/articleMap.json',
                  contentType: 'application/json',
                  dataType: 'json'
                });

                getArticleMap.done(function( data ) {

                  $(data).each(function(index) {
                    createMarker(
                      map,
                      0,
                      data[index]['latitude'],
                      data[index]['longitude'],
                      true,
                      new infoWindow(
                        data[index]['markerImage'],
                        data[index]['markerTitle'],
                        data[index]['markerSubtitle']
                      )
                    );
                  });

                });

            }

            google.maps.event.addDomListener(window, 'load', init);
        }
        //Explore Map
        if (exploreMap != null) {
          function init() {
            this.exploreLatLng = {lat: -25.266046, lng: 15.926620};
            let mapOptions = {
              center: this.exploreLatLng,
              zoom: 6,
              scrollwheel: false,
              mapTypeControlOptions: {
                mapTypeIds: ['map_style']
              },
              zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
              }
            };
            let customstyles = [
              {
                featureType: "all",
                elementType: "labels",
                stylers: [
                  {visibility: "off"}
                ]
              }
            ];

            let styledMap = new google.maps.StyledMapType(customstyles, {name: "Styled Map"});
            let map = new google.maps.Map(exploreMap, mapOptions);
            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');

            var getExploreMap = $.ajax({
              type: 'GET',
              url: '../api/exploreMap.json',
              contentType: 'application/json',
              dataType: 'json'
            });

            getExploreMap.done(function( data ) {

              $(data).each(function(index) {
                createMarkerWithLabelExplore(
                  map,
                  data[index]['latitude'],
                  data[index]['longitude'],
                  data[index]['label'],
                  150,
                  data[index]['labelAnchorY'],
                  data[index]['type']
                );
              });

            });

            $('.cm-sat-m-explore').on('shown.bs.modal', function() {
              google.maps.event.trigger(map, 'resize');
              map.setZoom( map.getZoom() );
            });
          }

          google.maps.event.addDomListener(window, 'load', init);
        }
        //Contact Map
        //Checking if contact map element exist, if does, then create the map
        if (contactMap != null) {
            function init() {
                this.officeLatLng = {lng: -0.2098071, lat: 51.4195422};
                let mapOptions = {
                    center: this.officeLatLng,
                    zoom: 10,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                let map = new google.maps.Map(contactMap, mapOptions);
                let marker = new google.maps.Marker({
                    position: this.officeLatLng,
                    map: map,
                    icon: customMarker
                });
                var contentString = "<div class='markerInfo'>" +
                    "<img src='../images/maps/popup-contact.jpg'>" +
                    "<div class='markerTextContainer'>" +
                    "<p class='markerText'>South African Tourism</p>" +
                    "<p class='markerText'>6 Alternate Grove</p> " +
                    "<p class='markerText'>London, England</p>" +
                    "</div>" +
                    "</div>";
                var infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 180
                });
                marker.addListener('click', function () {
                    infowindow.open(map, marker);

                    $('.gm-style-iw').prev().remove();
                    $('.gm-style-iw').parent().addClass('infowindow-parent');
                });
            }

            google.maps.event.addDomListener(window, 'load', init);
        }

        //Homepage Map
        //Checking if map element exist, if does, then create the map
        if (homepageMap != null) {
            function init() {
                this.saLatLng = {lat: -28.6054169, lng: 25.1786157};
                this.homepageMap = homepageMap;
                let mapOptions = {
                    center: this.saLatLng,
                    zoom: 6,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoomControl: true,
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_BOTTOM
                    },
                };
                let map = new google.maps.Map(this.homepageMap, mapOptions);

                var getHomepageMap = $.ajax({
                  type: 'GET',
                  url: '../api/homepageMap.json',
                  contentType: 'application/json',
                  dataType: 'json'
                });

                getHomepageMap.done(function( data ) {

                  $(data).each(function(index) {
                    createMarkerWithLabel(
                      map,
                      data[index]['sliderIndex'],
                      data[index]['latitude'],
                      data[index]['longitude'],
                      data[index]['label'],
                      150
                    );
                  });

                  for (var i = 0; i < markers.length; i++) {
                    google.maps.event.addListener(markers[i], 'click', function () {
                      var index = this.sliderIndex + 1;
                      homepageMapElement.slick('slickGoTo', index);
                    });
                  }

                });
            }
            google.maps.event.addDomListener(window, 'load', init);
        }

        //Top10MapLP
        if(top10Map!=null) {
            function init() {
                this.saLatLng = {lat: -28.6054169, lng: 25.1786157};
                this.top10Map = top10Map;
                let mapOptions = {
                    center: this.saLatLng,
                    zoom: 6,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoomControl: true,
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.LEFT_BOTTOM
                    }
                };
                let map = new google.maps.Map(this.top10Map, mapOptions);
                window.setTimeout(function() {

                    var getTop10Map = $.ajax({
                      type: 'GET',
                      url: '../api/top10Map.json',
                      contentType: 'application/json',
                      dataType: 'json'
                    });

                    getTop10Map.done(function( data ) {

                      $(data).each(function(index) {
                        window.setTimeout(function() {
                          createMarkerWithLabel(
                            map,
                            data[index]['sliderIndex'],
                            data[index]['latitude'],
                            data[index]['longitude'],
                            data[index]['label'],
                            150,
                            true
                          );

                          if( index === data.length - 1 ) {
                            clickMarkersTop10();
                          }
                        }, index*200);
                      });

                      function clickMarkersTop10() {
                        for (var i = 0; i < markers.length; i++) {
                          google.maps.event.addListener(markers[i], 'click', function () {
                            $('.cm-sat-m-slider-top10').addClass('active');
                            map.panTo(this.getPosition());
                            map.panBy(100,0);
                            var index = this.sliderIndex;
                            top10MapElement.slick('slickGoTo', index);
                          });
                        }
                      }

                    });
                }, 2700);

            }
            google.maps.event.addDomListener(window, 'load', init);
        }

        //Object declaration for markers with infoWindow
        function infoWindow(imgURL, header, text) {
            this.imgURL = imgURL;
            this.header = header;
            this.text = text;
        }
        /*
         Function to declare any new marker with a label
         @param {map} map the map which the marker will use
         @param {sliderIndex} slider index
         @param {lat} lat latitude of the marker
         @param {lng} lng longitude of the marker
         @param {labelContent} labelContent the text of the label
         @param {labelAnchor} labelAnchor the X axis of the marker
         */
        function createMarkerWithLabel(map, sliderIndex=0, lat, lng, labelContent="", labelAnchor=150, has_animation=false) {
            var animation=null;
            if(has_animation) animation=google.maps.Animation.DROP;
            let marker = new MarkerWithLabel({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                labelContent: labelContent,
                labelAnchor: new google.maps.Point(labelAnchor, 73),
                labelClass: "map-labels",
                icon: customMarker,
                sliderIndex: sliderIndex,
                animation: animation
            });
            markers.push(marker);
        };
        /*
        Function to create markers without a label, also it can
        have a info window
         @param {map} map the map which the marker will use
         @param {lat} lat latitude of the marker
         @param {lng} lng longitude of the marker
         @param {has_info} boolean to determine if marker has tooltip
         @param {infowindow} gets an object infoWindow to set the properties of the message
         */
        function createMarker(map, sliderIndex=0, lat, lng, has_info=false, infowindow) {
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                icon: customMarker,
                sliderIndex: sliderIndex
            });
            if (has_info) createInfoWindow(infowindow, marker, map);
            markers.push(marker);
        }
        /*
         Function to create infoWindows for markers, and creates the event to open it
         @param {infowindow} gets an object infoWindow to set the properties of the message
         @param {marker} gets the marker which will use the infoWindow
         @param {map} map the map which the marker will use
         prev_infowindow check if other infowindow was opened and close it before opening a new one.
         */
        var prev_infowindow = false;
        function createInfoWindow(infoWindow, marker, map) {
            var contentString = "<div class='markerInfo'>" +
                "<img src='" + infoWindow.imgURL + "'>" +
                "<div class='markerTextContainer'>" +
                "<p class='markerText'>" + infoWindow.header + "</p>" +
                "<p class='markerText'>" + infoWindow.text + "</p>" +
                "</div>" +
                "</div>";
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 180
            });
            marker.addListener('click', function () {
                if( prev_infowindow ) {
                  prev_infowindow.close();
                }
                prev_infowindow = infowindow;
                infowindow.open(map, marker);
                //Styles for the arrow
                $('.gm-style-iw').prev().remove();
                $('.gm-style-iw').parent().addClass('infowindow-parent');
            });
        }
        /*
         Function to declare any new marker with a label and infowindow
         @param {map} map the map which the marker will use
         @param {lat} lat latitude of the marker
         @param {lng} lng longitude of the marker
         @param {labelContent} labelContent the text of the label
         @param {labelAnchor} labelAnchor the X axis of the marker
         @param {has_info} boolean to determine if marker has tooltip
         @param {infowindow} gets an object infoWindow to set the properties of the message
         */
        function createMarkerLabelInfoWindow(map, lat, lng, labelContent="", labelAnchor=150, has_info=false, infowindow) {
            let marker = new MarkerWithLabel({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                labelContent: labelContent,
                labelAnchor: new google.maps.Point(labelAnchor, 73),
                labelClass: "map-labels",
                icon: customMarker,
            });
            if (has_info) createInfoWindow(infowindow, marker, map);
        };
        /*
         Function to declare any new marker with a label to the Explore Map
         @param {map} map the map which the marker will use
         @param {lat} lat latitude of the marker
         @param {lng} lng longitude of the marker
         @param {labelContent} labelContent the text of the label
         @param {labelAnchor} labelAnchor the X axis of the marker
         @param {type} Type of label, it can be city or province
         */
        function createMarkerWithLabelExplore(map, lat, lng, labelContent="", labelAnchorX=150, labelAnchorY=42, type) {
            if( type === 'city' ) {
              let marker = new MarkerWithLabel({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                labelContent: labelContent,
                labelAnchor: new google.maps.Point(labelAnchorX, labelAnchorY),
                labelClass: "map-labels city",
                icon: customMarkerExplore
              });
              markers.push(marker);
            } else if( type === 'province' ) {
              let marker = new MarkerWithLabel({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                labelContent: labelContent,
                labelAnchor: new google.maps.Point(labelAnchorX, labelAnchorY),
                labelClass: "map-labels province",
                icon: customMarkerExploreTransparent
              });
              markers.push(marker);
            }
        };

        // Homepage map: Click on the menu icon to go to the first slide.
        $('.menu-map-list').on('click', function (e) {
            e.preventDefault();
            homepageMapElement.slick('slickGoTo', 0);
        });

        // Homepage map: Change the active state of the marker when the slider change.
        homepageMapElement.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            for (var i = 0; i < markers.length; i++) {
                var markerIndex = markers[i].sliderIndex + 1;
                if (nextSlide === markerIndex) {
                    markers[i].setIcon(customMarker_hover);
                } else {
                    markers[i].setIcon(customMarker);
                }
            }
        });

        // Top10 map: Change the active state of the marker when the slider change.
        top10MapElement.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            for (var i = 0; i < markers.length; i++) {
                var markerIndex = markers[i].sliderIndex;
                if (nextSlide === markerIndex) {
                    markers[i].setIcon(customMarker_hover);
                } else {
                  markers[i].setIcon(customMarker);
                }
            }
        });
    }
}
module.exports = GoogleMaps;

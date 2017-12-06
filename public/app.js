var initialise = function(){
  var container = document.getElementById('main-map');
  var center = {lat: 55.864237, lng: -4.251806};
  var zoom = 16
  var mainMap = new MapWrapper(container, center, zoom);
  mainMap.addMarker(center);
  mainMap.addClickEvent()


  var georgeSq = {lat: 55.861152, lng: -4.250196};
  mainMap.addMarker(georgeSq);
  // georgeSq.addEventListener('click', mainMap.addInfoWindow());
  // mainMap.addInfoWindow();


  var bounceButton = document.getElementById('button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var chicago = document.getElementById('chicago');
  chicago.addEventListener('click', mainMap.chicago.bind(mainMap));

  var location = document.getElementById('locate');
  location.addEventListener('click', mainMap.location.bind(mainMap));

  var deleteMarker = document.getElementById('delete-marker');
  deleteMarker.addEventListener('click', mainMap.removeMarker.bind(mainMap))

}

window.addEventListener('load', initialise);

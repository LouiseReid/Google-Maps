var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  marker.addListener('click', function(){this.addInfoWindow(marker)}.bind(this))
  this.markers.push(marker);
}

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()})
  }.bind(this));
}

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE)
  })
}

MapWrapper.prototype.addInfoWindow = function(marker){
  var infoWindow = new google.maps.InfoWindow({
    content: "This is george square, an ice rink might be here",
  });
  infoWindow.open(this.googleMap, marker)
}

MapWrapper.prototype.chicago = function(){
  this.googleMap.setCenter({lat: 41.878114, lng: -87.629798})
}

MapWrapper.prototype.location = function(){
  navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    this.googleMap.setCenter({lat, lng});
  }.bind(this));
}

MapWrapper.prototype.removeMarker= function(){
  if(this.markers.length > 1){
    var lastMarker = this.markers.pop();
    lastMarker.setMap(null);
  }
}

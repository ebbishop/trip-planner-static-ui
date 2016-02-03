
function initialize_gmaps(){
	
	var LatLng = new google.maps.LatLng(35.4917053,138.6805064);
	var mapOptions = {center: LatLng, zoom: 16, mapTypeId: google.maps.MapTypeId.HYBRID};
	var map_canvas_obj = document.getElementById('map');

	var map = new google.maps.Map(map_canvas_obj,mapOptions);

	var marker = new google.maps.Marker({position: LatLng, title: "Final Destination"});

	marker.setMap(map);
	
}

$(document).ready(function(){
	initialize_gmaps()
});
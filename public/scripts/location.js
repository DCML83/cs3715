	var map;	//Literally the map
	var markers = []; // Array of the markers being used in the moment
	var truLat;	// Latitude for the true location
	var truLong; // Longitude for the true location
	

	// location constructor that takes latitude, longitude and name of the location




	//starting function
	function getLocation() {
	
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(displayLocation);

		}else {
			alert("not possible to retrieve the location");
		}
	}

	//creates a map if there isn't one at the moment and gets the values for true lat and long
	function displayLocation(position){
		truLat = position.coords.latitude;
		truLong = position.coords.longitude;
		if (map == null) {
			showMap(position.coords);
		}

		
	}

	//creates the map with the given options
	function showMap(coords) {

		var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);

		var mapOptions = {
			zoom: 12,
			center: googleLatAndLong,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var mapDiv = document.getElementById("map");
		map = new google.maps.Map(mapDiv,mapOptions);

		createTable();

		document.getElementById('latF').value = truLat;
		document.getElementById('longF').value = truLong;
		

	}

	//creates the marker with the given options
	function addMarker(map, latlong, title, content) {

		var markerOptions = {
			position: latlong,
			map: map,
			title: title,
			clickable: true
		};
		var marker = new google.maps.Marker(markerOptions);

		markers.push(marker); //adds a marker to the markers array

		var infoWindowOptions = {
			content: content,
			position: latlong
		};

		var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

		google.maps.event.addListener(marker,"click",function() {
			infoWindow.open(map);
		});

	}


	//looks for old markers and gets rid of them
	function checkMarkers(title){
		for( var i = 0; i < markers.length; i++){
			if (markers[i].getTitle() == title){
				markers[i].setMap(null);
				markers.splice(i,1);
			}
		}
	}

	//test code
		
	function createTable () {
		for(var t = 0; t<peopleL.length; t++){
			var table = document.getElementById("position");
	
			var tr = table.insertRow(1);
			tr.id=peopleL[t].name;
			var cell1 = tr.insertCell(0);
			var cell2 = tr.insertCell(1);
				
			var googleLatAndLong = new google.maps.LatLng(peopleL[t].lat , peopleL[t].long);

			cell1.innerHTML = peopleL[t].name;
		
			cell2.innerHTML = peopleL[t].lat+ ", "+peopleL[t].long;
		
		
			
			var title = peopleL[t].name;
			var content = peopleL[t].name + " is here.";
			
			addMarker(map, googleLatAndLong, title, content);
		}

	}





	window.onload=function(){
		getLocation();
		dropdown();
		
	}


"use strict"

$(document).ready(function() {

/********************************************************************
				3 DAY FORCAST 
********************************************************************/

	$.get("http://api.openweathermap.org/data/2.5/forecast/daily", {	

		APPID: "1537d0ef8c38bcd9a1289216d38cffa1",
		q: "San Antonio, TX",
		units: 	"imperial",
		cnt: "3" 
	}).done(function(data) {
		console.log(data);



		$("#city").append(
			"<h1>" + data.city.name + "</h1>"
		); 
			
		data.list.forEach(function(data) {
			$("#weather").append(
				buildWeatherDiv(data)
			
			);

		});

	});

});


/***************************************************************
		WEATHER FORMATTING FOR HTML AND POPULATING PAGE
****************************************************************/

    function buildWeatherDiv(data){
    	// console.log(weather.main);
    
		var iconName = data.weather[0].icon;

		var iconUrl = "http://openweathermap.org/img/w/" + iconName + ".png";

		var newDay = 
			"<div class='day'>" +
				// "<h3>Temp</h3>" +
				"<h2>" + data.temp.max + "/" + data.temp.min + "</h2>" +
				"<img src='"+iconUrl+"'>" +
				"<h3>Clouds</h3>" +
				data.weather[0].description +
				"<h3>Humidity</h3>" +
				data.humidity +
				"<h3>Wind</h3>" +
				data.speed +
				"<h3>Pressure</h3>" +
				data.pressure +
			"</div>";
			return newDay;
    }

    function buildGoogleMap(map) {
    	var mapOptions = {
        	zoom: 18, 

        	center : {
			    lat:    29.423017,
			    lon:   -98.48527,
        	}
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  

        // var marker = new google.maps.Marker({
        // 	position: kettle, 
        // 	map: map 
        // });
        
      //   var infowindow = new google.maps.InfoWindow({
   		 //     content: "<strong>Brew Kettle</strong> - Some of the best <strong>craft beer</strong> and food you can get in Cleveland!<br> My personal favorite is <strong> Old 21 </strong> Other fine beers include;
   		 // <ul>
   		 // 	<li><a href=\"//thebrewkettle.com/beers/white_rajah/index.php\">White Rajah</a></li>
   		 // 	<li><a href=\"//thebrewkettle.com/beers/All-For-One/index.php\">All For One</a></li>
   		 // 	<li></li>
   		 // 	<li></li>
   		 // </ul>"

        // });

        infowindow.open(map, marker);
    }




/*
 * jquery local weather- v1
 * https://github.com/leinedam
 * http://sangoidesign.com/
 * made by Madeleine Sangoi
 * Under MIT License
 */



$(document).ready(function(){

	// get ip Location
	var getIP = 'http://ip-api.com/json/';
	var descr;
	var temp;
	var windSpeed;
	var farenheit;
	var celsius;
	var city;
	var region;
	var main1;

	$.getJSON(getIP).done(function(location) {

		console.log(location)

		  longitude = location.lon;
		  latitude = location.lat;
		  city= location.city;
		  region = location.region;

		  $('#location').text(city +', '+region);

		  var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=9447094cf99fa28b9936a6ff3ebab47f';
	 

 		$.getJSON(openWeatherMap ,function(response){

 			
	 	 	descr= response.weather[0].description;
	 	 	temp= response.main.temp;
	 	 	humidity = response.main.humidity;
	 	 	windSpeed = response.wind.speed;
	 	 	main1 = response.weather[0].main;

	 	 	//C = (5(F - 32))/9 //F = (9*C+(32*5))/5
	 	 	farenheit = (temp)*(9/5)-459.67;
	 	 	celsius = temp-273;

	 	
 	 		$('#wind').text('Wind:' + windSpeed + ' Km/h');
 	 		$('#temp').text('Temperature: ' + celsius.toFixed()+ ' ℃');
 	 		$('#descr').text(descr);
 	 		$('#humidity').text('Humidity: ' + humidity + ' %');

			changeBackground(main1);

	 	 });

 		
		// convert temp from C to F
		var tempbtn=true;

 		$('#temp').click(function(){

 			if(tempbtn==false){

 				$('#temp').text( 'Temperature: ' + celsius.toFixed() + ' ℃');
 				tempbtn=true;
 			}else{

 				$('#temp').text('Temperature: ' + farenheit.toFixed() + ' ℉');
 				tempbtn=false;
 			}
 		});

	});

	function changeBackground(m){

 			 switch(m.toLowerCase()){
			   	case "clouds":
					$("#icon").html('<i class="fa fa-cloud fa-5x" id="icon" aria-hidden="true"></i>');
					break;
				case "rain":
					$("#icon").html('<i class="fa fa-tint fa-5x" aria-hidden="true"></i>');
					$("weatherbox").css("background-color","blue");
					break;
				case "sun":
					$("#icon").html('<<i class="fa fa-sun-o fa-5x" aria-hidden="true"></i>');
					break;
				case "snow":
					$("#icon").html('<i class="fa fa-snowflake-o fa-5x" aria-hidden="true"></i>');
					break;
				case "extreme":
					$("#icon").html('<i class="fa fa-exclamation-triangle fa-5x" aria-hidden="true"></i>');
					$("weatherbox").css("background-color","red");
					break;
				default:
				    $("#icon").html('<i class="fa fa-circle-thin fa-5x" aria-hidden="true"></i>');
					break;
			   }  
 		}
 });


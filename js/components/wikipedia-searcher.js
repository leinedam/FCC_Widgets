/*
 * wikipedia searcher- v1
 * https://github.com/leinedam
 * http://sangoidesign.com/
 * made by Madeleine Sangoi
 * Under MIT License
 */


$(document).ready(function(){

	$("#btn_search").on("click", function(){

			getWiki();

	});

	$("#searchWiki").keypress(function(event){
	  if(event.keyCode === 13){
			
			getWiki();
	    }
	});
  
  function getWiki(){

  var searchWiki = $("#searchWiki").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchWiki +"&format=json&callback=?";
  	
  	 $.ajax({
	    url: url,
	    type: "GET",
	    dataType: "json",
	    async: false,
	    data: {
				method: 'getWiki',
				lang:'en',
				format:'json',
				
				},
	    success: function(data, status){

	     for(var i = 0; i < data[1].length; i++) {
				

	         $("#output").prepend("<div>\
	        	<div class='well'>\
	        		<a href="+data[3][i]+" target='_blank'>\
	        		<h2>" + data[1][i]+ "</h2>" + 
	        	    "<p>" + data[2][i] + "</p></a>\
	        	</div></div>");

	      }
	    }
	  });
    }
})
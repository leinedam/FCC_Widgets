/*
 * jquery quote machine- v1
 * https://github.com/leinedam
 * http://sangoidesign.com/
 * made by Madeleine Sangoi
 * Under MIT License
 */

$(document).ready(function(){

	var quote;
	var author;

	$('#getquote').on('click', function(event){
		//keep browser page in place (default)
		event.preventDefault();
		getQuote();

	});

	//making ajax request
	//http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
	function getQuote(){

		$.ajax({
			url:'http://api.forismatic.com/api/1.0/',
			//jsonp to bypass the cross-domain policies in web browsers
			jsonp: 'jsonp',
			dataType: 'jsonp',
			type: "GET",
			data: {
				method: 'getQuote',
				lang:'en',
				format:'jsonp',
				async: false,
			},
			success: function(data , status){

				console.log(status);

				quote = data.quoteText;
				author = data.quoteAuthor;

				$('#quote').text("\" " + quote + "\" ");

				if(author){
					$('#author').text('-- '+ author);
				}else{
					$('#author').text('- unknown');
				}
			}
		});
	}
	
	
	$('#share').on('click', function(event){

		getQuote();
		event.preventDefault();
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -- ' + author));
	
	});

	$(function() {

		  getQuote();
		  var colors = ['rgba(77, 0, 38, 0.5)', 'rgba(25, 25, 77, 0.5)', 'rgba(102, 0, 0, 0.5)'],
		    color;

		  $('#getquote').click(function() {
		    var randColor;
		    do {
		      randColor = colors[Math.floor(Math.random() * colors.length)];
		    } while (color == randColor);
	
		    $('.container-quote').css('background-color', randColor);
		    color = randColor;

		  });
	});

});


$(document).ready(function(){
	var count = 1;
	var images = ["images/slide1.png","images/slide2.png","images/slide3.png","images/slide4.png","images/slide5.png"];
	var image = $(".sliderek");

	//image.css("background-image","url("+images[count]+")");

	setInterval(function(){
		image.fadeOut(500, function(){
			image.css("background-image","url("+images[count++]+")");
			image.fadeIn(500);
		});

		if(count == images.length){
			count = 0;
		}
	},5000);
});
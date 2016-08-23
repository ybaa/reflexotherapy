/*var numberOfSlide = Math.floor(Math.random()*5)+1;


	function hide(){
		$("#sliderek").fadeOut(500);
	}


function changeSlide(){
	numberOfSlide++;
	if (numberOfSlide > 5)
		numberOfSlide = 1;
	var file = "<img src = \"simages/"+"slide"+numberOfSlide + ".png\"/>";
	
	document.getElementById("sliderek").innerHTML = file;
	
	$("#sliderek").fadeIn(500);

	setTimeout("changeSlide()",5000);
	setTimeout("hide()",4500);
}

*/



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
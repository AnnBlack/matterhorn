$(document).ready(function() {
  //call your functions here
  userNavDots();

  $(window).bind('scroll', function(e) {
  	parallaxScroll();
  	userNavDots();
  });

	/* Next/prev and primary nav btn click handlers */
	$('a.geography').click(function(){
    	$('html, body').animate({
    		scrollTop:600
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.partners').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#partners').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.routen').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#routen').offset().top
    	}, 900, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

//write down your functions
function parallaxScroll() {
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*0.25))+'px');
}

function userNavDots() {
	var firstSectionTop = 0;
	var secondSectionTop = $('#partners').offset().top - (($('#routen').offset().top - $('#about').offset().top) / 2);
	var thirdSectionTop = $('#routen').offset().top - (($('#about').offset().top - $('#routen').offset().top)/ 2);
	var fourthSectionTop = $('#about').offset().top - (($(document).height() - $('#about').offset().top) / 2);
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= firstSectionTop && $(document).scrollTop() < secondSectionTop){
		$('nav#primary a.geography').addClass('active');
	} else if ($(document).scrollTop() >= secondSectionTop && $(document).scrollTop() < thirdSectionTop){
		$('nav#primary a.partners').addClass('active');
	} else if ($(document).scrollTop() >= thirdSectionTop && $(document).scrollTop() < fourthSectionTop){
		$('nav#primary a.routen').addClass('active');
	} else if ($(document).scrollTop() >= fourthSectionTop){
		$('nav#primary a.about').addClass('active');
	}
}
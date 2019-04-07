$(window).scroll(function() {

	if ($("body").scrollTop() > 150 || $("html").scrollTop() > 150) {

		$("#home-logo").fadeOut(200);
		$("#menu-logo").fadeOut(200);
	
	} else {

		$("#home-logo").fadeIn(200);
		$("#menu-logo").fadeIn(200);
	}
});
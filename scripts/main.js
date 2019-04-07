$(document).ready(function() {
	       
	    $("#loading-page").delay(6000).fadeOut(700);
	    $("#home-page-blurb span").delay(500).animate({borderWidth: "5px"}, 100);
	    $("#home-page-blurb").delay(6500).animate({marginLeft: "5%", opacity: "1"}, 700);
});

var windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var windowH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

console.log("width: " + windowW, "height: " + windowH);

$(document).ready(function() {

	$("#menu-logo").on("click", function() {

		$("#about-page").fadeOut(100);
		$("#contact-page").fadeOut(100);
		$("#projects-page").fadeOut(100);

		$("#project1-canvas-container").fadeOut(100);
		$("#project2-canvas-container").fadeOut(100);
		$("#project3-canvas-container").fadeOut(100);

		$("#menu-page").animate({left: "0%", opacity: "1"}, 1200);
		$("#menu-line-effect").delay(1300).animate({top: "100%", opacity: "1"}, 700);

		if (windowW >= 320 && windowW <= 480) {

			$("#menu-page ul").delay(1500).animate({marginLeft: "15%", opacity: "1"}, 1200);

		} else {

			$("#menu-page ul").delay(1500).animate({marginLeft: "35%", opacity: "1"}, 1200);
		}
	});

	$("#menu-close").on("click", function() {

		$("#menu-page").delay(1500).animate({left: "-100%", opacity: "0"}, 1200);
		$("#menu-line-effect").delay(1000).animate({top: "-50%", opacity: "0"}, 700);
		$("#menu-page ul").animate({marginLeft: "20%", opacity: "0"}, 1200);
	});

	$("#about-li").on("mouseenter", function() {

		$("#about-float").delay(500).fadeIn(300);
	});

	$("#projects-li").on("mouseenter", function() {

		$("#projects-float").delay(500).fadeIn(300);
	});

	$("#contact-li").on("mouseenter", function() {

		$("#contact-float").delay(500).fadeIn(300);
	});	

	$("#contact-li, #about-li, #projects-li").on("mouseleave", function() {

		$("#contact-float").fadeOut(300);
		$("#projects-float").fadeOut(300);
		$("#about-float").fadeOut(300);	
	});

	$("#contact-li, #about-li, #projects-li").on("click", function() {

		$("#menu-page").delay(1500).animate({left: "-100%", opacity: "0"}, 1200);
		$("#menu-line-effect").delay(1000).animate({top: "-50%", opacity: "0"}, 700);
		$("#menu-page ul").animate({marginLeft: "20%", opacity: "0"}, 1200);
	});

	$("#about-li").on("click", function() {

		$("#home-page-blurb").animate({marginLeft: "3%", opacity: "0"}, 700);

		$("#home-logo").delay(500).fadeOut(500, function() {

			$(this).text("Go back").delay(500).fadeIn(500);
		});	

		$("#contact-page").fadeOut(100);
		$("#projects-page").fadeOut(100);
		$("#about-page").delay(1000).fadeIn(500);	
	});

	$("#contact-li").on("click", function() {

		$("#home-page-blurb").animate({marginLeft: "3%", opacity: "0"}, 700);

		$("#home-logo").delay(500).fadeOut(500, function() {

			$(this).text("Go back").delay(500).fadeIn(500);
		});	

		$("#about-page").fadeOut(100);
		$("#projects-page").fadeOut(100);
		$("#contact-page").delay(1000).fadeIn(500);
	});

	$("#projects-li").on("click", function() {

		$("#home-page-blurb").animate({marginLeft: "3%", opacity: "0"}, 700);

		$("#home-logo").delay(500).fadeOut(500, function() {

			$(this).text("Go back").delay(500).fadeIn(500);
		});	

		$("#about-page").fadeOut(100);
		$("#contact-page").fadeOut(100);
		$("#projects-page").delay(1000).fadeIn(500);
	});
});

$(document).ready(function() {

	$("#home-page-blurb span").on("click", function() {

		$("#home-page-blurb").animate({marginLeft: "3%", opacity: "0"}, 700);

		$("#home-logo").delay(500).fadeOut(500, function() {

			$(this).text("Go back").delay(500).fadeIn(500);
		});
	});

	$("#home-logo").on("click", function() {

		$("#home-logo").delay(500).fadeOut(500, function() {

			$(this).text("Adm").delay(500).fadeIn(500);
		});

		$("#project1-canvas-container").fadeOut(500);
		$("#project2-canvas-container").fadeOut(500);
		$("#project3-canvas-container").fadeOut(500);
		$("#home-page-blurb").delay(700).animate({marginLeft: "5%", opacity: "1"}, 700);
		$("#about-page").fadeOut(500);
		$("#projects-page").fadeOut(500);
		$("#contact-page").fadeOut(500);
	});
});	

$(document).ready(function() {

	$("#home-page-blurb span").on("mouseenter", function() {

		$("#home-page-blurb p").fadeOut(200);
	});

	$("#home-page-blurb span").on("mouseleave", function() {

		$("#home-page-blurb p").fadeIn(200);
	});
});
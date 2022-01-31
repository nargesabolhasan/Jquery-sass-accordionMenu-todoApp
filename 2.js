$(document).ready( function() {
	$("#accordion_wrapper ul li a").click( function() {
		$("#accordion_wrapper ul li a").removeClass("active");
		$(this).addClass("active");
		
		$("#accordion_wrapper ul li div").slideUp();
		
		$(this).next("div").slideDown();
		
	});
});

$(document).ready(function(){
	/*FOR MENU-RIGHT*/
	$(".menu-toggle").click(function(){
		$(".menu-toggle").toggleClass("active");
		$("nav").toggleClass("active");
	});


	//FOR TOP MENU
	$("nav .toggle-bar").click(function(){
		$("nav ul").slideToggle(500);
	});



	/*FOR SEARCH BUTTON*/
	$(".icon").click(function(){
		$(".search").toggleClass("active");
	});

	//FOR READ MORE LINKS
	$("#btn").hide();
	$("#para").hide();
	$("#showBtn").click(function(){
		$("#para").show();
		$("#showBtn").hide();
		$("#btn").show();
	});

	$("#btn").click(function(){
		$("#para").hide();
		$("#showBtn").show();
		$("#btn").hide();
	});

	//FOR FORM PERSPECTIVE
	$(".signin").click(function(){
		$(".fold").toggleClass("active");
	});
});

$(document).ready(
		function() {
			setTimeout(function(){
//$("ul.nav.navbar-nav.navbar-left.oe_application_menu_placeholder").before("<li><a class='menu_hide' href='javascript:menu_hide();'></a></li>");
$("<li><a class='menu_hide' href='javascript:menu_hide();'></a></li>").prependTo("ul.nav.navbar-nav.navbar-left.oe_application_menu_placeholder");
$(".navbar-collapse.collapse").css({"margin-left" : "211px"});
$("ul.nav.navbar-nav.navbar-left.oe_application_menu_placeholder > li").click(function() {
	$("li > a.menu_hide").remove();
  menu_show();
});

			},3000); 
		});

function menu_hide(){
	$(".oe_leftbar").hide();
	$(".navbar-collapse.collapse").css({"margin-left" : "0px"});
	$("li > a.menu_hide").remove();
	$("<li><a class='menu_show' href='javascript:menu_show();'></a></li>").prependTo("ul.nav.navbar-nav.navbar-left.oe_application_menu_placeholder");

//	$("ul.nav.navbar-nav.navbar-left.oe_application_menu_placeholder").before("<li><a class='menu_show' href='javascript:menu_show();'></a></li>");
	
}
function menu_show(){
	$(".oe_leftbar").show();
	$("li > a.menu_show").remove();
	$(".navbar-collapse.collapse").css({"margin-left" : "211px"});
	$("<li><a class='menu_hide' href='javascript:menu_hide();'></a></li>").prependTo("ul.nav.navbar-nav.navbar-left.oe_application_menu_placeholder");

//	$("ul.nav.navbar-nav.navbar-left.oe_application_menu_placeholder").before("<li><a class='menu_hide' href='javascript:menu_hide();'></a></li>");
}

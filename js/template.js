window.console = window.console || function(t) {};
  
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}
  
  
var $page = $('.page');

$('.menu_open').on('click', function () {
  $page.toggleClass('shazam');
    $html = $('html'); 
    $html.css('overflow', 'hidden'); 

});
$('.menu_close').on('click', function () {
  $page.removeClass('shazam');
    $html = $('html'); 
    $html.css('overflow', 'visible'); 

});
$('.content').on('click', function () {
  $page.removeClass('shazam');
  $html = $('html'); 
    $html.css('overflow', 'visible'); 
});
    
	
	
$(document).ready(function(){
	$(".h-menu .bars").click(function(){
		$(".h-menu ul").slideToggle();
	})
})




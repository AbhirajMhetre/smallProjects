// LONDON BRANCH POP UP
var delay = 1000; //in milleseconds

jQuery(document).ready(function($){
  setTimeout(function(){ showNewsletterPopup(); }, delay);
  
  $('.popup-close').click(function(){
      $('.newsletter-overlay').hide();
      
      //when closed create a cookie to prevent popup to show again on refresh
      setCookie('newsletter-popup', 'popped', 30);
  });
});

function showNewsletterPopup(){
  if( getCookie('newsletter-popup') == ""){
     $('.newsletter-overlay').show();
     setCookie('newsletter-popup', 'popped', 30);
  }
  else{
    console.log("Newsletter popup blocked.");
  }
}


function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+"; path=/";
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
        var c = jQuery.trim(ca[i]);
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}


//Fade left right js
var $animation_elements = $(".animation-element");
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = window_top_position + window_height;

	$.each($animation_elements, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = element_top_position + element_height;

		//check to see if this current container is within viewport
		if (
			element_bottom_position >= window_top_position &&
			element_top_position <= window_bottom_position
		) {
			$element.addClass("in-view");
		} else {
			$element.removeClass("in-view");
		}
	});
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll", check_if_in_view);










// navbar js

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar2");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}



// Wrap every letter in a span About us!!!!!
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });





  
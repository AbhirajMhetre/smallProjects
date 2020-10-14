//text change on landing page
$(function(){
  $(".typed").typed({
    strings: ["website.", "android app.", "iphone app.", "pc software.", "management software.", "cross platform solutions."],
    typeSpeed: 1,
    loop: true,
    backDelay: 1000
  });
});

$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop:  ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});




$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('.scroll-down').offset().top }, 'slow');
    return false;
  });
});




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



//   AOS EFFECTS
AOS.init({
  duration: 1200, 
  once:true
});

 




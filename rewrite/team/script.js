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


//EX-INATORIAN open div

let box = document.getElementById('box'),
    btn = document.querySelector('button');

btn.addEventListener('click', function () {
  
  if (box.classList.contains('hidden')) {
    box.classList.remove('hidden');
    setTimeout(function () {
      box.classList.remove('visuallyhidden');
    }, 20);
  } else {
    box.classList.add('visuallyhidden');    
    box.addEventListener('transitionend', function(e) {
      box.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }
  
}, false);



//   AOS EFFECTS
AOS.init({
  duration: 1200, 
  once:true
});



//New teammates 

$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger1').click(function(){
    $('#pop-up1').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up1');
  if (!container.contains(e.target)) {
    $('#pop-up1').hide();
  }
});

$('.trigger1').mousemove(function (e) {
    $('#pop-up1')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});




$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger2').click(function(){
    $('#pop-up2').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up2');
  if (!container.contains(e.target)) {
    $('#pop-up2').hide();
  }
});

$('.trigger2').mousemove(function (e) {
    $('#pop-up2')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});

$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger3').click(function(){
    $('#pop-up3').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up3');
  if (!container.contains(e.target)) {
    $('#pop-up3').hide();
  }
});

$('.trigger3').mousemove(function (e) {
    $('#pop-up3')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});

$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger4').click(function(){
    $('#pop-up4').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up4');
  if (!container.contains(e.target)) {
    $('#pop-up4').hide();
  }
});

$('.trigger4').mousemove(function (e) {
    $('#pop-up4')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});



$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger5').click(function(){
    $('#pop-up5').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up5');
  if (!container.contains(e.target)) {
    $('#pop-up5').hide();
  }
});

$('.trigger5').mousemove(function (e) {
    $('#pop-up5')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger6').click(function(){
    $('#pop-up6').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up6');
  if (!container.contains(e.target)) {
    $('#pop-up6').hide();
  }
});

$('.trigger6').mousemove(function (e) {
    $('#pop-up6')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger7').click(function(){
    $('#pop-up7').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up7');
  if (!container.contains(e.target)) {
    $('#pop-up7').hide();
  }
});

$('.trigger7').mousemove(function (e) {
    $('#pop-up7')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger8').click(function(){
    $('#pop-up8').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up8');
  if (!container.contains(e.target)) {
    $('#pop-up8').hide();
  }
});

$('.trigger8').mousemove(function (e) {
    $('#pop-up8')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});

$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger9').click(function(){
    $('#pop-up9').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up9');
  if (!container.contains(e.target)) {
    $('#pop-up9').hide();
  }
});

$('.trigger9').mousemove(function (e) {
    $('#pop-up9')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger10').click(function(){
    $('#pop-up10').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up10');
  if (!container.contains(e.target)) {
    $('#pop-up10').hide();
  }
});

$('.trigger10').mousemove(function (e) {
    $('#pop-up10')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});

$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger11').click(function(){
    $('#pop-up11').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up11');
  if (!container.contains(e.target)) {
    $('#pop-up11').hide();
  }
});

$('.trigger11').mousemove(function (e) {
    $('#pop-up11')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});

$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger12').click(function(){
    $('#pop-up12').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up12');
  if (!container.contains(e.target)) {
    $('#pop-up12').hide();
  }
});

$('.trigger12').mousemove(function (e) {
    $('#pop-up12')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});

// $(function () {
//   var moveLeft = 20;
//   var moveDown = 10;

//   $('.trigger13').click(function(){
//     $('#pop-up13').show();
//   }
// );

// document.addEventListener('mouseup', function(e) {
//   var container = document.getElementById('pop-up13');
//   if (!container.contains(e.target)) {
//     $('#pop-up13').hide();
//   }
// });

// $('.trigger13').mousemove(function (e) {
//     $('#pop-up13')
//       .css("top", e.pageY + moveDown)
//       .css("left", e.pageX + moveLeft);
//   });
// });

$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger14').click(function(){
    $('#pop-up14').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up14');
  if (!container.contains(e.target)) {
    $('#pop-up14').hide();
  }
});

$('.trigger14').mousemove(function (e) {
    $('#pop-up14')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});

$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger15').click(function(){
    $('#pop-up15').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up15');
  if (!container.contains(e.target)) {
    $('#pop-up15').hide();
  }
});

$('.trigger15').mousemove(function (e) {
    $('#pop-up15')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger16').click(function(){
    $('#pop-up16').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up16');
  if (!container.contains(e.target)) {
    $('#pop-up16').hide();
  }
});

$('.trigger16').mousemove(function (e) {
    $('#pop-up16')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger17').click(function(){
    $('#pop-up17').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up17');
  if (!container.contains(e.target)) {
    $('#pop-up17').hide();
  }
});

$('.trigger17').mousemove(function (e) {
    $('#pop-up17')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});

$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $('.trigger18').click(function(){
    $('#pop-up18').show();
  }
);

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('pop-up18');
  if (!container.contains(e.target)) {
    $('#pop-up18').hide();
  }
});

$('.trigger18').mousemove(function (e) {
    $('#pop-up18')
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});
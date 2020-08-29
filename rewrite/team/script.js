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


//EX-INATORIAN




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
  duration: 1200
});



//New teammates 

$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger1").hover(
    function (e) {
      $("div#pop-up1").show();
    },
    function () {
      $("div#pop-up1").hide();
    }
  );

  $(".trigger1").mousemove(function (e) {
    $("div#pop-up1")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger2").hover(
    function (e) {
      $("div#pop-up2").show();
    },
    function () {
      $("div#pop-up2").hide();
    }
  );

  $(".trigger2").mousemove(function (e) {
    $("div#pop-up2")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger3").hover(
    function (e) {
      $("div#pop-up3").show();
    },
    function () {
      $("div#pop-up3").hide();
    }
  );

  $(".trigger3").mousemove(function (e) {
    $("div#pop-up3")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger4").hover(
    function (e) {
      $("div#pop-up4").show();
    },
    function () {
      $("div#pop-up4").hide();
    }
  );

  $(".trigger4").mousemove(function (e) {
    $("div#pop-up4")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger5").hover(
    function (e) {
      $("div#pop-up5").show();
    },
    function () {
      $("div#pop-up5").hide();
    }
  );

  $(".trigger5").mousemove(function (e) {
    $("div#pop-up5")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger6").hover(
    function (e) {
      $("div#pop-up6").show();
    },
    function () {
      $("div#pop-up6").hide();
    }
  );

  $(".trigger6").mousemove(function (e) {
    $("div#pop-up6")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger7").hover(
    function (e) {
      $("div#pop-up7").show();
    },
    function () {
      $("div#pop-up7").hide();
    }
  );

  $(".trigger7").mousemove(function (e) {
    $("div#pop-up7")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger8").hover(
    function (e) {
      $("div#pop-up8").show();
    },
    function () {
      $("div#pop-up8").hide();
    }
  );

  $(".trigger8").mousemove(function (e) {
    $("div#pop-up8")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger9").hover(
    function (e) {
      $("div#pop-up9").show();
    },
    function () {
      $("div#pop-up9").hide();
    }
  );

  $(".trigger9").mousemove(function (e) {
    $("div#pop-up9")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger10").hover(
    function (e) {
      $("div#pop-up10").show();
    },
    function () {
      $("div#pop-up10").hide();
    }
  );

  $(".trigger10").mousemove(function (e) {
    $("div#pop-up10")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger11").hover(
    function (e) {
      $("div#pop-up11").show();
    },
    function () {
      $("div#pop-up11").hide();
    }
  );

  $(".trigger11").mousemove(function (e) {
    $("div#pop-up11")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger12").hover(
    function (e) {
      $("div#pop-up12").show();
    },
    function () {
      $("div#pop-up12").hide();
    }
  );

  $(".trigger12").mousemove(function (e) {
    $("div#pop-up12")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger13").hover(
    function (e) {
      $("div#pop-up13").show();
    },
    function () {
      $("div#pop-up13").hide();
    }
  );

  $(".trigger13").mousemove(function (e) {
    $("div#pop-up13")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger14").hover(
    function (e) {
      $("div#pop-up14").show();
    },
    function () {
      $("div#pop-up14").hide();
    }
  );

  $(".trigger14").mousemove(function (e) {
    $("div#pop-up14")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger15").hover(
    function (e) {
      $("div#pop-up15").show();
    },
    function () {
      $("div#pop-up15").hide();
    }
  );

  $(".trigger15").mousemove(function (e) {
    $("div#pop-up15")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger16").hover(
    function (e) {
      $("div#pop-up16").show();
    },
    function () {
      $("div#pop-up16").hide();
    }
  );

  $(".trigger16").mousemove(function (e) {
    $("div#pop-up16")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger17").hover(
    function (e) {
      $("div#pop-up17").show();
    },
    function () {
      $("div#pop-up17").hide();
    }
  );

  $(".trigger17").mousemove(function (e) {
    $("div#pop-up17")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});



$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $(".trigger18").hover(
    function (e) {
      $("div#pop-up18").show();
    },
    function () {
      $("div#pop-up18").hide();
    }
  );

  $(".trigger18").mousemove(function (e) {
    $("div#pop-up18")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});










$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up1").hover(
    function (e) {
      $("div#pop-up1").show();
    },
    function () {
      $("div#pop-up1").hide();
    }
  );

  $("#pop-up1").mousemove(function (e) {
    $("div#pop-up1")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up2").hover(
    function (e) {
      $("div#pop-up2").show();
    },
    function () {
      $("div#pop-up2").hide();
    }
  );

  $("#pop-up2").mousemove(function (e) {
    $("div#pop-up2")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up3").hover(
    function (e) {
      $("div#pop-up3").show();
    },
    function () {
      $("div#pop-up3").hide();
    }
  );

  $("#pop-up3").mousemove(function (e) {
    $("div#pop-up3")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up4").hover(
    function (e) {
      $("div#pop-up4").show();
    },
    function () {
      $("div#pop-up4").hide();
    }
  );

  $("#pop-up4").mousemove(function (e) {
    $("div#pop-up4")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up5").hover(
    function (e) {
      $("div#pop-up5").show();
    },
    function () {
      $("div#pop-up5").hide();
    }
  );

  $("#pop-up5").mousemove(function (e) {
    $("div#pop-up5")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up6").hover(
    function (e) {
      $("div#pop-up6").show();
    },
    function () {
      $("div#pop-up6").hide();
    }
  );

  $("#pop-up6").mousemove(function (e) {
    $("div#pop-up6")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up7").hover(
    function (e) {
      $("div#pop-up7").show();
    },
    function () {
      $("div#pop-up7").hide();
    }
  );

  $("#pop-up7").mousemove(function (e) {
    $("div#pop-up7")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up8").hover(
    function (e) {
      $("div#pop-up8").show();
    },
    function () {
      $("div#pop-up8").hide();
    }
  );

  $("#pop-up8").mousemove(function (e) {
    $("div#pop-up8")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up9").hover(
    function (e) {
      $("div#pop-up9").show();
    },
    function () {
      $("div#pop-up9").hide();
    }
  );

  $("#pop-up9").mousemove(function (e) {
    $("div#pop-up9")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up10").hover(
    function (e) {
      $("div#pop-up10").show();
    },
    function () {
      $("div#pop-up10").hide();
    }
  );

  $("#pop-up10").mousemove(function (e) {
    $("div#pop-up10")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up11").hover(
    function (e) {
      $("div#pop-up11").show();
    },
    function () {
      $("div#pop-up11").hide();
    }
  );

  $("#pop-up11").mousemove(function (e) {
    $("div#pop-up11")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up12").hover(
    function (e) {
      $("div#pop-up12").show();
    },
    function () {
      $("div#pop-up12").hide();
    }
  );

  $("#pop-up12").mousemove(function (e) {
    $("div#pop-up12")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up13").hover(
    function (e) {
      $("div#pop-up13").show();
    },
    function () {
      $("div#pop-up13").hide();
    }
  );

  $("#pop-up13").mousemove(function (e) {
    $("div#pop-up13")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up14").hover(
    function (e) {
      $("div#pop-up14").show();
    },
    function () {
      $("div#pop-up14").hide();
    }
  );

  $("#pop-up14").mousemove(function (e) {
    $("div#pop-up14")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up15").hover(
    function (e) {
      $("div#pop-up15").show();
    },
    function () {
      $("div#pop-up15").hide();
    }
  );

  $("#pop-up15").mousemove(function (e) {
    $("div#pop-up15")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up16").hover(
    function (e) {
      $("div#pop-up16").show();
    },
    function () {
      $("div#pop-up16").hide();
    }
  );

  $("#pop-up16").mousemove(function (e) {
    $("div#pop-up16")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up17").hover(
    function (e) {
      $("div#pop-up17").show();
    },
    function () {
      $("div#pop-up17").hide();
    }
  );

  $("#pop-up17").mousemove(function (e) {
    $("div#pop-up17")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});


$(function () {
  var moveLeft = 20;
  var moveDown = 10;

  $("#pop-up18").hover(
    function (e) {
      $("div#pop-up18").show();
    },
    function () {
      $("div#pop-up18").hide();
    }
  );

  $("#pop-up18").mousemove(function (e) {
    $("div#pop-up18")
      .css("top", e.pageY + moveDown)
      .css("left", e.pageX + moveLeft);
  });
});









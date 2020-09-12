//navbar
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

   //>=, not <=
  if (scroll >= 500) {
      //clearHeader, not clearheader - caps H
      $(".navbar").addClass("top-nav-collapse");
  }
});


//scroll down
$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('.scroll-down').offset().top }, 'slow');
    return false;
  });
});


//show and hide scorecard
function hide(obj) {

  var el = document.getElementById(obj);

      el.style.display = 'none';

}
function show(obj) {

  var el = document.getElementById(obj);

      el.style.display = 'block';

}

 //slider js
 $(document).ready(function () {
  var $slider = $(".slider"),
    $slideBGs = $(".slide__bg"),
    diff = 0,
    curSlide = 0,
    numOfSlides = $(".slide").length - 1,
    animating = false,
    animTime = 500,
    autoSlideTimeout,
    autoSlideDelay = 6000,
    $pagination = $(".slider-pagi");

  function createBullets() {
    for (var i = 0; i < numOfSlides + 1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-" + i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  }

  createBullets();

  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides)
      $(".slider-control.right").addClass("inactive");
  }

  function autoSlide() {
    autoSlideTimeout = setTimeout(function () {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  }

  autoSlide();

  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-" + curSlide).addClass("active");
      setTimeout(function () {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-" + curSlide).addClass("active");
    $slider.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)");
    $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function (e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
      winW = $(window).width();
    diff = 0;

    $(document).on("mousemove touchmove", function (e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = ((startX - x) / winW) * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0))
        diff /= 2;
      $slider.css(
        "transform",
        "translate3d(" + (-curSlide * 100 - diff) + "%,0,0)"
      );
      $slideBGs.css(
        "transform",
        "translate3d(" + (curSlide * 50 + diff / 2) + "%,0,0)"
      );
    });
  });

  $(document).on("mouseup touchend", function (e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });

  $(document).on("click", ".slider-control", function () {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });

  $(document).on("click", ".slider-pagi__elem", function () {
    curSlide = $(this).data("page");
    changeSlides();
  });
});




//firebase scorecard
var database = firebase.database();
var flag=0;



async function liveData(){
  let respo=await axios.get('https://rest.entitysport.com/v2/matches/?status=3&token=179b91399ba70939285b7ff479269eb9');
  var doc=respo.data;
  if(doc.response.items[0].commentary!==1 && doc.response.items[0].wagon!==1){
    flag=1;
  }
console.log(doc.response.items[0]);
  return doc;
  }
  //doc.response.items[0].competition.cid + '-' + doc.response.items[0].match_id;
  
liveData().then((doc)=>{
  var i=0;
 
  if(doc.response.items.length){
  
  while(doc.response.items[i].commentary!==1&&doc.response.items[i].wagon!==1){
    i++;
  }
  if(i===doc.response.items.length+1){
      flag=1;
  }else{
    flag=2;
  }
  
  }else{
  console.log('No live matches');
    //No live match..
  }
  if(flag===2){
  console.log(doc.response.items[i]);
  }
  if(flag===1){
  console.log("No live matches with active wagon and/or commentary...");
  }
  })



database.ref('/Matches/111079-37788/matchdetails/match').once('value').then((snap)=>{
var card =    '<div id="score-subheading">';


             if(flag==1){
              card += '<img id="live" src="pictures/live2.png" alt="">';
             }               
             
             
             card += snap.val().name + '<span onClick="hide(\'scorecard\')">X</span></div>'+
                    '<div class="row">'+
                      '<div id="left-card" class="col-6">'+
                        '<img src=" ' + snap.val().Team1.logoUrl +'" alt="">'+
                        '<div >' + snap.val().Team1.name  + '</div>'+
                        '<div>'+ snap.val().scores.Team1score +' (' + snap.val().scores.Team1overs +')' +'</div>'+
                      '</div>'+
                      //'<div id="current-score" class="col-4">' + snap.val().Team1.name + snap.val().scores.Team2score +'<br>('+ snap.val().scores.Team2overs + 'overs)</div>'+
                      '<div id="right-card" class="col-6">'+
                        '<img src=" ' + snap.val().Team2.logoUrl + ' " alt="">'+
                        '<div>'+ snap.val().Team2.name +'</div>'+
                        '<div>'+ snap.val().scores.Team2score +' (' + snap.val().scores.Team2overs +')'  +'</div>'+
                      '</div>'+
                      '</div>'+
                    '<div>'+ snap.val().matchSummaryText +'</div>';

                    $('#scorecard').append(card);

});












  




  
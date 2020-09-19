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
var i=0;
var combineid ="";

liveData().then((doc)=>{
 
 
  if(doc.response.items.length){
        
  
          while(!(doc.response.items[i].commentary==1 && doc.response.items[i].wagon==1 && doc.response.items[i].format==6)){
            i++;
          }
          console.log("value of i is" + i);
          combineid = doc.response.items[i].competition.cid + '-' + doc.response.items[i].match_id;
          console.log(combineid);


          var getmatch = "/Matches/" + combineid ;
          var getmatch2 = "/UpcomingMatches/" + combineid
          console.log(getmatch);
          console.log(getmatch2);
          //'/Matches/111079-37788/matchdetails/match'
          
          database.ref(getmatch).once('value').then((snap)=>{
            console.log(snap.val());
          database.ref(getmatch2).once('value').then((snap2)=>{
            console.log(snap2.val());
            if(snap.val().scorecard.length === 2){
              //2nd inning
              currentInningId= 1;
            }else{
              //1st inning
              currentInningId= 0;
            }
           
            
            var battingTeamId = snap.val().scorecard[currentInningId].battingTeamId ;
            var shortnamebat = "";

            if(snap2.val().team1.id === battingTeamId){
              shortnamebat = snap2.val().team1.shortName;
            }else{
              shortnamebat = snap2.val().team2.shortName;
            }
        
          var card =    '<div id="score-subheading">';
          
          
                       if(flag==2){
                        card += '<img id="live" src="pictures/live2.png" alt="">';
                       }               
                       
                       
                       card += snap2.val().Name + ", " + snap2.val().series.name + '<span onClick="hide(\'scorecard\')">X</span></div>'+
                              '<div class="row">'+
                                '<div id="left-card" class="col-4">'+
                                  '<img src=" ' + snap2.val().team1.logoUrl +'" alt="">'+
                                  '<div >' + snap2.val().team1.shortName  + '</div>'+

                                  '</div>'+
                                '<div id="current-score" class="col-4">'+ shortnamebat + ":" + snap.val().scorecard[currentInningId].runs + "-" + snap.val().scorecard[currentInningId].wickets +'<br>('+ snap.val().scorecard[currentInningId].overs + ' overs)' +
                                '</div>'+

                                '<div id="right-card" class="col-4">'+
                                  '<img src=" ' + snap2.val().team2.logoUrl + ' " alt="">'+
                                  '<div>'+ snap2.val().team2.shortName +'</div>'+
                                  '<div>'+'</div>'+
                                '</div>'+
                                '</div>'+
                                '<hr>'+
                              '<div>'+ "RUN RATE: "+ snap.val().scorecard[currentInningId].runrate +
                              '<div>'+ snap.val().scorecard[currentInningId].current_partnership.batsmen[0].name + " " + snap.val().scorecard[currentInningId].current_partnership.batsmen[0].runs + "*(" +snap.val().scorecard[currentInningId].current_partnership.batsmen[0].balls+ ")" + "    |  "+
                               snap.val().scorecard[currentInningId].current_partnership.batsmen[1].name + " " + snap.val().scorecard[currentInningId].current_partnership.batsmen[1].runs + "*(" +snap.val().scorecard[currentInningId].current_partnership.batsmen[1].balls+ ")" + '</div>';

                              if(currentInningId === 1){
                                card +=   '<div>Taget:' + snap.val().scorecard[1].target + " |  Req.RR:" + snap.val().scorecard[1].required_runrate + '</div>';

                              }


                    card +=          '</div>';
          
                              $('#scorecard').append(card);
         });
          });
        
        









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
    //card for live match

  }
  if(flag===1){
  console.log("No live matches with active wagon and/or commentary...");
  }
  })


async function liveData(){
  let respo=await axios.get('https://rest.entitysport.com/v2/matches/?status=3&token=179b91399ba70939285b7ff479269eb9');
  var doc=respo.data;
  console.log(doc.response.items);
  
  if(doc.response.items[i].commentary!==1 && doc.response.items[i].wagon!==1 && doc.response.items[i].format!==6){
    flag=1;
  }


  return doc;
  }
  


 











  




  
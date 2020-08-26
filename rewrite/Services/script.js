var ref = firebase.database().ref();
var service = "";
var adaRef = firebase.database().ref("Services");
var key = adaRef.key;




ref.on("value", function(snapshot) {
      var url = location.href;
      url = url.split('?')[1];
     

      if (url=="WebDev") {
         service = snapshot.val().Services.WebDev;           
         key = adaRef.child("WebDev").child("logos").key;              
         var h = adaRef.child("WebDev").child("logos");
       } else if (url=="AndroidDevelopement") {
         service = snapshot.val().Services.AndroidDevelopement;
         key = adaRef.child("AndroidDevelopement").child("logos").key;              
         var h = adaRef.child("AndroidDevelopement").child("logos");
       } else if (url=="CrossPlatformSolutions") {
         service = snapshot.val().Services.CrossPlatformSolutions;
         key = adaRef.child("CrossPlatformSolutions").child("logos").key;              
         var h = adaRef.child("CrossPlatformSolutions").child("logos");
       } else {
         service = snapshot.val().Services.ProgressiveWebApps;
         key = adaRef.child("ProgressiveWebApps").child("logos").key;              
         var h = adaRef.child("ProgressiveWebApps").child("logos");
         
       }

  var content="";

   
   content =  '<div id="Services"><div class="container-fluid"><h1 class="service-heading">' + service.heading +
              '</h1> <div class="service-info">'+ service.info +
            '</div><div class="service-logo"><p class="service-tech">Our Tech Stack:</p>';
    

                    h.once("value", function(snapshot) {
                      snapshot.forEach(function(child) {
                        console.log(child.val());
                        content += '<img src=" '+ child.val() +  '" >';
                    });
                  });

                  //   var f = h.toString();
                  //  var x = new URL(f).href;
                  //       var l = '<img src="' + x +  '" >'; 
                  //       console.log(l);
                  //    content += l;
                 
                  
                // '<img src=" '+ service.logos.logo1 +  '" >' +
                // '<img src=" '+ service.logos.logo2 +  '" >' +
                // '<img src=" '+ service.logos.logo3 +  '" >' +
    content += '</div></div></div>';     
   $('#Services').append(content);
}, function (error) {
   console.log("Error: " + error.code);
});


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
   

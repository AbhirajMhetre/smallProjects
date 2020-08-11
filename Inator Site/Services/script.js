var ref = firebase.database().ref();
var service = "";

 
ref.on("value", function(snapshot) {
      var url = location.href;
      url = url.split('?')[1];
     

      if (url=="WebDev") {
         service = snapshot.val().Services.WebDev;
       } else if (url=="AndroidDevelopement") {
         service = snapshot.val().Services.AndroidDevelopement;
       } else if (url=="CrossPlatformSolutions") {
         service = snapshot.val().Services.CrossPlatformSolutions;
       } else {
         service = snapshot.val().Services.ProgressiveWebApps;
       }
      
   
   
  var content="";

   
   content =  '<div id="Services"><div class="container-fluid"><h1 class="service-heading">' + service.heading +
              '</h1> <div class="service-info">'+ service.info +
            '</div><div class="service-logo">'+
                '<img src=" '+ service.logos.logo1 +  '" >' +
                '<img src=" '+ service.logos.logo2 +  '" >' +
                '<img src=" '+ service.logos.logo3 +  '" >' +
            '</div></div></div>';     
   $('#Services').append(content);
}, function (error) {
   console.log("Error: " + error.code);
});


// document.getElementById("wevdevbtn").onclick = function () {
//    service = snapshot.val().Services.WebDev;
// };
// document.getElementById("pwabtn").onclick = function () {
// service = snapshot.val().Services.PWA;
// };
// document.getElementById("anddevbtn").onclick = function () {
// service = snapshot.val().Services.AndroidDevelopement;
// };
// document.getElementById("cpsbtn").onclick = function () {
// service = snapshot.val().Services.CrossPlatformSolutions;
var ref = firebase.database().ref();
var choice = "WebDev";
ref.on("value", function(snapshot) {

//    document.getElementById("wevdevbtn").onclick = function () {
//    choice = "WebDev";
//   };

   var content="";
   var service = snapshot.val().Services.WebDev;
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

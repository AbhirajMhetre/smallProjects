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


    content += '</div></div></div>'+
    '<!-- Site footer -->'+
        
    '<footer class="site-footer">'+
      '<div class="container-fluid">'+
        '<div class="row">'+
          '<div class="col-xs-6 col-md-6">'+
            '<div>'+
              
              '<form>'+
                '<h6>Contact Us</h6>'+
                '<label for="fname">Full Name</label>'+
                '<input type="text" id="fname" name="firstname" placeholder="Your name..">'+
            
                '<label for="lname">Email</label>'+
                '<input type="text" id="lname" name="lastname" placeholder="Your email ID..">'+
            
          
            
                '<label for="subject">Subject</label>'+
                '<textarea id="subject" name="subject" placeholder="Write something.." style="height:100px"></textarea>'+
            
                '<input type="submit" value="SEND">'+
            
              '</form>'+
            '</div>'+
          '</div>'+
          '<div class="col-sm-12 col-md-3">'+
            '<h6>Address</h6>'+
            '<div class="text-justify address">Main Office'+
              '<p class="text-justify">5/403, Ved Vihar, besides Ved Bhavan, Paud road, Kothrud, 411038, Pune</p>'+
            '</div>'+
           
            '<div class="text-justify address">Branch Office'+
              '<p class="text-justify">5th Floor, D building,MIT WPU, Rambaug colony, Pune</p>'+
            '</div>'+
           
            '<div class="text-justify address">Branch Office'+
              '<p class="text-justify">37 Wormwhole Road, Shephards Bush, London</p>'+
            '</div>'+
           
          '</div>'+
    
          '<div class="col-xs-6 col-md-3">'+
            '<h6>Our Services</h6>'+
            '<ul class="footer-links">'+
              '<li><a href="#">Web Development</a></li>'+
              '<li><a href="#">App Development</a></li>'+
              '<li><a href="#">PWA</a></li>'+
              '<li><a href="#">Cross-Platform Solutions</a></li>'+
              '<li><a href="#">Free Support</a></li>'+
            '</ul>'+
            '<h6>Our Affiliations</h6>'+
            '<img src="../../icons/nordvpn.png" alt="" srcset="">'+
            '<div>The only one to rely</div>'+
          '</div>'+
        '</div>'+
        '<hr>'+
      '</div>'+
      '<div class="container">'+
        '<div class="row">'+
          '<div class="col-md-8 col-sm-6 col-xs-12">'+
            '<p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by '+
         '<a href="#">INATOR LLP</a>.'+
            '</p>'+
          '</div>'+
    
          '<div class="col-md-4 col-sm-6 col-xs-12">'+
          '<ul class="social-icons">'+
          '<li><a class="facebook" href="https://www.facebook.com/inatorllp"><i class="fa fa-facebook"></i></a></li>'+
          '<li><a class="twitter" href="https://twitter.com/Inatorllp"><i class="fa fa-twitter"></i></a></li>'+
          '<li><a class="dribbble" href="https://www.instagram.com/inator.llp/?hl=en"><i class="fa fa-instagram"></i></a></li>'+
          '<li><a class="linkedin" href="https://www.linkedin.com/company/inatorllp/"><i class="fa fa-linkedin"></i></a></li> '+
        '</ul>'+
          '</div>'+
       ' </div>'+
      '</div>'+
    '</footer>';




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
   

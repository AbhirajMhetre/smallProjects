//LOAD DATA FROM FIREBASE

var ref = firebase.database().ref();
var JobDescription = "";
var adaRef = firebase.database().ref("JobDescription");
var key = adaRef.key;
var Tasks,Expectations,Extras;




ref.on("value", function(snapshot) {
      var url = location.href;
      url = url.split('?')[1];
     

      if (url=="WebDeveloper") {
         JobDescription = snapshot.val().JobDescription.WebDeveloper;
         TasksL = adaRef.child("WebDeveloper").child("TasksL");
         TasksR = adaRef.child("WebDeveloper").child("TasksR");
         ExtrasL = adaRef.child("WebDeveloper").child("ExtrasL");
         ExtrasR = adaRef.child("WebDeveloper").child("ExtrasR");
         ExpectationsL = adaRef.child("WebDeveloper").child("ExpectationsL");
         ExpectationsR = adaRef.child("WebDeveloper").child("ExpectationsR");
       } else if (url=="AndroidDeveloper") {
         JobDescription = snapshot.val().JobDescription.AndroidDeveloper;
         var h = adaRef.child("AndroidDeveloper").child("Tasks");
       } else if (url=="UXDesigner") {
         JobDescription = snapshot.val().JobDescription.UXDesigner;
       } else if(url=="ProjectManager") {
         JobDescription = snapshot.val().JobDescription.ProjectManager;
       }

  var content="";

   
   content =  '<div class="container"><div id="intro" class="item" data-aos="slide-up"><h1>' + JobDescription.Mainheading +
   '</h1><hr><div id="intropara">' + JobDescription.MainPara + 
   '</div><button class="apply-btn">APPLY NOW</button></div><div class="section item" data-aos="slide-up"><h2 >Your tasks will be...</h2><div class="row"><div class="col-md-6 ">' ;
                TasksL.once("value", function(snapshot) {
                  snapshot.forEach(function(child) {
                    content += '<p>' + child.val() + '</p> <hr>';
                  });
                });

      content +=    '</div><div class="col-md-6 ">';
                  TasksR.once("value", function(snapshot) {
                    snapshot.forEach(function(child) {
                      content += '<p>' + child.val() + '</p> <hr>';
                    });
                  });
                  content += '</div></div></div><div class="section item" data-aos="slide-up"><h2>What we Expect from you...</h2><div class="row"><div class="col-md-6">';
                  ExpectationsL.once("value", function(snapshot) {
                    snapshot.forEach(function(child) {
                      content += '<p>' + child.val() + '</p> <hr>';
                    });
                  });
           
                  content += '</div><div class="col-md-6">';
                  ExpectationsR.once("value", function(snapshot) {
                    snapshot.forEach(function(child) {
                      content += '<p>' + child.val() + '</p> <hr>';
                    });
                  });
                  content += '</div></div></div><div class="section item" data-aos="slide-up"><h2>We are going to be exceptionally happy if you...</h2><div class="row"><div class="col-md-6">';
                  ExtrasL.once("value", function(snapshot) {
                    snapshot.forEach(function(child) {
                      content += '<p>' + child.val() + '</p> <hr>';
                    });
                  });

               
          content += '</div><div class="col-md-6 col-sm-12">';
          ExtrasR.once("value", function(snapshot) {
            snapshot.forEach(function(child) {
              content += '<p>' + child.val() + '</p> <hr>';
            });
          });

          content += '</div></div></div></div>';


          content += '  <!-- APPLY FORM -->'+
  
          '<section id="contact" class="item" data-aos="slide-up">'+
            'div class="container">'+
              '<div class="row">'+
                '<div class="col-lg-12 text-center">'+
                  '<h2 class="section-heading">Apply Now!!</h2>'+
                  '<h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>'+
                '</div>'+
              '</div>'+
              '<div class="row">'+
                '<div class="col-lg-12">'+
                  '<form name="sentMessage" id="contactForm" novalidate="">'+
                    '<div class="row">'+
                      '<div class="col-md-6">'+
                        '<div class="form-group">'+
                          '<input type="text" class="form-control" placeholder="Your Name *" id="name" required="" data-validation-required-message="Please enter your name.">'+
                          '<p class="help-block text-danger"></p>'+
                        '</div>'+
                        '<div class="form-group">'+
                          '<input type="email" class="form-control" placeholder="Your Email *" id="email" required="" data-validation-required-message="Please enter your email address.">'+
                          '<p class="help-block text-danger"></p>'+
                        '</div>'+
                        '<div class="form-group">'+
                          '<input type="tel" class="form-control" placeholder="Your Phone *" id="phone" required="" data-validation-required-message="Please enter your phone number.">'+
                          '<p class="help-block text-danger"></p>'+
                        '</div>'+
                        '<div class="form-group">'+
            
                          '<input name="userfile" type="file" class="form-control" placeholder="Attach Resume *" id="phone" accept="application/pdf, application/vnd.ms-excel" required="" data-validation-required-message="Please attach your resume">'+
                        
                        '</div>'+
                      '</div>'+
                      '<div class="col-md-6">'+
                        '<div class="form-group">'+
                          '<textarea class="form-control" placeholder="Your Message *" id="message" required="" data-validation-required-message="Please enter a message."></textarea>'+
                          '<p class="help-block text-danger"></p>'+
                        '</div>'+
                     '</div>'+
                      '<div class="clearfix"></div>'+
                      '<div class="col-lg-12 text-center">'+
                        '<div id="success"></div>'+
                        '<button type="submit" class="btn btn-xl">Send Message</button>'+
                      '</div>'+
                    '</div>'+
                  '</form>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</section>'+
        
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
                  '<li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>'+
                  '<li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>'+
                  '<li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>'+
                  '<li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   '+
                '</ul>'+
              '</div>'+
           ' </div>'+
          '</div>'+
        '</footer>';
          
               
                
    
   $('#firebasediv').append(content);
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



//Get the button
var mybutton = document.getElementById("applyBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


//   AOS EFFECTS
AOS.init({
  duration: 1200
});

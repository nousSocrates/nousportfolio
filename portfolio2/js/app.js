var menu = document.getElementById("menu");
var openClose = document.getElementById("openClose");
var navLinks = document.getElementById("navLinks");


function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-250px";
}


menu.style.right = "-250px";
openClose.onclick = function() {
    if(menu.style.right == "-250px") {
        hideMenu();
    }
    else {
        showMenu();
    }
}


// Sticky navbar JQuery
$(ducument).ready(function() { $(window).on('scroll', function() { var scroll = $(window).scrollTop(); if(scroll >= 50) { $(".sticky").addClass("stickyAdd"); } else { $(".sticky").removeClass("stickyAdd"); } }) });


// typed.js

var typed = new Typed(".element", { strings: ["a student of Socrates", "a Teacher", "a Web Developer", "a Musician" ], smartBackspace: true, typeSpeed: 100, backSpeed: 100, loop: true, loopCount: Infinity, startDelay: 1000 });



// PROGRESS BARS
var waypoint = new waypoint({ element: document.getElementById('skills'), handler: function (direction) { var progress = document.querySelectorAll('.progress-bar'); progress[0].setAttribute("style", "width:98%;transition:1s all"); progress[1].setAttribute("style", "width:95%;transition:1.5s all"); progress[2].setAttribute("style", "width:88%;transition:1.7s all"); progress[3].setAttribute("style", "width:95%;transition:2s all"); progress[4].setAttribute("style", "width:80%;transition:2.3s all"); progress[5].setAttribute("style", "width:86%;transition:2.5s all"); }, offset: '80%' })


// SEND EMAIL FXN
function sendEmail() {
    Email.send({ Host: "smtp.gmail.com", Username: "phelouma@gmail.com", Password: "Inquiryix6479", To: 'phelouma@gmail.com', From: document.getElementById("email").value, Subject: "Products", Body: document.getElementById("message").value }).then(message => alert(message));
}

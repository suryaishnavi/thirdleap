 // Scrolling Effect

 $(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').removeClass("temp").addClass('black');
    }

    else {
          $('nav').removeClass('black').addClass("temp");
    }
});


//------------------------------------- for smooth scroll -----------------------------

$(function() {

	"use strict";

  $('nav li a:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {

        $('html, body').animate({

          scrollTop: target.offset().top

        }, 1000);

        return false;

      }

    }

  });

});

// //-------------------------- end of smooth scroll----------------------------------------


let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('navbar');
});


// --------------model window--------

let model = document.querySelector(".btn_demo");
model.addEventListener("click", function(event){
  event.preventDefault();
})
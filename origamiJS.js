//javascript file to be added later
//(function () {
//});

$(document).ready(function () {
    if (document.body.clientWidth < 700) {
        $("#index_brand").text("Origami Learning");
        $("#about_brand").text("About Us");
        $("#tutorials_brand").text("Origami Tutorials");
        $("#contact_brand").text("Contact Us");
        $("#home").text("");
        $("#about").text("");
        $("#tutorials").text("");
        $("#contact").text("");
    }

    if ($("nav-item").hasClass("active")) {
        $("#nav-item").addClass("nav-dark");
    }
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
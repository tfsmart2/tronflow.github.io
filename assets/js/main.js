$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" && !this.hash.indexOf("contract")) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 105
      }, 500);
    } // End if
  });
});
//onScroll
$(window).on("scroll", () => {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 50) {
    $("#main-nav").addClass("fixed-top");
  } else {
    $("#main-nav").removeClass("fixed-top");
  }
});

// Accordion toggle icon
$(".card-header").click(() => {
  $(this).toggleClass("active");
});

// Initialize popover
$('[data-toggle="popover"]').popover();

// Make popover dismissable
$(".popover-dismiss").popover({
  trigger: "focus",
});

// window.setInterval(() => {
//   $(".custom-popover").toggleClass("custom-popover-active");
// }, 30000);
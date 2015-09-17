//Make sure the page is loaded before running any js
$( document ).ready(function() {
    setup();
});

//setup for click events for the faq section
function setup() {
  $(".expand").click(function() {
    if($(this).hasClass("expanded")) {
      //hides paragraph content had to account for many sizes based on device
      $(this).toggleClass("expanded");
      if($(this).find("h4").height() > 20) {
        if($(this).find("h4").height() > 32) {
          $(this).css("height",35);
        }else {
          $(this).css("height",20);
        }
      }else {
        if($(this).find("h4").height() === 16) {
          $(this).css("height",10);
        }else {
          $(this).css("height",20);
        }
      }
      if($(this).find("h4").height() === 46) {
        $(this).css("height",20);
      }
      //rotates arrow back to original position
      $(this).find("img").toggleClass("rotate90");
    }else {
      //shows hidden content
      $(this).toggleClass("expanded");
      //added padding to make it look right on the bottom
      var padding = 15;
      var currHeight = $(this).find("h4").height() + $(this).find("p").height() + padding;
      $(this).css("height",currHeight);
      //rotates the arrow
      $(this).find("img").toggleClass("rotate90");
    }
  });
}
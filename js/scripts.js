// http://codepen.io/ Great place to test bits of code

//Make sure the page is loaded before running any js
$( document ).ready(function() {
    setup();
});

//setup for click events for the faq section
function setup() {
  $(".expand").click(function() {
    if($(this).hasClass("expanded")) {
      //hides paragraph content
      $(this).toggleClass("expanded");
      if($(this).find("h4").height() > 20) {
        $(this).css("height",40);
      }else {
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
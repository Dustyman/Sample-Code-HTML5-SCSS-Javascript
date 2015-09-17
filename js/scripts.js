$( document ).ready(function() {
    console.log( "document loaded" );
    setup();
});

function setup() {
  $( ".expand" ).click(function() {
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
      var padding = 15;
      var currHeight = $(this).find("h4").height() + $(this).find("p").height() + padding;
      $(this).css("height",currHeight);
      //rotates the arrow
      $(this).find("img").toggleClass("rotate90");
    }
  });
}
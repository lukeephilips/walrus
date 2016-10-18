$(document).ready(function() {
  $(".walrus").click(function() {
    $("#hidden").toggle();
    $("#showing").toggle();
  });
  $("span.carpenter").click(function() {
    $("img#carpenter").fadeToggle("slow");
  });
  $("span#slider").click(function() {
    $("img#sliding").slideToggle("slow");
  });
  $("button.red").click(function() {
    $("body").removeClass();
    $("body").addClass("red");
  });
  $("button.yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow");
  });
  $("button.blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue");
  });
  $("button.pink").click(function() {
    $("body").removeClass();
    $("body").addClass("pink");
  });
});

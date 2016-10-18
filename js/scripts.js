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
});

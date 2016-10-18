$(document).ready(function() {
  $(".clickable").click(function() {
    $("#hidden").toggle();
    $("#showing").toggle();
  });
  $(".click").click(function() {
    $("#carpenter").fadeToggle("slow");

  });
});

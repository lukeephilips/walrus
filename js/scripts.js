$(document).ready(function() {
  $(".clickable").click(function() {
    $("#hidden").toggle();
    $("#showing").toggle();
  });
});

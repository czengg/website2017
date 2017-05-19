//EVENT LISTENERS

$(document).ready(function() {
  updateHeaderHeight();
});

$(window).on('resize', function() {
  updateHeaderHeight();
});


function updateHeaderHeight() {
  $('.header').height($(window).height());
}

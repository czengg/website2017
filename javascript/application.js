//EVENT LISTENERS
(function() {
  var projectsData = {};
  var projectsMenu = [];

  //render the scene
  var experienceTemplate = Handlebars.compile($('#experience').html());

  //render
  $('.experience-list').html(experienceTemplate(data.experience));

  $(document).ready(function() {
    updateHeaderHeight();

    $('.experience').on('click tap', function(e) {
      $(this).toggleClass('collapsed');
    });
  });

  $(window).on('resize', function() {
    updateHeaderHeight();
  });

  function updateHeaderHeight() {
    $('.header').height($(window).height());
  }
})();

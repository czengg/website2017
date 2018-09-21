//EVENT LISTENERS
(function() {
  var projectsData = {};
  var projectsMenu = [];

  //render the scene
  var experienceTemplate = Handlebars.compile($('#experience').html());

  //render
  var experience = data.experience.map(e => ({
    ...e,
    description: e.description.join(' </br> '),
  }))
  $('.experience-list').html(experienceTemplate(experience));

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

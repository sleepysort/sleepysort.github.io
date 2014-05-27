$(document).ready(function() {
  $.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  }

  $('#link-about').click(function (event) {
    event.preventDefault();
    $('#about').scrollView();
  });

  $('#link-projects').click(function (event) {
    event.preventDefault();
    $('#projects').scrollView();
  });

  $('#link-resume').click(function (event) {
    event.preventDefault();
    $('#resume').scrollView();
  });

  $('#link-contact').click(function (event) {
    event.preventDefault();
    $('#contact').scrollView();
  });
});
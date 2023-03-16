$(document).ready(function() {
  $('.navbar-toggle').click(function() {
      $('.header').toggleClass('open');
  });

  
  let heightNav = $(".header").height();
  $(window).on("scroll", function() {
  if ($(window).scrollTop() >  heightNav) $('.header').addClass('top');
  else $('.header').removeClass('top');
  });
});
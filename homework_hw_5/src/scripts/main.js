
$(document).ready(function() {

  let burger = $('.burger');
  let menu = $('.m-main-nav__list');
  let close = $('.close-menu');

  burger.on('click', function(event) {
    menu.toggleClass('m-main-nav__list--active');
});

  close.on('click', function(event) {
    menu.toggleClass('m-main-nav__list--active');
});

});

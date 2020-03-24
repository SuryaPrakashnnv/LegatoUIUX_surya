
$(document).ready(function () {
  let user_nav = $('.user-nav');
  user_nav.on('mouseenter', 'div', function () {
    $(this).find('i').stop().animate({ fontSize: '3rem' }, 300).animate({ fontSize: '1.8rem' }, 300);
  });

  let top_nav = $('.top-nav');
  top_nav.on('click', 'li', function () {
    $('.top-nav li').removeClass('top-nav__item--active');
    $(this).addClass('top-nav__item--active');
  });

  let infos_list = $('.infos__list');
  infos_list.on('mouseenter', 'div', function () {
    $(this).find('i').stop().animate({ fontSize: '3rem' }, 300).animate({ fontSize: '2rem' }, 300);
  });
});

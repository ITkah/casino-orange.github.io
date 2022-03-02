$('nav ul li').each(function () {
    this_li = $(this);
    if ($(this_li).find('ul').length > 0) {
        $(this_li).append('<span class="arrow_mob"></span>');
    }
});

$('.arrow_mob').on('click', function () {
    $(this).siblings('.sub-menu').slideToggle('150');
});

$('.menu_call').on('click', function(){
    $('nav').toggleClass('nav_active');
    $('.bg').toggleClass('bg_active');
});

$('.bg').on('click', function(){
    $('nav').toggleClass('nav_active');
    $('.bg').toggleClass('bg_active');
});

$('.close').on('click', function(){
    $('nav').toggleClass('nav_active');
    $('.bg').toggleClass('bg_active');
});


$('ul.tabs__caption_1').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content_1').removeClass('active').eq($(this).index()).addClass('active');
  });

  
$('ul.tabs__caption_2').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content_2').removeClass('active').eq($(this).index()).addClass('active');
  });
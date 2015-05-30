$(function(){
  $('ul.nav-tabs li:first').addClass('active');
  $('.block article').hide();
  $('.block article:first').show();
  $('ul.nav-tabs li').on('click',function(){
    $('ul.nav-tabs li').removeClass('active');
    $(this).addClass('active')
    $('.block article').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
    return false;
  });
})
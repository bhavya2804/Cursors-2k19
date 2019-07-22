$(function() {
  "use strict";

  $(window).scroll(function(e){
    updateAdPosition(e);
  });

  $('.menu').click(function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-active');
    $('.menu-animated-background').toggleClass('menu-animated-background-active');
    $('.menu-navigation').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });

  // affix

  $(function(){
      $(".element").typed({
        strings: ["ANITS ^1000 ", "DEPT ^1000OF ^1000CSE^2200"],
        typeSpeed: 200,
        backDelay: 200,

      });
  });
});

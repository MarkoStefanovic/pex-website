$(document).ready(function() {

  //detecting via modernizr svg
  // if browser doesnt support replace with png
  if (!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }

  // toggle slide mobile navigation
  function toggle() {
    var hide = true;
    $('.toggle-button').on('click', function(event) {
      if (hide) {
        $('.navbar-toggle').addClass('collapsed');
        $('#menu').addClass('menu-slide-show');
        $('#main').addClass('main-show');
        hide = false;
      } else {
        $('.navbar-toggle').removeClass('collapsed');
        $('#menu').removeClass('menu-slide-show');
        $('#main').removeClass('main-show');
        hide = true;
      }
    });
  }

  // run toggle on document ready
  $(document).ready(toggle());


  // header scroll
  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 103) {
      $('.navbar.navbar-default').addClass('scroll');
    } else {
      $('.navbar.navbar-default').removeClass('scroll');
    }
  });



  //anchor fix and scroll spy
  var shiftWindow = function() {
    var width = $(window).width();
    console.log('window width: ' + width);
    if (width > 768) {
      scrollBy(0, -102);

      $('body').scrollspy({
        target: '#navbar',
        offset: 103
      });
      console.log('scroll is set to -103px');
    } else {
      scrollBy(0, -49);
      $('body').scrollspy({
        target: '#navbar',
        offset: 50
      });
      console.log('scroll is set to -50px');
    }

  };
  if (location.hash) shiftWindow();
  window.addEventListener('hashchange', shiftWindow);




  // AOS animation
  AOS.init({
    disable: window.innerWidth < 768,
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: true,
  });


});

angular.module('portfolio')
  .directive('background', function () {
    return {
      template: '<div class="background"><div class="background-overlay"></div> <canvas id="back-canvas"></canvas> </div>',
      restrict: 'E',
      link: function (scope, element, attrs) {
        var context = document.getElementById('back-canvas').getContext('2d');
        var img = new Image();

        img.onload = function () {
          context.drawImage(img, 60, 60, 650, 1200, 0, 0, 600, 600)
        }

        img.src = 'assets/splitPyramid.png';

        $(window).scroll(function () {
          var winScroll = $(this).scrollTop();
          // console.log('break');
          // console.log('x', (440*(Math.floor($(window).scrollTop()/20))+60)-(4400*Math.floor(($(window).scrollTop()/20)/11)));
          // console.log('y', 440*Math.floor((Math.floor($(window).scrollTop()/20))/11)+60);
          context.drawImage(img,
              (440*(Math.floor(winScroll/40))+60)-(4400*Math.floor((winScroll/40)/11)),
              440*Math.floor((Math.floor(winScroll/40))/11)+60,
              650, 1200, 0, 0, 600, 600);

          $('.background-overlay').css("opacity", (winScroll/4000)+.35)
          console.log(winScroll);
          if (winScroll <= 2562) {
            $('#title').css({
              'transform': 'translate(0px, '+ winScroll/1.51 +'px)'
            })
          } else if (winScroll >= 2750) {
            $('.scroll-nav-container').addClass('hidden-nav-cover');
            $('.original-scroll').css({'opacity': '0'});
          }
          if (winScroll >= 3476) {
            $('body').css({'overflow': 'hidden'});
          }
        })
      }
    }
  })

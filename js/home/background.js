angular.module('portfolio')
  .directive('background', function() {
    return {
      template: '<div class="background"><div class="background-overlay"></div> <canvas id="back-canvas"></canvas> </div>',
      restrict: 'E',
      link: function(scope, element, attrs) {

        $(document).ready(function() {
          $('#back-canvas').css({"visibility": "visible"})
          $('svg').css({"display": "none"})
          $('body').css({"overflow": "auto"})
          var context = document.getElementById('back-canvas').getContext('2d');
          var canvas = document.getElementById('back-canvas');
          var img = new Image();
          img.src = 'assets/splitPyramid.png';

          img.onload = function() {
            context.drawImage(img, 60, 60, 650, 1200, 0, 0, 600, 600)
          }


          var winScroll = $(window).scrollTop()
          $(window).scroll(function() {
            winScroll = $(window).scrollTop()

            context.drawImage(img,
              (440 * (Math.floor(winScroll / 40)) + 60) - (4400 * Math.floor((winScroll / 40) / 11)),
              440 * Math.floor((Math.floor(winScroll / 40)) / 11) + 60,
              650, 1200, 0, 0, 600, 600);


            $('#scroll-warning').css("opacity", 1/(winScroll / 20));
            $('.background-overlay').css("opacity", (winScroll / 4000) + .35)
            if (winScroll <= 2562) {
              $('#title').css({
                'transform': 'translate(0px, ' + winScroll / 1.51 + 'px)'
              })
            } else if (winScroll >= 2750) {
              $('#scroll-warning').css("display", 'none');
              $('.scroll-nav-container').addClass('hidden-nav-cover');
              $('.original-scroll').css({
                'opacity': '0'
              });
            }
            if (winScroll + $(window).height() > $(document).height() - 50) {
              $('body').css({
                'overflow': 'hidden'
              });
            }
          })
        })
      }
    }
  })

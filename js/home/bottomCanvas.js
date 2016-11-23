angular.module('portfolio')
  .directive('bottomCanvas', function () {
    return {
      restrict: 'E',
      template: '<div><canvas id="bottom-canvas"></canvas></div>',
      link: function (scope, element, attrs) {
        var context = document.getElementById('bottom-canvas').getContext('2d');
        var img = new Image();

        img.onload = function () {
          context.drawImage(img, 5, 5, 300, 300, 0, 0, 250, 200)
        }

        img.src = 'assets/singleDiamond.png';
      }
    }
  })

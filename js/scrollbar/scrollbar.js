angular.module('portfolio')
  .directive('scrollbar', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var container = document.getElementById('scroller');
        Ps.initialize(container);
      }
    }
  })

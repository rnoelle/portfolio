angular.module('portfolio')
  .controller('homeCtrl', function ($scope, $state) {
    $state.transitionTo('home.projects');
    $scope.getClass = function (path) {
      return ($state.includes(path)) ? 'active' : '';
    }
  })

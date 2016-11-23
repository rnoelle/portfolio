angular.module('portfolio')
  .controller('homeCtrl', function ($scope, $state) {
    $state.transitionTo('home.projects');
  })

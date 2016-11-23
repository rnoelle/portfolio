angular.module('portfolio')
  .controller('tabCtrl', function ($scope, $state) {
    $state.transitionTo('home.projects')
  })

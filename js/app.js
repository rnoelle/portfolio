angular.module('portfolio', ['ui.router'])

angular.module('portfolio')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/home/homeTmpl.html',
        controller: 'homeCtrl'
      })
      .state('home.projects', {
        templateUrl: 'js/home/projects/projects.html',
        controller: 'projectCtrl'
      })
      .state('home.skills', {
        templateUrl: 'js/home/skills/skills.html',
        controller: 'skillsCtrl'
      })
      .state('home.contact', {
        templateUrl: 'js/home/contact/contact.html',
        controller: 'contactCtrl'
      })

    $urlRouterProvider.otherwise('/');
  })

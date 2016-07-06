var app = angular.module('routerApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {//this means index right??
      templateUrl: 'views/aboutLibby.html',
      controller: 'LibbyController',
      controllerAs: 'libby'
    })
    .when('/portfolio', {
      templateUrl: 'views/portfolio.html',
      controller: 'PortfolioController',
      controllerAs: 'portfolio'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })

  $locationProvider.html5Mode(true);

}])

app.controller('LibbyController', function(){
  this.message = "about libby";
})
app.controller('PortfolioController', function(){
  this.message = "portfolio";
})
app.controller('ContactController', function(){
  this.message = "contact info here";
})
app.controller('MainController', function(){
  this.message = "Blah";
});

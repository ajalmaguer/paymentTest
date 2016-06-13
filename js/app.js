(function () {
  angular
    .module('portfolio', ['ui.router'])
    .config(MainRouter)
    .controller('MainController', MainController)

  MainRouter.$inject      = ['$stateProvider', '$urlRouterProvider']
  MainController.$inject  = ['$location']


  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home.html",
      })
      .state('receipt', {
        url: '/receipt/',
        templateUrl: 'receipt.html'

      })

    // $urlRouterProvider.otherwise('/');
  }

  function MainController($location) {
    var vm = this
    vm.test = "hello"
    vm.absUrl = $location.absUrl()
    vm.searchObject = $location.search()
    console.log(vm.searchObject)
  }

})()

appRoutes.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            controller: 'DashboardCtrl',
            templateUrl: '../partials/app.dashboard.html',
            controllerAs: 'vm'
        })

});
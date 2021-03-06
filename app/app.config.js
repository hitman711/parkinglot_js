(function (angular) {

    "use strict";

    function config(
        $stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $provide) {
        // body...
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        // the known route
        $urlRouterProvider.when('', '/');

        // For any unmatched url, redirect to /404
        $urlRouterProvider.otherwise("/404");

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/user/login.html',
                controller: 'userCtrl',
                controllerAs: 'vm'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/user/signup.html',
                controller: 'userCtrl',
                controllerAs: 'vm'
            })
            .state('venue', {
                url: '/venue',
                templateUrl: 'app/venue/venue.html',
                controller: 'venueCtrl',
                controllerAs: 'vm'
            })
            .state('company', {
                url: '/company',
                templateUrl: 'app/venue/company.html',
                controller: 'venueCtrl',
                controllerAs: 'vm'
            })
            .state('reservations', {
                url: '/reservations',
                templateUrl: 'app/venue/reservation.html',
                controller: 'venueCtrl',
                controllerAs: 'vm'
            })
            .state('my-reservation', {
                url: '/my-reservation',
                templateUrl: 'app/venue/my-reservation.html',
                controller: 'venueCtrl',
                controllerAs: 'vm'
            })
            .state('prices', {
                url: '/prices',
                templateUrl: 'app/venue/prices.html',
                controller: 'venueCtrl',
                controllerAs: 'vm'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/404.html'
            })
    };

    angular.module('parkinglot').config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        '$locationProvider',
        '$provide',
        config]);

})(window.angular);
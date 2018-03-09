'use strict';

angular.module('app').config(function($routeProvider, $locationProvider) {

	$routeProvider.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'

	})

	$routeProvider.otherwise({
		redirectTo: '/home'
	});

});

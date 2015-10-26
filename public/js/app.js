var app = angular.module("ProviderSearch", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl:'partials/login.html',
		controller: 'loginController'
	})
	.when('/search', {
		templateUrl:'partials/search.html',
		controller: 'searchController'
	})
})


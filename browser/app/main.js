'use strict';

var app = angular.module('winit', ['ui.router']);

app.config(function ($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});

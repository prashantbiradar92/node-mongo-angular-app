'use strict';

var app = angular.module('app', ['ui.router', 'appRoutes', 'appControllers', 'appServices']);
var appRoutes = angular.module('appRoutes', []);
var appControllers = angular.module('appControllers', []);
var appServices = angular.module('appServices', []);

app.constant('Options', { baseUrl: 'http://localhost:4001' });
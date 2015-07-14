///<reference path="../typings/angularjs/angular.d.ts"/>
var angular = require('angular');
var HomeCtrl_1 = require('./controllers/HomeCtrl');
var MyService_1 = require('./services/MyService');
var myApp = angular.module("MyApp", []);
myApp.service("MyService", MyService_1.default);
myApp.controller("HomeCtrl", ["MyService", HomeCtrl_1.default]);
//# sourceMappingURL=app.js.map
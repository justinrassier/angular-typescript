///<reference path="../typings/angularjs/angular.d.ts"/>
//need to import angular as a Typescript External module since the d.ts file is not in the form of ES6 module
var angular = require('angular');
var HomeCtrl_1 = require('./controllers/HomeCtrl');
var MyService_1 = require('./services/MyService');
//create app
var myApp = angular.module("MyApp", []);
//register services
myApp.service("MyService", MyService_1["default"]);
//register controller and inject MyService
myApp.controller("HomeCtrl", ["MyService", HomeCtrl_1["default"]]);
//# sourceMappingURL=app.js.map
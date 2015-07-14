///<reference path="../typings/angularjs/angular.d.ts"/>
//need to import angular as a Typescript External module since the d.ts file is not in the form of ES6 module
import angular = require('angular');

import HomeCtrl from './controllers/HomeCtrl';
import MyService from './services/MyService';

//create app
var myApp = angular.module("MyApp", []);

//register services
myApp.service("MyService", MyService);

//register controller and inject MyService
myApp.controller("HomeCtrl", ["MyService", HomeCtrl]);

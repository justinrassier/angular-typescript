///<reference path="../typings/angularjs/angular.d.ts"/>
import HomeCtrl from './controllers/HomeCtrl';
import angular = require('angular')


var myApp = angular.module("MyApp", []);
myApp = angular.module('MyApp', []);
myApp.controller("HomeCtrl", HomeCtrl);

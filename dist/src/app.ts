//<reference path="typings/angularjs/angular.d.ts"/>
import HomeCtrl from './controllers/HomeCtrl';
declare var angular;


var myApp = angular.module("MyApp", []);
myApp = angular.module('MyApp', []);
myApp.controller("HomeCtrl", HomeCtrl);

// console.log(angular);

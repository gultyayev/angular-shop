'use strict';
var app = angular.module('app', []);

app.controller('StoreController', function() {
  this.products = [
	{
	  name: 'Рыба',
	  cost: '17',
	  src: 'img/fish.jpg'
	},
	{
	  name: 'Ананас',
	  cost: '27',
	  src: 'img/pineapple.jpg'
	},
	{
	  name: 'Пельмени',
	  cost: '15',
	  src: 'img/pelmeni.jpg'
	},
	{
	  name: 'Вареники',
	  cost: '17',
	  src: 'img/vareniki.jpg'
	}
  ]
});
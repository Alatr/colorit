
/* eslint-disable */
/// <reference path ='../../../../typings.d.ts'/>
/* eslint-enable */




import $ = require('jquery');
// data for wall calculator
import wallData from './calculator/data-wall';
import paintCalcWall from './calculator/paint-calc-wall';
import paintCalcCeiling from './calculator/paint-calc-ceiling';


/*  */

const formCalcWall = new paintCalcWall({
	$form: document.getElementById('js-wall-calc'),
	$formItem: $('.calculator-item'),
	$square: document.querySelector('.js-result-square'),
	$layer: document.querySelector('.js-square-layer'),
	$resPaint: document.querySelector('.js-result-paint'),
	data: wallData

});
const formCalcCeiling = new paintCalcCeiling({
	$form: document.getElementById('js-ceiling-calc'),
	$formItem: $('.calculator-item'),
	$square: document.querySelector('.js-ceiling-result-square'),
	$layer: document.querySelector('.js-ceiling-square-layer'),
	$resPaint: document.querySelector('.js-ceiling-result-paint'),
	data: wallData

});

console.log(formCalcCeiling);

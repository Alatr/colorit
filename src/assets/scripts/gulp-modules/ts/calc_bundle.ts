
/* eslint-disable */
/// <reference path ='../../../../typings.d.ts'/>
/* eslint-enable */




import $ = require('jquery');
// data for wall calculator
import wallData from './calculator/data-wall';
import CeilingData from './calculator/data-wall';
import furnitureData from './calculator/data-furniture';

import paintCalcWall from './calculator/paint-calc-wall';
import paintCalcCeiling from './calculator/paint-calc-ceiling';
import paintCalcFurniture from './calculator/paint-calc-furniture';
import showModal from './calculator/modal-popup';


/*  */

const wallCalaFormPopup = new showModal({
	popup: '.js-form-popup-wall',
	closeBtn: '.js-form_result_close',
	openBtn: '.q'
});
const thanksFormPopup = new showModal({
	popup: '.js-modal-form-popup_thank',
	closeBtn: '.js-modal-form-popup_thank .js-modal-form__btn-close',
	openBtn: '.q'
});
// wallCalaFormPopup.open()

const formCalcWall = new paintCalcWall({
	$form: document.getElementById('js-wall-calc'),
	$formItem: $('.calculator-item'),
	$square: document.querySelector('.js-result-square'),
	$layer: document.querySelector('.js-square-layer'),
	$resPaint: document.querySelector('.js-result-paint'),
	data: wallData,
	popup: wallCalaFormPopup,
	popupThanks: thanksFormPopup,

});


const formCalcCeiling = new paintCalcCeiling({
	$form: document.getElementById('js-ceiling-calc'),
	$formItem: $('.calculator-item'),
	$square: document.querySelector('.js-ceiling-result-square'),
	$layer: document.querySelector('.js-ceiling-square-layer'),
	$resPaint: document.querySelector('.js-ceiling-result-paint'),
	data: CeilingData,
	popup: new showModal({
		popup: '.js-form-popup-ceiling',
		closeBtn: '.js-form-popup-ceiling-close',
		openBtn: '.q'
	}),
	popupThanks: thanksFormPopup,

	
});

const formFurniture = new paintCalcFurniture({
	$form: document.getElementById('js-furniture-calc'),
	$formItem: $('.calculator-item'),
	$square: document.querySelector('.js-furniture-result-square'),
	$layer: document.querySelector('.js-furniture-square-layer'),
	$resPaint: document.querySelector('.js-furniture-result-paint'),
	data: furnitureData,
	popup: new showModal({
		popup: '.js-form-popup-furniture',
		closeBtn: '.js-form-popup-furniture-close',
		openBtn: '.q'
	}),
	popupThanks: thanksFormPopup,


});


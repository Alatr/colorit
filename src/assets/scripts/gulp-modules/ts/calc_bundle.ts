
/* eslint-disable */
/// <reference path ='../../../../typings.d.ts'/>
/* eslint-enable */




import $ = require('jquery');



interface wallCalculatorState {
  product: number;
  window: number;
  door: number;
  square: number;
}









const wallCalcForm = document.getElementById('js-wall-calc');


$(wallCalcForm.elements).each((i: number, el: HTMLElement)=>{
	if(el.tagName === 'BUTTON') return
	console.log(el);

	el.addEventListener('change', wallCalcElemHandler)

	
	
});

function wallCalcElemHandler(e: Event ): void{
	console.log(e.target );
	
}


function wallCalcStatrt(e: Event ): void{
	console.log(e.target );
	
}



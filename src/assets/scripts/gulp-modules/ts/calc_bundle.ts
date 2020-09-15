
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


/* $(wallCalcForm.elements).each((i: number, el: HTMLElement)=>{
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


*/







interface PintCalcOptions {
	readonly $form: HTMLElement;
	readonly $square: HTMLElement;
	readonly $layer: HTMLElement;
	readonly $resPaint: HTMLElement;
	readonly $formItem: HTMLElement;
}
interface PintCalcWallOptions {
	readonly $form: HTMLElement;
	readonly $square: HTMLElement;
	readonly $layer: HTMLElement;
	readonly $resPaint: HTMLElement;
	readonly $formItem: HTMLElement;
}



class PaintCalc {
	readonly $form: HTMLElement;
	readonly $square: HTMLElement;
	readonly $layer: HTMLElement;
	readonly $resPaint: HTMLElement;
	readonly $formItem: HTMLElement;
	/*  */
	listeners: (callback?: () => void) => void;
	validate: (e?: Event)=> boolean;
	printResultPaint: (value: number) => void;
	printResultLayer: (value: number) => void;
	printResultSquare: (value: number) => void;
	showError: (element: HTMLElement) => void;
	showSuccess: (element: HTMLElement) => void;
	clearAll: (element: HTMLElement) => void;
	disableItem: (element: HTMLElement) => void;
	/*  */
	readonly successAttr: string;
	readonly errorAttr: string;
	readonly disabledAttr: string;
	
	
	constructor(obj: PintCalcOptions) {
		this.$form = obj.$form;
		this.$square = obj.$square;
		this.$layer = obj.$layer;
		this.$resPaint = obj.$resPaint;
		this.$formItem = this.$formItem;
		
		
		this.successAttr = 'success';
		this.errorAttr = 'error';
		this.disabledAttr = 'disabled';
		
		this.initPintCalc();
	}
	
	
	initPintCalc() {
		this.listeners();
	}
}






/*  */
PaintCalc.prototype.listeners = function (): void {
	$(this.$form.elements).each((i: number, el: HTMLElement) => {
		if (el.tagName === 'BUTTON') return
		el.addEventListener('change', this.validate.bind(this))
	});
};

PaintCalc.prototype.validate = function(e): boolean {
	$(this.$form.elements).each((i: number, el: HTMLFormElement) => {
		if (el.tagName === 'BUTTON') return
		const elementWrap = el.closest('*[data-state]');
		
		(el.value === '') ? this.showError(elementWrap) : this.showSuccess(elementWrap)
			
	});
	return true
};

PaintCalc.prototype.clearAll = function (el: HTMLElement):void {
	
	el.setAttribute('data-state', '');
};

PaintCalc.prototype.showError = function (el: HTMLElement):void {
	
	el.setAttribute('data-state', '');
	el.setAttribute('data-state', this.errorAttr);
};
PaintCalc.prototype.showSuccess = function (el: HTMLElement):void {
	el.setAttribute('data-state', '');
	el.setAttribute('data-state', this.successAttr);
};
PaintCalc.prototype.disableItem = function (el: HTMLElement):void {
	el.setAttribute('data-state', '');
	el.setAttribute('data-state', this.disabledAttr);
};
/*  */
PaintCalc.prototype.printResultSquare = function (value: number) {
	this.$square.innerHTML = value;
};
PaintCalc.prototype.printResultLayer = function (value: number) {
	this.$layer.innerHTML = value;
};
PaintCalc.prototype.printResultPaint = function (value: number) {
	this.$resPaint.innerHTML = value;
};



/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */

class paintCalcWall extends PaintCalc {
	squareListeners: ()=> void
	valid: boolean
	
	
	constructor(props: PintCalcWallOptions) {
		super(props);
		this.valid = false;
		
		this.init();
	}
	init() {
		this.squareListeners();
	}
	/*  */
	get isValid() {
		return this.valid;
	}
	set isValid(validation: boolean) {
		this.valid = validation;
		/* const correctElemForm = Array.from(this.$form.elements).filter((formElements: HTMLFormElement): boolean => {
			// 
			if (formElements.tagName === 'BUTTON') return false
			//
			const attrElementWrap = formElements.closest('*[data-state]').getAttribute('data-state');
			// 
			if (attrElementWrap === 'disabled') return false
			return true
		});
		
		this.valid = correctElemForm.every((formElement: HTMLFormElement): boolean => {
			const attrElementWrap = formElement.closest('*[data-state]').getAttribute('data-state');
			return attrElementWrap === 'success';
		}); */

	}
	/*  */
}
paintCalcWall.prototype.squareListeners = function () {
	const self = this;
	const event = new Event('wallCalcSquareHandler', { bubbles: true });
	const squareInputs = Array.from(this.$form.elements).filter((el: HTMLFormElement)=> el.type === 'number')
	/*  */
	document.addEventListener('wallCalcSquareHandler', function (event: Event) { 
		/* change all field */
		if (event.target.name === 'all'){
			squareInputs
			.filter((input: HTMLFormElement) => input.name !== 'all')
			.forEach((el: HTMLFormElement) =>{
				const elementWrap = el.closest('*[data-state]');
				self.disableItem(elementWrap);
			});
		}
		/* change height or length or width field */
		if (event.target.name !== 'all'){
			squareInputs
			.filter((input: HTMLFormElement) => input.name === 'all')
			.forEach((el: HTMLFormElement) =>{
				const elementWrap = el.closest('*[data-state]');
				self.disableItem(elementWrap);
			});
		}
		
		/* clear all field */
		const emptySquereInput = squareInputs.every((input: HTMLFormElement) => input.value === '')
		if (emptySquereInput) {
			squareInputs.forEach((el: HTMLFormElement) =>{
				const elementWrap = el.closest('*[data-state]');
				self.showError(elementWrap);
			});
		}
		console.log('добвление disabled');
		
	});
	/*  */
	squareInputs.forEach((squareInput: HTMLFormElement)=>{
		squareInput.addEventListener('change', function (e: Event) {
			squareInput.dispatchEvent(event);
		});
	});

}
paintCalcWall.prototype.validate = function (e) {
	const self = this;
	const arrayFormElements = Array.from(this.$form.elements);
	// SET TIMEOUT FOR SQUARE INPUTS. arrayFormElements.filter MUST FILTER ALL FORM ELEMENTS WITHOUT DATA-SATAE="DISABLED"
	// validate FUNC CALLED IN PARRENT CLASS(IN CONSTRUCTOR), EARLY THEN IT MAST  BE 
	// ;(
	setTimeout(() => {
		// filter form el
		arrayFormElements.filter((formElements: HTMLFormElement):boolean => {
				// 
				if (formElements.tagName === 'BUTTON' ) return false
				//
				const attrElementWrap = formElements.closest('*[data-state]').getAttribute('data-state');
				// 
				if (attrElementWrap === 'disabled') return false
				return true
				
			})
			// show classes
			.forEach((el: HTMLFormElement): void => {
				const elementWrap = el.closest('*[data-state]');
				(el.value === '') ? self.showError(elementWrap) : self.showSuccess(elementWrap)
		});
	}, 0);
	console.log(this.isValid);
	
	return true
};
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */




const formCalc = new paintCalcWall({
	$form: document.getElementById('js-wall-calc'),
	$formItem: $('.calculator-item'),
	$square: $('.js-square-layer'),
	$layer: $('.js-result-paint'),
	$resPaint: $('.js-result-layer'),
});
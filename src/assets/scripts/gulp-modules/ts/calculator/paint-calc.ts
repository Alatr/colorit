

interface PintCalcOptions {
	readonly $form: HTMLElement;
	readonly $square: HTMLElement;
	readonly $layer: HTMLElement;
	readonly $resPaint: HTMLElement;
	readonly $formItem: HTMLElement;
}



export default class PaintCalc {
	readonly $form: HTMLElement;
	readonly $square: HTMLElement;
	readonly $layer: HTMLElement;
	readonly $resPaint: HTMLElement;
	readonly $formItem: HTMLElement;
	/*  */
	listeners: (callback?: () => void) => void;
	validate: (e?: Event) => void;
	printResultPaint: (value: number) => void;
	printResultLayer: (value: number) => void;
	printResultSquare: (value: number) => void;
	showError: (element: HTMLElement) => void;
	showSuccess: (element: HTMLElement) => void;
	clearAll: (element: HTMLElement) => void;
	disableItem: (element: HTMLElement) => void;
	langDetect: () => any;
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
PaintCalc.prototype.langDetect = function (): any {
	
	if (window.location.pathname.match(/\/ru\//)) return 'ru';
	if (window.location.pathname.match(/\/en\//)) return 'en';
	return 'ua'
};
PaintCalc.prototype.listeners = function (): void {
	$(this.$form.elements).each((i: number, el: HTMLElement) => {
		if (el.tagName === 'BUTTON') return
		el.addEventListener('change', this.validate.bind(this))
	});
};

PaintCalc.prototype.validate = function (e): boolean {
	$(this.$form.elements).each((i: number, el: HTMLFormElement) => {
		if (el.tagName === 'BUTTON') return
		const elementWrap = el.closest('*[data-state]');

		(el.value === '') ? this.showError(elementWrap) : this.showSuccess(elementWrap)

	});
	return true
};

PaintCalc.prototype.clearAll = function (el: HTMLElement): void {

	el.setAttribute('data-state', '');
};

PaintCalc.prototype.showError = function (el: HTMLElement): void {

	el.setAttribute('data-state', '');
	el.setAttribute('data-state', this.errorAttr);
};
PaintCalc.prototype.showSuccess = function (el: HTMLElement): void {
	el.setAttribute('data-state', '');
	el.setAttribute('data-state', this.successAttr);
};
PaintCalc.prototype.disableItem = function (el: HTMLElement): void {
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
/*  */
import PaintCalc from './paint-calc';



export default class paintCalcCeiling extends PaintCalc {
	squareListeners: () => void
	productChangeListeners: () => void
	startCalculation: () => void
	writeResult: () => void
	getSelectDataForm: () => object
	getSquare: () => number
	valid: boolean
	cntLayers: number
	cntConsumption: number
	square: number
	totalResult: number
	filterValueState: ceilCalculatorState
	data: ReadonlyArray<ICeilCalculatorDataItem>


	constructor(props: PintCalcCeilingOptions) {
		super(props);
		this.data = props.data;
		this.totalResult = 0;
		this.square = 0;
		this.cntLayers = 2;
		this.cntConsumption = 12;
		this.data = props.data;
		this.filterValueState = {
			product: 0.0,
			window: 0.0,
			surface: 0.0,
			door: 0.0,
			square: 0.0,
		}

		this.init();
	}
	init() {
		this.squareListeners();
		this.productChangeListeners();
	}

}
paintCalcCeiling.prototype.writeResult = function () {


	this.$square.innerHTML = '';
	this.$square.insertAdjacentHTML('beforeend', this.square)
	console.log(this.$layer);

	this.$layer.innerHTML = '';
	this.$layer.insertAdjacentHTML('beforeend', this.cntLayers)

	this.$resPaint.innerHTML = '';
	this.$resPaint.insertAdjacentHTML('beforeend', Math.round(this.totalResult))

}
paintCalcCeiling.prototype.startCalculation = function () {
	const square = this.getSquare();
	this.square = square;

	this.totalResult = (square / this.cntConsumption) * this.cntLayers;

}

paintCalcCeiling.prototype.getSelectDataForm = function () {
	const self = this;
	const selectValue: any = Array.from(this.$form.elements)
		.filter((el: HTMLFormElement) => el.type === 'select-one' && el.value !== '')
		.reduce((acc: any, el: HTMLFormElement) => {
			return {
				...acc,
				[el.name]: +el.value
			}
		}, {});
	return selectValue;
}
paintCalcCeiling.prototype.getSquare = function () {
	const squareInputs: any = Array.from(this.$form.elements).filter((el: HTMLFormElement) => el.type === 'number' && el.value !== '')

	if (squareInputs.length === 1) {
		return squareInputs[0].value;
	} else {
		const selectData = this.getSelectDataForm();
		// ((length * 2 + width * 2)* height) - (window + door)
		const W_L = squareInputs.reduce((acc: object, current: HTMLFormElement) => {
			return {
				...acc,
				[current.name]: current.value
			}
		}, {})

		const square = ((W_L.length * W_L.width));
		// set filterValueState
		this.filterValueState = { ...selectData, square }
		console.log(square);

		return Math.round(square)
	}

}
paintCalcCeiling.prototype.squareListeners = function () {
	const self = this;
	const event = new Event('ceilingCalcSquareHandler', { bubbles: true });
	const squareInputs = Array.from(this.$form.elements).filter((el: HTMLFormElement) => el.type === 'number')
	/*  */
	document.addEventListener('ceilingCalcSquareHandler', function (event: any) {
		/* change all field */
		if (event.target.name === 'all') {
			squareInputs
				.filter((input: HTMLFormElement) => input.name !== 'all')
				.forEach((el: HTMLFormElement) => {
					const elementWrap = el.closest('*[data-state]');
					self.disableItem(elementWrap);
				});
		}
		/* change height or length or width field */
		if (event.target.name !== 'all') {
			squareInputs
				.filter((input: HTMLFormElement) => input.name === 'all')
				.forEach((el: HTMLFormElement) => {
					const elementWrap = el.closest('*[data-state]');
					self.disableItem(elementWrap);
				});
		}

		/* clear all field */
		const emptySquereInput = squareInputs.every((input: HTMLFormElement) => input.value === '')
		if (emptySquereInput) {
			squareInputs.forEach((el: HTMLFormElement) => {
				const elementWrap = el.closest('*[data-state]');
				self.showError(elementWrap);
			});
		}

	});
	/*  */
	squareInputs.forEach((squareInput: HTMLFormElement) => {
		squareInput.addEventListener('change', function (e: Event) {
			squareInput.dispatchEvent(event);
		});
	});

}
paintCalcCeiling.prototype.productChangeListeners = function () {
	const self = this;
	const event = new Event('ceilingCalcProductChange', { bubbles: true });
	const productSelect = Array.from(this.$form.elements).filter((el: HTMLFormElement) => el.name === 'product')
	const surfaceSelect: any = Array.from(this.$form.elements).filter((el: HTMLFormElement) => el.name === 'surface')[0]

	/*  */
	document.addEventListener('ceilingCalcProductChange', function (e: any) {
		surfaceSelect.innerHTML = '';
		const markupOptionSurfase = function (label: string, value: number, layers: number) {
			return ` <option class="calculator-item__select-item" value="${value}:${layers}">${label}</option> `
		}
		const lang: string = self.langDetect();
		const inx: number = self.data.findIndex((el: ICeilCalculatorDataItem) => el.id === e.target.value)
		const dataObjCntProduct = self.data[inx].consumptionSurface;




		dataObjCntProduct.forEach((element: ICeilConsumptionSurface) => {
			// @ts-ignore
			surfaceSelect.insertAdjacentHTML('beforeend', markupOptionSurfase(element.label[lang], element.value, element.layers))
		});


		const [value, layers] = surfaceSelect.value.split(':')
		self.cntConsumption = value
		self.cntLayers = layers


		/* clear all field */
		/* const emptySquereInput = squareInputs.every((input: HTMLFormElement) => input.value === '')
		if (emptySquereInput) {
			squareInputs.forEach((el: HTMLFormElement) => {
				const elementWrap = el.closest('*[data-state]');
				self.showError(elementWrap);
			});
		} */

	});
	/*  */
	productSelect.forEach((select: HTMLFormElement) => {
		select.addEventListener('change', function (e: Event) {
			select.dispatchEvent(event);
		});
	});

}
paintCalcCeiling.prototype.validate = function (e) {
	const self = this;
	const arrayFormElements = Array.from(this.$form.elements);
	// SET TIMEOUT FOR SQUARE INPUTS. arrayFormElements.filter MUST FILTER ALL FORM ELEMENTS WITHOUT DATA-SATAE='DISABLED'
	// validate FUNC CALLED IN PARRENT CLASS(IN CONSTRUCTOR), EARLY THEN IT MAST  BE 
	// ;(
	setTimeout(() => {

		// filter form el
		const actualElemetForm = arrayFormElements.filter((formElements: HTMLFormElement): boolean => {
			// 
			if (formElements.tagName === 'BUTTON') return false
			//
			const attrElementWrap = formElements.closest('*[data-state]').getAttribute('data-state');
			// 
			if (attrElementWrap === 'disabled') return false
			return true
		});
		// show classes
		actualElemetForm.forEach((el: HTMLFormElement): void => {
			const elementWrap = el.closest('*[data-state]');
			(el.value === '') ? self.showError(elementWrap) : self.showSuccess(elementWrap);
		});
		const isAllFieldValid = actualElemetForm.every((formElements: HTMLFormElement): boolean => {
			const attrElementWrap = formElements.closest('*[data-state]').getAttribute('data-state');

			return (attrElementWrap === 'success') ? true : false;
		});
		if (isAllFieldValid) {
			self.startCalculation();
			self.writeResult();
		}

	}, 0);
};


interface PintCalcCeilingOptions {
	readonly $form: HTMLElement;
	readonly $square: HTMLElement;
	readonly $layer: HTMLElement;
	readonly $resPaint: HTMLElement;
	readonly $formItem: HTMLElement;
	readonly data: ReadonlyArray<ICeilCalculatorDataItem>;
}
interface ceilCalculatorState {
	product: number;
	window: number;
	door: number;
	square: number;
	surface: number;
}

interface ICeilCalculatorDataItem {
	readonly label: {
		readonly ua: string,
		readonly ru: string
	},
	readonly id: string,
	readonly type: string,
	readonly consumptionSurface: ReadonlyArray<ICeilConsumptionSurface>,

}

interface ICeilConsumptionSurface {
	readonly label: {
		readonly ua: string,
		readonly ru: string
	},
	readonly value: number,
	readonly layers: number,

}



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
/*  */
/*  */
/*  */

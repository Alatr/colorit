

interface PintCalcOptions {
	readonly $form: HTMLElement;
	readonly $square: HTMLElement;
	readonly $layer: HTMLElement;
	readonly $resPaint: HTMLElement;
	readonly $formItem: HTMLElement;
	readonly popup: any;
	readonly popupThanks: any;
}



export default class PaintCalc {
	readonly $form: HTMLElement;
	readonly $square: HTMLElement;
	readonly $layer: HTMLElement;
	readonly $resPaint: HTMLElement;
	readonly $formItem: HTMLElement;
	readonly popup: any;
	readonly popupThanks: any;
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
	disableBtnSubmit: (element: HTMLElement) => void;
	enableBtnSubmit: (element: HTMLElement) => void;
	langDetect: () => any;
	/*  */
	readonly successAttr: string;
	readonly errorAttr: string;
	readonly disabledAttr: string;
	dataMessage: object;
	ajaxForm: (form: HTMLFormElement) => void;


	constructor(obj: PintCalcOptions) {
		this.$form = obj.$form;
		this.$square = obj.$square;
		this.$layer = obj.$layer;
		this.$resPaint = obj.$resPaint;
		this.$formItem = this.$formItem;
		this.popup = obj.popup;
		this.popupThanks = obj.popupThanks;


		this.successAttr = 'success';
		this.errorAttr = 'error';
		this.disabledAttr = 'disabled';


		this.dataMessage = {
			done: {
				ua: 'Прорахунок відправлений. Дякуюємо за звернення.',
				ru: 'Просчет отправлен. Спасибо за обращение.',
			},
			fail: {
				ua: 'Щось пішло не так? статус fail',
				ru: 'Что-то пошло не так? статус fail',
			},
			zero: {
				ua: 'Щось пішло не так? статус 0',
				ru: 'Что-то пошло не так? статус 0',
			},
			default: {
				ua: 'Щось пішло не так? статус null',
				ru: 'Что-то пошло не так? статус null',
			},
		}

		this.initPintCalc();
	}


	initPintCalc() {
		this.listeners();
	}
}





PaintCalc.prototype.ajaxForm = function (form: HTMLFormElement) {
	const self = this;
	let str = $(`#${form.id}`).serialize();
	const btn = $(`#${form.id}`).find('button[type="submit"]');
	const lang = this.langDetect();
	const titleThanksPopup = $('.js-modal-form-popup__title');
	const fromPopup = document.querySelector(this.popup.popup);

	
	
	$.ajax({
		method: "POST",
		url: "/wp-admin/admin-ajax.php",
		data: str += '&action=app',
		beforeSend: function () {
			btn.html('Отправка...');
			btn.prop('disabled', true);
			$('body').css('cursor', 'wait');
		},
		error: function (data) {
			btn.html('Отправить');
			btn.prop('disabled', false);
			$('body').css('cursor', 'default');
			console.log(self.dataMessage.default);
			
			titleThanksPopup.html(self.dataMessage.default[lang]);
			self.popupThanks.open();

		},
		success: function (msg) {
			btn.html('Отправить');
			btn.prop('disabled', false);
			$('body').css('cursor', 'default');
			$(`#${form.id}`)
				.find('input')
				.not('input[name="surface"]')
				.not('input[name="form_name"]')
				.each(function () { $(this).val('') });
				
				switch (JSON.parse(msg)) {
					case 'done':
						titleThanksPopup.html(self.dataMessage.done[lang]);
						break;
		
						case 'fail':
						titleThanksPopup.html(self.dataMessage.fail[lang]);
						break;
						
						case 'zero':
							titleThanksPopup.html(self.dataMessage.zero[lang]);
							break;
							
							default:
								titleThanksPopup.html(self.dataMessage.default[lang]);
					break;
				}
				/**********************************/
				/*
				* clear form start
				*/
					fromPopup.querySelector('.js-popup-total-paints').innerHTML = '';
					fromPopup.querySelector('.js-popup-total-layers').innerHTML = '';
					fromPopup.querySelector('.js-popup-square').innerHTML = '';
					fromPopup.querySelector('.js-result-block-item__key-prod').innerHTML = '';
		
					self.popup.close();
					self.popupThanks.open();
					$(self.$form.elements).each((i: number, el: HTMLFormElement) => {
						if (el.tagName === 'BUTTON') {
							$(el).attr('disabled', 'true');
							self.disableItem(el.closest('li'));
							return
						}
						if (el.tagName === 'INPUT') {
							el.value = ''
						}
						self.clearAll(el.closest('li'));
					});
				/*
				* clear form end
				*/
				/**********************************/
		}
	});
}

/*  */
PaintCalc.prototype.langDetect = function (): any {
	
	if (window.location.pathname.match(/\/ru\//)) return 'ru';
	if (window.location.pathname.match(/\/en\//)) return 'en';
	return 'ua'
};
PaintCalc.prototype.listeners = function (): void {
	$(this.$form.elements).each((i: number, el: HTMLElement) => {
		if (el.tagName === 'BUTTON') {
			$(el).attr('disabled', 'true');
			this.disableItem(el.closest('li'));
			return
		}
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
PaintCalc.prototype.disableBtnSubmit = function (btn: HTMLFormElement): void {

	btn.disabled = true;
	this.disableItem(btn.closest('li'));
};
PaintCalc.prototype.enableBtnSubmit = function (btn: HTMLElement): void {
	
	btn.removeAttribute('disabled'); 
	this.showSuccess(btn.closest('li'));
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
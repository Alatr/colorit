/* eslint-disable */
@@include('./libs.js');
/* eslint-enable */


class showModal {
	constructor(obj) {
		this.popup = obj.popup;
		this.openBtn = obj.openBtn;
		this.closeBtn = obj.closeBtn;
		this.status = false;
		this.$body = $('body');


		this.init()
	}


	open() {
		$(this.popup).css("display", "flex").hide().fadeToggle();
		this.status = true;
	};

	close() {
		$(this.popup).fadeOut(300);
		this.status = false;

	};

	toggle() {
		if (this.status) {
			this.$body.removeClass('modal-active');
			this.close();
		} else {
			this.$body.addClass('modal-active');
			this.open();
		}
	}

	listeners() {
		const self = this;
		this.$body.on('click', `${this.closeBtn}, ${this.openBtn}`, function (e) {
			self.toggle();
		});
	}


	init() {
		this.listeners();

	}
}


class showModalCallback extends showModal {
	constructor(props) {
		super(props);
		this.beforeOpen = props.beforeOpen;

	}
	open() {
		this.beforeOpen(this)
		$(this.popup).css("display", "flex").hide().fadeToggle();
		this.status = true;
		
	};
}



const form_1 = new showModal({
	popup: '.js-modal-form-popup_1',
	closeBtn: '.js-form_cons_close',
	openBtn: '.js-open-consult'
});

$('#modal-form-consult').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, form_1);
});
/*  */
/*  */
/*  */
/*  */
const form_2 = new showModal({
	popup: '.js-modal-form-popup_2',
	closeBtn: '.js-form_delivery_close',
	openBtn: '.js-open-delivery'
});

$('#modal-form-free-delivery').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, form_2);
});

/*  */
/*  */
/*  */
/*  */

const search = new showModal({
	popup: '.js-search-modal',
	closeBtn: '.js-search-modal-back',
	openBtn: '.js-header-search'
});

const form_3 = new showModal({
	popup: '.js-modal-form-popup_services',
	closeBtn: '.js-close-consult-services',
	openBtn: '.js-open-consult-services'
});

const form_3_2 = new showModal({
	popup: '.js-modal-form-popup_services-order',
	closeBtn: '.js-close-consult-services-order',
	openBtn: '.js-open-consult-services-order'
});

const form_3_3 = new showModal({
	popup: '.js-modal-form-popup_services-shipping',
	closeBtn: '.js-close-consult-services-shipping',
	openBtn: '.js-open-consult-services-shipping'
});

$('#modal-form-free-delivery-services').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, form_3);
});
$('#modal-form-free-delivery-services-order').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, form_3_2);
});
$('#modal-form-free-delivery-services-shipping').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, form_3_3);
});

/*  */
/*  */
/*  */
/*  */

const form_4 = new showModal({
	popup: '.js-services-school-popup',
	closeBtn: '.js-school-popup-close',
	openBtn: '.js-school-popup-open'
});

const form_5 = new showModal({
	popup: '.js-modal-form-popup_loyal',
	closeBtn: '.js-form_loyal_close',
	openBtn: '.js-open-popup-services'
});

$('#form-modal-form-popup_loyal').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, form_5);
});

/*  */
/*  */
/*  */
/*  */
const form_6 = new showModal({
	popup: '.js-modal-form-popup_company',
	closeBtn: '.js-form_company_close',
	openBtn: '.js-company-open-popup'
});
$('#company-modal-form').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, form_6);
});

/*  */
/*  */
/*  */
/*  */

const form_7 = new showModalCallback({
	popup: '.js-modal-form-popup_school-registr',
	closeBtn: '.js-form_registr_close',
	openBtn: '.js-school-registr-popup',
	beforeOpen: function (e) {
		const dataBtn = $(this.openBtn).data();
		
		const inputWhere = $('#form-popup_school-registr').find('input[name="where"]');
		const inputLabelEvent = $('#form-popup_school-registr').find('input[name="title"]');

		inputWhere.val(dataBtn.where)
		inputLabelEvent.val(dataBtn.title)
		
		form_4.close();
	}
});

$('#form-popup_school-registr').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, form_7);
});

/*  */
/*  */
/*  */
/*  */
const form_8 = new showModal({
	popup: '.js-modal-form-popup_color-single',
	closeBtn: '.js-form_color-single_close',
	openBtn: '.js-color-single-block-info-btn'
});

$('#modal-form-popup_color-single').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, form_8);
});

/*  */
/*  */
/*  */
/*  */
const thanksFormPopup = new showModal({
	popup: '.js-modal-form-popup_thank-site',
	closeBtn: '.js-modal-form-popup_thank-site .js-modal-form__btn-close',
	openBtn: '.q'
});


$('#footer-subscribe-form').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, false);
});
/*  */
/*  */
/*  */
/*  */
$('#subscribe-form-menu-footer').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, false);
});

/*  */
/*  */
/*  */
/*  */
$('#retailer__form').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, false);
});

/*  */
/*  */
/*  */
/*  */
$('#product__calc').on('submit', function (e) {
	e.preventDefault();
	ajax_form(e.target, false);
});

/*  */
/*  */
/*  */
/*  */







async function getPromise(data, url, parse) {
	let promise = new Promise(function (resolve, reject) {
		$.ajax({
			url: url,
			data: data,
			type: 'POST',
			global: false,
			async: true,
			success: function (res) {
				let data = (!parse) ? JSON.parse(res) : res
				resolve(data);
			},
			error: function (jqXHR, status, errorThrown) {
				reject(jqXHR);
			},
			beforeSend: function () {},
		});
	});

	return await promise;
}




























/**********************************/
/*
* form submit start
*/
	// $('#call-form').on('submit', function (e) {
	// 	e.preventDefault();
	// 	ajax_form(e.target);
	// ffff@bk.ru



	
	
	
	
	

		const dataMessage = {
			done: {
				ua: 'Заявка успішно відправлена',
				ru: 'Заявка успешно отправлена',
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

	function ajax_form(e, popupModalForm = true) {
			let str = $("#" + e.id).serialize();
			const btn = $(`#${e.id}`).find('button[type="submit"]');
			const lang = langDetect();
			const titleThanksPopup = $('.js-modal-form-popup_thank-site .js-modal-form-popup__title');
			// const fromPopupThanks = document.querySelector('.js-modal-form-popup_thank-site');
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
					console.log('error');
					titleThanksPopup.html(dataMessage.default[lang]);
					thanksFormPopup.open();
				},
				success: function (msg) {
					btn.html('Отправить');
					btn.prop('disabled', false);
					$('body').css('cursor', 'default');
					$(`#${e.id}`)
						.find('input')
						.not('.js-not__clear')
						.each(function () {
							console.log(this);
							$(this).val('')
						});

					switch (JSON.parse(msg)) {
						case 'done':
							titleThanksPopup.html(dataMessage.done[lang]);
							break;

						case 'fail':
							titleThanksPopup.html(dataMessage.fail[lang]);
							break;

						case 'zero':
							titleThanksPopup.html(dataMessage.zero[lang]);
							break;

						default:
							titleThanksPopup.html(dataMessage.default[lang]);
							break;
					}

					if (popupModalForm) {
						popupModalForm.close();
					}
					thanksFormPopup.open();
				}
			})
		}



	

			

			function langDetect() {
				if (window.location.pathname.match(/ru/)) {
					return 'ru'
				} else if (window.location.pathname.match(/en/)) {
					return 'en'
				} else {
					return 'ua'
				}
			}
		// }

	// });

/*
* form submit end
*/
/**********************************/
























class Tab {
	constructor(obj) {
		this.btn = obj.$btn
		this.content = obj.$content
		this.event = obj.event || 'changeTab'
		

		this.btnActiveClass = obj.btnActiveClass
		this.contentActiveClass = obj.contentActiveClass
		this.active = obj.active
		this.data = {
			btnDataName: 'data-indx'
		}


		this.init()
	}

	setStyles() {
		this.btn.eq(this.active).addClass(this.btnActiveClass);
		this.content.eq(this.active).addClass(this.contentActiveClass);
	}
	setMarkup() {
		this.btn.each((i, el) => {
			$(el).attr(this.data.btnDataName, i);
		});
	}

	initEvent(callback = function () {}) {
		const self = this;
		this.btn.on('click', function (e) {
			const inx = $(this).attr(self.data.btnDataName);
			PubSub.publish(self.event, {inx} );
			// 
			callback();
		});
	}

	init() {
		
		this.setMarkup();
		this.setStyles();
		
		this.initEvent();
		this.listeners();

	}
}

Tab.prototype.listeners = function (callback = function () {}) {
	const self = this;

	PubSub.subscribe(self.event, function (msg, data) {
		//btn
		self.btn.removeClass(self.btnActiveClass);
		self.btn.eq(data.inx).addClass(self.btnActiveClass);
		//contents
		self.content.removeClass(self.contentActiveClass);
		self.content.eq(data.inx).addClass(self.contentActiveClass);
	
		// 
		callback();
	});

	this.btn.on('click', function () {
	});
};












































(function ($) {
	const $body = $('body');
	var loader = function () {
		$(".loader-wrap").delay(500).fadeOut(500);
	};
	loader();

if (screen.width <= 1024) {
	$('.has-submenu .header-menu-item__title').on('click', function (e) {
		e.preventDefault();
	})
}


	$(".js-up-btn").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	$('.js-dropdown-btn').on('click', function(e) {
		
		$(`.js-dropdown-menu-list`).slideUp();
		$(this).next('ul').slideDown(300);
	});





	
	/**********************************/
/*
* modal start
*/

/* class showModal {
	constructor(obj) {
		this.popup = obj.popup;
		this.openBtn = obj.openBtn;
		this.closeBtn = obj.closeBtn;
		this.status = false;
		

		this.init()
	}
		
		
			open() {
				$(this.popup).css("display", "flex").hide().fadeToggle();
				this.status = true;
				
			};
		
			close() {
				$(this.popup).fadeOut(300);
				this.status = false;
		
			};
		
			toggle() {
				if (this.status) {
					$body.removeClass('modal-active');
					console.log(this.close);
					this.close();
				} else {
					$body.addClass('modal-active');
					this.open();
				}
			}

			listeners(){
				const self = this
				$body.on('click', `${this.closeBtn}, ${this.openBtn}`, function (e) {
					self.toggle();
					console.log('click')
				});
			}


			init() {
				this.listeners();

			}
		
} */

const labelEffects = ()=>{
    $('.footer-subscribe-form__input').on('focus', function() {
        $('.footer-subscribe-form__label').removeClass('footer-subscribe-form__label_active');
        $('.footer-subscribe-form__input-group').removeClass('footer-subscribe-form__input-group_active');
		let labelTarget = $(this).attr('name')
        $(`label[for=${labelTarget}]`).addClass('footer-subscribe-form__label_active');
        $(this).parent().addClass('footer-subscribe-form__input-group_active');
    });
    $('.footer-subscribe-form__input').on('focusout', function() {
		$('.footer-subscribe-form__label').removeClass('footer-subscribe-form__label_active');
        $('.footer-subscribe-form__input-group').removeClass('footer-subscribe-form__input-group_active');
    });
}
const labelEffects2 = ()=>{
    $('.modal-form__input').on('focus', function() {
        $('.modal-form__label').removeClass('modal-form__label_active');
        $('.modal-form__input-group').removeClass('modal-form__input-group_active');
		let labelTarget = $(this).attr('name')
        $(`label[for=${labelTarget}]`).addClass('modal-form__label_active');
        $(this).parent().addClass('modal-form__input-group_active');
    });
    $('.modal-form__input').on('focusout', function() {
		$('.modal-form__label').removeClass('modal-form__label_active');
        $('.modal-form__input-group').removeClass('modal-form__input-group_active');
    });
}

labelEffects();
labelEffects2();

class showModalCallback extends showModal {
	constructor(props) {
		super(props);
		this.beforeOpen = props.beforeOpen;

	}
	open() {
		this.beforeOpen(this)
		$(this.popup).css("display", "flex").hide().fadeToggle();
		this.status = true;
		
	};
}









let stageModalIsOpen = false;
const $modal = $('.js-menu');





function openStageModal() {
	$modal.css("display", "flex").hide().fadeToggle();
	stageModalIsOpen = true;
};

function closeStageModal() {
	$modal.fadeOut(300);
	stageModalIsOpen = false;
	
};

function toggleStageModal() {
	if (stageModalIsOpen) {
		$body.removeClass('modal-active');
		closeStageModal();
	} else {
		$body.addClass('modal-active');
		openStageModal();
	}
}

$body.on('click', '.js-header-menu-btn, .js-menu-btn-close', function () {
	toggleStageModal();
});


$('.js-modal-form__input-phone').mask("(999) 999-9999");
/*
* modal end
*/
/**********************************/


})(jQuery);
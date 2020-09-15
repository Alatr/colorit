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
			console.log(this.close);
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

class showModal {
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

	const form_2 = new showModal({
		popup: '.js-modal-form-popup_2',
		closeBtn: '.js-form_delivery_close',
		openBtn: '.js-open-delivery'
	});
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

	const form_6 = new showModal({
		popup: '.js-modal-form-popup_company',
		closeBtn: '.js-form_company_close',
		openBtn: '.js-company-open-popup'
	});

	const form_7 = new showModalCallback({
		popup: '.js-modal-form-popup_school-registr',
		closeBtn: '.js-form_registr_close',
		openBtn: '.js-school-registr-popup',
		beforeOpen: function (e) {
			form_4.close();
		}
	});









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
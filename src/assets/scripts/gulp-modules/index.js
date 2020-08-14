@@include('./libs.js');

class Tab {
	constructor(obj) {
		this.btn = obj.$btn
		this.content = obj.$content

		this.btnActiveClass = obj.btnActiveClass
		this.contentActiveClass = obj.contentActiveClass
		this.active = obj.active
		this.data = {
			btnDataName: 'data-indx'
		}


		this.init()
	}

	setStyles() {
		this.btn.each((i, el) => {
			$(el).attr(this.data.btnDataName, i);
		});
		this.btn.eq(this.active).addClass(this.btnActiveClass);
		this.content.eq(this.active).addClass(this.contentActiveClass);
	}


	init() {
		this.setStyles();
		this.listeners();

	}
}

Tab.prototype.listeners = function (callback = function () {}) {
	const self = this;
	this.btn.on('click', function () {
		const inx = $(this).attr(self.data.btnDataName);
		//btn
		self.btn.removeClass(self.btnActiveClass);
		self.btn.eq(inx).addClass(self.btnActiveClass);
		//contents
		self.content.removeClass(self.contentActiveClass);
		self.content.eq(inx).addClass(self.contentActiveClass);

		// ajax
		callback();
	});
}

console.log(Tab);











































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
				});
			}


			init() {
				this.listeners();

			}
		
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



/*
* modal end
*/
/**********************************/


})(jQuery);
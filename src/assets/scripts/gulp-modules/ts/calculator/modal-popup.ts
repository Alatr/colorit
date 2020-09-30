export default class showModal {
	popup: any;
	openBtn: any;
	status: boolean;
	closeBtn: any;
	$body: HTMLBodyElement;
	constructor(obj: { popup: any; closeBtn: any; openBtn: any; }) {
		this.popup = obj.popup;
		this.openBtn = obj.openBtn || null;
		this.closeBtn = obj.closeBtn;
		this.status = false;
		this.$body = document.querySelector('body');


		this.init()
	}


	open() {
		const self = this;

		$(this.popup).css('display', 'flex').hide().fadeToggle();
		self.$body.classList.add('modal-active');

		this.status = true;
	};

	close() {
		$(this.popup).fadeOut(300);
		this.status = false;

	};

	toggle() {
		const self = this;
		console.log(self.$body);
		
		if (this.status) {
			
			self.$body.classList.remove('modal-active');
			console.log('this.close();');
			
			this.close();
		} else {
			self.$body.classList.add('modal-active');
			console.log('this.open();');
			
			this.open();
		}
	}

	listeners() {
		const self = this;
		$('body').on('click', `${this.closeBtn}, ${this.openBtn}`, function (e) {
			self.toggle();
		});
	}


	init() {
		this.listeners();

	}

}
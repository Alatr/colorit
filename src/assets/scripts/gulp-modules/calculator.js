
(function ($) {
	const tab = new Tab({
		$btn: $('.js-calculator-tab-btn'),
		$content: $('.js-calculator-tab-content-item'),
		btnActiveClass: 'calculator-btn-content-item--active',
		contentActiveClass: 'calculator-tab-content-item--active',
		active: 0
	});



		const form_2 = new showModal({
			popup: '.js-modal-form-popup_3',
			closeBtn: '.js-form_result_close',
			openBtn: '.js-open-delivery'
		});


})(jQuery);
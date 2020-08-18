
class TabSelect extends Tab {
	constructor(props) {
		super(props);
	}
	setMarkup() {
		this.btn.find('option').each((i, el) => {
			$(el).attr('value', i);
		});
	}
	initEvent(callback = function () { }) {
		const self = this;
		this.btn.on('change', function (e) {
			const inx = e.target.value;
			PubSub.publish(self._event, { inx });
			// 
			callback();
		});
	}
}

(function ($) {
	console.log(4);
	const tabSelect = new TabSelect({
		$btn: $('.js-palette-item__select'),
		$content: $('.js-palette-block-body-item'),
		btnActiveClass: 'palette-btn-content-item--active',
		contentActiveClass: 'palette-tab-content-item--active',
		active: 0,
	});

})(jQuery);
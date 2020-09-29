
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
			const data = $(e.target).find("[value='"+inx+"']").data('pal');
			PubSub.publish(self.event, { inx });
			// 
			callback(data);
		});
	}
}

(function ($) {
	const tabSelect = new TabSelect({
		$btn: $('.js-palette-item__select'),
		$content: $('.js-palette-block-body-item'),
		btnActiveClass: 'palette-btn-content-item--active',
		contentActiveClass: 'palette-tab-content-item--active',
		active: 0,
		event: 'changeTabSelect'
	});


	const paletteCreate = new PaletteCreate({
		tab: true,
		description: 'На странице должно присутствовать: краткое описание палитры (если выбрана 1 из палитр). Если выбраны все цвета, то должна быть возможность выбрать цвета из цветовой палитры, или поиск по названию или по номеру цвета',
		wrap: '.js-palette-block-body-item'
	});

	tabSelect.initEvent(e =>{
		// console.log(e);
		// console.log(paletteCreate);
		paletteCreate.update(e,'На странице должно присутствовать: краткое описание палитры (если выбрана 1 из палитр). Если выбраны все цвета, то должна быть возможность выбрать цвета из цветовой палитры, или поиск по названию или по номеру цвета', true )
	});


	// if (screen.width > 700) {
	// 	const tab = new Tab({
	// 		$btn: $('.js-palette-color-tab-btn'),
	// 		$content: $('.js-palette-tab-content-item'),
	// 		btnActiveClass: 'palette-tab-btn--active',
	// 		contentActiveClass: 'palette-color-tab-content-item--active',
	// 		active: 0
	// 	});
	//
	// } else {
	// 	console.log('holla');
	// 	const tabSelectPalette = new TabSelect({
	// 		$btn: $('.js-palette-color-item__select'),
	// 		$content: $('.js-palette-tab-content-item'),
	// 		btnActiveClass: 'palette-tab-btn--active',
	// 		contentActiveClass: 'palette-color-tab-content-item--active',
	// 		active: 0,
	// 		event: 'changeTabSelectPallete'
	// 	});
	//
	// }

})(jQuery);
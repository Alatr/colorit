let sesPal = sessionStorage.getItem('palette');

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
			const data = $(e.target).find(`[value=${inx}]`).data('pal');
			PubSub.publish(self.event, { inx });
			callback(data);
		});
	}
}

(function ($) {
	let regexp = new RegExp(/(?<=style=)(\w)+(?=(&|\b))/)

	if(location.search.match(regexp)) {
		sesPal = location.search.match(regexp)[0]
	} else if (sessionStorage.getItem('palette')) {
		sesPal = sessionStorage.getItem('palette')
	} else {
		sesPal = 'palette0'
	}
	sessionStorage.setItem('palette', sesPal);

	const tabSelect = new TabSelect({
		$btn: $('.js-palette-item__select'),
		$content: $('.js-palette-block-body-item'),
		btnActiveClass: 'palette-btn-content-item--active',
		contentActiveClass: 'palette-tab-content-item--active',
		active: sesPal,
		event: 'changeTabSelect'
	});

	$(document).find(`.palette-item__select-item[data-pal=${sesPal}]`).click();

	const currentElem = $(`.palette-item__select-item[data-pal=${sesPal}]`)
	currentElem.prop('selected', true);
	// $(`.js-palette-item__select`).trigger('change')
	// console.log($('.js-palette-item__select option')[0])
	// console.log($('.js-palette-item__select'))
	// console.log($('.js-palette-item__select option')[0].value)
	// $('.js-palette-item__select').val(0)
	const paletteCreate = new PaletteCreate({
		tab: true,
		description: currentElem.data('descr') || '',
		wrap: '.js-palette-block-body-item'
	}, sesPal ? sesPal : 'palette0');

	tabSelect.initEvent(e => {
		sesPal = location.search.replace(regexp, e)
		window.history.pushState( '', '', sesPal)
		sessionStorage.setItem('palette', sesPal);
		paletteCreate.update(e,$('.palette-item__select-item[data-pal='+ e +']').data('descr') || '', true )
	});

	let paletteSearch = new PaletteSearch();
	paletteSearch.init();
	document.addEventListener('onReadyJSONColor', function (e) {
		paletteSearch.update(paletteCreate.colors, paletteCreate.type)
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

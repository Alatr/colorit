
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
		description: $('.palette-item__select-item')[0].dataset.descr || '',
		wrap: '.js-palette-block-body-item'
	});

	tabSelect.initEvent(e => {
		paletteCreate.update(e,$('.palette-item__select-item[data-pal='+ e +']').data('descr') || '', true )
	});


	document.addEventListener('onReadyJSONColor', function (e) {
		console.log('onReadyJSONColor',paletteCreate.colors);
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


	$('.js-pallete-search__btn').on('click', function(e){
		e.preventDefault();
		$('.js-pallete-search-wrapper').addClass('pallete-search-wrapper_result-visible');
	})

	$(document).on('click', function(e){
		if (!$('.js-pallete-search-wrapper').is(e.target) && $('.js-pallete-search-wrapper').has(e.target).length === 0){
			$('.js-pallete-search-wrapper').removeClass('pallete-search-wrapper_result-visible')
		}
	})
})(jQuery);
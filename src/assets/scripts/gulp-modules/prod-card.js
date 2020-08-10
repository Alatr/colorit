(function ($) {
	class Tab {
		constructor(obj){
			this.btn = obj.$btn
			this.btnDataName = 'indx'
			this.btnActiveClass = obj.btnActiveClass
			this.content = obj.$content
			this.active = obj.active
		}
	}


		const tab = new Tab({
			$btn: $('.js-products-card-tab-btn'),
			$content: $('.js-products-card-tab-content-item'),
			btnActiveClass: 'js-products-card-tab-content-item--active',
			active: 1
		});
})(jQuery);
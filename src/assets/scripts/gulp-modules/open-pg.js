(function ($) {
	if (screen.width > 700) {
	
		$('.js-advice-open-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			infinite: false,
			responsive: [
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
			]
		});
	
		$('.js-products-card-advice-sl-slider-next').click(function () {
			$('.js-advice-open-slider').slick('slickPrev');
		})
	
		$('.js-products-card-advice-sl-slider-prev').click(function () {
			$('.js-advice-open-slider').slick('slickNext');
		});
	}

})(jQuery);
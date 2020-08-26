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


	// OBJECT OPEN AND NEWS OPEN SLIDER
	if ($('.js-services-slider')){
		$('.js-services-slider').on("init", function(event, slick){
			$('.js-services-slider-counter').text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
		});
		$('.js-services-slider').on("afterChange", function(event, slick, currentSlide){
			$('.js-services-slider-counter').text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
		});
	
		
		$('.js-services-slider').slick({
			arrows: false, 
			variableWidth: false,
			infinite: false
		})

		$('.js-services-arrow-prev').click(function(){
			$('.js-services-slider').slick('slickPrev')
		})

		$('.js-services-arrow-next').click(function(){
			$('.js-services-slider').slick('slickNext')
		})
	}
})(jQuery);
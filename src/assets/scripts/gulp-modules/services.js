

(function ($) {

	$('.company-principles__info-block-cross').on('click', function(){
		$(this).parents('.company-principles__info-block').addClass('company-principles__info-block_active')
	})

	$(document).on('click', function(e){
		if (!$('.company-principles__info-block').is(e.target) && $('.company-principles__info-block').has(e.target).length === 0){
			$('.company-principles__info-block').removeClass('company-principles__info-block_active')
		}
	})
	$('.js-services-slider').on("init", function(event, slick){
		$('.js-services-slider-counter').text('фото ' + parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
	});
	$('.js-services-slider').on("afterChange", function(event, slick, currentSlide){
		$('.js-services-slider-counter').text('фото ' + parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
	});
	
	$('.js-services-slider').slick({
		arrows: false, 
		variableWidth: false
	})

	$('.js-services-arrow-prev').click(function(){
		$('.js-services-slider').slick('slickPrev')
	})

	$('.js-services-arrow-next').click(function(){
		$('.js-services-slider').slick('slickNext')
	})

	

})(jQuery);

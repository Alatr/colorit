

(function ($) {

	$('.company-principles__info-block-cross').on('mouseover', function(){
		$(this).parents('.company-principles__info-block').addClass('company-principles__info-block_active')
	})

	$(document).on('mouseover', function(e){
		if (!$('.company-principles__info-block').is(e.target) && $('.company-principles__info-block').has(e.target).length === 0){
			$('.company-principles__info-block').removeClass('company-principles__info-block_active')
		}
	})
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

	
	// DYNAMIC ADAPTIVE
	if ($(window).width() <= 768 && $(window).width() > 480){
		$('.company-principles__info-block-title').each((index, item) => {
			$(item).prependTo($('.company-principles__info-block-content')[index]);
			$(item).addClass('done')
		})

		$('.company-principles__info-block-bottom').each((index, item) => {
			$(item).appendTo($('.company-principles__info-block-content')[index]);
			$(item).addClass('done')
		})
	}

	if ($(window).width() <= 480){
		$('.services-school__img-wrapper').css('height', $(window).width() / 1.4)
	}
	

})(jQuery);

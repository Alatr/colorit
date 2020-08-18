

(function ($) {

	$('.company-principles__info-block-cross').on('click', function(){
		$(this).parents('.company-principles__info-block').addClass('company-principles__info-block_active')
	})

	$(document).on('click', function(e){
		if (!$('.company-principles__info-block').is(e.target) && $('.company-principles__info-block').has(e.target).length === 0){
			$('.company-principles__info-block').removeClass('company-principles__info-block_active')
		}
	})

	

})(jQuery);

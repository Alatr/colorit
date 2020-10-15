


$(document).ready(function(){
	const sl_discounts = $('.js-discounts-slider-conent');

	sl_discounts.on('init', function (event, slick, currentSlide, nextSlide) {
		$('.js-discounts-slick__all').text(slick.slideCount);
	});
	
	sl_discounts.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite: false,
		fade: true,
	});
	
	$('.js-discount-sl-arr-next').click(function () {
		sl_discounts.slick('slickPrev');
	})
	
	$('.js-discount-sl-arr-prev').click(function () {
		sl_discounts.slick('slickNext');
	});
	
	sl_discounts.on('afterChange', function (event, slick, currentSlide, nextSlide) {
		$('.js-discounts-slick__cnt').text(currentSlide + 1)
	});
	
	
	
	
	
	
	
	
	const sl_advice = $('.home-advice-sl-wrap');
	const sl_advice_subnote = $('.js-section-subnote');
	const sl_advice_next_img = $('.advise-next-sl');
	
	
	sl_advice.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite: false,
		fade: false,
	});
	
	let sl_advice_leftPos = $('.home-advice').find('.slick-list').offset().left;
	$('.home-advice').find('.slick-list').css('width', `calc(100vw - ${sl_advice_leftPos}px)`)
	
	$('.js-advice-sl-arr-next').click(function () {
		sl_advice.slick('slickPrev');
	})
	
	$('.js-advice-sl-arr-prev').click(function () {
		sl_advice.slick('slickNext');
	});
	
	sl_advice.on('afterChange', function (event, slick, currentSlide, nextSlide) {
		$('.js-advice-number').text(currentSlide + 1);
		
		sl_advice_subnote.text($(slick.$slides[currentSlide]).data().tag);
	});
})



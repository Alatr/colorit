
(function ($) {
	const activeClass = 'color-single-block-img-nav-item--active';
	const miniImg = $('.js-color-single-block-img-nav-item');
	const mainImg = $('.js-color-single-block__main-img');


miniImg.on('click', function () {
	const urlImgMini = $(this).find('img').attr('src')
	
	miniImg.removeClass(activeClass);
	$(this).addClass(activeClass);
	console.log();
	mainImg.attr('src', urlImgMini)
})

})(jQuery);
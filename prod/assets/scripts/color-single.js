
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

let url = location.search;
let pal = url.split(/\W/g).filter(item => item.includes('palette')).toString();
sessionStorage.setItem('palette', pal)

})(jQuery);
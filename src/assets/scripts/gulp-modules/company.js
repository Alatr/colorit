

(function ($) {

	$('.company-principles__info-block-cross').on('click', function(){
		// $(this).prev().addClass('company-principles__info-block-text-collapse_active')
		// $('.company-principles__info-block-text-collapse').addClass('company-principles__info-block-text-collapse_active')
		$(this).parents('.company-principles__info-block').addClass('company-principles__info-block_active')
	})

	$(document).on('click', function(e){
		if (!$('.company-principles__info-block').is(e.target) && $('.company-principles__info-block').has(e.target).length === 0){
			$('.company-principles__info-block').removeClass('company-principles__info-block_active')
		}
	})

	$('.js-docs-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinity: true,
		variableWidth: true
	})

	$('.js-docs-arrow-prev').on('click', function(){
		$('.js-docs-slider').slick('slickPrev')
	})

	$('.js-docs-arrow-next').on('click', function(){
		$('.js-docs-slider').slick('slickNext')
	})

	if ($(window).width() <= 768){
		$('.company-advantages__kolorit-bg-img-wrapper').appendTo('.company-advantages__content_js')
		$('.company-docs__docs-block').appendTo('.company-docs__slider-and-link');

		
	}
	if ($(window).width() <= 768 && $(window).width() > 480){
		$('.company-principles__info-block-title').each((index, item) => {
			$(item).prependTo($('.company-principles__info-block-content')[index]);
			$(item).addClass('done');
		})
	}

	if ($(window).width() <= 640){
		// $('.company-advantages__big-img').prependTo('.company-advantages__inner')
		$('.company-advantages__big-img').each((index, item) => {
			$(item).prependTo($('.company-advantages').find('.container')[index]);
		})
		$('.company-advantages__big-img').css('height', $('.company-advantages__big-img').width() / 1.36);
	}

	if ($(window).width() <= 480){
		$('.company-trophy__link-block').remove();

		$('.company-trophy-slider-js').on("init", function(event, slick){
			$(".company-trophy__slide-number").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
		});
		$('.company-trophy-slider-js').on("afterChange", function(event, slick, currentSlide){
			$('.company-trophy__slide-number').text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
		});

		$('.company-trophy-slider-js').slick({
			arrows: false,
			variableWidth: true
		})
		$('.js-trophy-arrow-prev').on('click', function(){
			$('.company-trophy-slider-js').slick('slickPrev')
		})
	
		$('.js-trophy-arrow-next').on('click', function(){
			$('.company-trophy-slider-js').slick('slickNext')
		})

		$('.company-docs__docs-block').appendTo('.company-docs__inner')
	}

	$(window).resize(function(){

		if ($(window).width() <= 768){
			if (!$('.company-advantages__kolorit-bg-img-wrapper').hasClass('done')){
				$('.company-advantages__kolorit-bg-img-wrapper').appendTo('.company-advantages__content_js');
				$('.company-advantages__kolorit-bg-img-wrapper').addClass('done');
			}
			
		} 
		if ($(window).width() > 768){
			if ($('.company-advantages__kolorit-bg-img-wrapper').hasClass('done')){
				$('.company-advantages__kolorit-bg-img-wrapper').appendTo('.company-advantages__description-block_js');
				$('.company-advantages__kolorit-bg-img-wrapper').removeClass('done');
			}
		}
		
	});
	
	/* SMOOTH SCROLL TO ANCHOR */
	$(".js-company-scroll").on("click", function (event) {
				//отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();
		 
				//забираем идентификатор бока с атрибута href
				var id  = $(this).attr('href'),
		 
				//узнаем высоту от начала страницы до блока на который ссылается якорь
					top = $(id).offset().top;
				 
				//анимируем переход на расстояние - top за 1500 мс
				$('body,html').animate({scrollTop: top}, 1500);
		14
			});
		
			
})(jQuery);














/**********************************/
/*
 * video start
 */






		// 3. This function creates an <iframe> (and YouTube player)
		//    after the API code downloads.
		var player;
		function onYouTubeIframeAPIReady() {
			player = new YT.Player(`player0`, {
				height: '390',
				width: '640',
				videoId: '90CxMXugffw',
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
		}

		// 4. The API will call this function when the video player is ready.
		function onPlayerReady(event) {
			const sec = event.target.getDuration()
			const secFormat = new Date(sec * 1000).toUTCString().split(/ /)[4];
			$('.js-products-card-video-nav__time').html(secFormat)
		}

		// 5. The API calls this function when the player's state changes.
		//    The function indicates that when playing a video (state=1),
		//    the player should play for six seconds and then stop.
		var done = false;

		function onPlayerStateChange(event) {
			if (event.data == YT.PlayerState.PLAYING && !done) {
				setTimeout(stopVideo, 6000);
				done = true;
			}
		}

		function stopVideo() {
			player.stopVideo();
		}




/*
 * video end
 */
/**********************************/


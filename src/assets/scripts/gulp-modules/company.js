

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
				videoId: 'eu5aGhqksbY',
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


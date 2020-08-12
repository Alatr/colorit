

(function ($) {
	class Tab {
		constructor(obj){
			this.btn = obj.$btn
			this.content = obj.$content

			this.btnActiveClass = obj.btnActiveClass
			this.contentActiveClass = obj.contentActiveClass
			this.active = obj.active
			this.data = {
				btnDataName: 'data-indx'
			}


			this.init()
		}

		setStyles() {
			this.btn.each((i, el)=>{
				$(el).attr(this.data.btnDataName, i);
			});
			this.btn.eq(this.active).addClass(this.btnActiveClass);
			this.content.eq(this.active).addClass(this.contentActiveClass);
		}
	

			init() {
				this.setStyles();
				this.listeners();

			}
	}

	Tab.prototype.listeners = function(callback = function(){}) {
			const self = this;
			this.btn.on('click', function(){
				const inx = $(this).attr(self.data.btnDataName);
				//btn
				self.btn.removeClass(self.btnActiveClass);
				self.btn.eq(inx).addClass(self.btnActiveClass);
				//contents
				self.content.removeClass(self.contentActiveClass);
				self.content.eq(inx).addClass(self.contentActiveClass);

				// ajax
				callback();
			});
		}


		const tab = new Tab({
			$btn: $('.js-products-card-tab-btn'),
			$content: $('.js-products-card-tab-content-item'),
			btnActiveClass: 'products-card-btn-content-item--active',
			contentActiveClass: 'products-card-tab-content-item--active',
			active: 0
		});

	

	const sl_main = $('.js-products-card-same-sl-slider');



	sl_main.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite: false,
	});

	$('.js-products-card-same-sl-slider-next').click(function () {
		sl_main.slick('slickPrev');
	})

	$('.js-products-card-same-sl-slider-prev').click(function () {
		sl_main.slick('slickNext');
	});

	const sl_main_advice = $('.js-products-card-advice-sl-slider');



	sl_main_advice.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite: false,
	});

	$('.js-products-card-advice-sl-slider-next').click(function () {
		sl_main_advice.slick('slickPrev');
	})

	$('.js-products-card-advice-sl-slider-prev').click(function () {
		sl_main_advice.slick('slickNext');
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


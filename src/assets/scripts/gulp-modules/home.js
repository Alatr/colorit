// 	// const first_slide_counter_in = (function() {
// 		// 	const tl = new TimelineMax({paused: true});
		
// 		// 	return tl;
// 		// })();

// $('body').addClass('js-animation')

// setTimeout(() => {
	
// 	// DOM PREPARE

// 	$('.js-slide-content__title').html(spliterText('.js-slide-content__title'));
// 	$('.js-second__title').html(spliterText('.js-second__title'));
// 	$('.js-third-title').html(spliterText('.js-third-title'));
	
	
	

// 	function spliterText($title){
// 		const titleStr = $($title).text().replace(/\s{2,}/gm, '')
// 		const titleArr = titleStr.split(' ');

// 		let newStr = '';
// 		titleArr.forEach((el)=>{
// 			let wrap = (word)=> `<span class="word-wrapper"><span class="word-animate">${word}</span></span>`;
// 			newStr += wrap(el);
// 		});

// 		return newStr;
// 	}

	
// 	function first_slide_content_in() {
// 		const tl = new TimelineMax({paused: false});
	
// 			tl.to(".first-slide-home span.word-animate", 1.5, {y: 0, stagger: 0.2});
// 			tl.to(".first-slide-home .slide-content__text", 1, {yPercent: 0, opacity: 1}, '-=0.8');
// 			tl.to(".first-slide-home .slide-content__btn", 1, {yPercent: 0, opacity: 1}, '-=0.8');
		
// 		return tl;
// 	};

// 	function first_slide_content_out() {
// 		const tl = new TimelineMax();
	
// 		tl.to(".first-slide-home span.word-animate", 1.5, {yPercent: -100, stagger: 0.2});
// 		tl.to(".first-slide-home .slide-content__text", 1, {yPercent: -50, opacity: 0}, '-=1.5');
// 		tl.to(".first-slide-home .slide-content__btn", 1, {yPercent: -100, opacity: 0}, '-=1.4');
		
// 		return tl;
// 	};

// 	const third_slide_content_in = (function() {
// 		const tl = new TimelineMax({paused: false});
	
// 		tl.from(".third-slide-home span.word-animate", 1, {yPercent: -100, stagger: 0.2});
// 		tl.from(".third-slide-home .slide-content__text", 0.7, {yPercent: -50, opacity: 0}, '-=1');
// 		tl.from(".third-slide-home .slide-content__btn", 0.7, {yPercent: -50, opacity: 0}, '-=1');
		
// 		return tl;
// 	}());
	
// 	const third_slide_content_out = (function() {
// 		const tl = new TimelineMax();
	
// 		tl.to(".third-slide-home span.word-animate", 1.5, {yPercent: -100, stagger: 0.2});
// 		tl.to(".third-slide-home .slide-content__text", 1, {yPercent: -50, opacity: 0}, '-=1.5');
// 		tl.to(".third-slide-home .slide-content__btn", 1, {yPercent: -100, opacity: 0}, '-=1.4');
		
// 		return tl;
// 	})();

// 	function second_slide_content_in() {
// 		const tl = new TimelineMax({paused: true});
	
// 		tl.from(".second-slide-home span.word-animate", 1.5, {yPercent: -100, stagger: 0.2});
// 		tl.from(".second-slide-home .slide-content__text", 1, {yPercent: -50, opacity: 0}, '-=1');
// 		tl.from(".second-slide-home .slide-content__btn", 1, {yPercent: -50, opacity: 0}, '-=1');
		
// 		return tl;
// 	};


	
// 	function second_slide_content_out() {
// 		const tl = new TimelineMax({paused: true});
	
// 		tl.to(".second-slide-home span.word-animate", 1.5, {yPercent: -100, stagger: 0.2});
// 		tl.to(".second-slide-home .slide-content__text", 1, {yPercent: -50, opacity: 0}, '-=1.5');
// 		tl.to(".second-slide-home .slide-content__btn", 1, {yPercent: -100, opacity: 0}, '-=1.4');
		
// 		return tl;
// 	};


// 	/*
// 		* first slide in
// 	*/
	

	
// 	function first_slide_counter_in() {
// 		const tl = new TimelineMax({paused: true});
		
// 		tl.from(".first-slide-content__2 .slide-content__counter span", 1, {yPercent: 30, ease: "back.inOut(1.7)", opacity: 0,  stagger: 0.3});
		
// 		return tl;
// 	};
	
	
// 	const slides = $('.section-slaider__item');

	
// 	function first_in() {
// 		const obj = {
// 			paused: true,
// 			onComplete: ()=>{
// 				const indx = page.activeSlide;
// 				slides.addClass('section-slaider__item--hidden');
// 				slides.eq(indx).removeClass('section-slaider__item--hidden');
// 				slides.eq(indx + 1).removeClass('section-slaider__item--hidden');
// 			}
// 		}
// 		const tl = gsap.timeline(obj);
// 		// bg to pause

// 		// bg to pause
// 		tl.to(".first-slide-home .img-overlay", 1.7, {ease: 'expo.out', y: -100});
// 		tl.to(".first-slide-content__1", 1.7, {ease: 'expo.out', height: '78%', opacity: 1}, 0);
// 		// bg end
// 		tl.to(".first-slide-home .img-overlay", 1.3, {ease: 'expo.out', y: 0});
// 		tl.to(".first-slide-content__1", 				1.3, {ease: 'expo.out', height: '65.9%', opacity: 1}, '<');
// 	  tl.to(".first-slide-content__2", 				1.3, {ease: 'circ.out', y: '0', opacity: 1}, '<' );

// 		// breadcrumbs
// 		 tl.to(".slider-breadcrumds-list li", 1.5, {x: 0, ease: "back.inOut(1.7)", opacity: 1,  stagger: 0.2}, '<-0.5');
// 		// counter
		
// 		tl.add(first_slide_content_in().play(), '<-0.4');
// 		tl.to(".slide-content__bucket", 2, {ease: "back.inOut(1.7)", opacity: 1, y: 0}, '< 0.5');
// 		tl.add(first_slide_counter_in().play(), '< 1')
		
// 		return tl;
// 	};

// //	first_in().play()

// 	/*
// 		* first slide out
// 	*/


// 	const second_slide_counter_in = (function() {
// 		const tl = new TimelineMax();
		
// 		tl.from(".second-slide-content__2 .slide-content__counter span", 1, {yPercent: 30, ease: "back.inOut(1.7)", opacity: 0,  stagger: 0.4});
		
// 		return tl;
// 	})();


	
	
// 	function second_in() {

// 		const obj = {
// 			paused: true,
// 			onReverseComplete: ()=>{},
// 			onComplete: ()=>{
// 				$('.third-slide-home').removeClass('section-slaider__item--hidden')
// 			}
// 		}
// 		const tl = new TimelineMax(obj);

// 		tl.add(first_slide_content_out)
// 		tl.to(".first-slide-home .wrap", 1.5, { ease: 'circ.out', width: '56.7%'}, 0);
// 		tl.to(".slide-content__bucket", 2.5, {ease: 'circ.out', left: '27.8%', top: '4.5%', scale: 1.4}, 0);
// 		tl.to(".first-slide-content__1", 1.5, { ease: 'circ.out', height: '100%', opacity: 0}, 0);
// 		tl.to(".first-slide-content__2", 1.5, { ease: 'circ.out', height: '0%', opacity: 0}, 0);
// 		tl.add(second_slide_content_in().play(), '-=1.5')
// 		tl.to(".first-slide-home .img-overlay", 2, { ease: 'expo.out', yPercent: -100}, '-=1.5');
// 		tl.add(second_slide_counter_in, '-=3')
// 		tl.to(".first-slide-home .first-slide-content__3", 1.5, {  ease: 'circ.out', height: '65.9%', width: '43.3%'}, 0);

// 		return tl;
// 	};
			

// 	/*
// 		* second slide out
// 		*/
		
		
// 		const third_slide_counter_in = (function() {
// 			const tl = new TimelineMax();
			
// 			tl.from(".third-slide-content__2 .slide-content__counter span", 1, {yPercent: 30, ease: "back.inOut(1.7)", opacity: 0,  stagger: 0.4});
			
// 			return tl;
// 		})();

// 		function third_in() {
// 			const obj = {
// 				paused: true,
// 				onComplete: ()=>{
					
// 					//$('.third-slide-home').addClass('section-slaider__item--hidden')
// 				}
// 			}
// 			const tl = new TimelineMax(obj);
// 				tl.add(second_slide_content_out().play(), '-=1');
// 				tl.to(".second-slide-home .second-slide-content__3", 1.5, { ease: 'circ.out', width: '43.3%'}, 0);
// 				tl.to(".slide-content__bucket", 2.5, {ease: 'circ.out', rotation: -17, left: '17.8%', top: '13.5%', scale: 1.1}, 0);
// 				tl.to(".second-slide-home .img-overlay", 1.5, { ease: 'circ.out', yPercent: -100}, 0);
// 				tl.to(".second-slide-home .wrap", 1.5, { ease: 'circ.out',  width: '56.7%'}, 0);
// 				tl.to(".third-slide-home .third-slide-content__3", 1.5, { ease: 'circ.out', height: '100%', width: '56.7%'}, 0);
// 				tl.to(".second-slide-home .second-slide-content__2", 1.5, { ease: 'circ.out', yPercent: 100}, 0);
// 				tl.add(third_slide_content_in, '-=1');
				
// 				tl.to(".second-slide-home .second-slide-content__3", 1.5, { ease: 'circ.out', height: '65.9%'}, 0);
// 				tl.to(".second-slide-home .second-slide-content__3", 1.5, { ease: 'circ.out',  opacity: 0}, '-=1.2');
// 				tl.add(third_slide_counter_in, '-=1');
// 			return tl;
// 		};


// 	/*
// 		* third slide out
// 	*/


// 	function third_out() {
// 		const obj = {
// 			paused: true,
// 			onComplete: ()=>{
// 			//	gsap.set(".third-slide-home", { zIndex: 1 });
// 				$('.third-slide-home').addClass('section-slaider__item--hidden');
// 			}
// 		}
// 		const resetArr = [
// 			".second-slide-home .img-overlay",
// 			".second-slide-home .second-slide-content__3",
// 			'.second-slide-home .wrap',
// 			'.second-slide-home .word-animate',
// 			".second-slide-home .slide-content__text",
// 			".second-slide-home .slide-content__btn"
// 		]
// 		const tl = new TimelineMax(obj);
// 			tl.set(".third-slide-home", { zIndex: 3 });
// 			tl.set(resetArr, { clearProps: "all" });


// 			tl.add(third_slide_content_out);

// 			tl.from(".third-slide-home .third-slide-content__3", 1.5, { ease: 'circ.out', height: '100%', width: '56.7%'}, 0);
// 			tl.to(".third-slide-home .wrap", 1.5, { ease: 'circ.out',  width: '56.7%', opacity: 1}, 0);
// 			tl.to(".third-slide-home .third-slide-content__1", 1.5, { ease: 'circ.out', height: '100%', opacity: 0},0);
// 			tl.to(".third-slide-home .third-slide-content__2", 1.5, { ease: 'circ.out', height: '0%', opacity: 0},0);
// 			tl.to(".third-slide-home .third-slide-content__3", 1.5, { ease: 'circ.out', yPercent: -100});
// 			tl.to(".second-slide-home .second-slide-content__2", 1.5, { ease: 'circ.out', yPercent: 0}, 0);
// 			tl.to(".slide-content__bucket", 2.5, {ease: 'circ.out', left: '27.8%', top: '4.5%', rotation: 0, scale: 1.4}, 0);
// 			tl.call(()=> second_slide_content_in().play(), null,  0);

// 			return tl;
// 	};





// 	function second_out() {
// 		const obj = {
// 			paused: true,
// 			onComplete: ()=>{
// 				//gsap.set(".third-slide-home", { zIndex: 1 });
// 				console.log($('.second-slide-home'));
				
// 				$('.second-slide-home').addClass('section-slaider__item--hidden');
// 				$('.second-slide-home').addClass('123123123');
// 			}
// 		}
// 		const resetArr = [".first-slide-home .first-slide-content__1"]
// 		const tl = new TimelineMax(obj);
// 	//	tl.set(".second-slide-home", { zIndex: 2 });
// 		tl.set(resetArr, { clearProps: "all" });

// 		tl.to(".first-slide-home .img-overlay", 1.5, { ease: 'circ.out',  yPercent: 0});
// 		// tl.to(".second-slide-home .second-slide-content__3", 1.5, { ease: 'circ.out',  width: '43.3%', height: '65.9%'}, 0);
// 		tl.to(".second-slide-home .wrap", 1.5, { ease: 'circ.out',  width: '43.3%', opacity: 1}, 0);
// 		tl.to(".second-slide-home .second-slide-content__3", 1.5, { ease: 'circ.out',  width: '43.3%', height: '65.9%', opacity: 0}, 0);
// 		tl.to(".first-slide-home .first-slide-content__2", 1.5, { ease: 'circ.out', height: '34.1%',  yPercent: 0, opacity: 1}, 0);

// 		tl.to(".slide-content__bucket", 2.5, {ease: 'circ.out', left: '17%', top: '19%', rotation: 0, scale: 1}, 0);

// 		tl.to(".first-slide-home .first-slide-content__3", 1.5, { ease: 'circ.out',  width: '56.7%', height: '80%'}, 0);
// 		tl.to(".second-slide-home .second-slide-content__2", 1.5, { ease: 'circ.out',  height: '0%'}, 0);
// 		tl.to(".first-slide-home .wrap", 1.5, { ease: 'circ.out',  width: '43.3%'}, 0);
// 		tl.to(".first-slide-home .first-slide-content__3", 1.5, { ease: 'circ.out',  height: '100%'});
// 		 tl.add(second_slide_content_out().play(), 0)

// 		return tl;
// 	};



	
	
	
// 	const master = gsap.timeline();

// 	master.add(first_in().play());
// 	 master.add(second_in().play());
// 	// master.add(third_in().play());
// 	// master.add(third_out().play());
// //	 master.add(second_out().progress(1).reverse());
// 	// master.call(()=> {
// 	// 	first_in().progress(1).reverse();
// 	// 	$('.second-slide-home').addClass('section-slaider__item--hidden');
// 	// });
	
	


	
	
	
	
	
	
	
// 	class Paginator {
// 		constructor() {
// 			this.scrollEvents();
// 			this.activeSlide = 0;
// 			this.canGo = 1;
// 			this.min = 0;
// 			this.max = 3;
// 			this.delay = 2600;
// 		}
		
// 		scrollEvents() {
// 			var self = this;
			
// 			$(window).on('wheel',function(e) {
// 				if(!self.canGo) return;
//   		e = e.originalEvent;
//   		var direction = e.deltaY > 0 ? 1 : -1;
  		
//   		var newslide = self.activeSlide + direction;
//   		if(newslide > self.max || newslide < self.min) return;
//   		self.canGo = false;
  		
//   		PubSub.publish( 'gotoSlide', {from: self.activeSlide,to:newslide, direction} );
//   		self.activeSlide = newslide;
//   		setTimeout(function() {
// 				self.canGo = true;
//   		}, self.delay);
//   	});
//   }
	
	
// }
// class Animator {
	
	
	
// }

// const page = new Paginator();

// PubSub.subscribe('gotoSlide', function(msg, data){
// 	console.log(msg, data);
// 	if (data.direction === 1) {
// 		switch (data.to) {
// 			case 1:
// 				//first_in().play();
// 				break;
// 			case 2:
// 				//second_in().play();
// 				break;
// 			case 3:
// 				//third_in().play();
// 				break;
					
// 			default:
// 				break;
// 		}
// 	} else {
// 			switch (data.to) {
// 				case 0:
// 						//first_in().progress(1).reverse();
// 						$('.second-slide-home').addClass('section-slaider__item--hidden');
// 					break;
// 				case 1:
// 					//second_out().play();
// 					break;
// 				case 2:
// 					//third_out().play();
// 					break;
						
// 				default:
// 					break;
// 			}

// 	}
// });

			

			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
// 		}, 1000);

const sl_main = $('.js-main-section-sl');

sl_main.on('init', function (event, slick, currentSlide, nextSlide) {
	$('.js-current-slick__all').text(slick.slideCount);
});

sl_main.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	infinite: false,
	fade: true,
	appendDots: '.js-main-section-dots-wrapper'
});

$('.js-main-sl-arr-next').click(function () {
	sl_main.slick('slickPrev');
})

$('.js-main-sl-arr-prev').click(function () {
	sl_main.slick('slickNext');
});

sl_main.on('afterChange', function (event, slick, currentSlide, nextSlide) {
	$('.js-current-slick__cnt').text(currentSlide + 1)
});













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


sl_advice.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	infinite: false,
	fade: true,
});

$('.js-advice-sl-arr-next').click(function () {
	sl_advice.slick('slickPrev');
})

$('.js-advice-sl-arr-prev').click(function () {
	sl_advice.slick('slickNext');
});

sl_advice.on('afterChange', function (event, slick, currentSlide, nextSlide) {
	$('.js-advice-number').text(currentSlide + 1)
});






console.log(screen.width !== 700);
if (screen.width > 700) {
	
	const sl_features = $('.js-section-slaider');
	
	sl_features.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite: false,
		fade: true,
	});
	
	
	$('.js-sec-sl-btn-wrap--prev').click(function () {
		sl_features.slick('slickPrev');
	})
	
	$('.js-sec-sl-btn-wrap--next').click(function () {
		sl_features.slick('slickNext');
	});
}



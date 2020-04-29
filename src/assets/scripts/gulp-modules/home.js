	// const first_slide_counter_in = (function() {
		// 	const tl = new TimelineMax({paused: true});
		
		// 	return tl;
		// })();



setTimeout(() => {
	
	// DOM PREPARE

	$('.js-slide-content__title').html(spliterText('.js-slide-content__title'));
	$('.js-second__title').html(spliterText('.js-second__title'));
	$('.js-third-title').html(spliterText('.js-third-title'));
	
	
	

	function spliterText($title){
		const titleStr = $($title).text().replace(/\s{2,}/gm, '')
		const titleArr = titleStr.split(' ');

		let newStr = '';
		titleArr.forEach((el)=>{
			let wrap = (word)=> `<span class="word-wrapper"><span class="word-animate">${word}</span></span>`;
			newStr += wrap(el);
		});

		return newStr;
	}

	
	const first_slide_content_in = (function() {
		const tl = new TimelineMax({paused: false});
	
		tl.from(".first-slide-home span.word-animate", 1.5, {yPercent: -100, stagger: 0.2});
		tl.from(".first-slide-home .slide-content__text", 1, {yPercent: -50, opacity: 0}, '-=1');
		tl.from(".first-slide-home .slide-content__btn", 1, {yPercent: -50, opacity: 0}, '-=1');
		
		return tl;
	}());

	const first_slide_content_out = (function() {
		const tl = new TimelineMax();
	
		tl.to(".first-slide-home span.word-animate", 1.5, {yPercent: -100, stagger: 0.2});
		tl.to(".first-slide-home .slide-content__text", 1, {yPercent: -50, opacity: 0}, '-=1.5');
		tl.to(".first-slide-home .slide-content__btn", 1, {yPercent: -100, opacity: 0}, '-=1.4');
		
		return tl;
	})();

	const third_slide_content_in = (function() {
		const tl = new TimelineMax({paused: false});
	
		tl.from(".third-slide-home span.word-animate", 1.5, {yPercent: -100, stagger: 0.2});
		tl.from(".third-slide-home .slide-content__text", 1, {yPercent: -50, opacity: 0}, '-=1');
		tl.from(".third-slide-home .slide-content__btn", 1, {yPercent: -50, opacity: 0}, '-=1');
		
		return tl;
	}());


	
	const third_slide_content_out = (function() {
		const tl = new TimelineMax();
	
		tl.to(".third-slide-home span.word-animate", 1.5, {yPercent: -100, stagger: 0.2});
		tl.to(".third-slide-home .slide-content__text", 1, {yPercent: -50, opacity: 0}, '-=1.5');
		tl.to(".third-slide-home .slide-content__btn", 1, {yPercent: -100, opacity: 0}, '-=1.4');
		
		return tl;
	})();


	/*
		* first slide in
	*/
	
	const first_slide_3_in = (function() {
		const tl = new TimelineMax();
		// bacground
		
		tl.from(".first-slide-home .img-overlay", 1.7, { ease: 'expo.out', yPercent: -100}, 0);
		tl.from(".first-slide-home .first-slide-content__3", 1, {  ease: 'circ.out', height: '75.9%'});
		tl.add(first_slide_content_in, '-=1');
		
		return tl;
	})();
	
	const first_slide_counter_in = (function() {
		const tl = new TimelineMax();
		
		tl.from(".first-slide-content__2 .slide-content__counter span", 1, {yPercent: 30, ease: "back.inOut(1.7)", opacity: 0,  stagger: 0.4});
		
		return tl;
	})();
	
	const first_2_in = (function() {
		const tl = new TimelineMax();
		tl.from(".first-slide-content__1", 1.7, {ease: 'expo.out', height: '100%', opacity: 0}, 0);
		tl.from(".first-slide-content__2", 1.7, {ease: 'circ.out', yPercent: '100'}, '-=0.3');
		tl.add(first_slide_counter_in, '-=1.3')
		return tl;
	})();
	
	const first_in = (function() {
		const tl = new TimelineMax();
		tl.add(first_slide_3_in, 0);
		tl.add(first_2_in, 0);
		
		return tl;
	}());


	/*
		* first slide out
	*/
	const second_slide_content_in = (function() {
		const tl = new TimelineMax();
	
		tl.from(".second-slide-home span.word-animate", 1.5, {yPercent: -100, stagger: 0.2});
		tl.from(".second-slide-home .slide-content__text", 1, {yPercent: -50, opacity: 0}, '-=1');
		tl.from(".second-slide-home .slide-content__btn", 1, {yPercent: -50, opacity: 0}, '-=1');
		
		return tl;
	}());


	
	const second_slide_content_out = (function() {
		const tl = new TimelineMax();
	
		tl.to(".second-slide-home span.word-animate", 1.5, {yPercent: -100, stagger: 0.2});
		tl.to(".second-slide-home .slide-content__text", 1, {yPercent: -50, opacity: 0}, '-=1.5');
		tl.to(".second-slide-home .slide-content__btn", 1, {yPercent: -100, opacity: 0}, '-=1.4');
		
		return tl;
	})();

	const second_slide_counter_in = (function() {
		const tl = new TimelineMax();
		
		tl.from(".second-slide-content__2 .slide-content__counter span", 1, {yPercent: 30, ease: "back.inOut(1.7)", opacity: 0,  stagger: 0.4});
		
		return tl;
	})();
	
	
	const first_out = (function() {
		const tl = new TimelineMax();
		// bacground

		tl.to(".first-slide-home .wrap", 1.5, { ease: 'circ.out', width: '56.7%'}, 0);

		tl.to(".first-slide-content__1", 1.5, { ease: 'circ.out', height: '100%', opacity: 0}, 0);
		tl.to(".first-slide-content__2", 1.5, { ease: 'circ.out', height: '0%', opacity: 0}, 0);

		tl.add(second_slide_content_in, '-=1.5')
		tl.add(second_slide_counter_in, '-=1')
		tl.add(first_slide_content_out, '-=1.5')
		tl.to(".first-slide-home .first-slide-content__3", 1.5, {  ease: 'circ.out', height: '65.9%', width: '43.3%'}, 0);
		tl.to(".first-slide-home .img-overlay", 2, { ease: 'expo.out', yPercent: -100}, '-=0.3');

		return tl;
	})();
			

	/*
		* second slide out
	*/

			

		const second_out = (function() {
			const tl = new TimelineMax();
			tl.to(".second-slide-home .second-slide-content__3", 2.5, { ease: 'circ.out', width: '43.3%'}, 0);
			// tl.to(".second-slide-home .second-slide-content__1", 1.5, { ease: 'circ.out', height: '100%'}, 0);
			tl.to(".second-slide-home .img-overlay", 2.5, { ease: 'circ.out', yPercent: -100}, 0);
			tl.to(".second-slide-home .wrap", 2.5, { ease: 'circ.out',  width: '56.7%'}, 0);

			tl.to(".third-slide-home .third-slide-content__3", 2.5, { ease: 'circ.out', height: '100%', width: '56.7%'}, 0);
			tl.to(".second-slide-home .second-slide-content__2", 2.5, { ease: 'circ.out', yPercent: 100}, 0);
			tl.add(third_slide_content_in, '-=1');
			// tl.to(".second-slide-home .second-slide-content__2", 1.5, { ease: 'circ.out', height: '0', opacity: 0}, 0);

			//tl.to(".second-slide-home .second-slide-content__3", 1.5, { ease: 'circ.out', height: '75.9%', width: '43.3%'}, 0);
			// tl.add(second_slide_content_out);
			return tl;
		})();

	
	/*
		* third slide out
	*/

	
	
	
	const master = new TimelineMax();

//	master.add(first_in);
	master.add(first_out, '-=1');
	master.add(second_out, '-=1');



	$('.slide-content__btn').on('click', ()=>{
		first_slide_3_out.reverse();

	})
	
	// function first_slide() {
	// 	const tl = new TimelineMax();
		
	// 	//gsap.set(".first-slide-home .wrap",  { width: '43.3%'});
	// 	tl.to(".first-slide-home .wrap", 2.5, { ease: "sine.out", width: '56.7%'}, 0);
	// 	tl.to(".first-slide-home .first-slide-content__3", 2.5, { ease: "sine.out", width: '43.3%', height: '65.9% '}, 0);

	// 	tl.to(".first-slide-home .img-overlay", 2.5, { ease: "sine.out", scaleY: 0}, 0);		
	// 	tl.to(".first-slide-content__1", 2.5, { ease: "sine.out", scaleX: 0}, 0);		
	// 	return tl;
	// }
	
//	first_slide();

	
	
	
	
	
	
	
}, 1000);
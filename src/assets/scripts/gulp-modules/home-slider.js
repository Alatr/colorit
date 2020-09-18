class CustomSl {
	constructor(settings) {

		// this.bindAll();

		this.container = document.querySelector(settings.container)
		this.slides = [...this.container.querySelectorAll(`${settings.container} > *`)]
		this.bullets = [...document.querySelectorAll(`${settings.dotsContainer} > *`)]
		this.prevBtn = document.querySelector(settings.btnPrev)
		this.nextBtn = document.querySelector(settings.btnNext)
		this.activeSlide = 'main-slide--active'
		this.activeDot = 'slick-active'
		this.cntNote = document.querySelector(settings.cntNote)
		this.allNote = document.querySelector(settings.allNote)
		this.data = {
			prev: this.slides.length - 1,
			current: 0,
			next: 1,
			total: this.slides.length - 1,
		}

		this.state = {
		}


		this.init()
	}

/* 	bindAll() {
		['nextSlide', 'transitionNext']
		.forEach(fn => this[fn] = this[fn].bind(this))
	} */

	setStyles() {
		this.bullets.forEach((el, i) => el.setAttribute('data-inx', i));

	}
	fireSlide(cnt) {
		this.slides.forEach((el) =>  el.classList.remove(this.activeSlide));
		this.bullets.forEach((el) =>  el.classList.remove(this.activeDot));
		this.slides[cnt].classList.add(this.activeSlide);
		this.bullets[cnt].classList.add(this.activeDot);
		console.log(this.cntNote)
		this.cntNote.innerHTML = '';
		this.cntNote.insertAdjacentHTML('afterBegin', +cnt+1)
		this.allNote.innerHTML = '';
		this.allNote.insertAdjacentHTML('afterBegin', +this.data.total+1)
	}

	transitionIn(cnt, nextIdx) {

		const self = this;

		console.log('transition');
		// this.state.animating = false;

		this.fireSlide(this.data.current);

	}

	nextSlide(e) {
		// if (this.state.animating) return
		this.state.animating = true;
		console.log(this.data.current, 'b');
		this.data.current = this.data.current === this.data.total ? 0 : this.data.current + 1;
console.log(this.data.current, 'a');
		this.transitionIn(this.data.current);
		
	}
	prevSlide(e) {
		// if (this.state.animating) return
		this.state.animating = true;
		
		this.data.current = this.data.current === 0 ? this.data.total : this.data.current - 1;

		this.transitionIn(this.data.current);
	}
	setSlide(e) {
		// if (this.state.animating) return
		this.state.animating = true;
		this.data.current = +e.target.closest('li').getAttribute('data-inx');
		
		this.transitionIn(this.data.current);
		
	}

	listeners() {
		const self = this;
		// --
		console.log(this.nextBtn);
		this.nextBtn.addEventListener('click', function(){
			self.nextSlide();
		});
		
		// --
		this.prevBtn.addEventListener('click', function(){
			self.prevSlide();
		});
		
		// --
		[...this.bullets].forEach(function(el){
			el.addEventListener('click', function (e) {
				self.setSlide(e);
			});
		})

	}


	init() {
		this.setStyles();
		this.listeners();

	}
}

const sl = new CustomSl({
	container: '.js-main-section-sl',
	dotsContainer: '.js-slick-dots',
	btnPrev: '.js-main-sl-arr-prev',
	btnNext: '.js-main-sl-arr-next',
	cntNote: '.js-current-slick__cnt',
	allNote: '.js-current-slick__all',
});
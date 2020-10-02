	// force all gsap animation
	gsap.config({
		force3D: true
	});

	const ex = "expo.inOut";
	const exI = "expo.in";
	const exO = "expo.out";

	const p4 = "power4.inOut";
	const p4I = "power4.in";
	const p4O = "power4.out";

	const p2 = "power2.inOut";
	const p2I = "power2.in";
	const p2O = "power2.out";

	const circ = "circ.inOut";
	const circO = "circ.out";
	const circI = "circ.in";
	
var vertex = `
varying vec2 vUv;
void main() {
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

var fragment = `
varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;

// uniform float time;
// uniform float _rot;
uniform float dispFactor;
uniform float effectFactor;

// vec2 rotate(vec2 v, float a) {
//  float s = sin(a);
//  float c = cos(a);
//  mat2 m = mat2(c, -s, s, c);
//  return m * v;
// }

void main() {

		vec2 uv = vUv;

		// uv -= 0.5;
		// vec2 rotUV = rotate(uv, _rot);
		// uv += 0.5;

		vec4 disp = texture2D(disp, uv);

		vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
		vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

		vec4 _texture = texture2D(texture, distortedPosition);
		vec4 _texture2 = texture2D(texture2, distortedPosition2);

		vec4 finalTexture = mix(_texture, _texture2, dispFactor);

		gl_FragColor = finalTexture;
		// gl_FragColor = disp;
}
`;


var hoverEffect = function(opts) {

    
      var vertex = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `;
    
      var fragment = `
    varying vec2 vUv;
    
    uniform float dispFactor;
    uniform float dpr;
    uniform sampler2D disp;
    
    uniform sampler2D texture1;
    uniform sampler2D texture2;
    uniform float angle1;
    uniform float angle2;
    uniform float intensity1;
    uniform float intensity2;
    uniform vec4 res;
    uniform vec2 parent;
    
    mat2 getRotM(float angle) {
      float s = sin(angle);
      float c = cos(angle);
      return mat2(c, -s, s, c);
    }
    
    void main() {
      vec4 disp = texture2D(disp, vUv);
      vec2 dispVec = vec2(disp.r, disp.g);
    
      vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;
      vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
    
    
      vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;
      vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
      vec4 _texture1 = texture2D(texture1, distortedPosition1);
      vec4 _texture2 = texture2D(texture2, distortedPosition2);
      gl_FragColor = mix(_texture1, _texture2, dispFactor);
    }
    `;
    
      
      function firstDefined() {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) return arguments[i];
        }
      }
    
      var parent = opts.parent;
      var dispImage = opts.displacementImage;
      var image1 = opts.image1;
      var image2 = opts.image2;
      var imagesRatio = firstDefined(opts.imagesRatio, 1.0);
      var intensity1 = firstDefined(opts.intensity1, opts.intensity, 1);
      var intensity2 = firstDefined(opts.intensity2, opts.intensity, 1);
      var commonAngle = firstDefined(opts.angle, Math.PI / 4); // 45 degrees by default, so grayscale images work correctly
      var angle1 = firstDefined(opts.angle1, commonAngle);
      var angle2 = firstDefined(opts.angle2, -commonAngle * 3);
      var speedIn = firstDefined(opts.speedIn, opts.speed, 1);
      var speedOut = firstDefined(opts.speedOut, opts.speed, 0.7);
      var userHover = firstDefined(opts.hover, true);
      var easing = firstDefined(opts.easing, Expo.easeOut);
      var video = firstDefined(opts.video, false);
    
      if (!parent) {
        console.warn('Parent missing');
        return;
      }
    
      if (!(image1 && image2 && dispImage)) {
        console.warn('One or more images are missing');
        return;
      }
    
      var scene = new THREE.Scene();
      var camera = new THREE.OrthographicCamera(
        parent.offsetWidth / -2,
        parent.offsetWidth / 2,
        parent.offsetHeight / 2,
        parent.offsetHeight / -2,
        1,
        1000
      );
    
      camera.position.z = 1;
    
      var renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true
      });
    
      renderer.setPixelRatio(2.0);
      renderer.setClearColor(0xffffff, 0.0);
      renderer.setSize(parent.offsetWidth, parent.offsetHeight);
      parent.appendChild(renderer.domElement);
    
      var render = function () {
        // This will be called by the TextureLoader as well as TweenMax.
        renderer.render(scene, camera);
      };
    
      var loader = new THREE.TextureLoader();
      loader.crossOrigin = '';
    
      var disp = loader.load(dispImage, render);
      disp.magFilter = disp.minFilter = THREE.LinearFilter;
    
      if (video) {
        var animate = function() {
            requestAnimationFrame(animate);
    
            renderer.render(scene, camera);
        };
        animate();
    
        var video = document.createElement('video');
        video.autoplay = true;
        video.loop = true;
        video.src = image1;
        video.load();
    
        var video2 = document.createElement('video');
        video2.autoplay = true;
        video2.loop = true;
        video2.src = image2;
        video2.load();
    
        var texture1 = new THREE.VideoTexture(video);
        var texture2 = new THREE.VideoTexture(video2);
        texture1.magFilter = texture2.magFilter = THREE.LinearFilter;
        texture1.minFilter = texture2.minFilter = THREE.LinearFilter;
    
        video2.addEventListener('loadeddata', function() {
          video2.play();
    
          texture2 = new THREE.VideoTexture(video2);
          texture2.magFilter = THREE.LinearFilter;
          texture2.minFilter = THREE.LinearFilter;
    
          mat.uniforms.texture2.value = texture2;
    
        }, false);
    
        video.addEventListener('loadeddata', function() {
          video.play();
    
          texture1 = new THREE.VideoTexture(video);
    
          texture1.magFilter = THREE.LinearFilter;
          texture1.minFilter = THREE.LinearFilter;
    
          mat.uniforms.texture1.value = texture1;
        }, false);
      } else {
        var texture1 = loader.load(image1, render);
        var texture2 = loader.load(image2, render);
    
        texture1.magFilter = texture2.magFilter = THREE.LinearFilter;
        texture1.minFilter = texture2.minFilter = THREE.LinearFilter;
      }
    
      let a1, a2;
      var imageAspect = imagesRatio;
      if (parent.offsetHeight / parent.offsetWidth < imageAspect) {
        a1 = 1;
        a2 = parent.offsetHeight / parent.offsetWidth / imageAspect;
      } else {
        a1 = (parent.offsetWidth / parent.offsetHeight) * imageAspect;
        a2 = 1;
      }
    
      var mat = new THREE.ShaderMaterial({
        uniforms: {
          intensity1: {
            type: 'f',
            value: intensity1
          },
          intensity2: {
            type: 'f',
            value: intensity2
          },
          dispFactor: {
            type: 'f',
            value: 0.0
          },
          angle1: {
            type: 'f',
            value: angle1
          },
          angle2: {
            type: 'f',
            value: angle2
          },
          texture1: {
            type: 't',
            value: texture1
          },
          texture2: {
            type: 't',
            value: texture2
          },
          disp: {
            type: 't',
            value: disp
          },
          res: {
            type: 'vec4',
            value: new THREE.Vector4(parent.offsetWidth, parent.offsetHeight, a1, a2)
          },
          dpr: {
            type: 'f',
            value: window.devicePixelRatio
          }
        },
    
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0,
      });
    
      var geometry = new THREE.PlaneBufferGeometry(parent.offsetWidth, parent.offsetHeight, 1);
      var object = new THREE.Mesh(geometry, mat);
      scene.add(object);
    
      function transitionIn() {
        TweenMax.to(mat.uniforms.dispFactor, speedIn, {
          value: 1,
          ease: easing,
          onUpdate: render,
          onComplete: render,
        });
      }
    
      function transitionOut() {
        TweenMax.to(mat.uniforms.dispFactor, speedOut, {
          value: 0,
          ease: easing,
          onUpdate: render,
          onComplete: render,
        });
      }
    
      if (userHover) {
        parent.addEventListener('mouseenter', transitionIn);
        parent.addEventListener('touchstart', transitionIn);
        parent.addEventListener('mouseleave', transitionOut);
        parent.addEventListener('touchend', transitionOut);
      }
    
      window.addEventListener('resize', function (e) {
        if (parent.offsetHeight / parent.offsetWidth < imageAspect) {
          a1 = 1;
          a2 = parent.offsetHeight / parent.offsetWidth / imageAspect;
        } else {
          a1 = (parent.offsetWidth / parent.offsetHeight) * imageAspect;
          a2 = 1;
        }
        object.material.uniforms.res.value = new THREE.Vector4(parent.offsetWidth, parent.offsetHeight, a1, a2);
        renderer.setSize(parent.offsetWidth, parent.offsetHeight);
				console.log(parent.offsetWidth, parent.offsetHeight);
        render()
      });
    
      this.next = transitionIn;
      this.previous = transitionOut;
    };
    

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
		this.autoPlay = settings.autoPlay
		this.cntNote = document.querySelector(settings.cntNote)
		this.allNote = document.querySelector(settings.allNote)
		this.overlay = document.querySelector(settings.overlay)
		this.overlay_0 = settings.overlay__0;
		this.overlay_1 = settings.overlay__1;
		this.overlay_2 = settings.overlay__2;
		this.overlay_3 = settings.overlay__3;
		this.autoPlayInterval = null;
		this.title = document.querySelectorAll(settings.title),
		this.text = document.querySelectorAll(settings.text),
		this.btn = document.querySelectorAll(settings.btn),
		this.imgBg_1 = document.querySelectorAll(settings.imgBg_1),
		this.imgBg_2 = document.querySelectorAll(settings.imgBg_2),
		this.subImg = document.querySelectorAll(settings.subImg),
		this.data = {
			prev: this.slides.length - 1,
			current: 0,
			next: 1,
			total: this.slides.length - 1,
		}

		this.state = {
			animating: false
		}


		this.init()
	}


	setStyles() {
		this.bullets.forEach((el, i) => el.setAttribute('data-inx', i));
		// gsap overlay
		gsap.set([this.overlay_0, this.overlay_1 ], { scaleX: 0});
		gsap.set([this.overlay_2, this.overlay_3], { scaleY: 0});
	}
	fireSlide(cnt) {
		this.slides.forEach((el) =>  el.classList.remove(this.activeSlide));
		this.bullets.forEach((el) =>  el.classList.remove(this.activeDot));
		this.slides[cnt].classList.add(this.activeSlide);
		this.bullets[cnt].classList.add(this.activeDot);
		this.cntNote.innerHTML = '';
		this.cntNote.insertAdjacentHTML('afterBegin', +cnt+1)
		this.allNote.innerHTML = '';
		this.allNote.insertAdjacentHTML('afterBegin', +this.data.total+1)
	}

	transitionIn({prev, current, next}) {
		const self = this;



		
		/*
		 * slider start
		 */
		function sliderTransition() {
			gsap.set([self.overlay_0, self.overlay_1 ], { scaleX: 0});
			gsap.set([self.overlay_2, self.overlay_3], { scaleY: 0});
			
			const ease_1 = BezierEasing(.42, .8, .39, .97);
			const obj = {
				paused: true,
				onComplete: ()=>{
					self.state.animating = false;
				}
			};
					

			const tl = gsap.timeline(obj);
			/* overlay start */
			if (prev % 2 !== 0) {
				tl.fromTo(self.overlay_2, 1, { scaleY: 0, }, { scaleY: 1, ease: p2I  })
				tl.fromTo(self.overlay_3, 1, { scaleY: 0, }, { scaleY: 1, ease: p2I }, '<')
				tl.fromTo([self.title[prev], self.btn[prev], self.text[prev]], 1, {autoAlpha: 1, y: 0}, {clearProps: 'transform', autoAlpha: 0, y: 100, ease: p2I}, '<')
			} else {
				tl.fromTo(self.overlay_0, 1, { scaleX: 0, }, { scaleX: 1, ease: p2I })
				tl.fromTo(self.overlay_1, 1, { scaleX: 0, }, { scaleX: 1, ease: p2I}, '<')
				tl.fromTo([self.title[prev], self.btn[prev], self.text[prev]], 1, {autoAlpha: 1, x: 0}, {clearProps: 'transform', autoAlpha: 0, x: 100, ease: p2I}, '<')
			}
			/* overlay start */
			/*  */

			
			
			/*  */
			/*  */
			tl.call(() => {
				hoverArrEl[prev].previous();
				hoverArrEl[prev].next();
				hoverArrEl[current].next();

			}, null, '<')
			tl.fromTo(self.slides[prev], 1, { scale: 1, }, { scale: 1.05, ease: p2I, clearProps: 'transform'}, '<')
			tl.add(() => self.fireSlide(current))
			tl.fromTo(self.slides[current], 1, { scale: 1.05, }, { scale: 1, ease: p2O, clearProps: 'transform'}, '<')
			/*  */
			/*  */
			/*  */
			/* overlay end */
			if (prev % 2 !== 0) {
				tl.fromTo(self.overlay_2, 1, { scaleY: 1, }, { scaleY: 0, ease: ease_1  }, '<')
				tl.fromTo(self.overlay_3, 1, { scaleY: 1, }, { scaleY: 0, ease: ease_1 }, '<')
				tl.fromTo([self.title[current], self.btn[current], self.text[current]], 1, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0, ease: ease_1, onComplete: ()=> {
					gsap.set([self.overlay_0, self.overlay_1, self.overlay_2, self.overlay_3], {backgroundColor: self.slides[current].getAttribute('data-color')})

				}}, '<')
			} else {
				tl.fromTo(self.overlay_0, 1, { scaleX: 1, }, { scaleX: 0,  ease: ease_1, }, '<')
				tl.fromTo(self.overlay_1, 1, { scaleX: 1, }, { scaleX: 0,  ease: ease_1, }, '<')
				tl.fromTo([self.title[current], self.btn[current], self.text[current]], 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, ease: ease_1, onComplete: ()=> {
					gsap.set([self.overlay_0, self.overlay_1, self.overlay_2, self.overlay_3], {backgroundColor: self.slides[current].getAttribute('data-color')})
				}}, '<')
			}
			tl.call(() => {
				hoverArrEl[current].previous();

			}, null, '<-0.3')
			/*  */
			/*  */
			/*  */
			/* overlay end */
			return tl;
		};

			sliderTransition().play()
		// createAnimationTool(sliderTransition)
		/*
		 * slider end
		 */








		

	}

	nextSlide(e) {
		if (this.state.animating) return
		this.state.animating = true;
		this.data.current = this.data.current === this.data.total ? 0 : this.data.current + 1;
		this.data.prev = this.data.current === 0 ? this.data.total : this.data.current - 1;
		this.data.next = this.data.current === this.data.total ? 0 : this.data.current + 1;


		this.transitionIn(this.data);
		
	}
	prevSlide(e) {
		 if (this.state.animating) return
		 this.state.animating = true;
		
		this.data.current = this.data.current === 0 ? this.data.total : this.data.current - 1;
		this.data.prev = this.data.current === this.data.total ? 0 : this.data.current + 1;
		this.data.next = this.data.current === this.data.total ? 0: this.data.current - 1;
		this.transitionIn(this.data);
	}
	setSlide(e) {
		if (this.state.animating) return
		this.state.animating = true;
		const prevCurrent = this.data.current

		this.data.current = +e.target.closest('li').getAttribute('data-inx');
		this.data.prev = prevCurrent;
		this.data.next = this.data.current === this.data.total ? 0 : this.data.current + 1;
		this.transitionIn(this.data);
		
	}
	setAutoplay() {
		const self = this;
		this.autoPlayInterval = setInterval(() => {
			self.nextSlide();
		}, 3000);
		
	}
	clearAutoplay() {
		const self = this;
		clearInterval(this.autoPlayInterval)
	}
	listeners() {
		const self = this;
		// --
		if (this.autoPlay) {
			this.setAutoplay();
		}
		// --
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









let hoverArrEl = [];
let sliderHome = {};
imagesLoaded(document.querySelectorAll('.main-slide__slide-bg'), () => {

Array.from(document.querySelectorAll('.js-main-slide__slide-bg-wrap')).forEach((el) => {
	const imgs = Array.from(el.querySelectorAll('img'));

	const imagesRatioNum = ($(el).height() / $(el).width()).toFixed(3);
	const hoverEffectInstatse = new hoverEffect({
			parent: el,
			intensity: el.dataset.intensity || undefined,
			easing: el.dataset.easing || undefined,
			imagesRatio: imagesRatioNum || undefined,
			hover: false,
			image1: imgs[0].getAttribute('src'),
			image2: imgs[1].getAttribute('src'),
			displacementImage: el.dataset.displacement,
			// angle2: Math.PI / 2,
			speedIn: 1,
			speedOut: 1
		});

		hoverArrEl.push(hoverEffectInstatse)
	});

	sliderHome = new CustomSl({
		container: '.js-main-section-sl',
		dotsContainer: '.js-slick-dots',
		autoPlay: true,
		/*  */
		overlay__0: '.main-slaider-overlay__0',
		overlay__1: '.main-slaider-overlay__1',
		overlay__2: '.main-slaider-overlay__2',
		overlay__3: '.main-slaider-overlay__3',
		/*  */
		/*  */
		title: '.main-slide__title',
		text: '.main-slide__subtitle',
		btn: '.main-slide__btn:not(.main-slide__btn_mob)',
		imgBg_1: '.r',
		imgBg_2: '.main-slide__slide-bg',
		subImg: '.main-slide__paints',
		/*  */
		btnPrev: '.js-main-sl-arr-prev',
		btnNext: '.js-main-sl-arr-next',
		cntNote: '.js-current-slick__cnt',
		allNote: '.js-current-slick__all',
	});
});










setTimeout(() => {
	
	
	const locoScroll = new LocomotiveScroll({
		el: document.querySelector(".js-scroll-container"),
		smooth: true,
		smoothMobile: false,
		inertia: 1.1
	});
	
	
	
	if (screen.width >= 993) {
		
		/**********************************/
			/*
			* pin second section start
		*/

		const section = document.querySelectorAll('.section-slaider__item');
		const sectionSecondTitle = '.second-slide-home .js-second__title';
		const sectionSecondText = '.second-slide-home .slide-content__text';
		const sectionSecondBtn = '.second-slide-home .slide-content__btn';
		const sectionSecondImg = '.second-slide-home .img-overlay__bg';

		const sectionThirdTitle = '.js-third-title';
		const sectionThirdText = '.third-slide-home .slide-content__text';
		const sectionThirdBtn = '.third-slide-home .slide-content__btn';
		const sectionThirdImg = '.third-slide-home .img-overlay__bg';

		gsap.set(section[1], {xPercent : 100})
		gsap.set(section[2], {yPercent : 100})
		gsap.set([sectionSecondTitle, sectionSecondText, sectionSecondBtn], {autoAlpha: 0})

		// gsap.set('.section-slaider__item')
		const sectionAnim = function() {
			const obj = {
				// paused: true,
			}
			const tl = gsap.timeline(obj);
			tl.fromTo(section[1], 1, {xPercent: 100}, {xPercent: 0})
			
			tl.fromTo([sectionSecondTitle, sectionSecondText, sectionSecondBtn], 1, {x: 300, autoAlpha: 0}, {x: 0, stagger: 0.1, autoAlpha: 1}, '<')
			tl.fromTo(sectionSecondImg, 1, {scale: 2}, {scale: 1}, '<')
			
			tl.fromTo(section[0], 1, {scale: 1, autoAlpha: 1}, {scale: 0.85, autoAlpha: 0}, '<')
			tl.fromTo(section[2], 1, {yPercent: 100}, {yPercent: 0})
			tl.fromTo([sectionThirdTitle, sectionThirdText, sectionThirdBtn], 1, {y: 300, autoAlpha: 0}, {y: 0, stagger: 0.1, autoAlpha: 1}, '<')
			tl.fromTo(sectionThirdImg, 1, {scale: 2}, {scale: 1}, '<')
			tl.fromTo(section[1], 1, {scale: 1, autoAlpha: 1}, {scale: 0.85, autoAlpha: 0}, '<')
			return tl;
		};
		// sectionAnim().play()
		// createAnimationTool(sectionAnim)




		locoScroll.on("scroll", ScrollTrigger.update);

		// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
		ScrollTrigger.scrollerProxy(".js-scroll-container", {
		scrollTop(value) {
			return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
		}, // we don't have to define a scrollLeft because we're only scrolling vertically.
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight
			};
		},
		// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
		pinType: document.querySelector(".js-scroll-container").style.transform ? "transform" : "fixed"
		});

		ScrollTrigger.create({
			trigger: ".section-slaider",
			start: "50% 50%",
			end: "+=1200",
			scroller: ".js-scroll-container",
			animation: sectionAnim(),
			scrub: true,
			pin: true
		});
		// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
		ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

		// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
		ScrollTrigger.refresh();






		/*
		* pin second section end
		*/
		/**********************************/




		ScrollTrigger.create({
			trigger: ".main-section",
			onLeave: ({progress, direction, isActive}) => {
				if(sliderHome.autoPlay){
					sliderHome.clearAutoplay();
				};
			},
			onEnterBack: ({ progress, direction, isActive }) => {
				if(sliderHome.autoPlay){
					sliderHome.setAutoplay();

				};
			},
			start: "50% 50%",
			end: "+=1200",
			scroller: ".js-scroll-container",
			scrub: true,
		});



	}


}, 1000);



















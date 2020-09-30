

(function ($) {
	// * GET PROMISE FUNC FOR AJAX REQUEST START
	async function getPromise(data, url){
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
				url         : url,
				data        : {id: data, action: 'getProd'},
				action      : 'getProd',
				type        : 'POST',
				global      : false,
				async       :  true,
				success     : function(res){
					let data = JSON.parse(res);
					resolve(data);
				},
				error       : function( jqXHR, status, errorThrown ){
				reject(jqXHR);
				},
				beforeSend: function () {},
			});   
		});
		return await promise;
	}

	const $answerList = $('.js-quiz__answers');
	const $questionList = $('.js-quiz__question');
	const line = '#' + $('body').attr('id');
	let result = {};
	/* QUESTION DATA LIST */
	const dataQuestionList = {
		firstQuestion: {
			lines: ['#home-linejka', '#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#shpatlevki', '#kleya-dlya-steklooboev', '#laki-i-emali'],
			title: {
				rus: 'Для какого помещения подбираете покрытие?',
				ua: 'Для какого помещения подбираете покрытие?',
			},
			answers: [
				{
					title: {
						rus: 'Любое',
						ua: 'Любое',
					},
					questionId: 'permises',
					answerId: 'all',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Кухня',
						ua: 'Кухня',
					},
					questionId: 'permises',
					answerId: 'kitchen',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Ванная',
						ua: 'Ванная',
					},
					questionId: 'permises',
					answerId: 'bathroom',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Детская ',
						ua: 'Детская ',
					},
					questionId: 'permises',
					answerId: 'childroom',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Спальня',
						ua: 'Спальня',
					},
					questionId: 'permises',
					answerId: 'bedroom',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Гостинная',
						ua: 'Гостинная',
					},
					questionId: 'permises',
					answerId: 'livingroom',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Гардероб/холл',
						ua: 'Гардероб/холл',
					},
					questionId: 'permises',
					answerId: 'hall',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Балкон',
						ua: 'Балкон',
					},
					questionId: 'permises',
					answerId: 'balcony',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Офис/магазин',
						ua: 'Офис/магазин',
					},
					questionId: 'permises',
					answerId: 'office',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Пищевое производство',
						ua: 'Пищевое производство',
					},
					questionId: 'permises',
					answerId: 'foodprod',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Складское помещение',
						ua: 'Складское помещение',
					},
					questionId: 'permises',
					answerId: 'warehouse ',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Мед учереждение',
						ua: 'Мед учереждение',
					},
					questionId: 'permises',
					answerId: 'medical',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'ТРЦ',
						ua: 'ТРЦ',
					},
					questionId: 'permises',
					answerId: 'mall',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Школа/детский сад',
						ua: 'Школа/детский сад'
					},
					questionId: 'permises',
					answerId: 'school',
					img: './assets/images/quiz/quiz1.jpg'
				}
			]

		},
		secondQustion: {
			title: {
				rus: 'Какую поверхность планируете покрывать?',
				ua: 'Какую поверхность планируете покрывать?',
			},
			lines: ['#home-linejka', '#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#shpatlevki', '#kleya-dlya-steklooboev', '#laki-i-emali'],
			answers: [
				{
					title: {
						rus: 'Любая',
						ua: 'Любая',
					},
					questionId: 'surface',
					answerId: 'all',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Стены',
						ua: 'Стены',
					},
					questionId: 'surface',
					answerId: 'walls',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Потолок',
						ua: 'Потолок',
					},
					questionId: 'surface',
					answerId: 'ceiling',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Элементы интерьера ',
						ua: 'Элементы интерьера ',
					},
					questionId: 'surface',
					answerId: 'interior',
					img: './assets/images/quiz/quiz1.jpg'
				},
			]
		},
		thirdQustion: {
			title: {
				rus: 'Какой материал покрываемой поверхности?',
				ua: 'Какой материал покрываемой поверхности?',
			},
			lines: ['#home-linejka', '#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#shpatlevki', '#kleya-dlya-steklooboev', '#laki-i-emali'],
			answers: [
				{
					title: {
						rus: 'Любой',
						ua: 'Любой',
					},
					questionId: 'material',
					answerId: 'all',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Бетон',
						ua: 'Бетон',
					},
					questionId: 'material',
					answerId: 'concrete',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Гипсокартон',
						ua: 'Гипсокартон',
					},
					questionId: 'material',
					answerId: 'drywall',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Кирпич',
						ua: 'Кирпич',
					},
					questionId: 'material',
					answerId: 'brick',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Обои',
						ua: 'Обои',
					},
					questionId: 'material',
					answerId: 'wallpapers',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Шпатлевка',
						ua: 'Шпатлевка',
					},
					questionId: 'material',
					answerId: 'putty',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'ДСП/ДВП',
						ua: 'ДСП/ДВП',
					},
					questionId: 'material',
					answerId: 'chipboard',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Минеральная штукатурка',
						ua: 'Минеральная штукатурка',
					},
					questionId: 'material',
					answerId: 'minplaster',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Дерево',
						ua: 'Дерево',
					},
					questionId: 'material',
					answerId: 'wood',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Металл',
						ua: 'Металл',
					},
					questionId: 'material',
					answerId: 'metal',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Плитка',
						ua: 'Плитка',
					},
					questionId: 'material',
					answerId: 'tile',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Стекло',
						ua: 'Стекло',
					},
					questionId: 'material',
					answerId: 'glass',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Пластик',
						ua: 'Пластик',
					},
					questionId: 'material',
					answerId: 'plastic',
					img: './assets/images/quiz/quiz1.jpg'
				},
			]
		},
		fourthQustion: {
			title: {
				rus: 'Особенности',
				ua: 'Особенности',
			},
			lines: ['#home-linejka', '#professional-linejka', '#shpatlevki', '#laki-i-emali'],
			answers: [
				{
					title: {
						rus: 'Защита от плесени и грибка',
						ua: 'Защита от плесени и грибка',
					},
					questionId: 'features',
					answerId: 'mold',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Антимикробная',
						ua: 'Антимикробная',
					},
					questionId: 'features',
					answerId: 'microb',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Повышенная кроющая способность',
						ua: 'Повышенная кроющая способность',
					},
					questionId: 'features',
					answerId: 'covering ',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Подчеркивающая рельеф',
						ua: 'Подчеркивающая рельеф',
					},
					questionId: 'features',
					answerId: 'relief',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Идеально гладкая',
						ua: 'Идеально гладкая',
					},
					questionId: 'features',
					answerId: 'smooth',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Для влажных помещений',
						ua: 'Для влажных помещений',
					},
					questionId: 'features',
					answerId: 'wet',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Ремонтная',
						ua: 'Ремонтная',
					},
					questionId: 'features',
					answerId: 'repair',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Ультралегкая',
						ua: 'Ультралегкая',
					},
					questionId: 'features',
					answerId: 'light',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Идеально белая',
						ua: 'Идеально белая',
					},
					questionId: 'features',
					answerId: 'white',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'антикоррозионная',
						ua: 'антикоррозионная',
					},
					questionId: 'features',
					answerId: 'anticorossion',
					img: './assets/images/quiz/quiz1.jpg'
				},
				{	
					title: {
						rus: 'Колеруемая',
						ua: 'Колеруемая',
					},
					questionId: 'features',
					answerId: 'color',
					img: './assets/images/quiz/quiz1.jpg'
				},
			]
		}
	}

	/* PRODUCT DATA LIST */
	const dataProductList = [
		{
			name : 'Kolorit Argentic',
			line: 'home-linejka',
			id: 141,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'microb', 'relief', 'smooth', 'wet', 'color']	
		},
		{
			name : 'Kolorit Legenda',
			line: 'home-linejka',
			id: 143,
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['smooth', 'color']	
		},
		{
			name : 'Kolorit Family',
			line: 'home-linejka',
			id: 145,
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['covering', 'white', 'color']	
		},
		{
			name: 'Kolorit Idol',
			line: 'home-linejka',
			id: 147,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'relief', 'wet', 'color']
		},
		{
			name: 'Kolorit Dynasty',
			line: 'home-linejka',
			id: 149,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'relief', 'wet', 'color']
		},
		{
			name: 'Kolorit History',
			line: 'home-linejka',
			id: 151,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'relief', 'wet', 'color']
		},
		{
			name: 'Kolorit STANDART 3',
			line: 'professional-linejka',
			id: 153,
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['color']
		},
		{
			name: 'Kolorit STANDART 5',
			line: 'professional-linejka',
			id: 155,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'wet', 'color']
		},
		{
			name: 'Kolorit STANDART H',
			line: 'professional-linejka',
			id: 157,
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['relief', 'white', 'color']
		},
		{
			name: 'Kolorit STANDART M',
			line: 'professional-linejka',
			id: 159,
			permises: ['all', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['covering', 'repair', 'color']
		},
		{
			name: 'Kolorit Silanit',
			line: 'sredstva-podgotovki-poverhnosti',
			id: 161,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'putty', 'minplaster'],
			features: ['microb', 'wet']
		},
		{
			name: 'Kolorit STANDART G',
			line: 'sredstva-podgotovki-poverhnosti',
			id: 163,
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'putty', 'minplaster'],
			features: []	

		},
		{
			name: 'Kolorit Biostop',
			line: 'sredstva-podgotovki-poverhnosti',
			id: 165,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'wet']	
		},
		{
			name: 'Kolorit Beton K',
			line: 'sredstva-podgotovki-poverhnosti',
			id: 167,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'brick', 'putty', 'chipboard', 'tile', 'glass', 'plastic'],
			features: []	
		},
		{
			name: 'Kolorit STANDART LF',
			line: 'shpatlevki',
			id: 169,
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'putty', 'chipboard', 'minplaster'],
			features: ['white']	
		},
		{
			name: 'Kolorit STANDART LH',
			id: 171,
			line: 'shpatlevki',
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'putty', 'chipboard', 'minplaster'],
			features: ['light', 'color']
		},
		{
			name: 'Kolorit Strong Adhesive',
			line: 'kleya-dlya-steklooboev',
			id: 173,
			permises: ['all'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall',  'putty', 'chipboard', 'minplaster'],
			features: []	
		},
		{
			name: 'Kolorit Wood and Metal Enamel Глянец',
			line: 'laki-i-emali',
			id: 175,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'interior'],
			material: ['all', 'concrete', 'drywall', 'brick', 'putty', 'chipboard', 'wood', 'metal'],
			features: ['mold', 'relief', 'anticorossion', 'color']	


		},
		{
			name: 'Kolorit Wood and Metal Enamel Полуматовая',
			id: 177,
			line: 'laki-i-emali',
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'interior'],
			material: ['all', 'concrete', 'drywall', 'brick', 'putty', 'chipboard', 'wood', 'metal'],
			features: ['mold', 'relief', 'anticorossion', 'color']	
		},
		{
			name: 'Kolorit Radiator Enamel',
			id: 179,
			line: 'laki-i-emali',
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'interior'],
			material: ['all', 'metal'],
			features: ['anticorossion', 'color']	



		},
		{
			name: 'Kolorit Panel Lacquer',
			line: 'laki-i-emali',
			id: 181,
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'interior'],
			material: ['all', 'concrete', 'brick', 'wood'],
			features: ['color']	
		},

	]

	function langDetect(){
		return 'rus';
		if (window.location.pathname.match(/\/ru\//)) return 'rus';
		if (window.location.pathname.match(/\/en\//)) return 'en';
		return  'ua'
	}

	const dataQuestionMarkup = {
		itemQustion: function(title, {questionId, answerId, img}){
			return `<li class="quiz__answer" data-question="${questionId}" data-answerId="${answerId}">
						<div class="quiz__answer-img-wrapper">
			  				<img class="quiz__answer-img" src="${img}" alt="foto">
						</div>
						<span class="quiz__answer-text">${title}</span>
		  			</li>`
		} ,
		itemResult: function({img, url, name}){
			return `<li class="quiz__answer quiz__result">
						<a href="${url}" target="_blank">
							<div class="quiz__result-img-wrapper">
								<img src="${img}" />
							</div>
							<span>${name}</span>
						</a>
		  			</li>`
		} ,
		preloader: function(){
			return `<img src="./assets/images/preloader.svg" alt="preloader">`
		} ,
	}

	let cntquestionLoop = 0;  // Question counter 
	const lang = langDetect(); // Current language 

	for (let question in dataQuestionList){
		let markup = '';
		if(dataQuestionList[question].lines.includes(line)){
			dataQuestionList[question].answers.forEach(element => {
				const title = element.title[lang];
				markup += dataQuestionMarkup.itemQustion(title, element); // Collect all answers html in one variable
			});

			$answerList.eq(cntquestionLoop).html(markup); // Additon of dynamic HTML with variatons of answers

			cntquestionLoop++; // Question counter increment
		} else {
			
		}
	}

	// Закрываем окно опросника при клике вне
	$(document).on('click', function(e){
		if (!$('.quiz').is(e.target) && $('.quiz').has(e.target).length === 0){
			$('.quiz').removeClass('quiz_active');
			$('.quiz').animate({scrollTop: 0}, 1000);
		}
	});
	// Открытие/закрытие опросника при клике
	$('.quiz__title').on('click', function(e){
		$('.quiz').toggleClass('quiz_active'); // Open/Close of quiz
	});

	$($('.quiz__question')[0]).addClass('quiz__question_active'); // First question screen active
	
	let qustionCounter = 0; // Counter for sceen change

	$('.quiz__answer').on('click', async function(){
		$('.quiz__question').removeClass('quiz__question_active');
		$('.quiz__number').removeClass('quiz__number_active');
		$(`.quiz__number[data-number="${qustionCounter}"]`).addClass('quiz__number_done');

		let question = $(this).data().question;
		let answer = $(this).data().answerid;
		result[question] = answer; // Adding answers to result object
		
		qustionCounter++;
		
		if ($($('.quiz__answers')[qustionCounter]).children().length === 0){
			qustionCounter++;
			$(`.quiz__number[data-number="${qustionCounter-1}"]`).addClass('quiz__number_done');
		};
			if (qustionCounter === 4){
				   const resultArray = getSortResult(line, dataProductList, result).map(item => item.id);
				if (resultArray.length > 0){
					$('.js-quiz__result').html(dataQuestionMarkup.preloader());
					let requestLink;
					getPromise(resultArray, '/wp-admin/admin-ajax.php').then(data => {
						requestLink=data; 
						requestLink.forEach(function(item){
							$('.js-quiz__result').append(dataQuestionMarkup.itemResult(item));
						   });
					}); 

				 	$('.js-quiz__result').html('');
				

				} else {
					$('.js-quiz__result').html('<p> Не найдено </p><button class="quiz__reset">Еще раз</button>');
				}
				

			}

		$(`.quiz__question[data-quest="${qustionCounter}"]`).addClass('quiz__question_active');
		$(`.quiz__number[data-number="${qustionCounter}"]`).addClass('quiz__number_active');
	});

	$(document).on('click', '.quiz__reset', function(){
		reset();
	});


	function reset(){
		qustionCounter = 0;
		result = {};
		$('.quiz__question').removeClass('quiz__question_active');
		$('.quiz__number').removeClass('quiz__number_active');
		$('.quiz__number').removeClass('quiz__number_done');
		$($('.quiz__question')[0]).addClass('quiz__question_active'); 
		$($('.quiz__number')[0]).addClass('quiz__number_active');
	}

	
	function getSortResult(line, dataProduct, dataAnswer){
		return dataProduct.filter(function(item) {
			if (result.features){
				return	`#${item.line}` === line &&
					item.permises.includes(dataAnswer.permises) &&
					item.surface.includes(dataAnswer.surface) &&
					item.material.includes(dataAnswer.material) &&
					item.features.includes(dataAnswer.features)
			}
			return  `#${item.line}` === line &&
					item.permises.includes(dataAnswer.permises) &&
					item.surface.includes(dataAnswer.surface) &&
					item.material.includes(dataAnswer.material)
			
					
		});
	}

})(jQuery);

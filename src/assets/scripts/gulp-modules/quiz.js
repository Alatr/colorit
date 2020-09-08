(function ($) {
	/* ALL PRODUCT PROPERTIES */
	// const tempObj = {
		//id: 1,
	// 		permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
	// 		surface: ['all', 'walls', 'ceiling', 'interior'],
	// 		material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster', 'wood', 'metal', 'tile', 'glass', 'plastic'],
	// 		features: ['mold', 'microb', 'covering', 'relief', 'smooth', 'wet', 'repair', 'light', 'white', 'anticorossion', 'color']	
	// }
	/* ALL PRODUCT PROPERTUES END */

	// * GET PROMISE FUNC FOR AJAX REQUEST START
	function getFakePromise(){
		return [{
			img: './assets/images/temp/quiz-img.png',
			link: '#1',
			label: 'Kolorit Biostop'
		},
		{
			img: './assets/images/temp/quiz-img.png',
			link: '#13',
			label: 'Kolorit Biostop'
		},]
	}

	async function getPromise(data, url, parse){
		let promise = new Promise(function(resolve, reject) {
		$.ajax({
			url         : url,
			data        : data,
			type        : 'POST',
			global      : false,
			async       :  true,
			success     : function(res){
			let data = (!parse) ? JSON.parse(res): res
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
	const line = '#home';
	let result = {};

	/* QUESTION DATA LIST */
	const dataQuestionList = {
		firstQuestion: {
			lines: ['#home', '#professional', '#preparation', '#putty', '#adhesive', '#enamel'],
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
			lines: ['#home', '#professional', '#preparation', '#putty', '#adhesive', '#enamel'],
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
			lines: ['#home', '#professional', '#preparation', '#putty', '#adhesive', '#enamel'],
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
			lines: ['#home', '#professional', '#putty', '#enamel'],
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
			line: 'home',
			id: 0,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'microb', 'relief', 'smooth', 'wet', 'color']	
		},
		{
			name : 'Kolorit Legenda',
			line: 'home',
			id: 2,
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['smooth', 'color']	
		},
		{
			name : 'Kolorit Family',
			line: 'home',
			id: 3,
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['covering', 'white', 'color']	
		},
		{
			name: 'Kolorit Idol',
			line: 'home',
			id: 4,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'relief', 'wet', 'color']
		},
		{
			name: 'Kolorit Dynasty',
			line: 'home',
			id: 5,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'relief', 'wet', 'color']
		},
		{
			name: 'Kolorit History',
			line: 'home',
			id: 6,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'relief', 'wet', 'color']
		},
		{
			name: 'Kolorit STANDART 3',
			line: 'professional',
			id: 7,
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['color']
		},
		{
			name: 'Kolorit STANDART 5',
			line: 'professional',
			id: 8,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'wet', 'color']
		},
		{
			name: 'Kolorit STANDART H',
			line: 'professional',
			id: 9,
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['relief', 'white', 'color']
		},
		{
			name: 'Kolorit STANDART M',
			line: 'professional',
			id: 10,
			permises: ['all', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['covering', 'repair', 'color']
		},
		{
			name: 'Kolorit Silanit',
			line: 'preparation',
			id: 11,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'putty', 'minplaster'],
			features: ['microb', 'wet']
		},
		{
			name: 'Kolorit STANDART G',
			line: 'preparation',
			id: 12,
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'putty', 'minplaster'],
			features: []	

		},
		{
			name: 'Kolorit Biostop',
			line: 'preparation',
			id: 13,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['mold', 'wet']	
		},
		{
			name: 'Kolorit Beton K',
			line: 'preparation',
			id: 14,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'brick', 'putty', 'chipboard', 'tile', 'glass', 'plastic'],
			features: []	
		},
		{
			name: 'Kolorit STANDART LF',
			line: 'putty',
			id: 15,
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'putty', 'chipboard', 'minplaster'],
			features: ['white']	
		},
		{
			name: 'Kolorit STANDART LH',
			id: 16,
			line: 'putty',
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'putty', 'chipboard', 'minplaster'],
			features: ['light', 'color']
		},
		{
			name: 'Kolorit Strong Adhesive',
			line: 'adhesive',
			id: 17,
			permises: ['all'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall',  'putty', 'chipboard', 'minplaster'],
			features: []	
		},
		{
			name: 'Kolorit Wood and Metal Enamel Глянец',
			line: 'enamel',
			id: 18,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'interior'],
			material: ['all', 'concrete', 'drywall', 'brick', 'putty', 'chipboard', 'wood', 'metal'],
			features: ['mold', 'relief', 'anticorossion', 'color']	


		},
		{
			name: 'Kolorit Wood and Metal Enamel Полуматовая',
			id: 19,
			line: 'enamel',
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'interior'],
			material: ['all', 'concrete', 'drywall', 'brick', 'putty', 'chipboard', 'wood', 'metal'],
			features: ['mold', 'relief', 'anticorossion', 'color']	
		},
		{
			name: 'Kolorit Radiator Enamel',
			id: 20,
			line: 'enamel',
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'interior'],
			material: ['all', 'metal'],
			features: ['anticorossion', 'color']	



		},
		{
			name: 'Kolorit Panel Lacquer',
			line: 'enamel',
			id: 21,
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
		itemResult: function({img, link, label}){
			return `<li class="quiz__answer quiz__result">
						<a href="${link}" target="_blank">
							<div class="quiz__result-img-wrapper">
								<img src="${img}" />
							</div>
							<span>${label}</span>
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
				   const resultArray = getSortResult(line, dataProductList, result).map(item => item.name);
				   console.log(resultArray);
				if (resultArray.length > 0){
					$('.js-quiz__result').html(dataQuestionMarkup.preloader());

					const requestLink =  getFakePromise(); // For this moment this is fake promise, will be changed to real during Wordpress install
 
				 	$('.js-quiz__result').html('');
				
 
					requestLink.forEach(function(item){
					 $('.js-quiz__result').append(dataQuestionMarkup.itemResult(item));
					});
				} else {
					$('.js-quiz__result').html('Не найдено');
				}
				

			}

		$(`.quiz__question[data-quest="${qustionCounter}"]`).addClass('quiz__question_active');
		$(`.quiz__number[data-number="${qustionCounter}"]`).addClass('quiz__number_active');
	});

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

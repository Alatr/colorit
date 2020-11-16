

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
	console.log(line);
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
						ua: 'Будь-яке',
					},
					questionId: 'permises',
					answerId: 'all',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-any.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Кухня',
						ua: 'Кухня',
					},
					questionId: 'permises',
					answerId: 'kitchen',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-kitchen.jpg',
					skipLine: ['#shpatlevki']
				},
				{	
					title: {
						rus: 'Ванная',
						ua: 'Ванна',
					},
					questionId: 'permises',
					answerId: 'bathroom',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-bath.jpg',
					skipLine: ['#shpatlevki']
				},
				{	
					title: {
						rus: 'Детская ',
						ua: 'Дитяча ',
					},
					questionId: 'permises',
					answerId: 'childroom',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-child.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Спальня',
						ua: 'Спальня',
					},
					questionId: 'permises',
					answerId: 'bedroom',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-bed.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Гостинная',
						ua: 'Вітальня',
					},
					questionId: 'permises',
					answerId: 'livingroom',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-living.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Гардероб/холл',
						ua: 'Гардероб/хол',
					},
					questionId: 'permises',
					answerId: 'hall',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-hall.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Балкон',
						ua: 'Балкон',
					},
					questionId: 'permises',
					answerId: 'balcony',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-balcony.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Офис/магазин',
						ua: 'Офіс/магазин',
					},
					questionId: 'permises',
					answerId: 'office',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-office.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Пищевое производство',
						ua: 'Харчове виробництво',
					},
					questionId: 'permises',
					answerId: 'foodprod',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-food.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Складское помещение',
						ua: 'Складське приміщення',
					},
					questionId: 'permises',
					answerId: 'warehouse',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-sklad.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Мед учереждение',
						ua: 'Мед заклад',
					},
					questionId: 'permises',
					answerId: 'medical',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-med.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'ТРЦ',
						ua: 'ТРЦ',
					},
					questionId: 'permises',
					answerId: 'mall',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-shopping.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Школа/детский сад',
						ua: 'Школа/дитячий садочок'
					},
					questionId: 'permises',
					answerId: 'school',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/permises-school.jpg',
					skipLine: []
				}
			]

		},
		secondQustion: {
			title: {
				rus: 'Какую поверхность планируете покрывать?',
				ua: 'Яку поверхню плануєте покривати?',
			},
			lines: ['#home-linejka', '#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#shpatlevki', '#kleya-dlya-steklooboev', '#laki-i-emali'],
			answers: [
				{
					title: {
						rus: 'Любая',
						ua: 'Будь-яка',
					},
					questionId: 'surface',
					answerId: 'all',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/surface-any.jpg',
					skipLine: []
				},
				{	
					title: {
						rus: 'Стены',
						ua: 'Стіни',
					},
					questionId: 'surface',
					answerId: 'walls',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/surface-wall.jpg',
					skipLine: ['#laki-i-emali']
				},
				{	
					title: {
						rus: 'Потолок',
						ua: 'Стеля',
					},
					questionId: 'surface',
					answerId: 'ceiling',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/surface-ceiling.jpg',
					skipLine: ['#laki-i-emali']
				},
				{	
					title: {
						rus: 'Элементы интерьера ',
						ua: 'Елементи інтер`єру ',
					},
					questionId: 'surface',
					answerId: 'interior',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/surface-interior.jpg',
					skipLine: ['#home-linejka', '#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#shpatlevki']
				},
			]
		},
		thirdQustion: {
			title: {
				rus: 'Какой материал покрываемой поверхности?',
				ua: 'Який матеріал поверхні, що покривається?',
			},
			lines: ['#home-linejka', '#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#shpatlevki', '#kleya-dlya-steklooboev', '#laki-i-emali'],
			answers: [
				{
					title: {
						rus: 'Любой',
						ua: 'Будь-який',
					},
					questionId: 'material',
					answerId: 'all',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img.png',
					skipLine: []
				},
				{	
					title: {
						rus: 'Бетон',
						ua: 'Бетон',
					},
					questionId: 'material',
					answerId: 'concrete',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img2.png',
					skipLine: []
				},
				{	
					title: {
						rus: 'Гипсокартон',
						ua: 'Гіпсокартон',
					},
					questionId: 'material',
					answerId: 'drywall',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img3.png',
					skipLine: []
				},
				{	
					title: {
						rus: 'Кирпич',
						ua: 'Цегла',
					},
					questionId: 'material',
					answerId: 'brick',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img4.png',
					skipLine: ['#shpatlevki']
				},
				{	
					title: {
						rus: 'Обои',
						ua: 'Шпалери',
					},
					questionId: 'material',
					answerId: 'wallpapers',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img5.png',
					skipLine: ['#laki-i-emali', '#shpatlevki']
				},
				{	
					title: {
						rus: 'Шпатлевка',
						ua: 'Шпаклівка',
					},
					questionId: 'material',
					answerId: 'putty',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img6.png',
					skipLine: []
				},
				{	
					title: {
						rus: 'ДСП/ДВП',
						ua: 'ДСП/ДВП',
					},
					questionId: 'material',
					answerId: 'chipboard',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img7.png',
					skipLine: []
				},
				{	
					title: {
						rus: 'Минеральная штукатурка',
						ua: 'Мінеральна штукатурка',
					},
					questionId: 'material',
					answerId: 'minplaster',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img8.png',
					skipLine: ['#laki-i-emali']
				},
				{	
					title: {
						rus: 'Дерево',
						ua: 'Дерево',
					},
					questionId: 'material',
					answerId: 'wood',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img9.png',
					skipLine: ['#home-linejka', '#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#shpatlevki']
				},
				{	
					title: {
						rus: 'Металл',
						ua: 'Метал',
					},
					questionId: 'material',
					answerId: 'metal',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img10.png',
					skipLine: ['#home-linejka', '#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#shpatlevki']
				},
				{	
					title: {
						rus: 'Плитка',
						ua: 'Плитка',
					},
					questionId: 'material',
					answerId: 'tile',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img11.png',
					skipLine: ['#home-linejka', '#professional-linejka', '#shpatlevki', '#laki-i-emali']
				},
				{	
					title: {
						rus: 'Стекло',
						ua: 'Скло',
					},
					questionId: 'material',
					answerId: 'glass',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img12.png',
					skipLine: ['#home-linejka', '#professional-linejka', '#shpatlevki', '#laki-i-emali']
				},
				{	
					title: {
						rus: 'Пластик',
						ua: 'Пластик',
					},
					questionId: 'material',
					answerId: 'plastic',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/quiz3-img13.png',
					skipLine: ['#home-linejka', '#professional-linejka', '#shpatlevki', '#laki-i-emali']
				},
			]
		},
		fourthQustion: {
			title: {
				rus: 'Особенности',
				ua: 'Особливості',
			},
			lines: ['#home-linejka', '#professional-linejka', '#shpatlevki', '#laki-i-emali'],
			answers: [
				{
					title: {
						rus: 'Любые',
						ua: 'Будь-які',
					},
					questionId: 'features',
					answerId: 'all',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/features-any.svg',
					skipLine: []
				},
				{
					title: {
						rus: 'Защита от плесени и грибка',
						ua: 'Захист від плісняви та грибку',
					},
					questionId: 'features',
					answerId: 'mold',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/mold and mildew.svg',
					skipLine: ['#shpatlevki']
				},
				{	
					title: {
						rus: 'Антимикробная',
						ua: 'Антимікробна',
					},
					questionId: 'features',
					answerId: 'microb',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/Antibacterial.svg',
					skipLine: ['#professional-linejka', '#shpatlevki', '#laki-i-emali']
				},
				{	
					title: {
						rus: 'Повышенная кроющая способность',
						ua: 'Підвищена покриваюча здатність',
					},
					questionId: 'features',
					answerId: 'covering ',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/Econom_consumption.svg',
					skipLine: ['#sredstva-podgotovki-poverhnosti', '#shpatlevki', '#laki-i-emali']
				},
				{	
					title: {
						rus: 'Подчеркивающая рельеф',
						ua: 'Підкреслююча рельєф',
					},
					questionId: 'features',
					answerId: 'relief',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/Accentuating_relief.svg',
					skipLine: ['#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#shpatlevki']
				},
				{	
					title: {
						rus: 'Идеально гладкая',
						ua: 'Ідеально гладка',
					},
					questionId: 'features',
					answerId: 'smooth',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/Perfectly_smooth.svg',
					skipLine: ['#sredstva-podgotovki-poverhnosti', '#shpatlevki', '#laki-i-emali']
				},
				{	
					title: {
						rus: 'Для влажных помещений',
						ua: 'Для вологих приміщень',
					},
					questionId: 'features',
					answerId: 'wet',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/Wet_room.svg',
					skipLine: ['#shpatlevki', '#laki-i-emali']
				},
				{	
					title: {
						rus: 'Ремонтная',
						ua: 'Ремонтна',
					},
					questionId: 'features',
					answerId: 'repair',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/Repair.svg',
					skipLine: ['#sredstva-podgotovki-poverhnosti', '#shpatlevki', '#laki-i-emali']
				},
				{	
					title: {
						rus: 'Ультралегкая',
						ua: 'Ультралегка',
					},
					questionId: 'features',
					answerId: 'light',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/Light.svg',
					skipLine: ['#home-linejka', '#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#laki-i-emali']
				},
				{	
					title: {
						rus: 'Идеально белая',
						ua: 'Ідеально біла',
					},
					questionId: 'features',
					answerId: 'white',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/Perfect_white.svg',
					skipLine: ['#sredstva-podgotovki-poverhnosti', '#laki-i-emali']

				},
				{	
					title: {
						rus: 'Антикоррозионная',
						ua: 'Антикорозійна',
					},
					questionId: 'features',
					answerId: 'anticorossion',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/features-anticorossion.svg',
					skipLine: ['#home-linejka', '#professional-linejka', '#sredstva-podgotovki-poverhnosti', '#shpatlevki']

				},
				{	
					title: {
						rus: 'Колеруемая',
						ua: 'Колеруюма',
					},
					questionId: 'features',
					answerId: 'color',
					img: '../../wp-content/themes/kolorit/assets/images/quiz/Tinted.svg',
					skipLine: ['#sredstva-podgotovki-poverhnosti']
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
			features: ['all','mold', 'microb', 'relief', 'smooth', 'wet', 'color']	
		},
		{
			name : 'Kolorit Legenda',
			line: 'home-linejka',
			id: 143,
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['all','smooth', 'color']	
		},
		{
			name : 'Kolorit Family',
			line: 'home-linejka',
			id: 145,
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['all','covering', 'white', 'color']	
		},
		{
			name: 'Kolorit Idol',
			line: 'home-linejka',
			id: 147,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['all','mold', 'relief', 'wet', 'color']
		},
		{
			name: 'Kolorit Dynasty',
			line: 'home-linejka',
			id: 149,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['all','mold', 'relief', 'wet', 'color']
		},
		{
			name: 'Kolorit History',
			line: 'home-linejka',
			id: 151,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['all','mold', 'relief', 'wet', 'color']
		},
		{
			name: 'Kolorit STANDART 3',
			line: 'professional-linejka',
			id: 153,
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['all','color', 'smooth']
		},
		{
			name: 'Kolorit STANDART 5',
			line: 'professional-linejka',
			id: 155,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['all','mold', 'wet', 'color', 'smooth']
		},
		{
			name: 'Kolorit STANDART H',
			line: 'professional-linejka',
			id: 157,
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['all','relief', 'white', 'color', 'smooth']
		},
		{
			name: 'Kolorit STANDART M',
			line: 'professional-linejka',
			id: 159,
			permises: ['all', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'wallpapers', 'putty', 'chipboard', 'minplaster'],
			features: ['all','covering', 'repair', 'color', 'smooth', 'wet']
		},
		{
			name: 'Kolorit Silanit',
			line: 'sredstva-podgotovki-poverhnosti',
			id: 161,
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'brick', 'putty', 'minplaster'],
			features: ['all','microb', 'wet']
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
			features: ['all','mold', 'wet']	
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
			features: ['all','white']	
		},
		{
			name: 'Kolorit STANDART LH',
			id: 171,
			line: 'shpatlevki',
			permises: ['all', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'walls', 'ceiling'],
			material: ['all', 'concrete', 'drywall', 'putty', 'chipboard', 'minplaster'],
			features: ['all','light', 'color']
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
			features: ['all','mold', 'relief', 'anticorossion', 'color']	


		},
		{
			name: 'Kolorit Wood and Metal Enamel Полуматовая',
			id: 177,
			line: 'laki-i-emali',
			permises: ['all', 'kitchen', 'bathroom', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'interior'],
			material: ['all', 'concrete', 'drywall', 'brick', 'putty', 'chipboard', 'wood', 'metal'],
			features: ['all','mold', 'relief', 'anticorossion', 'color']	
		},
		{
			name: 'Kolorit Radiator Enamel',
			id: 179,
			line: 'laki-i-emali',
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'interior'],
			material: ['all', 'metal'],
			features: ['all','anticorossion', 'color']	



		},
		{
			name: 'Kolorit Panel Lacquer',
			line: 'laki-i-emali',
			id: 181,
			permises: ['all', 'kitchen', 'childroom', 'bedroom', 'livingroom', 'hall', 'balcony', 'office', 'foodprod', 'warehouse', 'medical', 'mall', 'school'],
			surface: ['all', 'interior'],
			material: ['all', 'concrete', 'brick', 'wood'],
			features: ['all','color']	
		},

	]

	function langDetect(){
		if (window.location.pathname.match(/\/ru\//)) return 'rus';
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
			return `<img src="../../wp-content/themes/kolorit/assets/images/preloader.svg" alt="preloader">`
		} ,
	}

	let cntquestionLoop = 0;  // Question counter 
	const lang = langDetect(); // Current language 

	for (let question in dataQuestionList){
		let markup = '';
		if(dataQuestionList[question].lines.includes(line)){
			dataQuestionList[question].answers.forEach(element => {
				if(!element.skipLine.includes(line)){
					const title = element.title[lang];
					markup += dataQuestionMarkup.itemQustion(title, element); // Collect all answers html in one variable
				}
				
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
		console.log(result)
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
					const lang = langDetect();
					const dontFind = lang === 'ua' ? 'Не знайдено' : 'Не найдено';
					const oncoMore = lang === 'ua' ? 'Ще раз' : 'Еще раз';
					
					$('.js-quiz__result').html(`<p> ${dontFind} </p><button class="quiz__reset">${oncoMore}</button>`);
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

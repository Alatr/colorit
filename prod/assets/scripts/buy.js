

(function ($) {
	

	
	/**********************************/
	/*
	* tab start
	*/
	const tab = new Tab({
		$btn: $('.js-trigger1'),
		$content: $('.js-buy__tabs-content1'),
		btnActiveClass: 'buy-btn-content-item--active',
		contentActiveClass: 'buy-tab-content-item--active',
		active: 0
	});

	const tab2 = new Tab({
		$btn: $('.js-trigger2'),
		$content: $('.js-buy__tabs-content2'),
		btnActiveClass: 'buy-btn-content-item--active',
		contentActiveClass: 'buy-tab-content-item--active',
		active: 0
	});
	const tab3 = new Tab({
		$btn: $('.js-message-triger'),
		$content: $('.js-buy__message-left'),
		btnActiveClass: 'buy__message-tab--active',
		contentActiveClass: 'buy-tab-content-item--active',
		active: 0
	});
	
	/*
	* tab end
	*/
	/**********************************/
	
	
	
	
	
	
	/**********************************/
	/*
	* filter shops start
	*/


const JSONShops = JSON.parse(JSON.stringify([{
	"name": "Farba Service",
	"region": "kievskaya",
	"city": {
		"name": "\u041a\u0438\u0435\u0432",
		"code": "kyiv"
	},
	"address": "\u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442 \u0421\u0442\u0435\u043f\u0430\u043d\u0430 \u0411\u0430\u043d\u0434\u0435\u0440\u044b, 23",
	"tel": "380970787777",
	"site": "https:\/\/farbaservice.business.site\/",
	"coords": "50.489917, 30.496976",
	"type": "2"
}, {
	"name": "Color Studio Tikkurila",
	"region": "kievskaya",
	"city": {
		"name": "\u041a\u0438\u0435\u0432",
		"code": "kyiv"
	},
	"address": "\u0421\u0430\u043f\u0435\u0440\u043d\u043e-\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u0430\u044f, 10",
	"tel": "380950909095",
	"site": "https:\/\/farba-service.com\/",
	"coords": "50.413860, 30.531110",
	"type": "1"
},
 {
	"name": "Color Studio Tikkurila",
	"region": "kievskaya3",
	"city": {
		"name": "Буча",
		"code": "bucha"
	},
	"address": "\u0421\u0430\u043f\u0435\u0440\u043d\u043e-\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u0430\u044f, 10",
	"tel": "380950909095",
	"site": "https:\/\/farba-service.com\/",
	"coords": "50.453860, 30.531110",
	"type": "1"
}, 
 {
	"name": "Color Studio Tikkurila",
	"region": "kievskaya-666-3",
	"city": {
		"name": "Буча666",
		"code": "bucha666"
	},
	"address": "\u0421\u0430\u043f\u0435\u0440\u043d\u043e-\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u0430\u044f, 10",
	"tel": "380950909095",
	"site": "https:\/\/farba-service.com\/",
	"coords": "50.453860, 30.531110",
	"type": "2"
}, 
{
	"name": "Color Studio Tikkurila",
	"region": "kievskaya3",
	"city": {
		"name": "Буча",
		"code": "bucha"
	},
	"address": "\u0421\u0430\u043f\u0435\u0440\u043d\u043e-\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u0430\u044f, 10",
	"tel": "380950909095",
	"site": "https:\/\/farba-service.com\/",
	"coords": "50.393860, 28.531110",
	"type": "1"
}, {
	"name": "Color Studio Tikkurila",
	"region": "kievskaya3",
	"city": {
		"name": "\u041a\u0438\u0435\u0432",
		"code": "kyiv"
	},
	"address": "\u0421\u0430\u043f\u0435\u0440\u043d\u043e-\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u0430\u044f, 10",
	"tel": "380950909095",
	"site": "https:\/\/farba-service.com\/",
	"coords": "50.403860, 30.631110",
	"type": "1"
}, {
	"name": "Color Studio Tikkurila",
	"region": "kievskaya2",
	"city": {
		"name": "\u041a\u0438\u0435\u0432",
		"code": "kyiv"
	},
	"address": "\u0421\u0430\u043f\u0435\u0440\u043d\u043e-\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u0430\u044f, 10",
	"tel": "380950909095",
	"site": "https:\/\/farba-service.com\/",
	"coords": "50.403860, 30.531110",
	"type": "1"
}, {
	"name": "Color Studio Tikkurila",
	"region": "kievskaya2",
	"city": {
		"name": "\u041a\u0438\u0435\u0432",
		"code": "kyiv"
	},
	"address": "\u0421\u0430\u043f\u0435\u0440\u043d\u043e-\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u0430\u044f, 10",
	"tel": "380950909095",
	"site": "https:\/\/farba-s:\/\/farba-s:\/\/farba-s:\/\/farba-service.com\/",
	"coords": "50.403860, 30.531110",
	"type": "1"
}, {
	"name": "Color Studio Tikkurila",
	"region": "kievskaya1",
	"city": {
		"name": "\u041a\u0438\u0435\u0432",
		"code": "kyiv"
	},
	"address": "\u0421\u0430\u043f\u0435\u0440\u043d\u043e-\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u0430\u044f, 10",
	"tel": "380950909095",
	"site": "https:\/\/farba-service.com\/",
	"coords": "50.403860, 30.531110",
	"type": "1"
}, {
	"name": "Color Studio Tikkurila",
	"region": "kievskaya",
	"city": {
		"name": "\u041a\u0438\u0435\u0432",
		"code": "kyiv"
	},
	"address": "\u0421\u0430\u043f\u0435\u0440\u043d\u043e-\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u0430\u044f, 10",
	"tel": "380950909095",
	"site": "https:\/\/farba-service.com\/",
	"coords": "50.403860, 30.531110",
	"type": "1"
}, {
	"name": "\u042d\u043f\u0438\u0446\u0435\u043d\u0442\u0440",
	"region": "kievskaya",
	"city": {
		"name": "sraka",
		"code": "sraka"
	},
	"address": "\u041a\u043e\u043b\u044c\u0446\u0435\u0432\u0430\u044f \u0414\u043e\u0440\u043e\u0433\u0430, 1\u0411",
	"tel": "380442062603",
	"site": "https:\/\/epicentrk.ua\/shop\/kraski\/fs\/brand-kolorit\/",
	"coords": "50.376920, 30.445023",
	"type": "3"
}]));

console.log(JSONShops);
	/*  */
	/*  */
	let _shops = []
	async function getAllShops(){
		//  const shops = await getPromise(`action=getBuy`, `/wp-admin/admin-ajax.php`, 0);
		_shops = JSONShops;
		const _sortedShops = _shops.reduce((acc, el) => {
			if (acc[el.type] !== undefined) {
				acc[el.type].push(el)
			} else {
				acc[el.type] = []
				acc[el.type].push(el)
			}
			return acc
		}, {})
		_shops = _sortedShops;
	}
	getAllShops();
	/*  */
	/*  */
			


	class FilterShops{
		constructor (settings){
			
			this._regions = {
					'all': {
						label: {
							ru: 'Все',
							ua: 'Вcі',
						},
						value: 'all',
					}
					,
					'vinnickaya': {
						label: {
							ru: 'Винницкая область',
							ua: 'Вінницька область',
						},
						value: 'vinnickaya',
					},
					'kievskaya3': {
						label: {
							ru: '"kievskaya3" область',
							ua: '"kievskaya3" область',
						},
						value: 'kievskaya3',
					},
					'kievskaya-666-3': {
						label: {
							ru: '"kievskaya-666-3" область',
							ua: '"kievskaya-666-3" область',
						},
						value: 'kievskaya-666-3',
					},
					'kievskaya2': {
						label: {
							ru: '"kievskaya2" область',
							ua: '"kievskaya2" область',
						},
						value: 'kievskaya2',
					},
					'kievskaya1': {
						label: {
							ru: '"kievskaya1" область',
							ua: '"kievskaya1" область',
						},
						value: 'kievskaya1',
					},
					'vinnickaya': {
						label: {
							ru: 'Винницкая область',
							ua: 'Вінницька область',
						},
						value: 'vinnickaya',
					},

					'volynskaya': {
						label: {
							ru: 'Волынская область',
							ua: 'Волинська область',
						},
						value: 'volynskaya',
					},

					'dnepropetrovskaya': {
						label: {
							ru: 'Днепропетровская область',
							ua: 'Дніпропетровська область',
						},
						value: 'dnepropetrovskaya',
					},

					'doneckaya': {
						label: {
							ru: 'Донецкая область',
							ua: 'Донецька область',
						},
						value: 'doneckaya',
					},

					'zhitomirskaya': {
						label: {
							ru: 'Житомирская область',
							ua: 'Житомирська область',
						},
						value: 'zhitomirskaya',
					},

					'zakarpatskaya': {
						label: {
							ru: 'Закарпатская область',
							ua: 'Закарпатська область',
						},
						value: 'zakarpatskaya',
					},

					'zaporozhskaya': {
						label: {
							ru: 'Запорожская область',
							ua: 'Запорізька область',
						},
						value: 'zaporozhskaya',
					},

					'ivanoFrankovskaya': {
						label: {
							ru: 'Ивано-Франковская область',
							ua: 'Івано-Франківська область',
						},
						value: 'ivanoFrankovskaya',
					},

					'kievskaya': {
						label: {
							ru: 'Киевская область',
							ua: 'Київська область',
						},
						value: 'kievskaya',
					},

					'kirovogradskaya': {
						label: {
							ru: 'Кировоградская область',
							ua: 'Кіровоградська область',
						},
						value: 'kirovogradskaya',
					},

					'luganskaya': {
						label: {
							ru: 'Луганская область',
							ua: 'Луганська область',
						},
						value: 'luganskaya',
					},

					'lvovskaya': {
						label: {
							ru: 'Львовская область',
							ua: 'Львівська область',
						},
						value: 'lvovskaya',
					},

					'nikolaevskaya': {
						label: {
							ru: 'Николаевская область',
							ua: 'Миколаївська область',
						},
						value: 'nikolaevskaya',
					},

					'odesskaya': {
						label: {
							ru: 'Одесская область',
							ua: 'Одеська область',
						},
						value: 'odesskaya',
					},

					'poltavskaya': {
						label: {
							ru: 'Полтавская область',
							ua: 'Полтавська область',
						},
						value: 'poltavskaya',
					},

					'rovnenskaya': {
						label: {
							ru: 'Ровненская область',
							ua: 'Рівненська область',
						},
						value: 'rovnenskaya',
					},

					'sumskaya': {
						label: {
							ru: 'Сумская область',
							ua: 'Сумська область',
						},
						value: 'sumskaya',
					},

					'ternopolskaya': {
						label: {
							ru: 'Тернопольская область',
							ua: 'Тернопільська область',
						},
						value: 'ternopolskaya',
					},

					'harkovskaya': {
						label: {
							ru: 'Харьковская область',
							ua: 'Харківська область',
						},
						value: 'harkovskaya',
					},

					'hersonskaya': {
						label: {
							ru: 'Херсонская область',
							ua: 'Херсонська область',
						},
						value: 'hersonskaya',
					},

					'hmelnickaya': {
						label: {
							ru: 'Хмельницкая область',
							ua: 'Хмельницька область',
						},
						value: 'hmelnickaya',
					},

					'cherkasskaya': {
						label: {
							ru: 'Черкасская область',
							ua: 'Черкаська область',
						},
						value: 'cherkasskaya',
					},

					'chernigovskaya': {
						label: {
							ru: 'Черниговская область',
							ua: 'Чернігівська область',
						},
						value: 'chernigovskaya',
					},

					'chernovickaya': {
						label: {
							ru: 'Черновицкая область',
							ua: 'Чернівецька область',
						},
						value: 'chernovickaya',
					}
			}
			this.styleGoogleMap = [{
					"featureType": "all",
					"stylers": [{
							"saturation": 0
						},
						{
							"hue": "#e7ecf0"
						}
					]
				},
				{
					"featureType": "road",
					"stylers": [{
						"saturation": -70
					}]
				},
				{
					"featureType": "transit",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "poi",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "water",
					"stylers": [{
							"visibility": "simplified"
						},
						{
							"saturation": -60
						}
					]
				}
			]

			this.googleMap = null;
			this.googleMapMarkers = [];

			/*  */
			this._shops = settings.data;
			this._sortedShopByRegion = []
			this._sortedShopByRegionAndCity = []
			this._lang = this.langDetect();
			this._elements = settings.elements;
			this._filterState = {
				region: 'all',
				city: 'all',
			};
			this.init();
		 }

		 	startFilterShops(){
				this._elements.$resList.innerHTML = '';
				this.deleteGoogleMapMarker();
				/*  */
				if (this._filterState.region === 'all') {
					this._shops.forEach((el) => {
						this.renderShopItem(this._elements.$resList, el);
						const [lat, lng] = el.coords.replace(/\s/g, '').split(',');
						/*  */
						this.addGoogleMapMarker(lat, lng, el.address);
					});
					return
				}
				/*  */
				/*  */
				if (this._filterState.city === 'all') {
					this._sortedShopByRegion[this._filterState.region].forEach((el) => {
						this.renderShopItem(this._elements.$resList, el);
						const [lat, lng] = el.coords.replace(/\s/g, '').split(',');
						/*  */
						this.addGoogleMapMarker(lat, lng, el.address);
					})
					return
				}
				/*  */
				/*  */

				this._sortedShopByRegionAndCity[this._filterState.region][this._filterState.city]
					.forEach((el) => {
						this.renderShopItem(this._elements.$resList, el);
						const [lat, lng] = el.coords.replace(/\s/g, '').split(',');
						/*  */
						this.addGoogleMapMarker(lat, lng, el.address);
					})



				/*  */

			}
			
			sortedShopByRegion(){
				this._sortedShopByRegion = this._shops.reduce((acc, el)=>{
				 if (acc[el.region] !== undefined){
					 acc[el.region].push(el)
				 } else {
					 acc[el.region] = []
					 acc[el.region].push(el)
				 }
				 return acc
				}, {})
				
				let _sortedShopByRegionAndCityCopy = {...this._sortedShopByRegion};
				
				for (const key in _sortedShopByRegionAndCityCopy) {
					if (_sortedShopByRegionAndCityCopy.hasOwnProperty(key)) {
						const regionCities = _sortedShopByRegionAndCityCopy[key];
						_sortedShopByRegionAndCityCopy[key] = regionCities.reduce((acc, el) => {
							if (acc[el.city.code] !== undefined) {
								acc[el.city.code].push(el)
							} else {
								acc[el.city.code] = []
								acc[el.city.code].push(el)
							}
							return acc
						}, {})
					}
				}
				this._sortedShopByRegionAndCity = _sortedShopByRegionAndCityCopy;
			}

		// changeRegion = (event)=> {
		// 	this._filterState.region = event.target.value
		// 	/*  */
		// 		this._elements.$selectCity.innerHTML = '';
		// 	/*  */
		// 	this.renderOptions(this._elements.$selectCity, {label: this._regions.all.label[this._lang], value: 'all'}, false) // false it's not parse label language
		// 	for (const key in this._sortedShopByRegionAndCity[event.target.value]) {
		// 		if (this._sortedShopByRegionAndCity[event.target.value].hasOwnProperty(key)) {
		// 			const element = this._sortedShopByRegionAndCity[event.target.value][key];
		// 			let label = element[0].city.name;
		// 			let value = key;
		// 			this.renderOptions(this._elements.$selectCity, {label, value}, false) // false it's not parse label language
					
		// 		}
		// 	}
		// 	/* this._sortedShopByRegionAndCityCopy[event.target.value].forEach((el) => {
		// 	}); */
		// 	this.startFilterShops();
		// }

		changeRegion(event) {
			this._filterState.region = event.target.value
			/*  */
				this._elements.$selectCity.innerHTML = '';
			/*  */
			this.renderOptions(this._elements.$selectCity, {label: this._regions.all.label[this._lang], value: 'all'}, false) // false it's not parse label language
			for (const key in this._sortedShopByRegionAndCity[event.target.value]) {
				if (this._sortedShopByRegionAndCity[event.target.value].hasOwnProperty(key)) {
					const element = this._sortedShopByRegionAndCity[event.target.value][key];
					let label = element[0].city.name;
					let value = key;
					this.renderOptions(this._elements.$selectCity, {label, value}, false) // false it's not parse label language
					
				}
			}
			/* this._sortedShopByRegionAndCityCopy[event.target.value].forEach((el) => {
			}); */
			this.startFilterShops();
		}
		
		// changeCity = (event)=> {
		// 	this._filterState.city = event.target.value
		// 	this.startFilterShops();
		// }

		changeCity(event){
			this._filterState.city = event.target.value
			this.startFilterShops();
		}
		 
		setStyle(){
			
		}

		initGoogleMap(){
			this.googleMap = new google.maps.Map(this._elements.$googleMap, {
				center: {
					lat: 50.422954,
					lng: 30.522
				},
				zoom: 10,
				disableDefaultUI: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: this.styleGoogleMap
			});
		}
		deleteGoogleMapMarker(){
			this.googleMapMarkers.forEach((el)=>{
				el.setMap(null);
			});
			this.googleMapMarkers = [];
		}
		addGoogleMapMarker(lat, lng, label){
			// const category = marker[4];
			// const content = "<p class='content'>" + marker[6] + "</p>";
			const title = label;
			const pos = new google.maps.LatLng(lat, lng);
			const markerIcon = {
				url: '../wp-content/themes/kolorit/assets/images/buy/marker.svg'
				// url: './assets/images/buy/marker.svg'
			};
			const marker = new google.maps.Marker({
				title: title,
				position: pos,
				map: this.googleMap,
				icon: markerIcon,
				// category: category,
				// animation: google.maps.Animation.DROP,
			});
			this.googleMapMarkers.push(marker)
			marker.setMap(this.googleMap);
			/*  */
			/* 	google.maps.event.addListener(marker, 'click', (function (marker, title) {
					return function () {
						infowindow.setContent(title); // установка нужного контента в всплывайку
						infowindow.open(this.googleMap, marker1); // открытие нужного окна
						this.googleMap.panTo(this.getPosition()); // установка центра карты в координатах кликнутой иконки
					}
				})(marker, title)); */
		}
		// showItemInMap = (e)=>{
		// 	const target = e.target.closest(this._elements.$resItem);
		// 	const items = [...this._elements.$resList.querySelectorAll(this._elements.$resItem)];
		// 	const activeClass = 'buy__tabs-filtered__item--active';
		// 	items.forEach(el => el.classList.remove(activeClass));
		// 	/*  */
		// 	const label = target.getAttribute('data-label');
		// 	const lat = target.getAttribute('data-lat');
		// 	const lng = target.getAttribute('data-lng');
		// 	if (target !== null) {
		// 		target.classList.add(activeClass)
		// 		this.deleteGoogleMapMarker();
		// 		this.addGoogleMapMarker(lat, lng, label)
		// 	}
		// }
		showItemInMap(e){
			const target = e.target.closest(this._elements.$resItem);
			const items = [...this._elements.$resList.querySelectorAll(this._elements.$resItem)];
			const activeClass = 'buy__tabs-filtered__item--active';
			items.forEach(el => el.classList.remove(activeClass));
			/*  */
			const label = target.getAttribute('data-label');
			const lat = target.getAttribute('data-lat');
			const lng = target.getAttribute('data-lng');
			if (target !== null) {
				target.classList.add(activeClass)
				this.deleteGoogleMapMarker();
				this.addGoogleMapMarker(lat, lng, label)
			}
		}
		
		setEvent(){
			const self = this;
			this._elements.$selectCity.addEventListener('change', this.changeCity.bind(self));
			this._elements.$selectRegion.addEventListener('change', this.changeRegion.bind(self));
			this._elements.$resList.addEventListener('click', this.showItemInMap.bind(self));
		}
		
		/**********************************/
		/*
		* render start
		*/
		renderRegions(){
			this.renderOptions(this._elements.$selectRegion, this._regions.all)
			for (const key in this._sortedShopByRegion) {
				if (this._sortedShopByRegion.hasOwnProperty(key)) {
					const element = this._regions[key];
					this.renderOptions(this._elements.$selectRegion, element)
				}
			}

		//  this._regions.forEach((el)=>{
		// 	 this.renderOptions(this._elements.$selectRegion, el)
		//  })
		}
		renderShopList(){
			this._elements.$resList.innerHTML = '';
			this.deleteGoogleMapMarker();
			
			this._shops.forEach((el) => {
				this.renderShopItem(this._elements.$resList, el);
				const [lat, lng] = el.coords.replace(/\s/g, '').split(',')
				/*  */
				this.addGoogleMapMarker(lat, lng, el.address)

			})
		}


		renderShopItem(parentList, {coords, site, address, name, tel }) {
			const [lat, lng] = coords.replace(/\s/g, '').split(',');
			
			const markupShopItem = `
				<li data-label='${name}' data-lat='${lat}' data-lng='${lng}' class=" buy__tabs-filtered__item js-buy__tabs-filtered__item" >
					<div class="buy__tabs-filtered__item-block">
						<a class="buy__tabs-filtered-phone buy__tabs-filtered-link" href="tel:${tel}">${tel}</a>
						<a class="buy__tabs-filtered-link buy__tabs-filtered-site shop-link" href="${site}" target="_blank"><span>${site}</span></a>
					</div>
					<div class="buy__tabs-filtered__item-block">
						<div class="buy__tabs-filtered-name">${name}</div>
						<div class="buy__tabs-filtered-address">${address}</div>
					</div>
				</li>
			`	
			parentList.insertAdjacentHTML('beforeend', markupShopItem);
		}
		renderOptions(parentList, {label, value}, parseLang = true){
			const markup = `<option class="calculator-item__select-item" value="${value}">${(parseLang) ? label[this._lang] : label}</option>`
				parentList.insertAdjacentHTML('beforeend', markup);
	
		}
		
		/*
		* render end
		*/
		/**********************************/

		 init(){
			this.initGoogleMap();
			this.setEvent();
			this.sortedShopByRegion();

			this.renderRegions();

			this.renderShopList();



		 }
	}
	
	FilterShops.prototype.langDetect = function () {

	 	if (window.location.pathname.match(/\/ru\//)) return 'ru';
	 	if (window.location.pathname.match(/\/en\//)) return 'en';
	 	return 'ua'
	};
	
	
		const filterTikkurila = new FilterShops({
			data: _shops[1],
			elements: {
				$selectRegion: document.querySelector('.js-tikkurila-region'),
				$selectCity: document.querySelector('.js-tikkurila-city'),
				$resList: document.querySelector('.js-tikkurila-res-list'),
				$resItem: '.js-buy__tabs-filtered__item',
				$googleMap: document.querySelector('.js-tikkurila-google-map-init'),
			}
		});

		const filterFarba = new FilterShops({
			data: _shops[2],
			elements: {
				$selectRegion: document.querySelector('.js-farba-region'),
				$selectCity: document.querySelector('.js-farba-city'),
				$resList: document.querySelector('.js-farba-res-list'),
				$resItem: '.js-buy__tabs-filtered__item',

				$googleMap: document.querySelector('.js-farba-google-map-init'),
			}
		});

		const filterPartner = new FilterShops({
			data: _shops[3],
			elements: {
				$selectRegion: document.querySelector('.js-partner_shop-region'),
				$selectCity: document.querySelector('.js-partner_shop-city'),
				$resList: document.querySelector('.js-partner_shop-res-list'),
				$resItem: '.js-buy__tabs-filtered__item',

				$googleMap: document.querySelector('.js-partner_shop-google-map-init'),
			}
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	* filter shops end
	*/
	/**********************************/
	
	
	
	
	
	/**********************************/
	/*
	* map contact start
	*/
	const styleGoogleMap = [{
			"featureType": "all",
			"stylers": [{
					"saturation": 0
				},
				{
					"hue": "#e7ecf0"
				}
			]
		},
		{
			"featureType": "road",
			"stylers": [{
				"saturation": -70
			}]
		},
		{
			"featureType": "transit",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "poi",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "water",
			"stylers": [{
					"visibility": "simplified"
				},
				{
					"saturation": -60
				}
			]
		}
	]
	
	
	
	
	
	
	
	
	
	
	function initGoogleMap(obj) {
		const googleMarkers = []
		const googleMarkersData = [
			{
				lat: 50.425556, 
				lng: 30.336031,
				label: 'офис',
			},
			{
				lat: 50.498278, 
				lng: 30.471512,
				label: 'производство',
			},
		]
		const googleMap = new google.maps.Map(obj.$container, {
			center: {
				lat: obj.lat,
				lng: obj.lng
			},
			zoom: 10,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: styleGoogleMap
		});

		googleMarkersData.forEach(({lat, lng, label})=>{
			addGoogleMapMarker(lat, lng, label);
		});
		
		function addGoogleMapMarker(lat, lng, label) {
			// const category = marker[4];
			// const content = "<p class='content'>" + marker[6] + "</p>";
			const title = label;
			const pos = new google.maps.LatLng(lat, lng);
			const markerIcon = {
				url: '../wp-content/themes/kolorit/assets/images/buy/marker.svg'
				// url: './assets/images/buy/marker.svg'
			};
			const marker = new google.maps.Marker({
				title: title,
				position: pos,
				map: googleMap,
				icon: markerIcon,
				// category: category,
				// animation: google.maps.Animation.DROP,
			});
			googleMarkers.push(marker)
			marker.setMap(googleMap);
		}
	}


	const mapContact1 = initGoogleMap({
		$container: document.querySelector('.js-buy-message-map'),
		lat: 50.422954,
		lng: 30.522
	});
	/*
	* map contact end
	*/
	/**********************************/
	
	
	
	
	
	
	
	
	
	
})(jQuery);
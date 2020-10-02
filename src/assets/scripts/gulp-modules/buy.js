/* document.addEventListener('DOMContentLoaded', () => {
(function ($) {
    let currentTabShop = 'tikkurila'
    let currentLocation = 'office'
    let currentTabShop2 = 'partners'
    const dateForLocationInfo = {
        office: {
            map: 'map2',
            coords: {lat: 51.4254018, lng: 31.3337994},
            markers: [
                {
                    position: { lat: 51.4254018, lng: 31.3337994 },
                    icon: './assets/images/buy/marker.svg'
                }
            ]
        },
        manufacture: {
            map: 'map2',
            coords: {lat: 50.498138, lng: 30.4693233},
            markers: [
                {
                    position: { lat: 50.498138, lng: 30.4693233 },
                    icon: './assets/images/buy/marker.svg'
                }
            ]
        }
    }
    
    const dateForLocationAndShop = {
        tikkurila: {
            map: 'map',
            coords: { lat: 50.4114889, lng: 30.6051148 },
            markers: [
                {
                    position: { lat: 50.4114889, lng: 30.6051148 },
                    icon: './assets/images/buy/marker.svg'
                }
            ]
        },
        service: {
            map: 'map',
            coords: {lat: 50.4385614, lng: 30.5929573},
            markers: [
                {
                    position: { lat: 50.4385614, lng: 30.5929573 },
                    icon: './assets/images/buy/marker.svg'
                }
            ]
        }
    }
    const dateForPartners = {
        partners: {
            map: 'map-partners',
            coords: { lat: 80.4114889, lng: 30.6051148 },
            markers: [
                {
                    position: {  lat: 80.4114889, lng: 30.6051148 },
                    icon: './assets/images/buy/marker.svg'
                },
                {
                    position: {  lat: 80.4117889, lng: 30.6051148 },
                    icon: './assets/images/buy/marker.svg'
                }
            ]
        },
        online: {
        }
    }

    const addMarkersToMap = (markers, mapName) => {
        markers.forEach(item => {
            let marker = new google.maps.Marker(item);
            marker.setMap(mapName)
        })
    }

    const maps = {}
    function initMap(whereAdd, coordObj, mapName, whatIsTabs) {
        maps[mapName] = new google.maps.Map(whereAdd, {
            center: coordObj,
            zoom: 16
        });
        switch (whatIsTabs) {
            case 'currentTabShop' :
                addMarkersToMap(dateForLocationAndShop[currentTabShop].markers, maps[dateForLocationAndShop[currentTabShop].map])
                break
            case 'currentLocation' :
                addMarkersToMap(dateForLocationInfo[currentLocation].markers, maps[dateForLocationInfo[currentLocation].map])
                break
            case 'currentTabShop2' :
                addMarkersToMap(dateForPartners[currentTabShop2].markers, maps[dateForPartners[currentTabShop2].map])
                break
            default :
                console.log('ky')
        }
    }

    function tabsContainer() {
        function bindTabs(triggerSelector, contentSelector, activeClass, dataName, whatIsData, whereAddMap) {
            let idx = 0
            const trigger = $(triggerSelector)
            const content = $(contentSelector)
            let currentElem = content[idx].querySelector(whereAddMap)
    
            trigger.each(function (i) {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    switch (whatIsData) {
                        case 'dateForLocationAndShop' :
                            currentTabShop = $(this).data(dataName)
                            idx = i
                            currentElem = content[idx].querySelector(whereAddMap)
                            initMap(currentElem, dateForLocationAndShop[currentTabShop].coords, dateForLocationAndShop[currentTabShop].map, 'currentTabShop')
                            break
                        case 'dateForPartners' :
                            currentTabShop2 = $(this).data(dataName)
                            idx = i
                            currentElem = content[idx].querySelector(whereAddMap)
                            if (dateForPartners[currentTabShop2].map){
                                initMap(currentElem, dateForPartners[currentTabShop2].coords, dateForPartners[currentTabShop2].map, 'currentTabShop2')
                            }
                            break
                        case 'dateForLocationInfo' :
                            currentLocation = $(this).data(dataName)
                            idx = i
                            currentElem = $(content[idx]).parent().siblings()[0]
                            initMap(currentElem, dateForLocationInfo[currentLocation].coords, dateForLocationInfo[currentLocation].map, 'currentLocation')
                    }
                   
                    hideTab()
                    showTab(i)
                })
            })

            function hideTab() {
                trigger.each(function () {
                    $(this).removeClass(activeClass)
                })

                content.each(function () {
                    $(this).fadeOut()
                })
            }

            function showTab(i) {
                trigger.eq(i).addClass(activeClass)
                content.eq(i).fadeIn()

            }

            hideTab()
            showTab(0)
            
            
        }
        // Initialization of maps on load

        initMap($('.buy__tabs-right-map')[0], dateForLocationAndShop[currentTabShop].coords, dateForLocationAndShop[currentTabShop].map,  'currentTabShop')
        if (dateForPartners[currentTabShop2].map){
            initMap($('.buy__tabs-right-map-partners')[0], dateForPartners[currentTabShop2].coords, dateForPartners[currentTabShop2].map, 'currentTabShop2')
        }
        initMap($('.js-buy-message-map')[0], dateForLocationInfo[currentLocation].coords,dateForLocationInfo[currentLocation].map, 'currentLocation')
    
        bindTabs(
            '.js-trigger1',
            '.js-buy__tabs-content1',
            'buy__tabs-tab--active',
            'location',
            'dateForLocationAndShop',
            '.buy__tabs-right-map'
        )

        bindTabs(
            '.js-trigger',
            '.js-buy__tabs-content',
            'buy__tabs-tab--active',
            'partners',
            'dateForPartners',
            '.buy__tabs-right-map-partners'
        )

        bindTabs(
            '.js-message-triger',
            '.js-buy__message-left',
            'buy__message-tab--active',
            'message',
            'dateForLocationInfo',
            '.js-buy-message-map'
        )
    }

    tabsContainer()

})(jQuery);
}) */






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
	
	/*
	* tab end
	*/
	/**********************************/
	
	
	
	
	
	
	/**********************************/
	/*
	* filter shops start
	*/


/* 

	class FilterShopView{
		constructor(model, elements){
			this._model = model;
			this._elements = elements;
		}


		
		
		
		
	}
	class FilterShopModel{
		constructor(items){
			
		}
	}
	class FilterShopController{
		constructor(model, view) {

		}
	}


	const model = new FilterShopModel(['node.js', 'react']),
				view = new FilterShopView(model, {
					'selectRegion': document.querySelector('.js-tikkurila-region'),
					'selectCity': document.querySelector('.js-tikkurila-city'),
					'resList': document.querySelector('.js-tikkurila-res-list'),
				}),
				controller = new FilterShopController(model, view);
	
	
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
	"coords": "50.403860, 30.531110",
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
	"coords": "50.403860, 30.531110",
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
	"coords": "50.403860, 30.531110",
	"type": "1"
},
 {
	"name": "Color Studio Tikkurila",
	"region": "kievskaya3",
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
		this._regions = [
				{
					label: {
						ru: 'Все',
						ua: 'Вcі',
					},
					value: 'all',
				},
				{
					label: {
						ru: 'Винницкая область',
						ua: 'Вінницька область',
					},
					value: 'vinnickaya',
				},
				{
					label: {
						ru: '"kievskaya3" область',
						ua: '"kievskaya3" область',
					},
					value: 'kievskaya3',
				},
				{
					label: {
						ru: '"kievskaya2" область',
						ua: '"kievskaya2" область',
					},
					value: 'kievskaya2',
				},
				{
					label: {
						ru: '"kievskaya1" область',
						ua: '"kievskaya1" область',
					},
					value: 'kievskaya1',
				},





				{
					label: {
						ru: 'Винницкая область',
						ua: 'Вінницька область',
					},
					value: 'vinnickaya',
				},

				{
					label: {
						ru: 'Волынская область',
						ua: 'Волинська область',
					},
					value: 'volynskaya',
				},

				{
					label: {
						ru: 'Днепропетровская область',
						ua: 'Дніпропетровська область',
					},
					value: 'dnepropetrovskaya',
				},

				{
					label: {
						ru: 'Донецкая область',
						ua: 'Донецька область',
					},
					value: 'doneckaya',
				},

				{
					label: {
						ru: 'Житомирская область',
						ua: 'Житомирська область',
					},
					value: 'zhitomirskaya',
				},

				{
					label: {
						ru: 'Закарпатская область',
						ua: 'Закарпатська область',
					},
					value: 'zakarpatskaya',
				},

				{
					label: {
						ru: 'Запорожская область',
						ua: 'Запорізька область',
					},
					value: 'zaporozhskaya',
				},

				{
					label: {
						ru: 'Ивано-Франковская область',
						ua: 'Івано-Франківська область',
					},
					value: 'ivanoFrankovskaya',
				},

				{
					label: {
						ru: 'Киевская область',
						ua: 'Київська область',
					},
					value: 'kievskaya',
				},

				{
					label: {
						ru: 'Кировоградская область',
						ua: 'Кіровоградська область',
					},
					value: 'kirovogradskaya',
				},

				{
					label: {
						ru: 'Луганская область',
						ua: 'Луганська область',
					},
					value: 'luganskaya',
				},

				{
					label: {
						ru: 'Львовская область',
						ua: 'Львівська область',
					},
					value: 'lvovskaya',
				},

				{
					label: {
						ru: 'Николаевская область',
						ua: 'Миколаївська область',
					},
					value: 'nikolaevskaya',
				},

				{
					label: {
						ru: 'Одесская область',
						ua: 'Одеська область',
					},
					value: 'odesskaya',
				},

				{
					label: {
						ru: 'Полтавская область',
						ua: 'Полтавська область',
					},
					value: 'poltavskaya',
				},

				{
					label: {
						ru: 'Ровненская область',
						ua: 'Рівненська область',
					},
					value: 'rovnenskaya',
				},

				{
					label: {
						ru: 'Сумская область',
						ua: 'Сумська область',
					},
					value: 'sumskaya',
				},

				{
					label: {
						ru: 'Тернопольская область',
						ua: 'Тернопільська область',
					},
					value: 'ternopolskaya',
				},

				{
					label: {
						ru: 'Харьковская область',
						ua: 'Харківська область',
					},
					value: 'harkovskaya',
				},

				{
					label: {
						ru: 'Херсонская область',
						ua: 'Херсонська область',
					},
					value: 'hersonskaya',
				},

				{
					label: {
						ru: 'Хмельницкая область',
						ua: 'Хмельницька область',
					},
					value: 'hmelnickaya',
				},

				{
					label: {
						ru: 'Черкасская область',
						ua: 'Черкаська область',
					},
					value: 'cherkasskaya',
				},

				{
					label: {
						ru: 'Черниговская область',
						ua: 'Чернігівська область',
					},
					value: 'chernigovskaya',
				},

				{
					label: {
						ru: 'Черновицкая область',
						ua: 'Чернівецька область',
					},
					value: 'chernovickaya',
				}
		]

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
				/*  */
				if (this._filterState.region === 'all') {
					this._shops.forEach((el) => {
						this.renderShopItem(this._elements.$resList, el)
					});
					return
				}
				/*  */
				/*  */
				if (this._filterState.city === 'all') {
					this._sortedShopByRegion[this._filterState.region].forEach((el) => {
						this.renderShopItem(this._elements.$resList, el)
					})
					return
				}
				/*  */
				/*  */

				this._sortedShopByRegionAndCity[this._filterState.region][this._filterState.city]
					.forEach((el) => {
						this.renderShopItem(this._elements.$resList, el)
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
				console.log(_sortedShopByRegionAndCityCopy);
				this._sortedShopByRegionAndCity = _sortedShopByRegionAndCityCopy;
			}

		changeRegion = (event)=>{
			this._filterState.region = event.target.value
			/*  */
				this._elements.$selectCity.innerHTML = '';
			/*  */
			this.renderOptions(this._elements.$selectCity, {label: this._regions[0].label[this._lang], value: 'all'}, false) // false it's not parse label language
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
		
		changeCity = (event)=> {
			this._filterState.city = event.target.value
			this.startFilterShops();
		}
		 
		setStyle(){
			
		}
		
		setEvent(){
			this._elements.$selectCity.addEventListener('change', this.changeCity);
			this._elements.$selectRegion.addEventListener('change', this.changeRegion);
		}
		
		/**********************************/
		/*
		* render start
		*/
		renderRegions(){
		 this._regions.forEach((el)=>{
			 this.renderOptions(this._elements.$selectRegion, el)
		 })
		}
		renderShopList(){
			this._elements.$resList.innerHTML = '';
			this._shops.forEach((el) => {
				this.renderShopItem(this._elements.$resList, el)
			})
		}


		renderShopItem(parentList, { site, address, name, tel }) {
			const markupShopItem = `
				<li class="buy__tabs-filtered__item">
					<div class="buy__tabs-filtered__item-block">
						<a class="buy__tabs-filtered-phone buy__tabs-filtered-link" href="tel:${tel}">${tel}</a>
						<a class="buy__tabs-filtered-link buy__tabs-filtered-site shop-link" href="${site}"><span>${site}</span</a>
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
			this.setEvent();
			this.renderRegions();

			this.renderShopList();
			this.sortedShopByRegion();
		 }
	 }
	
	 FilterShops.prototype.langDetect = function () {

	 	if (window.location.pathname.match(/\/ru\//)) return 'ru';
	 	if (window.location.pathname.match(/\/en\//)) return 'en';
	 	return 'ua'
	 };
	
	
	console.log(_shops[1]);
		const filterTikkurila = new FilterShops({
				data: _shops[1],
				elements: {
					$selectRegion: document.querySelector('.js-tikkurila-region'),
					$selectCity: document.querySelector('.js-tikkurila-city'),
					$resList: document.querySelector('.js-tikkurila-res-list')
				}
			});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	* filter shops end
	*/
	/**********************************/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery);
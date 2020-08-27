document.addEventListener('DOMContentLoaded', () => {
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
})
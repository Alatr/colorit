document.addEventListener('DOMContentLoaded', () => {
(function ($) {
    let currentTabShop = 'tikkurila'
    let currentLocation = 'office'

    const dateForLocationInfo = {
        office: {
            map: 'map2',
            coords: {lat: 50.4254018, lng: 30.3337994},
            markers: [
                {
                    position: { lat: 50.4254018, lng: 30.3337994 },
                    icon: './assets/images/buy/marker.svg'
                }
            ]
        },
        production: {
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
                addMarkersToMap(dateForLocationAndShop[currentLocation].markers, maps[dateForLocationAndShop[currentLocation].map])
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
            console.log(currentElem)

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
                        case 'dateForLocationInfo' :
                            currentLocation = $(this).data(dataName)
                            idx = i
                            currentElem = content[idx].querySelector(whereAddMap)
                            initMap(currentElem, dateForLocationAndShop[currentLocation].coords, dateForLocationAndShop[currentLocation].map, 'currentLocation')
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

            initMap(currentElem, dateForLocationAndShop[currentTabShop].coords, 'map')
            initMap(currentElem, dateForLocationAndShop[currentLocation].coords, 'map2')
        }

        bindTabs(
            '.buy__tabs-tab',
            '.buy__tabs-content',
            'buy__tabs-tab--active',
            'location',
            'dateForLocationAndShop',
            '.buy__tabs-right-map'
        )
        bindTabs(
            '.buy__message-tab',
            '.buy__tabs-content',
            'buy__tabs-tab--active',
            'location',
            'dateForLocationAndShop',
            '.buy__tabs-right-map'
        )
    }

    tabsContainer()

})(jQuery);
})
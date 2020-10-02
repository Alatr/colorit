let currentColors
let currentSelectPalette
let textForSearch = ''
const search = document.querySelector('[data-search="palette"]')
const resultContainer = document.querySelector('.pallete-search__result-list')
const searchWrapper = document.querySelector('.js-pallete-search-wrapper') 
const searchTrigger = document.querySelector('.js-pallete-search__btn')
const palitteRes = document.querySelector('.pallete-search__result-text')

function getColors({colors, name}) {
    currentColors = colors
    currentSelectPalette = name
}

function templatePalette(data) {
    return `
    <li class="pallete-search__result-item"> <a href="/palette?style=${currentSelectPalette}&color=${data.name.replace(" ", '-')}"> 
        <div class="pallete-search__color" style="background: rgb(${data.r}, ${data.g}, ${data.b})"></div><span class="pallete-search__color-name"> ${data.name}</span></a>
    </li>
    `
}

function renderList(filteredColors) {
   resultContainer.innerHTML = ''

   if (!filteredColors.length) {
        palitteRes.textContent = 'Краски не найденны'
        return
   }

   palitteRes.textContent = 'Результат:'
   const items =  filteredColors.map(templatePalette).join('')
   resultContainer.insertAdjacentHTML('afterbegin', items)
}

function searchColors(text) {
    let colorsFound = []

    currentColors.colors.forEach(function(color) {
        const name = removeSpaceInStr(color.name.toLowerCase())

        if (name.indexOf(text, 0) !== -1) {
            if(colorsFound.length >= 5) {
                return
            }

            colorsFound.push(color)
        }
    })

    renderList(colorsFound)
    searchWrapper.classList.add('pallete-search-wrapper_result-visible');
}

function removeSpaceInStr(str) {
   return str = str.replace(/\s/g, '');
}

search.addEventListener('keyup', (e) => {
    let value = e.target.value
    if (value.length >= 3) {
        textForSearch = value
        searchColors(removeSpaceInStr(textForSearch.toLowerCase()))
    } else {
        searchWrapper.classList.remove('pallete-search-wrapper_result-visible');
    }
})

searchTrigger.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation()

    if(textForSearch >= 4) { 
        searchColors(removeSpaceInStr(textForSearch.toLowerCase()))
        searchWrapper.classList.add('pallete-search-wrapper_result-visible');
    }
})

document.addEventListener('click', function(e){
    if (e.target !== searchWrapper && searchWrapper.classList.contains('pallete-search-wrapper_result-visible')) {
        searchWrapper.classList.remove('pallete-search-wrapper_result-visible');
    }
})

class PaletteSearch{
    constructor(){
        this.currentColors = null;
        this.currentSelectPalette = null;
        this.textForSearch = '';
        this.resultContainer = document.querySelector('.pallete-search__result-list');
        this.searchWrapper = document.querySelector('.js-pallete-search-wrapper');
        this.searchTrigger = document.querySelector('.js-pallete-search__btn');
        this.palitteRes = document.querySelector('.pallete-search__result-text');
    }

    // getColors(colors, name) {
    //     this.currentColors = colors;
    //     this.currentSelectPalette = name;
    // }

    templatePalette(data) {
        return `
    <li class="pallete-search__result-item"> <a href="/palette?style=${this.currentSelectPalette}&color=${data.name.replace(' ', '-')}"> 
        <div class="pallete-search__color" style="background: rgb(${data.r}, ${data.g}, ${data.b})"></div><span class="pallete-search__color-name"> ${data.name}</span></a>
    </li>
    `
    }
    update(colors, name){

        this.currentColors = colors;
        this.currentSelectPalette = name;
    }

    renderList(filteredColors) {
        this.resultContainer.innerHTML = ''

        if (!filteredColors.length) {
            this.palitteRes.textContent = 'Краски не найденны'
            return
        }

        this.palitteRes.textContent = 'Результат:'
        const items =  filteredColors.map(el => this.templatePalette(el)).join('');
        this.resultContainer.insertAdjacentHTML('afterbegin', items)
    }

    searchColors(text) {
        let colorsFound = [];
        this.currentColors.forEach(color => {
            const name = this.removeSpaceInStr(color.name.toLowerCase());

            if (name.indexOf(text, 0) !== -1) {
                if(colorsFound.length >= 15) return;
                colorsFound.push(color)
            }
        })

        this.renderList(colorsFound);
        this.searchWrapper.classList.add('pallete-search-wrapper_result-visible');
    }

    removeSpaceInStr(str) {
        return str.replace(/\s/g, '');
    }

    init(){
        $('[data-search="palette"]').on('keyup', e => {
            let value = e.target.value;
            if (value.length >= 3) {
                this.textForSearch = value;
                this.searchColors(this.removeSpaceInStr( this.textForSearch.toLowerCase()))
            } else {
                this.searchWrapper.classList.remove('pallete-search-wrapper_result-visible');
            }
        });

        this.searchTrigger.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation()
            if( this.textForSearch >= 4) {
                this.searchColors(this.removeSpaceInStr( this.textForSearch.toLowerCase()));
                this.searchWrapper.classList.add('pallete-search-wrapper_result-visible');
            }
        })

        document.addEventListener('click', e => {
            console.log(this.searchWrapper);
            if (e.target !==  this.searchWrapper &&  this.searchWrapper.classList.contains('pallete-search-wrapper_result-visible')) {
                this.searchWrapper.classList.remove('pallete-search-wrapper_result-visible');
            }
        })
    }

};

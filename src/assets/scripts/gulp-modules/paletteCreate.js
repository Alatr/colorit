class PaletteCreate {
    constructor(data){
        this.tab = data.tab || true;
        this.description= data.description;
        this.wrap = data.wrap || '';
        this.lang = 'ru';
        this.type = 'palette0';
        this.letters = ['f','g', 'h','j','k','l','m','n','s','v','x','y'];
        this.init('palette0')
    }

    init(type) {
        this.getColors('/static/','colorCode', (reject) => {
            console.log(reject);
            this.tabsInfo = reject;
        });

        this.createContent('.palette-block-body', this.description);
        this.update(type);
    }

    update(type,description, tabs) {
        $('.js-palette-tab').html('');
        $('.palette-block-body-item__text').html(this.description);
        this.type = type;
        this.tab = tabs;
        this.description = description;
        this.getColors('/assets/jsons/',type, this.setContentPalette.bind(this));

        $('.js-palette-tab').on('DOMMouseScroll wheel', '.js-horizontal-scroll',function (e) {
            let delta = e.originalEvent.deltaY;
            if( (delta < 0 && this.scrollLeft > 0) || delta > 0 && this.scrollLeft < this.scrollWidth - this.offsetWidth) {
                e.preventDefault();
                this.scrollLeft += e.originalEvent.deltaY;
            }



        })
    }

    setContentPalette(list, type) {
        console.log(type);
        if(type === 'palette0') {
        // if(type === 'palette0' || type === 'palette1') {
            this.createTab('.js-palette-tab',this.changeListForSymphony(list));
            if (screen.width > 700) {
                const tab = new Tab({
                    $btn: $('.js-palette-color-tab-btn'),
                    $content: $('.js-palette-tab-content-item'),
                    btnActiveClass: 'palette-tab-btn--active',
                    contentActiveClass: 'palette-color-tab-content-item--active',
                    active: 0
                });
                console.log(tab);
            } else {
                console.log('holla');
                const tabSelectPalette = new TabSelect({
                    $btn: $('.js-palette-color-item__select'),
                    $content: $('.js-palette-tab-content-item'),
                    btnActiveClass: 'palette-tab-btn--active',
                    contentActiveClass: 'palette-color-tab-content-item--active',
                    active: 0,
                    event: 'changeTabSelectPallete'
                });
            }

        } else if(type === 'palette2'){
            this.createNoTab('.js-palette-tab',this.changeListForSymphony(list), 'symphony');
            // this.createNoTab('.js-palette-tab',this.changeListInObj(list));
        }else{
            this.createNoTab('.js-palette-tab',list.colors, type);
            // this.createNoTab('.js-palette-tab',this.changeListInObj(list));
        }


    }
    changeListForSymphony(list) {
        const obj = {};
        list.colors.forEach(el => {
            if(obj[el.type]) {
                if(!obj[el.type][el.code]) obj[el.type][el.code] = el;
            } else {
                obj[el.type] = {};
                obj[el.type][el.code] = el;
            }
        });
        return obj;
    }
    // changeListForSymphony(list) {
    //     const obj = {};
    //     list.colors.forEach(el => {
    //         if(obj[el.code]) {
    //             if(!obj[el.code][el.type]) obj[el.code][el.type] = el;
    //         } else {
    //             obj[el.code] = {};
    //             obj[el.code][el.type] = el;
    //         }
    //     });
    //     return obj;
    // }
    changeListInObj(list) {
        const obj = {};
        let i = 0;
        let j = 0;
        list.colors.forEach( el => {
            console.log(el);
            if(obj[i]) {
                obj[i][j] = el
            } else {
                obj[i] = {};
                obj[i][j] = el;
            }
            j++;
            if(j === 10){
                j = 0;
                i++;
            }

        });
        return obj;
    }

    getColors(url, type, callback) {
        $.ajax({
            url:url+type+'.json',
            success: function (responsive) {
                callback(responsive, type);
            },
            error: function (error) {

            }
        })
    }

    createContent(wrapper ,text) {
        const content = document.createElement('p');
        content.classList = 'palette-block-body-item__text';
        content.innerHTML = text;
        $(wrapper).append(content);

        const wrap = document.createElement('div');
        wrap.classList = 'palette-tab js-palette-tab';
        $(wrapper).append(wrap);
        return true
    }

    createTab(wrap,list) {
        $(wrap).append(this.tabHtmlSelect(this.tabsInfo));
        $(wrap).append(this.createTabContent(list, this.tabsInfo));
    }

    createNoTab(wrap, list, type) {
        if(type === 'symphony'){
            $(wrap).append(this.createColorTable(list));
            return;
        }
        $(wrap).append(this.createColorList(list) );
    }

    createTabContent(list, tabsInfo) {
        const content = document.createElement('ul');
        content.classList = 'palette-tab-content';
        content.innerHTML = `
        `;
        tabsInfo.forEach( name => {
            const html = this.createColorTableSymphony(list, name);
            content.innerHTML += `
            <li class="js-palette-tab-content-item palette-color-tab-content-item custom-scroll js-horizontal-scroll" >
                ${html}
            </li>
            `
        });
        // вывести таблицу цвета
        return content;
    }

    tabHtmlSelect(tabsInfo) {
        let selected = `
        `;
        let buttons = `
        `;

        tabsInfo.forEach( (name, i) => {
            selected += `<option class="palette-item__select-item ${ i === 0 ? selected='selected':'' }" >${name.name[this.lang]}</option>`;
            buttons += `<li class="palette-tab-btns-item">
                        <button class="palette-tab-btn js-palette-color-tab-btn btn--res" type="button">${name.name[this.lang]}<span class="line"></span></button>
                      </li>`
        });
        return `
            <div class="calculator-item-select-wrap palette-color-item-select-wrap">
                      <select class="palette-item__select js-palette-color-item__select calculator-item__select">
                       ${selected}
                      </select>
            </div>
            <ul class="palette-tab-btns">
                      ${buttons}
            </ul>
        `;
    }

    // createColorTableSymphony(list, name) {
    //     let row = `
    //     `;
    //
    //     for(let el in list){
    //         if(+el > +name.from && +el < +name.to) row += this.createColorRow(list[el]);
    //     }
    //     let wrap = `<ul class='color-list'>${row}</ul>`;
    //     return wrap;
    // }

    createColorTableSymphony(list, name) {
        let row = `
        `;
        let content = `
        `;
        for(let el in list){
            row += this.createSymphonyColorRow(list[el], name);
        }
        content += `<ul class='color-list'>${row}</ul>`;

        return content;
    }
    createColorTable(list) {
        let row = `
        `;
        let content = `
        `;
        for(let el in list){
            row += this.createTableColorRow(list[el]);
        }


        content += `<div class="color-shade-table custom-scroll js-horizontal-scroll"><ul class='color-list'>${row}</ul></div>`;

        return content;
    }

    createSymphonyColorRow(list, name) {
        let elem = `
        `;
        let type = '';
        // for(let i = 300;i <= 503; i++){
        //     if(i >= +name.from && i <= +name.to) {
        //
        //         // console.log(list[el]);
        //         if(list[i]){
        //             elem += this.createSymphonyColorEl(list[i]);
        //         } else{
        //             elem += this.createEmptyEl();
        //         }
        //
        //     }
        //
        // }

        for(let el in list){
            type = list[el].type;
            if(+el >= +name.from && +el <= +name.to) {
                elem += this.createColorEl(list[el]);
            }
        }

        return `
            <li class='color-item' data-letter="${type}">
                <ul class='color-shade-list'>
                    ${elem}
                </ul>
            </li>
        `
    }

    createTableColorRow(list) {
        let elem = `
        `;
        let type = '';

        for(let el in list){
            type = list[el].type;
                elem += this.createColorEl(list[el]);
        }

        return `
            <li class='color-item' data-letter="${type}">
                <ul class='color-shade-list'>
                    ${elem}
                </ul>
            </li>
        `
    }

    // createColorTableSymphony(list, name) {
    //     let row = `
    //     `;
    //     let content = `
    //     `;
    //     let i = 0;
    //
    //     for(let el in list){
    //         if(+el >= +name.from && +el <= +name.to) {
    //             if(i >= 12) {
    //                 i = 0;
    //                 content += `<ul class='color-list'>${row}</ul>`;
    //                 row = `
    //             `;
    //             }
    //
    //             row += this.createColorRow(list[el]);
    //             i++;
    //         }
    //     }
    //     if(i > 0){
    //         content += `<ul class='color-list'>${row}</ul>`;
    //     }
    //
    //     return content;
    // }
    createColorList(list) {
        let row = `
        `;
        for(let el in list){
            row += this.createColorEl(list[el]);
            // row += this.createColorRow(list[el]);
        }
        let wrap = `<ul class='color-list'><li class='color-item'>
                <ul class='color-shade-list wrap'>
                    ${row}
                </ul>
            </li></ul>`;
        // let wrap = `<ul class='color-list'>${row}</ul>`;
        return wrap;
    }

    createColorRow(list) {
        let elem = `
        `;
        // for(let el in list){
        //     elem += this.createColorEl(list[el]);
        // }
        this.letters.forEach(el => {
            // console.log(el.toUpperCase());
            if(list[el.toUpperCase()]) {
                elem += this.createColorEl(list[el.toUpperCase()]);
            } else {
                elem += this.createEmptyEl();
            }
        });


        return `
            <li class='color-item'>
                <ul class='color-shade-list'>
                    ${elem}
                </ul>
            </li>
            
        `
    }

    createColorEl(el) {
        let name = el.name.replace(' ', '-');
        return `
            <li class='color-shade-item' style="background: rgb(${el.r},${el.g},${el.b})">
                <a href='/color-single.html?style=${this.type}&color=${name}' ></a>
            </li>
        `
    }

    createEmptyEl() {
        return `
            <li class='color-shade-item'></li>
        `
    }

}
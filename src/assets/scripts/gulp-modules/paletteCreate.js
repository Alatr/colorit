class PaletteCreate {
    constructor(data){
        this.tab = data.tab || true;
        this.description= data.description;
        this.wrap = data.wrap || '';
        this.lang = 'ru';
        this.type = 'symphony';
        this.init('symphony')
    }

    init(type) {

        this.getColors('/dist/static/','colorCode', (reject) => {
            console.log(reject);
            this.tabsInfo = reject;
        });
        this.createContent('.js-palette-block-body-item', this.description);
        this.update(type);
    }

    update(type) {
        $('.js-palette-tab').innerHTML = '';
        this.type = type;
        this.getColors('/dist/static/',type, this.setContentPalette.bind(this));
    }

    setContentPalette(list, type) {
        if(type === 'symphony') {

            this.createTab('.js-palette-tab',this.changeListInObj(list));

            if (screen.width > 700) {
                const tab = new Tab({
                    $btn: $('.js-palette-color-tab-btn'),
                    $content: $('.js-palette-tab-content-item'),
                    btnActiveClass: 'palette-tab-btn--active',
                    contentActiveClass: 'palette-color-tab-content-item--active',
                    active: 0
                });

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

        }


    }

    changeListInObj(list) {
        const obj = {};
        list.colors.forEach(el => {
            console.log(el);
            if(obj[el.code]) {
                if(!obj[el.code][el.type]) obj[el.code][el.type] = el;
            } else {
                obj[el.code] = {};
                obj[el.code][el.type] = el;
            }
        });
        return obj;
    }

    getColors(url, type, callback) {
        $.ajax({
            url:url+type+'.JSON',
            success: function (responsive) {
                console.log(responsive);
                callback(responsive, type);
            },
            error: function (error) {

            }
        })
    }

    createContent(wrapper ,text) {
        // console.log(wrapper);
        const content = document.createElement('p');
        content.classList = 'palette-block-body-item__text';
        content.innerHTML = text;
        // console.log(content);
        $(wrapper).append(content);

        const wrap = document.createElement('div');
        wrap.classList = 'palette-tab js-palette-tab';
        // console.log(wrap);
        $(wrapper).append(wrap);
        return true
    }

    createTab(wrap,list) {
        // const tabsInfo = [
        //     'все цвета','Красный', 'Оранжевый', 'Желтый', 'Зеленый', 'Синий', 'Фиолетовый', 'Нейтральные', 'Белые и Пастельные'
        // ];

        $(wrap).append(this.tabHtmlSelect(this.tabsInfo));
        $(wrap).append(this.createTabContent(list, this.tabsInfo));
    }

    createTabContent(list, tabsInfo) {
        // console.log(list);
        const content = document.createElement('ul');
        content.classList = 'palette-tab-content';
        content.innerHTML = `
        `;
        tabsInfo.forEach( name => {
            // console.log(name);

            const html = this.createColorTable(list, name);
            // console.log('html' , html);
            content.innerHTML += `
            <li class="js-palette-tab-content-item.palette-color-tab-content-item.custom-scroll " >
                ${html}
            </li>
            `
        })
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

    createColorTable(list, name) {
        let row = `
        `;

        for(let el in list){
            console.log(el);
            console.log(name);

            if(+el > +name.from && +el < +name.to){
                console.log('fff');
                row += this.createColorRow(list[el]);
            }
        }
        let wrap = `<ul class='color-list'>${row}</ul>`;
        return wrap;
    }

    createColorRow(list) {
        let elem = `
        `;
        for(let el in list){
            elem += this.createColorEl(list[el]);
        }
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
            <li class='color-shade-item'>
                <a href='/color-single.html?style=${this.type}&color=${name}' ></a>
            </li>
        `
    }

}
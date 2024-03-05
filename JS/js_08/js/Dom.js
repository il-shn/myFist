//1)пройдіть по масиву і зробіть заповнення таблиці даними з масива
// const booksArray = [
//     {
//         title: 'Пригоди Аліси в Країні Див',
//         year: 1865,
//         rating: 4.5
//     },
//     {
//         title: '1984',
//         year: 1949,
//         rating: 4.8
//     },
//     {
//         title: 'Гаррі Поттер і філософський камінь',
//         year: 1997,
//         rating: 4.7
//     }
// ];


window.onload = function(){
    const booksArray = [
        {
            title: 'Пригоди Аліси в Країні Див',
            year: 1865,
            rating: 4.5
        },
        {
            title: '1984',
            year: 1949,
            rating: 4.8
        },
        {
            title: 'Гаррі Поттер і філософський камінь',
            year: 1997,
            rating: 4.7
        }
    ];
    
    let tableHead = [ "Назва книги","Рік","Рейтинг"];

    let bodyEl = document.querySelector("body")
    let table = document.createElement("table")
    bodyEl.appendChild(table)
    let thead = document.createElement("thead")
    table.appendChild(thead)
    let trHead = document.createElement("tr")
    thead.appendChild(trHead)

    for (const element of tableHead) {
        let th = document.createElement("th");
        trHead.appendChild(th);
        th.innerText = element;
    }

    

    for (const book of booksArray) {
        let tbody = document.createElement("tbody")
        table.appendChild(tbody)
        let tr = document.createElement("tr")
        thead.appendChild(tr)

        let td1 = document.createElement("td");
        tr.appendChild(td1);
        td1.textContent = book.title;

        let td2 = document.createElement("td");
        tr.appendChild(td2);
        td2.textContent = book.year;

        let td3 = document.createElement("td");
        tr.appendChild(td3);
        td3.textContent = book.rating;

    }   
    table.style.backgroundColor = "green";
    table.style.border = "solid", "5px";
    table.style.padding = "10px";
    table.style.margin = '10px';


    // 2)За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center
    const menuData = [
        { name: 'Головна', url: '/' },
        { name: 'Про нас', url: '/about' },
        { name: 'Послуги', url: '/services' },
        // Додайте ще пункти меню за потреби
    ];

    for (const element of menuData) {
        let headerEl = document.createElement("header");
        headerEl.innerHTML = `<div><a href='${element.url}'>${element.name}</a></div>`
        bodyEl.prepend(headerEl)
        headerEl.style.backgroundColor = 'yellow';
        headerEl.style.padding = '50px';
        headerEl.style.textAlign = "center";
        
    }

    // 3)Створіть в хедері з попереднього завдання А теги з значенням з обєкта name  встановленим значенням в href з url.

    // 4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

    for (let i = 0; i < 51; i++) {
        const block = document.createElement("div");
        bodyEl.appendChild(block);
        block.style.display = 'flex';
        block.style.borderRadius = '15px'
        block.style.width = '50px'
        block.style.height = '50px'
        block.style.backgroundColor = 'blue'
        block.style.margin = '2px';

    }
}


    


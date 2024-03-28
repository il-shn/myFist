window.onload = function(){
    
    // =========== Завдання 1 ================
    // Форма з вибором улюбленого кольору:
    // Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).
    // Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.
    let colorForm = document.querySelector('.colorForm')
    let greenBtn = document.querySelector('#green')
    let yellowBtn = document.querySelector('#yellow')
    let blueBtn = document.querySelector('#blue')
    let body = document.querySelector('body')

    // let[...allRadio] = document.querySelectorAll('input[type="radio"]')

    // ------ attempt №1 ------
    // function colorChange(e){
    //     switch (e) {
    //         case greenBtn.checked:
    //             body.style.backgroundColor = 'green'
    //             break;
    //         case yellowBtn.checked:
    //             body.style.backgroundColor = 'yellow'
    //             break;
    //         case blueBtn.checked:
    //             body.style.backgroundColor = 'blue'
    //             break;
        
    //         default:body.style.backgroundColor = 'blanchedalmond'
    //             break;
    //     }
    // }
    // colorForm.onchange = colorChange


    // ------ attempt №2 ------

    function changeColor() {
            if (greenBtn.checked) {
                body.style.backgroundColor = 'green'
            }
            else if(yellowBtn.checked) {
                body.style.backgroundColor = 'yellow'
            }
            else if (blueBtn.checked) {
                body.style.backgroundColor = 'blue'
            }
            else {
                body.style.backgroundColor = 'blanchedalmond'
        }
    }

    colorForm.onchange = changeColor
    
    // =========== Завдання 2 ================
    // Форма для вибору хобі з чекбоксами:
    // Створіть чекбокси для різних хобі (наприклад, читання, спорт, музика).
    // Встановіть обробник події onchange для кожного чекбоксу, щоб відображати список вибраних хобі у текстовому елементі під формою.
    let list = document.querySelector('#list')
    let [...allHobby] = document.querySelectorAll('input[name="option1"]')
    let [...allLabel] = document.querySelectorAll('.hobbyForm label')

    // for (const hobby of allHobby) {
    //     hobby.onchange = function(){
    //         if (hobby.checked) {
    //             console.log(hobby);
    //             for (const label of allLabel) {
    //                 if (label.htmlFor === hobby.id) {
    //                     let li = document.createElement('li')
    //                     list.appendChild(li)        
    //                     li.innerText = label.innerText
    //                 }
    //             }
    //         } else {
    //             for (const label of allLabel) {
    //                 if (label.htmlFor === hobby.id) {
    //                     console.log(label.innerText);
    //                     li.remove()
                        // list.appendChild(li)        
                        // li.innerText = label.innerText
    //                 }
    //             }

    //         }
    //     }
    // }
    // ------- attempt 2 ------
    for (const hobby of allHobby) {
        hobby.onchange = function(){
            if (hobby.checked) {
                for (const label of allLabel) {
                    if (label.htmlFor === hobby.id) {
                        let li = document.createElement('li')
                        list.appendChild(li)        
                        li.innerText = label.innerText
                    }
                }
            }
            else {
                let li = document.querySelector('li')
                li.remove()
            }
        }
    }

    // =========== Завдання 3 ================
    // Форма з вибором країни із випадаючого списку:
    // Створіть випадаючий список з назвами країн.
    // Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення, в іншому елементі на сторінці.
    
    let select = document.querySelector('select')
    let info = document.querySelector('.info')
    // let [...allOptions] = document.querySelectorAll('option')
    
    select.addEventListener('change', function(){
        console.log(this.value);
        switch (select.value) {
            case '1':
                info.innerText = 'Chouse country above'
                break;
            case '2':
                info.innerText = `country: USA
                capital: Washington
                population: 332 mln`
                break;
            case '3':
                info.innerText = `country: China
                capital: Beijing
                population: 1,409 bln`
                break;
            case '4':
                info.innerText = `country: 'Ukraine'
                capital: Kiyv
                population: 43 mln`
                break;
        
            default:
                info.innerText = 'Chouse country above'

                break;
        }
    })
    
    // ---------- 2 attempt ----------

    let select2 = document.querySelector('#select2')
    const countries = ["Chouse","USA","China","Ukraine"] 
    const countryInfo = [
        {name: 'Chouse country'},
        {name: 'USA', capital: 'Washington', population: '332mln'},
        {name: 'China', capital: 'Beijing', population: '1,409bln'},
        {name: 'Ukraine', capital: 'Kiyv', population: '43mln'},
    ]
    countries.forEach(country => {
        let option = document.createElement('option');
        option.value = country;
        option.innerText = country;
        select2.appendChild(option);
    });
    select2.addEventListener('change', function(){
        let selectValue = this.value;
        let info2 = countryInfo.find(country=>country.name === selectValue)
        let infoBlock = document.querySelector('.infoBlock')
        infoBlock.innerHTML = `Capital: ${info2.capital}, population: ${info2.population}`;
    });

    // for (const option of allOptions) {
    //     if (option.selected) {
    //         console.log('option1');
    //         option.onchange = function(){
    //             for (const iterator of countries) {
    //                 console.log(`Log iterator ${iterator}`);
    //                 if (this.country === option.innerText) {
    //                     info.innerText = iterator
    //                 } 
    //             }
    //         }
    //     }    
    // }
}
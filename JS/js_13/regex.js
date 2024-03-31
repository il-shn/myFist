// Домашня робота:
// ============= 1 Завдання =================
// Знайдіть всі великі літери в тексті і збережіть їх в масив

let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let searchCapslockLeter = /[A-Z]/g;
let result = textStr.match(searchCapslockLeter);
console.log(result);

// ============= 2 Завдання =================
// Знаходження слів із певною кількістю символів:
// Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв, можна взяти текст з textStr з першого завдання

let searchFiveLeterWord = /\w{5}/g;
let result2 = textStr.match(searchFiveLeterWord);
console.log(result2);

// ============= 3 Завдання =================
// Створити регулярний вираз, який видаляє всі HTML теги з рядка. Наприклад, після обробки рядка <p>Це - простий <b>текст</b>.</p> має залишитися Це - простий текст.

let theText = '<p>Це - простий <b>текст</b>.</p>'

let searchTag = /<\/?\w+>/g;
let delTag = theText.replace(searchTag, '')
console.log(delTag);

// ============= 4 Завдання =================
// Розробити регулярний вираз для перевірки сили пароля. Пароль повинен містити принаймні одну велику літеру, одну маленьку літеру, одну цифру, один спеціальний символ (!@#$%^&*) і мати довжину від 8 до 20 символів.

// let checkPassword = /[a-zA-Z0-9!@#\$%\^&\*]{8,20}/g;
let checkPassword = /^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;
let passwordSample = 'wWeE103#';
let passwordSample2 = 'HKky465y7^%$@87gerd';
console.log(checkPassword.test(passwordSample));
console.log(checkPassword.test(passwordSample2));

// ============= 5 Завдання =================
// Створіть групу радіокнопок для оцінки від 1 до 5.
// Додайте обробник події onchange для виявлення вибору користувача, а потім виведіть відповідне повідомлення (наприклад, "Дякуємо за вашу оцінку!").

window.onload = ()=>{
    let [...form] = document.querySelector('form')
    // function rating() {
    //     for (const inp of inputAr) {
    //         if (inp.checked) {
    //             inp.value===rate
    //             console.log(rate);
    //             alert("Дякуємо за вашу оцінку!")
    //         }
            // inp.find(inp.checked=>inp.value===rate)
            // inp.onclick = function(){
    //     }
    // }
    for (const inp of form) {
        inp.onchange = function(){
            if (inp.checked) {
                console.log(inp.value);        
                alert(`Дякуємо за вашу оцінку ${inp.value}`);    
            } 
        }    
    }
    // select2.addEventListener('change', function(){
    //     let selectValue = this.value;
    //     let info2 = countryInfo.find(country=>country.name === selectValue)
    //     let infoBlock = document.querySelector('.infoBlock')
    //     infoBlock.innerHTML = `Capital: ${info2.capital}, population: ${info2.population}`;
    // });

}
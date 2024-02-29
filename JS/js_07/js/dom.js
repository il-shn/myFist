
// // =========== Створіть рядок, який містить слова, розділені пробілами.===========

let sTring = 'banana orange apple'
console.log(sTring);

// =========== Використайте метод split, щоб розбити рядок на масив слів.=========

let newsTring = sTring.split(" ")
console.log(newsTring);

// // =========== Виведіть отриманий масив у консоль у верхньому регістрі.============

let capslock = sTring.toUpperCase(); 
console.log(capslock);

// ========== Перевірка Високосного Року ===============
// Реалізуйте функцію, яка перевіряє, чи є рік, заданий датою, високосним.


 function intercalary(year) {
    let feb29 = new Date(year, 1, 29);
    if (feb29.getMonth() === 1 ) {
        console.log(`Рік ${feb29.getFullYear()} високосний`);
    } else {
        console.log(`Рік ${feb29.getFullYear()} не високосний`);
    }
}

let promptYear = Number(prompt())

intercalary(promptYear)



// =========== Отримання Назви Місяця =======================
// Напишіть функцію, яка приймає об'єкт Date і повертає назву місяця англійською мовою.

let theDate = new Date();
console.log(theDate.getMonth());
let month = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'Septmber', 'October', 'November', 'December']

function monthEng(a,array) {
    
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (i === a.getMonth()) {
           console.log(`${theDate.getMonth()} month is ${array[i]}`);
        }
    }
}
monthEng(theDate, month)



// ============= Додавання Днів до Дати ========================================
// Створіть функцію, яка додає певну кількість днів до заданої дати і повертає нову дату.

function addDays(date, additionDays) { 
   let cDate = new Date(date)
    // додаєм n днів до числа заданої дати
    let newNum = cDate.getDate() + additionDays;
    //зміна отриманого числа в задану дату
    cDate.setDate(newNum);
    // повертання нової дати
    return cDate;
}

let zDate = new Date();//задаєм дату
console.log(zDate);
let fewDays = Number(prompt('Введіть число днів'))

console.log(addDays(zDate, fewDays));


// ================== Cтворіть список ul з 5 елементами li всередині. =================

// За допомогою querySelector виберіть:
window.onload = function(){ 
    // - перший елемент списку
    let liFirstEl = document.querySelector("li:first-child")   
    console.log(liFirstEl);
    // - останній елемент списку
    let liLastEl = document.querySelector("li:last-child")
    console.log(liLastEl);
    // - 3 елемент списку
    let thirdLiEl = document.querySelector("li:nth-child(3)")
    console.log(thirdLiEl);
    // За допомогою querySelectorAll
    // - всі елементи li в списку
    let allLi = document.querySelectorAll("li")
    console.log(allLi);
     // - конвертуйте вибрані елменти в массив
    let liElement = Array.from(allLi)
    console.log(liElement);

    // =============== Створіть на сторінці елемент який вибирається цими селекторами ========
        //let listItems = document.querySelectorAll('ul.nav > li');
    let listItems = document.querySelectorAll('ul.nav > li');
    console.log(listItems);
        // let listItem = document.querySelectorAll('li:nth-child(2)');
    let listItem = document.querySelectorAll('li:nth-child(2)');
    console.log(listItem);
    
    // ============= НЕ З ДЗ ======================================
    // let pEement = document.getElementsByTagName('p');
    // console.log(pEement);
    // let divEl = document.getElementsByClassName('test')
    // console.log(divEl);
    // let idEl = document.getElementById('main')

    // let headerEl = document.querySelector('header')
    // console.log(headerEl);
    // let allSpan = document.querySelectorAll("span")
    // console.log(allSpan); // - НЕ З ДЗ
// ================== НЕ З ДЗ =================================
}








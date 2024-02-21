// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

// let wood = ['eco',45,344,6,2,5];
// let user = prompt("Hello, sign your name");

// function hiUser() {
//         console.log(`Вітаю ${user}`);
//     }
// function wellcomeUser(){
//     for (let i = 0; i < wood.length; i++) {
//         console.log(wood[i]);
//         hiUser()
//     }
// }

// wellcomeUser()

//перепишіть попередню функцію в стрілкову. 
// let wood = ['eco',45,344,6,2,5];
// let user = prompt("Hello, sign your name");

//      __       __
//        \ O_o /
//           |


//Перепишіть стрілкову функцію в звичайну const multiplyValues = (a, b, c) => a * b * c;

// function multiplyValues(a, b, c) {
    // return(a * b * c)
// }

// push:
// Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

// let pushArray1 = [];
// pushArray1.push(2,3,42,4,5,'hell')
// console.log(pushArray1);


// Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.
// let pushArray2 = [45,3,34,5,3]

// function iAmFunction() {
//     pushArray2.push(89)
//     console.log(pushArray2);
// }
// iAmFunction()

// //pop
// // Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

// let popArray1 = [1,2,3,4,5,6,7,8,8];
// popArray1.pop()
// console.log(popArray1);


// // Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

// let popArray2 = [ 3,7,5,4,7,4,2,248238]
// console.log(popArray2);
// function lastDelete() {
//     popArray2.pop()
//     console.log(`Delete array ${popArray2}`);
// }
// lastDelete()

//unshift:
// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

// let arrayUnshift1 = [2,3,4,5,6,7,'gbf']
// arrayUnshift1.unshift(1)
// console.log(arrayUnshift1);

// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

// let arrayUnshift2 =[2,3,4,5,6,7,8,9]
// function addElem() {
//     arrayUnshift2.unshift(0,1)
//     console.log(arrayUnshift2);
// }
// addElem()

// shift:
// Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

// let arrayShift1 = [555,3,6,8,,3,2,6,8]
// arrayShift1.shift()
// console.log(arrayShift1);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.
// let arrayShift2 = ['alien',6,8,5,2,6,9,5]

// function delLast() {
//     arrayShift2.shift()
//     console.log(arrayShift2);
// }
// delLast()



// * Додаткова робота:

//Створіть новий массив за допомогою методів розглянутих на уроці в якому видалені всі  значення "Remove"  з масиву  - ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...]

// let words = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"]
// console.log(words);

// words.splice(1,1);
// console.log(words);

// for (let i = 0; i < 2; i++) {
//     words.pop();
// }
// words.splice(2,1);
// console.log(words);

//Написати цикл який замінює відємне значення в масиві на 0  let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36] 

let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]

for (let i = 0; i < checkArr.length; i++) {

  if (checkArr[i]<0) {
    checkArr[i]=0
  }
  else{
    checkArr[i]>0
  }
}
console.log(checkArr);

//Створити цикл який виводить значення в консоль в такому форматі "Сьогодні ....  у вас такі плани .." для данних використовує два массива let days = ["Понеділок", "Середа", "Неділя"] let plans = ["Урок 03", "Урок 04", "Вихідни"]

// let days = ["Понеділок", "Середа", "Неділя"]
// let plans = ["Урок 03", "Урок 04", "Вихідни"]

// function schedule(ar1,ar2) {
  

//   for (let i = 0; i < days.length; i++) {
//     for (let i = 0; i < plans.length; i++) {
//       if (i===i) {
//         console.log(`Сьогодні ${ar1[i]} у вас такі плани: ${ar2[i]}`);
//       }
//     }  
//   }
// }
// schedule(days,plans)


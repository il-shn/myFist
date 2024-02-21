// 01. Переишіть цей код використовуючи let const~ 

//Замість var
//
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// //------------------------------------------------------------------------------------

// for (let i = 0; i < 5; i++) {
// console.log(i);    
// }

// //------------------------------------------------------------------------------------

// for (const i = 0; i < 5; i++) {
//     console.log(i);    
//     }







// //===================================================================================

// // Замість var

// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }
// example()
//
// //------------------------------------------------------------------------------------

// let message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }
// example()

// //------------------------------------------------------------------------------------

// const message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }
// example()








// //===================================================================================

// // 02. Використовуючи for in  виведіть значення з обєктку в console.log
// const person = {
//     name: 'John',
//     age: 25,
//     occupation: 'Developer'
// };

// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
// }




// //===================================================================================

// // Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 22, grade: 'B' },
//     { name: 'Charlie', age: 21, grade: 'C' }
// ];

// for (const iterator of students) {
//     console.log(iterator);
// }
// //------------------------------------------------------------------------------------

// for (const key in students) {
//     console.log(students[key]);

// }



// //===================================================================================

// Завдання на map

// Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

// let num = [1,2,3,4,5,6,7,8,9]
// console.log(num);

// let squaredNum = num.map(a => a*a)
// console.log(squaredNum);

// //------------------------------------------------------------------------------------

// Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує  стрінг до значення 'new value'

// let information = [32,4,5,7,99,754,2,1,'sdces', 'erfrdv'];
// console.log(information);

// function getString(a,b) {
//     let newArray = information.map(a=>a+'new value')
//     console.log(newArray);
// }
// getString()

// //===================================================================================

// Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад const numberArr = [10,20,30]

const numberArr = [10,20,30]
console.log(numberArr);

function arrSumm(params) {
    sum = 0;
    numberArr.forEach(element => {
        console.log(sum+=element)}
    );
}
arrSumm(numberArr)

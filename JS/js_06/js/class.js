// Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.


// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let man = new Person("John", 30)
// console.log(man);


//==============================================================

// 2 Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи в console.log


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello! Nice to see you ${this.name}`);
    }
}
let man = new Person("John", 30)
console.log(man);
man.sayHello()

//==============================================================

    // 3 Наслідування:
    // Створіть клас Student, який наслідує від класу Person.
    // Додайте властивість studentId до класу Student.
    // Додайте метод study, який виводить повідомлення про студента

class Student extends Person{
    constructor(studentId, name, age){
     this.studentId = studentId;
     super(name, age) ;  
    }
    study() {
        console.log( `The student information:${this._name} ${this._age} ${this.studentId} `);
    }
}
study()

// 4 Задачі для практики forEach, reverse  Виведіть значення з масиву в зворотньому порядку
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse()
// numbers.forEach(element => {element
//     console.log(element);
// });


// 5  Задачі для практики map та Math.round
//  Маєте масив чисел з плаваючою комою. Використовуйте map разом з Math.round, щоб створити новий масив, в якому кожне число буде округлене до найближчого цілого.

// let numberS = [1.2, 2, 2.5, 3];
// let rounded = numberS.map(el => Math.round(el))
// console.log(rounded);
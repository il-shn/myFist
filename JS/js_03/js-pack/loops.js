// TRAAAASH!!!

// let a = "";
// let b = "";
// let c = "";
// let result = Number(prompt(`Це калькулятор ${a+c+b}`))
// if(c=="+"){
//     alert(a+b)
// }
// else if(c=="-"){
//     alert(a-b)
// }
// else if(c=="*"){
//     alert(a*b)
// }
// else if(c=="/"){
//     alert(a/b)
// }
// else{
//     console.log("error");
// }
// TRAAAASH!!!

//- дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else if при спробі поділити на 0 виводити alert з попередженням. Повині бути команди (додавання, множення, ділення, віднімання)

// let firstNum = Number(prompt(`Введіть число`));
// let operator = prompt("Оберіть операцію: +-*/");
// let secondNum = Number(prompt('Введіть друге число'));
// function plus(firstNum, secondNum) {
//     // console.log(`${firstNum}+${secondNum}=${firstNum+secondNum}`);
//     alert(firstNum+secondNum);
// }
// function minus(firstNum, secondNum) {
//     alert(firstNum-secondNum);
// }
// function multiply(firstNum, secondNum) {
//     alert(firstNum*secondNum);
// }
// function divide(firstNum, secondNum) {
//     if (firstNum==0||secondNum==0) {
//         alert("Error. Division by 0.")
//     } else {
//         alert(firstNum/secondNum);
//     }
// }
// switch (operator) {
//     case '+':
//         plus(firstNum, secondNum);
//         break;
//     case '-':
//         minus(firstNum, secondNum);
//         break
//     case '*':
//         multiply(firstNum, secondNum);
//         break
//     case '/':
//         divide(firstNum, secondNum);
//         break
//     default:
//         alert("Вводьте числа по одному. Спробуйте ще раз.")
//         break;
// }



// // за допомогою циклу вивести в консоль всі парні значення числа 20

// let num = 2;
// do{
//     console.log(num);
//     num+=2;
// }while(num<=20);

// // зробити цикл який виводить дані навпаки від більшого до меншогo.

// let num =100;
// while(num>=5) {
//     console.log(num);
//     num-=5;
// };

// for(let i=100;i>0;i-=5){
//     console.log(`Loop value ${i}`)
// }

// // реалізуйте таблицю множення за допомогою циклу для конкретного числа (наприклад, для числа 5) за допомогою циклу for:

// for(let i=1; i<=10; i++){
//     console.log(`${i} * 5 = ${i*5}`)
// }

// //- реалізуйте функцію яка отримує число і виводить в консоль лог таблицю множення цього чила, перевірте роботу функції викликавши функцію з різними значеннями.

// let num = Number(prompt('Введіть число'))

// for(let i=1; i<=10; i++){
//      console.log(`${i} * ${num} = ${i*num}`)
//  }
// function multipleTable(num) {   
// }


// //- створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі

// let planet = prompt("Введіть назву планети")
// switch (planet) {
//     case 'Меркурій':
//         console.log('Меркурій знаходиться в сонячній системі. Перший від сонця');
//         break;
//     case 'Венера':
//         console.log('Венера знаходиться в сонячній системі. Друга від сонця');
//         break;
//     case 'Земля':
//         console.log('Земля знаходиться в сонячній системі. Третя від сонця');
//         break;
//     case 'Марс':
//         console.log('Марс знаходиться в сонячній системі. Четвертий від сонця');
//         break;
//     case 'Юпітер':
//         console.log('Юпітер знаходиться в сонячній системі. Пятий від сонця');
//         break;
//     case 'Сатурн':
//         console.log('Сатурн знаходиться в сонячній системі. Шостий від сонця');
//         break;
//     case 'Уран':
//         console.log('Уран знаходиться в сонячній системі. Сьомий від сонця');
//         break;
//     case 'Нептун':
//         console.log('Нептун знаходиться в сонячній системі. Восьмий від сонця');
//         break;
        
//     default:
//         console.log('Ця планета не в сонячній системі');
//         break;
// }

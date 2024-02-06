// Завдання 1 Визначення порівнянь
// let userAge = Number(prompt("How old are you?"));
// let userBirth = Number(prompt("Your birth year"));

// if(userAge < userBirth){
//     console.log("user Age < user Birth");
// }
// else if (userAge > userBirth){
//     console.log("user Age > user Birth");
// }
// else{
//     console.log("userAge = userBirth");
// }

// Завдання 2 Визначення парності числа
// let userAge = Number(prompt("How old are you?"));
// let remainder = userAge%2;

// if(remainder==0){
//     console.log("Age is pair")
// }
// else if(remainder>0){
//     console.log("Age is not pair")
// }
// else{
// console.log("Age is undefinded")
// }

// Завдання 3 Визначення року народження
// let userAge = Number(prompt("Вкажіть свій вік"));
// let birthDate = Number(2024-userAge);

// console.log("The birth date is", birthDate);

// Завдання 4 Вгадати число
// let num = Number(prompt("Вкажіть рандомне число"));
// if (num===30){
//     alert("Ви вгадали!")
// }
// else if(num<30){
//     alert("Занадто мале")
// }
// else if(num>30){
//     alert("Занадто велике")
// }
// else{
//     alert("Ви не вказали число. Оновіть сторінку та спробуйте ще раз.")
// }

// Завдання 5 Оцінка 
// let mark = Number(prompt("Оцініть за 10-бальною шкалою"));
// if (8<=mark && mark<=10){
//     console.log("Відмінно!")
// }
// else if(5<=mark && mark<=7){
//     console.log("Добре")
// }
// else if(3<=mark && mark<=4){
//     console.log("Задовільно")
// }
// else if(mark<=2){
//     console.log("Незадовільно")
// }
// else{
//     console.log("За 10-бальною шкалою!")
// }

// Завдання 6 Діапазон
// let num = Number(prompt("Вкажіть якесь число"));
// if (1<=num && num<=100){
//     alert("Число знаходиться в діапазоні")
// }
// else{
//     alert('Число поза діапазоном')
// }

// Завдання 7 Тернарний опереатор
// let result = '';
// let score = 75;
// if (score > 50) {
//     result ="Пройшов";
// } else {
//     result ="Не пройшов";
// }

// let result;
// let score = Number(prompt("Скільки очок?"));
// result = score > 50 ? "Пройшов" : "Не пройшов";
// console.log(result);

// let tempResult = "";
// let temperature = 30;
// if (temperature > 25) {
//     tempResult ="Гаряче";
// } else {
//     tempResult ="Прохолодно";
// }

// let tempResult = "";
// let temperature=Number(prompt("Скільки градусів?"));
// tempResult = temperature > 25 ? "Гаряче" : "Прохолодно";
// console.log(tempResult);


//Додадкове дз

let userAge = Number(prompt("Вкажіть свій вік"));
let userContry = prompt("Вкажіть свою країну");
let result = "";

if(userAge>=18 && userContry=="Україна"){
    result = "Вітаємо, ви маєте право голосу в Україні"
    // alert("Вітаємо, ви маєте право голосу в Україні")
}
else if(userAge>17 && userContry!="Україна"){
    result = "Перевірте правила голосування у вашій країні"
    // alert("Перевірте правила голосування у вашій країні")
}
else{
    result = "Ви ще занадто молоді для голосування"
    // alert("Ви ще занадто молоді для голосування")
}
console.log(result)
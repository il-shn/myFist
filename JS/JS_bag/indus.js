let userNickname = "redTime";
let userScore = 2300;
// console.log(userNickname, userScore)
let price = prompt("Вкажіть ціну покупки", "Пусте значення");
let quantity = prompt("Вкажіть кількість продуктів", "Пусте значення");
let sum = price*quantity;
console.log('The price is', sum, 'UAH');
let discount = (5*sum)/100;
console.log('your discount', discount);
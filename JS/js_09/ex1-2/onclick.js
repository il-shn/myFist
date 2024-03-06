// 1. =============== onclick ======================
// Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір

window.onload = function(){

    function randomColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    let text = document.querySelector('p')
    let btnClick = document.querySelector('.btnColor')
    btnClick.onclick = function(){
        text.style.color = randomColor();
    }

    // btnClick.addEventListener('click', function(){
    //     text.style.color = 'red';
    //     if (text.style.color = 'red') {
    //         btnClick.addEventListener('click', function(){
    //             text.style.color = 'black';
    //         }); 
    //     }
    // });
    
    // 2. =========== ondblclick ==========================
    // Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

    let block = document.querySelector('div')
    block.style.height = '50px'
    block.style.width = '50px'
    block.style.borderRadius = '50%'
    block.style.backgroundColor = 'purple'
    block.style.margin = '100px'

    block.ondblclick =function(){
        block.style.height = '100px'
        block.style.width = '100px'
    }

    // block.addEventListener('click', function(){
    //     block.style.height = '100px'
    //     block.style.width = '100px'
    // })

}




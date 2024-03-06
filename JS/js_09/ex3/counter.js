window.onload = function(){
     // 3. ======= addEventListener і removeEventListener =============

    // Створити кнопку і текстовий елемент в якому розмістіть лічільник: 0, при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

    let btnCount = document.querySelector('.btnCount');
    let count = 0;
    let h1 = document.querySelector('h1');
    btnCount.addEventListener('click', function(){
        if (count === 10) {
            btnCount.removeEventListener('click', listener)
        } else {
            count+=1;
        h1.innerHTML = `Counter: <strong>${count}</strong> `
        }
    })
    
}
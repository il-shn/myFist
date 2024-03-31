// ================ Завдання 1: Конвертер валют ======================= 
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.

// Інструкції:
// 1)Створіть два поля введення: одне для суми, друге для курсу обміну.
// Додайте кнопку, яка виконає конвертацію при її натисканні.
// При натисканні кнопки, зчитайте значення з обох полів і виконайте конвертацію.
// Виведіть результат конвертації на сторінку.

window.onload = function(){

    let form = document.querySelector("form")
    let inputUAH = document.querySelector('#inputUAH')
    let rateUSD = document.querySelector('#rateUSD')
    let output = document.querySelector('.output')

    form.addEventListener('submit', function(e){
        e.preventDefault()
        let result = Number(inputUAH.value)/Number(rateUSD.value)
        output.innerHTML = result
    })
    
    // 2) Створіть слайдер ( зображення що міняє картинку ) кожні 3 секунди,  коли курсор наведено на зображення слайдер зупиняється, коли покидає зображення розпочинає роботу

    const images = ["images/1.jpeg","images/2.jpeg","images/3.jpeg"]

    counter = 0;
    console.log(images.length);
    function slider(){
        counter+=1;
        if (counter >= images.length){
            counter === 0;
        }
        document.querySelector('img').src = images[counter];
    }
    let sliderInterval = setInterval(slider, 3000);
    let sliderImg = document.querySelector('img');

    sliderImg.addEventListener('mouseenter',function(){
        clearInterval(sliderInterval)
    })
    sliderImg.addEventListener('mouseleave', function(){
        sliderInterval = setInterval(slider, 3000);
    })


    // function slider1() {
    //     counter++
    //     if (counter === 0) {
    //         sliderBox.innerHTML = '<img src="https://cn22.nevsedoma.com.ua/p/26/2612/1601_files/c83cd19e4e1cc0d6bda45e2a8cc1671f.jpg" alt="">'
            
    //     }
    //     if (counter === 3) {
    //         sliderBox.innerHTML = `<img src="https://cn22.nevsedoma.com.ua/p/26/2612/1601_files/6b80bf5bcbe32909658f00c5dbf335a2.jpg" alt="">
    //         `
    //     }
    //     if (counter === 6) {
    //         sliderBox.innerHTML = `<img src="https://cn22.nevsedoma.com.ua/p/26/2612/1601_files/925cee1355230a850b6ded72e28778de.jpg" alt="">`
    //     }
    //     if (counter > 9) {
    //         counter ===0
    //     }
    // }
    // slider1()

    // function slider() {
    //     for (const img of slideArray) {
    //         console.log("Хелоу");
    //         img.style.display = 'inherit';
    //         function hide() {
    //             img.style.display = 'none';
    //             console.log('Ти ще тут?');
    //         }
    //         setTimeout(hide, 3000);
    //         // console.log(img);
    //     }
    // }
    // slider()

    
}




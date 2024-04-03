// - зробіть форму  реєстрації з такими елементами
// поле ввода імені
// поле ввода емейла
// поле ввода телефону
// поле вводу пароля
// повторне поле пароля яке перевіяє чи співпадають паролі
// так кнопкою відправити, кнопка повина бути disabled поки користувач не введе всі валідні значення ( до кожного поля напишіть регулярку для первірки данних ) 
// Якщо всі поля заповнено вірно то в кнопки зникає disabled і форму можна відправити

window.onload = function () {
    let btn = document.querySelector('button')
    let form = document.querySelector('form')
    let checkUsername = /[a-zA-Z]/g;
    let checkEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})*(\.[a-z]{2,8})?$/;
    let checkNumber = /\+*[0-9]{10,12}/g;
    let checkPassword = /^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,30}$/g;
    let inputUserName = document.querySelector('#inputUsername')
    let inputEmail = document.querySelector('#inputEmail')
    let inputPhone = document.querySelector('#inputPhoneNumber')
    let inputPassword1 = document.querySelector('#inputPassword1')
    let inputPassword2 = document.querySelector('#inputPassword2')

    form.onchange = function(){
        if (checkUsername.test(inputUserName.value)==true && checkEmail.test(inputEmail.value)==true && checkNumber.test(inputPhone.value)==true && checkPassword.test(inputPassword1.value)==true) {
            if (inputPassword1=inputPassword2) {
                console.log('Кнопку розблоковано!');
                btn.disabled = false;
                btn.style.color = 'white';
                btn.style.backgroundColor = 'rgb(41, 41, 255';
                btn.addEventListener('mouseenter', ()=>
                    btn.style.backgroundColor = 'rgb(29, 29, 183)')
                btn.addEventListener('mouseleave', ()=>
                    btn.style.backgroundColor = 'rgb(41, 41, 255')
                btn.onclick = function (){
                    alert('Дані успішно відправлені')
                }
            }else{
                console.log('не підходить пароль');
            }
        } else {
            console.log('різні паролі!');
        }
    }  

    // Додаткове завдання:
    // Після натискання на кнопку відправити, показати анімацію завантаження 5 сеукунд і вивести повідомлення дані успішно відправлені

    // let contentWrap = document.querySelector('.content-wrapper')
    // btn.onclick = function(){
    //    let loaderBlock = document.createElement('div')
    //    contentWrap.appendChild(loaderBlock)
    //    loaderBlock.style.height = '200px'
    //    loaderBlock.style.width = '200px'
    //    loaderBlock.style.backgroundColor = 'white'
    //    loaderBlock.style.backgroundColor = 'white'
    // }   
    // 
}   
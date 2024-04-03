// =============== 1 Завдання ===============
// Створіть просту форму з input color налаштуваннями  фону сторінки, і збережіть вибір користувача у localStorage при кліку на кнопку save. При наступному відкритті сторінки, або оновлені, застосуйте дос сторінки колір з localStorage.

window.onload = ()=>{

    let [...form] = document.querySelector('form')
    let body = document.querySelector('body')
    let btnSave = document.querySelector(".b1")
    let btnReset = document.querySelector(".b2")
    
    body.style.backgroundColor = window.localStorage.userColor;
    for (const input of form) {
        input.onchange = function(){ 
            if (input.checked) {
                body.style.backgroundColor = input.id
                btnSave.onclick = function(){
                    window.localStorage.userColor = input.id
                }
              
            }
        }
    }
    btnReset.onclick = function(){
        window.localStorage.removeItem('userColor')
        body.style.backgroundColor = 'antiquewhite'
    }
}

// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки


window.onload = function(){

    let bodyEl = document.querySelector('body')

    for (let i = 1; i < 11; i++) {
        let divEl = document.createElement('div');
        bodyEl.appendChild(divEl)
        divEl.innerText = i;
        divEl.style.height = '50px'
        divEl.style.width = '50px'
        divEl.style.margin = '10px'
        divEl.style.backgroundColor = 'coral'
        divEl.style.display = 'flex'
        divEl.style.justifyContent = 'center'
        divEl.style.alignItems = 'center'
    }
    
    let [...allDivs] = document.querySelectorAll('div')
    allDivs.forEach(div =>{
        div.onclick = function(){
        div.remove()
    }})
}


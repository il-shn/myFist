window.onload = function(){
    
    // =================== Завдання 'onContextMenu': ===========================================
    // Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент".

    let textArea = document.querySelector('textarea')
    let section = document.querySelector('section')
    textArea.addEventListener('contextmenu', function(e){
        e.preventDefault();
    })

    textArea.oncontextmenu = function(){
        section.style.visibility = 'visible'

    }

    // =================== Завдання 'onMouseOver' і 'onMouseOut': ====================================
    // Розмістіть зображення на сторінці,та додайте події де при наведенні курсору на зображення воно збільшується або підсвічується. Коли курсор миші покидає зображення, воно повертається до свого початкового розміру або стилю.

    let img = document.querySelector('img')
    img.onmouseover = function(){
        img.style.border = "5px blue solid"
    }
    img.onmouseout =function(){
        img.style.border = '0px'
    }

    // ==================== Завдання 'keyup': =====================================================
    // Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена
    
    let x = 0;
    let y = 0;
    let go = 20;
    function move(el){
        el.style.top = `${x}px`;
        el.style.left = `${y}px`;
    }

    document.addEventListener('keydown', function(event){
        console.log(event.key);
        switch(event.key){
            case 'ArrowUp':
                x-=go;
                break;
            case 'ArrowDown':
                x+=go;
                break;
            case 'ArrowLeft':
                y-=go;
                break;
            case 'ArrowRight':
                y+=go;
                break;
        }
        move(img);
    })

    // ============ v1 ====================
    // Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М and ctrl, з'являється  меню ul елемент в якому 3 li, При натиску клавіші ctrl K меню зникає.

    let list = document.querySelector('.list')

    document.addEventListener('keydown', function(e){
        switch(e.key){
            case 'ctrl', 'm':
                e.preventDefault();
                list.style.display = 'inherit';
                break;
            case 'ctrl', 'k':
                e.preventDefault();
                list.style.display = 'none';
        }
    })
    // ================== v2 =================================
    // Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М, з'являється  меню ul елемент в якому 3 li, і зробити можливість  переміщатися по пунктах меню, використовуючи клавіші вгору/вниз змінюючи бекграунд. При натиску клавіші С меню зникає.

    let menu = document.querySelector('.menu')
    let option = document.querySelector('.option')
    document.addEventListener('keydown', function(e){
        switch(e.key){
            case 'm':
                e.preventDefault();
                list.style.display = 'inherit';
                break;
            case 'k':
                e.preventDefault();
                list.style.display = 'none';
        }
    })
    for (let i = 0; i < menu.length; i++) {
        menu.addEventListener('keydown',function(e){
            
        })
        
    }
}
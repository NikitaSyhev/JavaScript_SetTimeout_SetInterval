
// //функция задержки
// setTimeout(() => {
//     alert('Hello, world!');
// }, 2000); //1 sec = 1000msec


// alert('2nd alert!');

//-------BOOB--------- ДЕЛАЕМ ТАЙМЕР ЧЕРЕЗ SETTIMEOUT
let timmerIndex = 0;

// defuser.addEventListener('click', () =>{
//     out.innerText = 'Defused';
//     clearTimeout(timerIndex); //отменяет сеттаймаут ( например, у нас есть 10 сеттаймаутов - мы отменяем один из них)
//     defuser.disabled = true; 
// });

// timer(3);
// //функция вызывает саму себя
// //индекс таймаута считается глобально на весь код
// function timer(sec) {
//     if (sec > 0) {
//         out.innerText = sec + '...';
//         timerIndex = setTimeout(timer, 1000, sec - 1); //получили индекс таймаут
//     }
//     else {
//         out.innerText = 'BOOM';
//         defuser.disabled = true; //выключили кнопку
//     }  
// }


//-------КВАДРАТ--------- МЕНЯЕМ ЦВЕТ ЧЕРЕЗ ИНТЕРВАЛ
const colors =['red', 'green', 'blue']; //массив цветов
let currenColor = 0;

setInterval(() => {
    
    if(++currenColor >= colors.length) //обнулили массив цветов, если больше 2, - вышли из массива, и сбросили счетчик
    currenColor = 0;
    block.style.backgroundColor = colors[currenColor];
},1000);

//разница между SetTimeOut() и setInterval() в точности. Интервал более точен



// ---------ЗАДАЧА НА АКТИВНОСТЬ ПОЛЬЗОВАТЕЛЯ---------------

// слушатель события


const delay = 10; //константа для количества секунд
let waitingIndex = setTimeout(warning, delay * 1000); // сохранили индекс, чтобы делать отмену таймаута

document.body.addEventListener('mousemove', () => {
    clearTimeout(waitingIndex);
    waitingIndex = setTimeout(warning, delay * 1000);
});

function warning() {
    alert('Время ожидания истекло.');
    waitingIndex = setTimeout(warning, delay * 1000);
}




// ---------ЗАДАЧА - СОЗДАНИЕ КОНТЕКСТНОГО МЕНЮ---------------
//добавляем слушателя - отменяет предыдущий слушатель ( т.е мы отменил стадартное контекстное меню)

//переменная хранит состояние контекстного меню ( вкл или выкл )
var contexted = false; //хранит состояние
const contextMenu = document.querySelector('#context-menu'); //HTML элемент, отвечающий за собственное контектное меню ( которое мы написали )
const printBtn = document.querySelector('#print-btn');
const paintBtn = document.querySelector('#paint-btn');

//document.oncontextmenu = () => {return false}; //отключаем стандартное контекстное меню на странице
document.addEventListener('contextmenu', e =>{
    e.preventDefault(); //отключили ожидание предыдущего события ( контекстного меню )
    if(!contexted) {//если контекстное меню не открыто
        contextMenu.style.display = 'flex';
    }
    contextMenu.style.top = e.clientY + 'px';
    contextMenu.style.left = e.clientX + 'px';
});


document.addEventListener('click', e => {

    switch(e.target) {
        case printBtn: 
            break;
        case paintBtn:
            break;
    }
    if(e.button == 0)
    contextMenu.style.display = 'none';

});
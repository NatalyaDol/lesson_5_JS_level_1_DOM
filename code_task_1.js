/* 1. Есть кнопка button рядом с ней есть текст (Hello) 
необходимо при нажатии на кнопку поменять текст кнопки на (Привет) */

function changeSpan() {
    var btn = document.getElementsByClassName('task-1__btn')[0];
    var span = document.getElementsByClassName('task-1__text')[0];

    btn.innerText = 'Thanks';
    span.innerText = 'Привет!';
};
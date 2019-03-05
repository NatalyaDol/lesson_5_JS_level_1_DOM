/*  2. Есть кнопка button рядом с ней есть тэг <b></b> (Hello) 
необходимо при нажатии на кнопку поменять тэг на <h3></h3>*/ 

function changeTag() {
    var section = document.getElementsByClassName('task-2');
    
    var btn = document.getElementsByClassName('task-2__btn')[0];
    var  spanB = document.getElementsByClassName('task-2__text')[0];

    spanB.remove();//удаление

    var newElH3 = document.createElement('h3'); //добавить новый элемент с тегом
    newElH3.innerText = 'Hello - я стал заголовком h3'; //добавить текст
    section[0].appendChild(newElH3);// добавление элемента в DOM HTML
};
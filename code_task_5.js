/** 5. Дан элемент ul, а в нем li #list. 
 Вставьте перед элементом #list новую li с текстом 'Первый элемент списка' */

 function my_initiation () {
     var ul = document.getElementsByClassName('task-5__ul')[0];
     var li = document.getElementById('list');
     var newLi = document.createElement('li'); //создаем новый элемент

     newLi.innerText = 'Первый элемент списка';//добавляем текст в новый элемент
     ul.insertBefore(newLi, li);//newEl вставляем в родителя ulList перед liList

 }
 Window.onloud = my_initiation();
 // Функция, которая будет выполняться  после полной загрузки страницы


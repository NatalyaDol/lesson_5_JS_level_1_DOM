/* 3. Дан код 
<h2>Заголовок.</h2>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
Поменяйте содержимое списка на текст list их порядковый номер в коде. */

var liTask3 = document.getElementsByClassName('task-3__list__chld');

for (let i = 0; i < liTask3.length; i++) {
    liTask3[i].innerText = 'list  ' +  (i + 1);
}
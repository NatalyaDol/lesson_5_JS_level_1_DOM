// ловим клик с выбранного математического знака
// и передаем операцию в функцию расчета calculateResult()
function mathFuncSum() {
    calculateResult('+');
};

function mathFuncSubtract() {
    calculateResult('-');
};

function mathFuncMultiply() {
    calculateResult('*');  
};

function mathFuncDivision() {
    calculateResult('/');
};

function calculateResult(operation) {
    var arg1 = parseInt(document.getElementsByName('task-4__first-num')[0].value);
    var arg2 = parseInt(document.getElementsByName('task-4__second-num')[0].value);

    var result = document.getElementById('task-4__result');

    if (operation == '+') {
        result.innerText = arg1 + arg2;
    } else if (operation == '-') {
        result.innerText = arg1 - arg2;
    } else if (operation == '*') {
        result.innerText = arg1 * arg2;
    } else if (operation == '/') {
        result.innerText = arg1 / arg2;
    }    
}; 
const buttons = document.querySelector(".buttons");
const btn = document.querySelectorAll('.constant');
const input = document.querySelector(".input");
const answer = document.querySelector(".answer");
const operator = document.querySelectorAll('.operator');

var myStr = "";
var myArr = [];
var result = "";
var ans = 0;
var prevAnswer = 0;
var a = 0;
var ran = 0;
var oper = 1;

btn.forEach((button) => {
    button.addEventListener('click', () => {
        myArr.push(button.value);

        input.textContent = myArr.toString()
        .replaceAll(',', '')
        .replaceAll(ran,'random')
        .replaceAll('*','x')
        .replaceAll('/','÷');

        a = 0;
        oper = 0;
    });
});

operator.forEach((button) => {
    button.addEventListener('click', () => {
        if (a == 1) {
            myArr.push('ans');
        }
        myArr.push(' ' + button.value + ' ');
        input.textContent = myArr.toString()
        .replaceAll(',', '')
        .replaceAll(ran,'random')
        .replaceAll('*','x')
        .replaceAll('/','÷');

        oper = 1;
    });
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    myArr.pop();

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll(ran,'random')
    .replaceAll('*','x')
    .replaceAll('/','÷');

    if (input.textContent == "") {
        a = 1;
        oper = 1;
    }
    console.log(a)

});

const clearAll = document.querySelector('#clear-all');
clearAll.addEventListener('click', () => {
    input.textContent = "";
    answer.textContent = "0";
    myStr = "";
    myArr = [];
    result = "";
    ans = 0;
    prevAnswer = 0;
    a = 0;
    oper = 1;
});

const power = document.querySelector('#power');
power.addEventListener('click', () => {
    if (a == 1) {
        myArr.push('ans');
    }

    myArr.push('^');

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll(ran,'random')
    .replaceAll('*','x')
    .replaceAll('/','÷');

    oper = 1;
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {

    myStr = myArr.toString()
    .replaceAll(',', '')
    .replaceAll('ans',ans)
    .replaceAll('^','**');

    answer.textContent = Function('return ' + myStr)();
    ans = Function('return ' + myStr)();
    input.textContent = "";
    myStr = "";
    myArr = [];
    a = 1;
    oper = 1;
});

const random = document.querySelector('#random');
random.addEventListener('click', () => {
    ran = Math.random();
    myArr.push(ran);

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll(ran,'random')
    .replaceAll('*','x')
    .replaceAll('/','÷');

    a = 0;
    oper = 0;
});

const prevAns = document.querySelector('#prev-ans');
prevAns.addEventListener('click', () => {
    myArr.push('ans');

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll(ran,'random')
    .replaceAll('*','x')
    .replaceAll('/','÷');

    a = 0;
    oper = 0;
});

const openPar = document.querySelector('#open-par');
openPar.addEventListener('click', () => {
    if (oper == 1) {
        myArr.push(openPar.value);
    }
    if (oper == 0) {
        myArr.push(' *' + openPar.value);
    }

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll(ran,'random')
    .replaceAll('*','x')
    .replaceAll('/','÷');

});

const closePar = document.querySelector('#close-par');
closePar.addEventListener('click', () => {
    myArr.push(closePar.value);

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll(ran,'random')
    .replaceAll('*','x')
    .replaceAll('/','÷');

});

const negative = document.querySelector('#negative');
negative.addEventListener('click', () => {
    myArr.push('-');

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll(ran,'random')
    .replaceAll('*','x')
    .replaceAll('/','÷');
});

if (myArr = []) {
    a = 1;
}
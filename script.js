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
var a = 1;
var ran = 0;
var oper = 1;

btn.forEach((button) => {
    button.addEventListener('click', () => {
        myArr.push(button.value);

        input.textContent = myArr.toString()
            .replaceAll(',', '')
            .replaceAll('*','x')
            .replaceAll('/','÷');

        a = 0;
        oper = 0;
    });
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = 'yellow';
    });
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = 'aquamarine';
    });
});

operator.forEach((button) => {
    button.addEventListener('click', () => {
        if (a == 1) {
            myArr.push('ans');
            a = 0;
        };
        myArr.push(' ' + button.value + ' ');
        input.textContent = myArr.toString()
            .replaceAll(',', '')
            .replaceAll('*','x')
            .replaceAll('/','÷');

        oper = 1;
    });
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = 'yellow';
    });
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = 'aquamarine';
    });
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    myArr.pop();

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll('*','x')
    .replaceAll('/','÷');

    if (input.textContent == "") {
        a = 1;
        oper = 1;
    }
});
clear.addEventListener('mousedown', () => {
    clear.style.backgroundColor = 'yellow';
});
clear.addEventListener('mouseup', () => {
    clear.style.backgroundColor = 'aquamarine';
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
    a = 1;
    oper = 1;
});
clearAll.addEventListener('mousedown', () => {
    clearAll.style.backgroundColor = 'yellow';
});
clearAll.addEventListener('mouseup', () => {
    clearAll.style.backgroundColor = 'aquamarine';
});

const power = document.querySelector('#power');
power.addEventListener('click', () => {
    if (a == 1) {
        myArr.push('ans');
    }

    myArr.push('^');

    input.textContent = myArr.toString()
        .replaceAll(',', '')
        .replaceAll('*','x')
        .replaceAll('/','÷');

    oper = 1;
});
power.addEventListener('mousedown', () => {
    power.style.backgroundColor = 'yellow';
});
power.addEventListener('mouseup', () => {
    power.style.backgroundColor = 'aquamarine';
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
equals.addEventListener('mousedown', () => {
    equals.style.backgroundColor = 'yellow';
});
equals.addEventListener('mouseup', () => {
    equals.style.backgroundColor = 'aquamarine';
});

const random = document.querySelector('#random');
random.addEventListener('click', () => {
    ran = Math.random();
    if (oper == 0) {
        myArr.push(" * " + ran)
    } else {
        myArr.push(ran);
    }
    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll('*','x')
    .replaceAll('/','÷');

    a = 0;
    oper = 0;
});
random.addEventListener('mousedown', () => {
    random.style.backgroundColor = 'yellow';
});
random.addEventListener('mouseup', () => {
    random.style.backgroundColor = 'aquamarine';
});

const prevAns = document.querySelector('#prev-ans');
prevAns.addEventListener('click', () => {
    myArr.push('ans');

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll('*','x')
    .replaceAll('/','÷');

    a = 0;
    oper = 0;
});
prevAns.addEventListener('mousedown', () => {
    prevAns.style.backgroundColor = 'yellow';
});
prevAns.addEventListener('mouseup', () => {
    prevAns.style.backgroundColor = 'aquamarine';
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
    .replaceAll('*','x')
    .replaceAll('/','÷');

});
openPar.addEventListener('mousedown', () => {
    openPar.style.backgroundColor = 'yellow';
});
openPar.addEventListener('mouseup', () => {
    openPar.style.backgroundColor = 'aquamarine';
});

const closePar = document.querySelector('#close-par');
closePar.addEventListener('click', () => {
    myArr.push(closePar.value);

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll('*','x')
    .replaceAll('/','÷');

});
closePar.addEventListener('mousedown', () => {
    closePar.style.backgroundColor = 'yellow';
});
closePar.addEventListener('mouseup', () => {
    closePar.style.backgroundColor = 'aquamarine';
});

const negative = document.querySelector('#negative');
negative.addEventListener('click', () => {
    myArr.push('-');

    input.textContent = myArr.toString()
    .replaceAll(',', '')
    .replaceAll('*','x')
    .replaceAll('/','÷');
});
negative.addEventListener('mousedown', () => {
    negative.style.backgroundColor = 'yellow';
});
negative.addEventListener('mouseup', () => {
    negative.style.backgroundColor = 'aquamarine';
});

window.addEventListener('keydown', () => {
   if (isNaN(event.key) == false) {
        myArr.push(event.key);

        input.textContent = myArr.toString()
            .replaceAll(',', '')
            .replaceAll('*','x')
            .replaceAll('/','÷');

        a = 0;
        oper = 0;
   }

   if (event.key == "Enter" || event.key == "=") {
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
   }

   if (event.key == "-" || event.key == "+" || event.key == "/" || event.key == "*") {
        if (a == 1) {
            myArr.push('ans');
            }
        myArr.push(' ' + event.key + ' ');
        input.textContent = myArr.toString()
            .replaceAll(',', '')
            .replaceAll('*','x')
            .replaceAll('/','÷');

        oper = 1;
   }

   if (event.key == "Backspace") {
        myArr.pop();

        input.textContent = myArr.toString()
            .replaceAll(',', '')
            .replaceAll('*','x')
            .replaceAll('/','÷');

        if (input.textContent == "") {
            a = 1;
            oper = 1;
        }
    }

    if (event.key == "(") {
        if (oper == 1) {
            myArr.push(event.key);
        }
        if (oper == 0) {
            myArr.push(' *' + event.key);
        }
        input.textContent = myArr.toString()
            .replaceAll(',', '')
            .replaceAll('*','x')
            .replaceAll('/','÷');
    }

    if (event.key == ")") {
        myArr.push(event.key);
        input.textContent = myArr.toString()
            .replaceAll(',', '')
            .replaceAll('*','x')
            .replaceAll('/','÷');
    }
});
function getUserInput(callback) {
    let number = +prompt("Введите положительное число (0 для выхода):");
    if (number === 0) {
        callback();
    } else if (number < 0) {
        alert("Пожалуйста, введите положительное число.");
        getUserInput(callback);
    } else {
        processNumber(number, callback);
    }
}

function processNumber(number, callback) {
    let result = 0;

    switch (true) {
        case (number < 10):
            result = number * 2;
            break;
        case (number < 20):
            result = number * 3;
            break;
        case (number < 30):
            result = number * 4;
            break;
        default:
            result = number * 5;
            break;
    }

    alert("Результат обработки числа " + number + ": " + result);
    getUserInput(callback);
}

function startProgram() {
    alert("Добро пожаловать в программу!");
    getUserInput(function() {
        alert("Вы вышли из программы.")
    });
}

function repeatMessage(message, times) {
    if (times > 0) {
        alert(message);
        repeatMessage(message, times - 1);
    }
}

function startWithMessage() {
    let message = prompt("Введите сообщение для повторения:");
    let times = +prompt("Сколько раз повторить сообщение?");
    repeatMessage(message, times);
}

function runMainProgram() {
    startProgram();
    startWithMessage();
}

if (confirm("Хотите начать программу?")) {
    runMainProgram();
} else {
    alert("Программа завершена.");
}
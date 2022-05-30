function half(sum) { // function 1
    console.log(sum / 2);
}

function multiplyBy2(sum) { //function 2
    console.log(sum * 2);
}

function mainFunction(num1, num2, operation) { //last argument(operation) of this function is a other function
    var sum = num1 + num2;
    operation(sum);
}

mainFunction(5, 2, multiplyBy2);
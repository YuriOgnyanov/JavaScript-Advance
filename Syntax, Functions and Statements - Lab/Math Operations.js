function solve(firstNumber, secondNumber, operator){

    let result;

    //The string may be one of the following: '+', '-', '*', '/', '%', '**'.
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break; 
        case '%':
            result = firstNumber % secondNumber;
            break;
        case '**':
            result = firstNumber ** secondNumber;
            break;           
    }

    console.log(result);
}

//solve(5, 6, '+');
solve(3, 5.5, '*');
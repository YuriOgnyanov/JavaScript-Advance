// Write a function that takes three number arguments as input and finds the largest of them. 
//Print the following text on the console:  `The largest number is {number}.`.

function solve(firstNumber, secondNumber, thirdNumber){
    
    let maxNumber = Math.max(firstNumber, secondNumber ,thirdNumber);

    console.log(`The largest number is ${maxNumber}.`);
}

solve(5, -3, 16);
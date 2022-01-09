function calculateOfLength(firstArgument, SecondArgument, thirdArgument){
    let firstArgumentLength;
    let SecondArgumentLength;
    let thirdArgumentLength;

    firstArgumentLength = firstArgument.length;
    SecondArgumentLength = SecondArgument.length;
    thirdArgumentLength= thirdArgument.length;

    let totalSumOfStringsLength = firstArgumentLength + SecondArgumentLength + thirdArgumentLength;

    let averageLengthOfTotalSum = Math.floor(totalSumOfStringsLength / 3);

    console.log(totalSumOfStringsLength);
    console.log(averageLengthOfTotalSum);
}

calculateOfLength('chocolate', 'ice cream', 'cake');
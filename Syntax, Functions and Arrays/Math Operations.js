function mathOperations(firstNum, SecondNum, operator) {
   
    let result;
    switch (operator) {
        case '+': result = firstNum + SecondNum; break;
        case '-': result = firstNum - SecondNum; break;
        case '*': result = firstNum * SecondNum; break;
        case '/': result = firstNum / SecondNum; break;
        case '%': result = firstNum % SecondNum; break;
        case '**': result = firstNum ** SecondNum; break;	
    }
    console.log(result)
}

mathOperations(5, 6, '*')

function sumNumbers(n, m) {
    let firstNum = Number(n);
    let secondNum = Number(m);
    let result = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }
    return result;
}

console.log(sumNumbers('1', '5'))

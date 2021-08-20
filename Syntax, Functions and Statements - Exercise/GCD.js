function gcd(firstNum, secondNum) {
    let smallerNum = Math.min(firstNum, secondNum);
    let divisor;

    for (n = smallerNum; n >= 1; n -= 1) {
        if (firstNum % n == 0 && secondNum % n == 0) {
            divisor = n;
            break;
        }
    }

    console.log(divisor);
}

gcd(2154, 458);

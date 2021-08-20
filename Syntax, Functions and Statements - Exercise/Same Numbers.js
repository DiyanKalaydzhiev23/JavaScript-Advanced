function checkDigits(number) {
    let digits = String(number);
    let sum = Number(digits[0]);
    let result = true;

    for (i = 1; i < digits.length; i++) {
        if (digits[0] != digits[i]) {
            result = false;
        }
        sum += Number(digits[i]);
    }
    console.log(result);
    console.log(sum)
}

checkDigits(222222);
checkDigits(1234);

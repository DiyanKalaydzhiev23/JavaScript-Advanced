function calc() {
    const firstNumber = Number(document.getElementById('num1').value);
    const secondNumber = Number(document.getElementById('num2').value);
    console.log(firstNumber, secondNumber);
    document.getElementById('sum').value = firstNumber + secondNumber;
}

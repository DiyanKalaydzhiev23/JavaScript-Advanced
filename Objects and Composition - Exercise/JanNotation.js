function solve(commands) {
    const numbers = [];
    let notEnough = false;

    function calculate(num1, num2, operator) {
        const operations = {
            '+': num1 + num2,
            '-': num2 - num1,
            '*': num1 * num2,
            '/': num2 / num1,
        };
        return operations[operator];
    }

    for (let command of commands) {
        if (typeof(command) == 'number') {
            numbers.push(command);
        } else {
            if (numbers.length >= 2) {
                let result = calculate(numbers.pop(), numbers.pop(), command);
                numbers.push(result);
            } else {
                console.log('Error: not enough operands!');
                notEnough = true;
                break;
            }
        }
    }

    if (numbers.length > 1) {
        console.log('Error: too many operands!');
    } else if (!notEnough){
        console.log(numbers[0]);
    }
}

solve([3, 4, '+']);
solve([7, 33, 8, '-']);
solve([15, '/']);
solve([5, 3, 4, '*', '-']);
solve([31, 2, '+', 11, '/']);
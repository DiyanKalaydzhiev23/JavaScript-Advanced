function smallestTwoNumbers(numbers) {  
    numbers.sort((a, b) => { return a - b; });
    console.log(numbers.shift(), numbers.shift());
}

smallestTwoNumbers([30, 15, 50, 5]);

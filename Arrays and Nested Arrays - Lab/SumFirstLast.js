function sumFirstLast(elements) {
    const numbers = elements.map(Number);
    return numbers.pop() + numbers.shift();
}

console.log(sumFirstLast(['20', '30', '40']));

function printElements(elements, n) {
    const newElements = [];

    for (i = 0; i < elements.length; i += n) {
        newElements.push(elements[i]);
    }

    return newElements;
}

console.log(printElements(['1', 
'2',
'3', 
'4', 
'5'], 
6));

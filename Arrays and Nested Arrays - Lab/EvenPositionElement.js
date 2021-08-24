function solve(elements) {
    let evenElements = [];

    for (i = 0; i < elements.length; i += 2) {
        evenElements.push(elements[i]);
    }

    console.log(evenElements.join(" "))
}

solve(['5', '10']);

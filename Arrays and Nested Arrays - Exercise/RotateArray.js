function rotateArray(elements, rotation) {
    for (i = 0; i < rotation; i++) {
        elements.unshift(elements.pop());
    }
    console.log(elements.join(' '));
}


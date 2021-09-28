function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663'};

    if (!validFaces.includes(face) || !Object.keys(validSuits).includes(suit)) {
        throw new Error;
    }

    return {
        face,
        suit,
        toString() {return `${face}${validSuits[suit]}`;}
    }
}

console.log(createCard('A', 'S'));
console.log(createCard('10', 'H').toString());
console.log(createCard('1', 'C'));
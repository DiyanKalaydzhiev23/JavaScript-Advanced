function printDeckOfCards(cards) {
    const result = [];
    let invalid = false;

    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663'};
    
        if (!validFaces.includes(face) || !Object.keys(validSuits).includes(suit)) {
            console.log(`Invalid card: ${face}${suit}`)
            invalid = true;
        }
    
        return {
            face,
            suit,
            toString() {return `${face}${validSuits[suit]}`;}
        }
    }

    cards.forEach(card => {
        let face = card.slice(0, card.length-1);
        let suit = card[card.length-1];
        result.push(createCard(face, suit).toString());
    });

    if (invalid == false) console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
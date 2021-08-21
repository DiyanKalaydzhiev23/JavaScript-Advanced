function checkDistance(x1, y1, x2, y2) {
    
    function getStatus(x1, y1, x2, y2) {
        let distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
        return Number.isInteger(distance) ? 'valid' : 'invalid';
    }

    return `{${x1}, ${y1}} to {0, 0} is ${getStatus(x1, y1, 0, 0)}\n` +
           `{${x2}, ${y2}} to {0, 0} is ${getStatus(0, 0, x2, y2)}\n` +
           `{${x1}, ${y1}} to {${x2}, ${y2}} is ${getStatus(x1, y1, x2, y2)}`;
}

console.log(checkDistance(2, 1, 1, 1));

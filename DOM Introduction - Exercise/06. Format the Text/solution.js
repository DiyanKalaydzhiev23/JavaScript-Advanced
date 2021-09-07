function solve() {
    const input = document.getElementById('input').value.split('.');
    const output = document.getElementById('output');

    let i = 0;
    while (i < input.length) {
        if (input[i].length < 1) {
            input.splice(i, 1);
        } else {
            i += 1;
        }
    } 
    
    for (i = 0; i < input.length; i += 3) {
        let parHTML = document.createElement('p');
        parHTML.textContent = input.slice(i, i+3).join('.') + '.';
        output.appendChild(parHTML);
    }
}
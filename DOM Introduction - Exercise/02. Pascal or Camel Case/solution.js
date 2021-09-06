function solve() {
    let text = document.getElementById('text').value.toLowerCase().trim().split(' ');
    let finalText = '';
    const namingConvention = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');

    if (namingConvention != 'Pascal Case' && namingConvention != 'Camel Case') {
        finalText = 'Error!';
    } else {
        for (let word of text) {
            finalText += word[0].toUpperCase() + word.slice(1);   
        }

        if (namingConvention === 'Camel Case') {
            finalText = finalText[0].toLowerCase() + finalText.slice(1);
        }
    }

  result.textContent = finalText;
}
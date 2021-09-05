function extractText() {
    const items = [...document.querySelectorAll('li')].map(e => e.textContent);
    document.getElementById('result').textContent = items.join('\n');
}
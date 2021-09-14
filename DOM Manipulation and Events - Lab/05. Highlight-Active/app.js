function focused() {
    const sections = Array.from(document.querySelectorAll('input'));
    sections.forEach(s => { 
        s.addEventListener('focus', elementFocused);
        s.addEventListener('blur', elementBlurred);
        });

    function elementFocused(event) {
        event.target.parentNode.className = 'focused';
    }

    function elementBlurred(event) {
        event.target.parentNode.className = '';
    }
}